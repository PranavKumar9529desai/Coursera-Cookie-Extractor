let cookie = {}
let cookieWihtoutFormating = "" ;  
chrome.runtime.sendMessage({action: 'getAllCookies'}, async function(response) {
    CookiesData =await (response.data) // Logs all cookies
    CookiesData.map(newData=>{
    cookie[newData.name]=newData.value;
    
});
// putting the in the required format  
cookieWihtoutFormating += JSON.stringify(cookie);
let formatedCookies = cookieWihtoutFormating.replace(/"/g,"").replace(/:/g,"=").replace(/,/g,";");
let finalFormatedCookies = (`'cookie' : '${formatedCookies}'`);

console.log(finalFormatedCookies);
CopyCookies(finalFormatedCookies);
});


function CopyCookies(finalFormatedCookies){setTimeout(()=>{
    navigator.clipboard.writeText(finalFormatedCookies)
    .then(() => {
      console.log("Text copied successfully!");
    })
    .catch((error) => {
      console.error('Could not copy to clipboard:', error);
    });
  alert("Coursera Cookies are now copied on your clipboard , Check the console for more details.");
},3000)}







