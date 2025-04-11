function showMenu(){
    let menu = document.getElementById('folio-navbox-parent');
    console.log(menu.style.display)

    if(menu.style.display === "none"){
        menu.style.display = "block";
    }else {
        menu.style.display = "none";
    }
    
}