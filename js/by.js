window.addEventListener('DOMContentLoaded', function (evt) {
    
    document.querySelector("#openbyurl").onclick = function(e){
        e.preventDefault()
        var Unlimited = document.querySelector('#checkbox1').checked;
        var Search = document.querySelector('#checkbox2').checked;
        var vip = document.querySelector('#checkbox3').checked;
        var day = parseInt(document.querySelector('#count').value);
        window.open('http://exe.feature-hack.ru/test.php?Unlimited=' + Unlimited + "&Search=" + Search + "&vip=" + vip + "&day=" + day, '_blank');
    }
    document.querySelector("#getprice").onclick = function(e){
        e.preventDefault()
        var console = document.querySelector('#checkbox').checked;
        var Unlimited = document.querySelector('#checkbox1').checked;
        var Search = document.querySelector('#checkbox2').checked;
        var vip = document.querySelector('#checkbox3').checked;
        var day = parseInt(document.querySelector('#count').value);
        var price = 0;
        
        if(Unlimited){
            price+=3000;
            if(vip)price+=2000;
            if(Search)price+=2000;
                
        }else{
            price = 30;
            if(vip)price+=300;
            if(Search)price+=30;
            if(day <=0)day=1;
            if(day >1000)day=1000;
            if(day == "NaN")day=1;
            price=price*day;
        }
        
        document.querySelector('#price').textContent = "Цена: "+price+"₽";

        
    } 

});