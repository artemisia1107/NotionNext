let tianliGPT_postSelector = 'article';
let tianliGPT_postURL = '*/technology/*';
let tianliGPT_Title = '文章总结';
let tianliGPT_key = 'S-J48A7SHZMBBEA0GV';
if (typeof tianliGPT_key !== 'undefined' && tianliGPT_key) {
  postchat_checkSystemType();
  window.tianliGPT.checkURLAndRun();
}
