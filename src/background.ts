// background.ts
chrome.runtime.onInstalled.addListener(() => {
  console.log('Extension installed');
  // Perform on install actions here, e.g., initializing default settings
});

// Example of sending a message to the active tab
function sendMessageToContentScript() {
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    const activeTabId = tabs[0]?.id;
    if (activeTabId) {
      chrome.tabs.sendMessage(activeTabId, {message: 'Hello from background script'}, (response) => {
        console.log(response.reply);
      });
    }
  });
}

// Listen for a message (e.g., from a popup or content script) and reply
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.query === 'ping') {
    console.log('Ping received');
    sendResponse({reply: 'pong'});
  }
  return true; // Indicates you wish to send a response asynchronously (important for the messaging API)
});