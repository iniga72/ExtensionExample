window.addEventListener('DOMContentLoaded', function (evt) {
    
    document.body.addEventListener('click', e => {
        if (e.target.classList.contains('checkersend')){
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
});