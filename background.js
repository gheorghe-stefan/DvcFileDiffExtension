// background.js

chrome.runtime.onInstalled.addListener(function() {
    // Logic to execute on installation...
});

chrome.action.onClicked.addListener((tab) => {
    // Inject the content script into the current tab
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: function() {
            // Show an alert with the tab title
            alert(document.title);
        }
    });
});