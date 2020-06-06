// background.js

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function() {
  chrome.tabs.create({ "url": "https://puzzgrid.com/" })
});
