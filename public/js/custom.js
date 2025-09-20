let tianliGPT_postSelector = 'article';
let tianliGPT_postURL = 'https://artemisia.icu/technology/*';
let tianliGPT_Title = '精炼O.o?抓住文章，顷刻炼化ovo';
let tianliGPT_BeginningText = 'ArtemisiaのBlog中的这篇博文介绍了';
let tianliGPT_key = 'S-J48A7SHZMBBEA0GV';
if (typeof tianliGPT_key !== 'undefined' && tianliGPT_key) {
  postchat_checkSystemType();
  window.tianliGPT.checkURLAndRun();
}

<script dangerouslySetInnerHTML={{__html: `
  window.BLOG = ${JSON.stringify({
    AI_SUMMARY_SWITCH:  BLOG.AI_SUMMARY_SWITCH,
    AI_SUMMARY_WORKER:  BLOG.AI_SUMMARY_WORKER,
    AI_SUMMARY_TOKEN:   BLOG.AI_SUMMARY_TOKEN
  })};
`}} />
