chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'cookiesReady') {
      navigator.clipboard.writeText(request.cookies)
        .then(() => {
          console.log("Text copied successfully!");
        })
        .catch((error) => {
          console.error('Could not copy to clipboard:', error);
        });
    }
  });


document.getElementById('github').addEventListener('click', function() {
    window.open('https://github.com/ayushman542', '_blank');
});
