let cookie = {}
chrome.runtime.sendMessage({action: 'getAllCookies'}, async function(response) {
    CookiesData =await (response.data) // Logs all cookies
    CookiesData.map(newData=>{
    cookie[newData.name]=newData.value;
    
});
// putting the in the required format  
const COOKIES = ("COOKIES=",JSON.stringify(cookie).replace(/"/g, "'"));
console.log("COOKIES = ",COOKIES);
chrome.tabs.executeScript({
    code : `navigator.clipboard.wriText(${COOKIES});`
 })

});

alert("Coursera Cookies are now copied on your clipboard , Check console for more details.");


