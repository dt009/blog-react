/**
 * @Description: Do not edit
 * @Author: 段涛
 * @AuthorEmail: 18363625031@163.com
 * @Date: 2019-08-01 11:28:30
 * @LastEditors: 段涛
 * @AuthorMobile: 18363625031
 * @LastEditTime: 2019-08-02 09:53:13
 */
const HighlightJS = require('highlight.js');
const MarkdownIT = require('markdown-it');
const frontMatter = require('front-matter');
const { getOptions } = require('loader-utils');
const validateOptions = require('schema-utils');

const MD = MarkdownIT({
  linkify: true,
  typographer: true,
  xhtmlOut: true,
})
  .enable([
    'smartquotes', 'image', 'link',
  ])
  .set({
    highlight(content, languageHint) {
      let highlightedContent;
      HighlightJS.configure({
        useBR: true,
        tabReplace: '    ',
      });
      if (languageHint && HighlightJS.getLanguage(languageHint)) {
        highlightedContent = HighlightJS.highlight(languageHint, content).value;
      }
      if (!highlightedContent) {
        highlightedContent = HighlightJS.highlightAuto(content).value;
      }
      // 把代码中的{}转{'{'}、{'}'}
      highlightedContent = highlightedContent.replace(/[{}]/g, match => `{'${ match }'}`);
      return HighlightJS.fixMarkup(highlightedContent);
    },
  });

// 将代码片段再包装一下
const wrapperDemo = (component, code) => {
  const newCode = MD.render(`\`\`\`jsx\n${  code  }\`\`\`\n`);
  const dom = (
    `<div className={"demo-content"}>
      <div className="demo-example">
          <h4>示例</h4>
          <${ component } />
      </div>
      <div className="demo-code-wrap">
          <div className="demo-code">
              ${ newCode }
          </div>
      </div>
    </div>`
  );
  return dom;
};

// 匹配到组件名称
const matchComponentName = code => {
  const reg = /\s*class\s*(\w+)\s*extends/g;
  const arr = reg.exec(code);
  return arr[1];
};

const wrapperModule = (imports, js, html) => {
  const moduleText = `
  ${ imports }
  ${ js }
  export default class MarkdownReactComponent extends React.Component {
      render(){
          return (
              <div className="doc">
                  ${ html }
              </div>
          );
      }
  };`;
  return moduleText;
};

module.exports = source => {
  this.cacheable && this.cacheable();
  const options = getOptions(this);
  console.log('哈哈哈哈哈====>>> ', options);

  const { body, attributes: { name = 'dt', imports: importMap } } = frontMatter(source);

  // 默认import react
  let defaultImports = 'import React from \'react\';\n';

  if (importMap) {
    defaultImports += `${ importMap }\n`;
  }

  // 获取代码片段，并替换为占位符
  const codes = {};
  let html = body.replace(/````([^]+?)````/g, (match, $1, offset) => {
    const id = name + offset;
    codes[id] = $1;
    return `mark-placeholder-${ id }`;
  });

  // 将markdown转成html，md对象后面会提到
  html = MD.render(html);

  // 将demo再包装一下
  Object.keys(codes).forEach(key => {
    const code = codes[key];
    html = html.replace(new RegExp(`(<p>)?mark-placeholder-${ key }(<\\/p>)?`, 'g'), () => (
      // wrapperDemo、matchComponentName后面会提到
      wrapperDemo(matchComponentName(code), code, key)));

  });

  // 替换未闭合的标签和class
  html = html.replace(/<hr>/g, '<hr />')
    .replace(/<br>/g, '<br />')
    .replace(/class=/g, 'className=');

  const Comp = wrapperModule(defaultImports, Object.values(codes).join('\n'), html);
  return Comp;
};
