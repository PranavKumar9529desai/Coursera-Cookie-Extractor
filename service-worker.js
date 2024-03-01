chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'getAllCookies') {
      console.log('Received getAllCookies request');  // New log statement
      chrome.cookies.getAll({}, function(allCookies) {
        console.log('Got all cookies:', allCookies);  // New log statement
        let filteredCookies = allCookies.filter(cookie => cookie.domain.includes('.coursera.org'));
        console.log('Filtered cookies:', filteredCookies);  // New log statement
        sendResponse({data: filteredCookies});
      });
      return true;  // Will respond asynchronously.
    }
  });