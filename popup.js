chrome.tabs.executeScript(null, {file: "content.js"});
$('#myBtn').click(function(){
	chrome.tabs.executeScript(null, {code: "logFreely()"});
});