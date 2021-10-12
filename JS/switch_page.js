function page_display_none() {
    document.querySelectorAll(".page").forEach(function(current) { 
        current.style.display = "none";
    })
    document.querySelectorAll("div.sidenav > button").forEach(function(current) { 
        current.classList.remove("current");
    })
}

function switch_to_page(name) {
    page_display_none();
    document.getElementById(name).style.display = "block";
    document.getElementById("b_"+name).classList.add("current");
}