window.addEventListener('DOMContentLoaded', function (evt) {
    
    document.querySelector("#sendapi").onclick = function(e){
        e.preventDefault()
        var x = new XMLHttpRequest();

        var ip = document.querySelector("#ip2").value;
        var port = document.querySelector("#porti").value;
        var rport = document.querySelector("#rporti").value;
        var password = document.querySelector("#rpasswordi").value;
        var vip = document.querySelector('#vvip').checked;
        if(ip == "" || port == "" || rport == ""|| password == "") return;
        x.open("GET", "http://feature-hack.ru/api.php?ip=" +ip + "&rport=" + rport + "&pas=" + password + "&pk=" + localStorage.getItem('id') + "&port=" + port + "&vip=", false);
        //x.open("GET", "http://exe.feature-hack.ru/test/vk.php?amount=" + cmd + ip, false);
        x.onload = function (){
            if(x.responseText == "approved"){ //denied- approved + expectation №
                document.querySelector("#approved").hidden = false;
                setTimeout(function(){
                    document.querySelector("#approved").hidden = true;
                 }, 1000 * 3)
            }else if(x.responseText == "expectation"){
                document.querySelector("#expectation").hidden = false;
                setTimeout(function(){
                    document.querySelector("#expectation").hidden = true;
                 }, 1000 * 3)
            }else{
                document.querySelector("#denied").hidden = false;
                setTimeout(function(){
                    document.querySelector("#denied").hidden = true;
                 }, 1000 * 3)
            }
        }
        x.send(null);
        
            
        
        //else if (document.querySelector("#tzffas").hidden == "false") document.querySelector("#tzffas").hidden = true;
        
       

        
        
    }
    

});