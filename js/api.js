window.addEventListener('DOMContentLoaded', function (evt) {
    
    document.querySelector("#sendapi").onclick = function(e){
        e.preventDefault()
        var x = new XMLHttpRequest();

        var ip = document.querySelector("#ip2").value;

        x.open("GET", "http://feature-hack.ru/api.php?ip=" +ip, false);
        //x.open("GET", "http://exe.feature-hack.ru/test/vk.php?amount=" + cmd + ip, false);
        x.onload = function (){
            if(x.responseText == "good"){
                document.querySelector("#tzffas").hidden = false;
                setTimeout(function(){
                    document.querySelector("#tzffas").hidden = true;
                 }, 1000 * 3)
            }
        }
        x.send(null);
        
            
        
        //else if (document.querySelector("#tzffas").hidden == "false") document.querySelector("#tzffas").hidden = true;
        
       

        
        
    }
    

});