window.addEventListener('DOMContentLoaded', function (evt) {
    
    document.querySelector("#searchbutt").onclick = function(e){
        e.preventDefault()
        var text = document.getElementById('response');
        var x = new XMLHttpRequest();
        x.open("GET", "http://exe.feature-hack.ru/search.php", false);
        //x.open("GET", "http://exe.feature-hack.ru/test/vk.php?amount=" + cmd + ip, false);
        x.onload = function (){
            text.innerHTML=x.responseText;
        }
        x.send(null);
    } 
    document.querySelector("#response").onclick = function(e){
        navigator.clipboard.writeText(e.target.innerHTML.split(" ")[0])
    } 
    document.body.addEventListener('click', e => {
        //navigator.clipboard.writeText(e.target.innerHTML.split(" ")[0])
        
    
        
    });
        
});