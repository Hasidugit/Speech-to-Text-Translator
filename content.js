function extractSubtitles() {
    // Replace '.subtitle-class' with the actual class or selector for subtitles
    const subtitleElements = document.querySelectorAll('.subtitle-class'); 

    if (subtitleElements.length === 0) {
        console.log('No subtitle elements found.');
    } else {
        console.log(`Found ${subtitleElements.length} subtitle elements.`);
    }

    let subtitles = '';

    subtitleElements.forEach(element => {
        console.log(`Subtitle text: ${element.textContent}`); // Debugging line
        subtitles += element.textContent + '\n';
    });

    chrome.runtime.sendMessage({ action: 'updateSubtitles', subtitles: subtitles });
}

function injectCSS() {
    const style = document.createElement('style');
    style.textContent = `
        .subtitle-class {
            font-size: 25px !important;
        }
    `;
    document.head.append(style);
}

injectCSS();
extractSubtitles();
