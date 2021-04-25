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
      /*      
    for (let i = 0; i < 3; i++) { // выведет 0, затем 1, затем 2
        setTimeout(function(){
            var x = new XMLHttpRequest();
            x.open("GET", "http://exe.feature-hack.ru/test/vk.php?amount=фывфыв", false);
            x.send(null);
         }, 2000 * i)
    }*/

    document.body.addEventListener('click', e => {
        if (e.target.classList.contains('consolesend')){
            e.preventDefault()
            var text = document.getElementById('response');
            var text22 = document.getElementById('ip2');
            var ip = document.getElementById("ip2").value;
            var cmd = document.getElementById("cmdi").value;
            //text.textContent="z";
            var x = new XMLHttpRequest();
            localStorage.setItem('ip', ip);
            localStorage.setItem('cmd', cmd);
            x.open("GET", "http://feature-hack.ru/send.php?cmd=" + cmd + "&pk=" +localStorage.getItem('id') + "&ip=" + ip, false);
            //x.open("GET", "http://exe.feature-hack.ru/test/vk.php?amount=" + cmd + ip, false);
            x.onload = function (){
                text.textContent=x.responseText;
            }
            x.send(null);

        }else if(e.target.classList.contains('checkersend')){
            e.preventDefault()
            var text = document.getElementById('response');
            text.textContent="z";
            var x = new XMLHttpRequest();
            
            x.open("GET", "http://feature-hack.ru/check.php", false);
            //x.open("GET", "http://exe.feature-hack.ru/test/vk.php?amount=" + cmd + ip, false);
            x.onload = function (){
                text.innerHTML=x.responseText.replace("<br>","!");
            }
            x.send(null);
        }
        //и так далее
      });
}

);