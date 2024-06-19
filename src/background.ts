chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'executeScript') {
        chrome.tabs.query({active: true, currentWindow: true}, tabs => {
            chrome.scripting.executeScript({
                target: {tabId: tabs[0].id ?? 0},
                files: ['main.js']
            });
        });
    }
});