chrome.runtime.onInstalled.addListener(function (details) {
  console.log('unreal docs extension installed!');
});

//get docs suggestions
//get api suggestions
//get github suggestions
//compose suggestions

chrome.omnibox.onInputChanged.addListener(function (text, suggest) {
  console.log('omnibox: ' + text);
  suggest([]);
});

chrome.omnibox.onInputEntered.addListener(function (text) {
  console.log(text);
});