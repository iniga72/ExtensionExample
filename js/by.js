window.addEventListener('DOMContentLoaded', function (evt) {

    document.querySelector("#getprice").onclick = function(e){
        e.preventDefault()
        var Search = document.querySelector('#checkbox').checked;
        var Unlimited = document.querySelector('#checkbox1').checked;
        var Old = document.querySelector('#checkbox2').checked;
        var New = document.querySelector('#checkbox3').checked;
        var day = parseInt(document.querySelector('#count').value);
        var price = 0;
        if(Search)price+=30;
        if(Unlimited){
            if(Old)price+=3000;
            if(New)price+=2000;
            if(price>0){
                if(Search)price+=1970;
            }
                
        }else{
            if(Old)price+=20;
            if(New)price+=10;
            if(day <=0)day=1;
            if(day >1000)day=1000;
            if(day == "NaN")day=1;

            price=price*day;
        }
        
        document.querySelector('#price').textContent = "Цена: "+price+"₽";

        
    } 

});