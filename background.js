let subtitles = '';

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'updateSubtitles') {
    subtitles = message.subtitles;
    // Optionally, save subtitles or process them further
  }
});
