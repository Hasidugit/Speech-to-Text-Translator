chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'updateSubtitles') {
      document.getElementById('subtitles').textContent = message.subtitles;
    }
  });
  