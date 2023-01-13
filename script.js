// 1: 05AB1E
// 2: Actually
// 3: APL
// 4: BQN
// 5: Brachylog
// 6: Husk
// 7: Jelly
// 8: Julia
// 9: Vyxal

document.getElementById("05ab1e-btn").addEventListener(
  "click",
  () => {
    console.log("hihi");
    var browser = chrome || browser;
    browser.browserAction.onClicked.addListener(handleClick(1));
  },
  false
);

document.getElementById("actually-btn").addEventListener(
  "click",
  () => {
    console.log("hihi");
    var browser = chrome || browser;
    browser.browserAction.onClicked.addListener(handleClick(2));
  },
  false
);

document.getElementById("apl-btn").addEventListener(
  "click",
  () => {
    console.log("hihi");
    var browser = chrome || browser;
    browser.browserAction.onClicked.addListener(handleClick(3));
  },
  false
);

document.getElementById("bqn-btn").addEventListener(
  "click",
  () => {
    console.log("hihi");
    var browser = chrome || browser;
    browser.browserAction.onClicked.addListener(handleClick(4));
  },
  false
);

document.getElementById("bqn-btn").addEventListener(
  "click",
  () => {
    console.log("hihi");
    var browser = chrome || browser;
    browser.browserAction.onClicked.addListener(handleClick(4));
  },
  false
);

document.getElementById("husk-btn").addEventListener(
  "click",
  () => {
    console.log("hihi");
    var browser = chrome || browser;
    browser.browserAction.onClicked.addListener(handleClick(6));
  },
  false
);

document.getElementById("jelly-btn").addEventListener(
  "click",
  () => {
    console.log("hihi");
    var browser = chrome || browser;
    browser.browserAction.onClicked.addListener(handleClick(7));
  },
  false
);

document.getElementById("julia-btn").addEventListener(
  "click",
  () => {
    console.log("hihi");
    var browser = chrome || browser;
    browser.browserAction.onClicked.addListener(handleClick(8));
  },
  false
);

document.getElementById("vyxal-btn").addEventListener(
  "click",
  () => {
    console.log("hihi");
    var browser = chrome || browser;
    browser.browserAction.onClicked.addListener(handleClick(9));
  },
  false
);

const handleClick = async (languageKey) => {
  console.log("yoyo");
  var browser = browser || chrome;
  switch (languageKey) {
    case 1:
      await browser.tabs.executeScript({ file: "./lb-templates/05ab1e.js" });
      break;
    case 2:
      await browser.tabs.executeScript({ file: "./lb-templates/actually.js" });
      break;
    case 3:
      await browser.tabs.executeScript({ file: "./lb-templates/apl.js" });
      break;
    case 4:
      await browser.tabs.executeScript({ file: "./lb-templates/bqn.js" });
      break;
    case 5:
      await browser.tabs.executeScript({
        file: "./lb-templates/branchylog.js",
      });
      break;
    case 6:
      await browser.tabs.executeScript({ file: "./lb-templates/husk.js" });
      break;
    case 7:
      await browser.tabs.executeScript({ file: "./lb-templates/jelly.js" });
      break;
    case 8:
      await browser.tabs.executeScript({ file: "./lb-templates/julia.js" });
      break;
    case 9:
      await browser.tabs.executeScript({ file: "./lb-templates/vyxal.js" });
      break;

    default:
      break;
  }
};
