/**
 * @Description: pc端/移动端的适配逻辑
 * @Author: 段涛
 * @AuthorEmail: 18363625031@163.com
 * @Date: 2019-08-02 13:41:29
 * @LastEditors: 段涛
 * @AuthorMobile: 18363625031
 * @LastEditTime: 2019-08-05 16:15:00
 */

const setMetaEl = (): void => {
  const docEl = window.document.documentElement;

  let metaEl = document.querySelector('meta[name="viewport"]');

  let dpr = 0;

  let scale = 0;

  if (!dpr && !scale) {

    // const isAndroid = window.navigator.appVersion.match(/android/gi);

    // const isIos = window.navigator.appVersion.match(/(iphone|ipad)/gi);

    const devicePixelRatio = window.devicePixelRatio || 1;

    dpr = devicePixelRatio;
    const ScreenWidth = window.screen.width;
    if (ScreenWidth > 500) {
      dpr = 1;
    }

    if (dpr === 1) {
      dpr = 1;
    }
    else if (dpr > 1 && dpr < 1.5) {
      dpr = 1;
    }
    else if (dpr >= 1.5 && dpr < 2.5) {
      dpr = 2;
    }
    else if (dpr >= 2.5 && dpr < 3.5) {
      dpr = 3;
    }
    else {
      dpr = 4;
    }

    scale = 1 / dpr;
  }

  docEl.setAttribute('data-dpr', String(dpr));

  if (!metaEl) {
    metaEl = document.createElement('meta');

    metaEl.setAttribute('name', 'viewport');
    metaEl.setAttribute('content',
      `width=device-width, initial-scale=${ scale }, maximum-scale=${ scale }, minimum-scale=${ scale }, user-scalable=no`);

    document.documentElement.firstElementChild.appendChild(metaEl);
  }
  else {
    metaEl.setAttribute('content',
      `width=device-width, initial-scale=${ scale }, maximum-scale=${ scale }, minimum-scale=${ scale }, user-scalable=no`);
  }
};

const getFont = (): void => {
  setMetaEl();
  const dpr = document.documentElement.getAttribute('data-dpr');

  document.body.style.fontSize = `${ 12 * Number(dpr) }px`;

  const width = document.documentElement.offsetWidth;

  const fontSize = 100 / 750 * width;

  const ScreenWidth = window.screen.width;
  document.querySelector('html').style.fontSize = `${ fontSize }px`;
  if (ScreenWidth > 500) {
    document.querySelector('html').style.fontSize = `100px`;
  }
};

const setHtmlFont = (): void => {
  const resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
  getFont();

  window.addEventListener(resizeEvt, (): void => {
    getFont();
  });
};

export default setHtmlFont;
