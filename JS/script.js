var TBn = document.getElementById("Tbn");

window.onscroll = function() {scrollFunction()}

function scrollFunction(){
    if(document.body.scrollTop >80 || document.documentElement.scrollTop > 80)
        TBn.style.display = "block";
        
}