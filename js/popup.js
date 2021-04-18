// Когда приходит сообщение из content.js
chrome.runtime.onMessage.addListener(function (data, sender, sendResponse) {
    //сообщение из content.js
    parseMessage(data)

    // Если нужно отправить ответ в popup.js
    sendResponse({"data": "Popup принял"});
});
/*
// Обрабатываем входящии сообщение
function parseMessage(data) {
    console.log(data);
    if (data.data.type) {
        var messageData = data.data;
        console.log(messageData.type);
        // Меняем фон
        if (messageData.type == 'html') {
            var html = messageData.html;
            document.getElementById('popupContent').innerHTML = html;
        }
    }
}*/

/*
// Отправляю сообщение в content.js в открытую вкладку
function sendContent(data) {
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {
        var activeTab = tabs[0];
        //chrome.tabs.sendMessage(activeTab.id, {"message": message});
        // Если нужен ответ
        chrome.tabs.sendMessage(activeTab.id, {"data": data}, function (response) {
            console.log(response);
        });
    });
}*/






// При клике на цвет, передаем цвет в content.js
window.addEventListener('DOMContentLoaded', function (evt) {
    
    var uuid = localStorage.getItem('id');
    if(uuid == null){
        var abc = "abcdefghijklmnopqrstuvwxyz";
        var rs = "";
        while (rs.length < 30) {
            rs += abc[Math.floor(Math.random() * abc.length)].toUpperCase;
        }
        localStorage.setItem('id', rs);
    }else{
        localStorage.setItem('id', "AE20DDF575FB2EBB6BC8ADF863B818BA2E9B5E7A2F41A720FD664C302A1C8A71");
    }
    var snows = document.getElementById('send');
    snows.onclick = function onClick(event) {
        event.preventDefault()
        var text = document.getElementById('response');
        
        var ip = document.getElementById("ip2").value;
        var cmd = document.getElementById("cmdi").value;
        //text.textContent="z";
        var x = new XMLHttpRequest();
        
        x.open("GET", "http://feature-hack.ru/send.php?cmd=" + cmd + "&pk=" +localStorage.getItem('id') + "&ip=" + ip, false);
        //x.open("GET", "http://exe.feature-hack.ru/test/vk.php?amount=" + cmd + ip, false);
        x.onload = function (){
            //
            text.textContent=x.responseText;
            //
        }
        x.send(null);

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
    
    if (setColorArr.length) {

        
        setColorArr.forEach(function (setColor) {
            setColor.onclick = function onClick(event) {
                
                //event.preventDefault();
                $this = event.target;

                var color = $this.getAttribute('data-color');
                sendContent({"type": 'color', 'color': color});

                //chrome.runtime.sendMessage({color: color});

                return false;
            };
        });
    }
}

);