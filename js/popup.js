// Когда приходит сообщение из content.js
chrome.runtime.onMessage.addListener(function (data, sender, sendResponse) {
    //сообщение из content.js
    parseMessage(data)

    // Если нужно отправить ответ в popup.js
    sendResponse({"data": "Popup принял"});
});


function load(){
    var uuid = localStorage.getItem('id');
    var ip = document.getElementById("ip2");
    var cmd = document.getElementById("cmdi");
    var ip2 = localStorage.getItem('ip');
    var cmd2 = localStorage.getItem('cmd');
    if(ip2 != null) ip.value = ip2;
    if(cmd2 != null) cmd.value = cmd2;
    var cmd2 = localStorage.getItem('cmd');
    if(uuid == null){
        var abc = "abcdefghijklmnopqrstuvwxyz";
        var rs = "";
        while (rs.length < 30) {
            rs += abc[Math.floor(Math.random() * abc.length)];
        }
        localStorage.setItem('id', rs);
    }
}

/*
document.body.addEventListener('click', e => {
    if (e.target.classList.contains('console send')){
        
    }
    //и так далее
  });*/
window.addEventListener('DOMContentLoaded', function (evt) {  
    load();
});