chrome.runtime.onInstalled.addListener(function (details) {
  console.log('unreal docs extension installed!');
});

chrome.tabs.onUpdated.addListener(function (id, info, tab) {
  if (tab.url.toLowerCase().indexOf('docs.unrealengine.com') > -1) {
    console.log(tab.id);
  }
});

//get docs suggestions
//get api suggestions
//get github suggestions
//compose suggestions

chrome.omnibox.onInputChanged.addListener(function (text, suggest) {
  console.log('omnibox: ' + text);
  suggest([
    {content: text + ' one', description: 'one'},
    {content: text + ' two', description: 'second'}
  ]);
});

chrome.omnibox.onInputEntered.addListener(function (text) {
  console.log(text);
});