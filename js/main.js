function showMenu(){
    let menu = document.getElementById('folio-navbox-parent');

    if(menu.style.display === "none" || menu.style.display === ""){
        menu.style.display = "block";
    }else {
        menu.style.display = "none";
    }
    
}