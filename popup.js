// popup.js

chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
  var tab = tabs[0];
  document.getElementById('tabTitle').textContent = tab.title;
});