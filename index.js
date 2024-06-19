document.getElementById('olive-extension__btn').addEventListener('click', () => {
    chrome.runtime.sendMessage({action: 'executeScript'});
});