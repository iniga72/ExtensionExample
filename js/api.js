window.addEventListener('DOMContentLoaded', function (evt) {
    
    document.querySelector("#sendapi").onclick = function(e){
        e.preventDefault()
        document.querySelector("#tzffas").hidden = false;
        setTimeout(function(){
            //document.querySelector("#tzffas").hidden = true;
         }, 1000 * 5)
            
        
        //else if (document.querySelector("#tzffas").hidden == "false") document.querySelector("#tzffas").hidden = true;
        
       

        
        
    }
    

});