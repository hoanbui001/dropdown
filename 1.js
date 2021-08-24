var dropdown = document.querySelectorAll('.dropbtn');
var dropdowncontent = document.querySelectorAll('.dropdown-content');


 window.onclick = function(event) {
   
    if(event.target.classList.contains('dropbtn')){
        if(event.target.classList.contains('show')){
            for( var i = 0; i < dropdown.length; i++){
                dropdown[i].classList.remove('show');
            }
        }
        else{
            for( var i = 0; i < dropdown.length; i++){
                dropdown[i].classList.remove('show');
            }
            event.target.classList.add('show');
        }
        
        
    }
    else{
        for( var i = 0; i < dropdown.length; i++){
            dropdown[i].classList.remove('show');
        }
    }
 }
