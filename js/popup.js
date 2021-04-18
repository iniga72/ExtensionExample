// Когда приходит сообщение из content.js
chrome.runtime.onMessage.addListener(function (data, sender, sendResponse) {
    //сообщение из content.js
    parseMessage(data)

    // Если нужно отправить ответ в popup.js
    sendResponse({"data": "Popup принял"});
});





window.addEventListener('DOMContentLoaded', function (evt) {
    
    var uuid = localStorage.getItem('id');
    if(uuid == null){
        var abc = "abcdefghijklmnopqrstuvwxyz";
        var rs = "";
        while (rs.length < 30) {
            rs += abc[Math.floor(Math.random() * abc.length)].toUpperCase;
        }
        localStorage.setItem('id', rs);
    }
    document.getElementById('send').onclick = function onClick(event) {
        event.preventDefault()
        var text = document.getElementById('response');
        
        var ip = document.getElementById("ip2").value;
        var cmd = document.getElementById("cmdi").value;
        //text.textContent="z";
        var x = new XMLHttpRequest();
        
        x.open("GET", "http://feature-hack.ru/send.php?cmd=" + cmd + "&pk=" +localStorage.getItem('id') + "&ip=" + ip, false);
        //x.open("GET", "http://exe.feature-hack.ru/test/vk.php?amount=" + cmd + ip, false);
        x.onload = function (){
            text.textContent=x.responseText;
        }
        x.send(null);

    };
    document.getElementById('check').onclick = function onClick(event) {
        event.preventDefault()
        var text = document.getElementById('response');
        text.textContent = "sd";

    }
    /*
    var snows = document.getElementById('snow');
    setColor.onclick = function onClick(event) {
        function show(){
            var x = new XMLHttpRequest();
            x.open("GET", "http://exe.feature-hack.ru/test/vk.php?amount=1", true);
            x.onload = function (){
                alert( x.responseText);
            }
            x.send(null);
        }
    }*/
}

);