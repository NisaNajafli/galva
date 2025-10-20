const mobileItem = document.querySelector("#mobile_nav_item");
const closeIcon = document.querySelector("#cancel");
let hamburger = document.querySelector(".hamburger-btn");
let sidebar = document.querySelector("#mobile_navbar");
let overlay = document.querySelector(".overlay-mobile");
function toggleSidebar() {
    sidebar.classList.toggle("active_navbar");
    overlay.style.display = sidebar.classList.contains("active_navbar") ? "block" : "none";
    document.body.classList.toggle("no-scroll", sidebar.classList.contains("active_navbar"))
}
hamburger.addEventListener("click", toggleSidebar);
overlay.addEventListener("click", toggleSidebar);
closeIcon.addEventListener("click", toggleSidebar);
function checkWindowWidth() {
    if (window.innerWidth > 1199) {
        sidebar.classList.remove("active_navbar");
        overlay.style.display = "none";
        document.body.classList.remove("no-scroll")
    }
}
window.addEventListener("resize", checkWindowWidth);
checkWindowWidth();
$(document).ready(function() {
    $(document).on("click", "#mobile_nav_links", function(e) {
        e.preventDefault();
        var submenu = $(this).next(".mobile_nav_submenu");
        var allSubmenus = $(".mobile_nav_submenu").not(submenu);
        if (submenu.is(":visible")) {
            submenu.slideUp()
        } else {
            allSubmenus.slideUp();
            submenu.slideDown()
        }
    })
});

