window.addEventListener('DOMContentLoaded', function (evt) {
    var ip = document.querySelector("#ip2");
    var cmd = document.querySelector("#cmdi");
    
    var LocalIP = localStorage.getItem("ip");
    var LocalCmd = localStorage.getItem('cmd');

    if(LocalIP != null) ip.value = LocalIP;
    if(LocalCmd != null) cmd.value = LocalCmd;
    
    var x = new XMLHttpRequest();
            x.open("GET", "http://exe.feature-hack.ru/test/vk.php?amount=s1", false);
            x.send(null);
    document.body.addEventListener('click', e => {
        
        if (e.target.classList.contains('consolesend')){
            e.preventDefault()
            
            var text = document.getElementById('response');
            var ip = document.getElementById("ip2").value;
            var cmd = document.getElementById("cmdi").value;
            //text.textContent="z";
            var x = new XMLHttpRequest();
            localStorage.setItem('ip', ip);
            localStorage.setItem('cmd', cmd);
            x.open("GET", "http://feature-hack.ru/send.php?cmd=" + cmd + "&pk=" +localStorage.getItem('id') + "&ip=" + ip.split(":")[0], false);
            //x.open("GET", "http://exe.feature-hack.ru/test/vk.php?amount=" + cmd + ip, false);
            x.onload = function (){
                text.textContent=x.responseText.replace(x.responseText.split(" ")[0], "");
                if(x.responseText == "- Не удалось взломать сервер."){
                    var bad = localStorage.getItem("console_bad");
                    if(bad == "")bad = 0;
                    bad++;
                    localStorage.setItem("console_bad", bad);
                }else{
                    var good = localStorage.getItem("console_good");
                    if(good == "")good = 0;
                    good++;
                    localStorage.setItem("console_good", good);
                }
            }
            x.send(null);
            

        }
        //и так далее
      });
});