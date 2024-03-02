document.addEventListener("DOMContentLoaded", function(event){
    const blogList = document.getElementById("blog-list");
    const cardsSwitch = document.getElementById("cards-switch");
    const listSwitch = document.getElementById("list-switch");

    // Switch between list view and card view
    cardsSwitch.addEventListener("click", ()=> {
        blogList.classList.add("cards");
        cardsSwitch.classList.add("active");
        listSwitch.classList.remove("active");
    })
    listSwitch.addEventListener("click", ()=> {
        blogList.classList.remove("cards")
        listSwitch.classList.add("active");
        cardsSwitch.classList.remove("active");
    })
})
