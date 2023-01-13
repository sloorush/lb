document.getElementById("apl-btn").addEventListener(
  "click",
  () => {
    console.log("hihi");
    var browser = chrome || browser;
    browser.browserAction.onClicked.addListener(handleClick());
  },
  false
);

const handleClick = async () => {
  console.log("yoyo");
  var browser = browser || chrome;
  await browser.tabs.executeScript({
      file: "./lb-templates/apl.js",
    }
  );
};

