document.getElementById("apl-btn").addEventListener(
  "click",
  () => {
    console.log("hihi");
    var browser = chrome || browser;
    // browser.action.onClicked.addListener(handleClick());
    browser.browserAction.onClicked.addListener(handleClick());

    // handleClick();
  },
  false
);

const handleClick = async () => {
  console.log("yoyo");
  var browser = browser || chrome;
  await browser.tabs.executeScript({
      file: "./lb.js",
    }
  );
};

