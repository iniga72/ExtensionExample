window.addEventListener('DOMContentLoaded', function (evt) {
    
    document.querySelector("#sendapi").onclick = function(e){
        e.preventDefault()

        if (document.querySelector("#tzffas").hidden == "false"){
            document.querySelector("#tzffas").hidden = true;
        }else{
            document.querySelector("#tzffas").hidden = false;
        }
        //else if (document.querySelector("#tzffas").hidden == "false") document.querySelector("#tzffas").hidden = true;
        
       

        
        
    }
    

});