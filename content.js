let cookie = {}
let COOKIES = "" ;  
chrome.runtime.sendMessage({action: 'getAllCookies'}, async function(response) {
    CookiesData =await (response.data) // Logs all cookies
    CookiesData.map(newData=>{
    cookie[newData.name]=newData.value;
    
});
// putting the in the required format  
COOKIES += JSON.stringify(cookie).replace(/"/g, "'")+",";
console.log("cookies : ",COOKIES);
});


setTimeout(()=>{
    navigator.clipboard.writeText(COOKIES)
    .then(() => {
      console.log("Text copied successfully!");
    })
    .catch((error) => {
      console.error('Could not copy to clipboard:', error);
    });
  alert("Coursera Cookies are now copied on your clipboard , Check the console for more details.");
},3000)







