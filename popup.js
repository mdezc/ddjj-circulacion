function listenClick() {
    const upload = document.getElementById('upload')
    upload.addEventListener('click', () => {
        chrome.tabs.executeScript({
                file: 'scripts/upload-data.js'
            }, function () {
                chrome.tabs.executeScript({
                    file: 'scripts/send-data.js'
                })
            }
        )
    });
}

listenClick();
