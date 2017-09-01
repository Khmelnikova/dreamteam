function start() {
    var top_menu_items = document.querySelectorAll("div.header > nav > ul > li");
    var sign_in = document.getElementById("sign_in");
    
    function goToMenuItems(menu_items) {
        for (var i = 0; i < menu_items.length; i++){
            menu_items[i].addEventListener("click", function(){
                this.classList.add("active");
                for (var j = 0; j < menu_items.length; j++){
                    if (this !== menu_items[j]){
                        menu_items[j].classList.remove("active");
                    }
                }
            })
        }
    }
    
    goToMenuItems(top_menu_items);
    
    sign_in.addEventListener("click", function(){
        
    })
}

start();