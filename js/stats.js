window.addEventListener('DOMContentLoaded', function (evt) {
    
    var a = document.querySelector('#menu_good');//idasfwq
    var good = localStorage.getItem("console_good");
    if(good == "")good = 0;
    a.textContent = good;

    var a = document.querySelector('#menu_bad');//idasfwq
    var good = localStorage.getItem("console_bad");
    if(good == "")good = 0;
    a.textContent = good;
});