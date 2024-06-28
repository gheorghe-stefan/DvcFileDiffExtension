// Listen for the DOMContentLoaded event to ensure the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Query all div elements with an id starting with "diff-"
  const diffDivs = document.querySelectorAll('div[id^="diff-"]');

  // Iterate over each div and inject a button
  diffDivs.forEach(div => {
    // Create a new button element
    const button = document.createElement('button');
    button.textContent = 'Show Diff'; // Set the button text
    // Append the button to the current div
    div.appendChild(button);
  });
});

// Listen for messages in the content script
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.greeting === "hello from background") {
      console.log("Message received in content script");
      sendResponse({farewell: "goodbye from content"});
    }
  });