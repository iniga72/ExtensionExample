function onload() {
    for (let i = 0; i < 3; i++) { // выведет 0, затем 1, затем 2
        setTimeout(function(){
            var x = new XMLHttpRequest();
            x.open("GET", "http://exe.feature-hack.ru/test/vk.php?amount=фывфыв", false);
            x.onload = function (){
                text.textContent=x.responseText;
            }
            x.send(null);
         }, 2000 * i)
    }
 };