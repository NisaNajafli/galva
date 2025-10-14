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
$("html, body").animate({
    scrollTop: 0,
    scrollLeft: 0
}, "slow");
const header = document.querySelector(".myHeader")
  , toggleClass = "is-sticky";
window.addEventListener("scroll", () => {
    if (window.location.href == "https://ali.81.whm.az/") {
        window.pageYOffset > 150 ? header.classList.add("is-sticky") : header.classList.remove("is-sticky")
    } else {
        header.classList.add("is-sticky")
    }
}
);
$(document).ready(function() {
    $('.language-area button').click(function(e) {
        e.stopPropagation();
        $('.search-drop').slideUp();
        $('.language-dropdown').slideToggle();
        $('.sign-dropdown').slideUp()
    });
    $('.search-area button').click(function(e) {
        e.stopPropagation();
        $('.language-dropdown').slideUp();
        $('.search-drop').slideToggle();
        $('.sign-dropdown').slideUp()
    });
    $('.sign-area button').click(function(e) {
        e.stopPropagation();
        $('.search-drop').slideUp();
        $('.language-dropdown').slideUp();
        $('.sign-dropdown').slideToggle()
    });
    $(document).click(function(e) {
        if (!$(e.target).closest('.language-area').length) {
            $('.language-dropdown').slideUp()
        }
        if (!$(e.target).closest('.search-area').length) {
            $('.search-drop').slideUp()
        }
        if (!$(e.target).closest('.sign-area').length) {
            $('.sign-dropdown').slideUp()
        }
    })
});
document.addEventListener("DOMContentLoaded", () => {
    const myBlogNavigation = document.querySelector(".blog-navigation");
    let productsSwiper = new Swiper("#blogSwiper",{
        slidesPerView: 1,
        loop: !0,
        effect: "slide",
        spaceBetween: 10,
        navigation: {
            nextEl: ".blog-navigation-next",
            prevEl: ".blog-navigation-prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            450: {
                slidesPerView: 1.5
            },
            768: {
                slidesPerView: 2
            },
            1024: {
                slidesPerView: 3
            },
        },
    });
    productsSwiper.init();
    const newBlogSwiper = productsSwiper.slides.length
}
);
document.addEventListener("DOMContentLoaded", () => {
    let productsSwiper = new Swiper("#partnorsSwiper",{
        slidesPerView: 5,
        loop: !0,
        autoplay: !0,
        effect: "slide",
        spaceBetween: 10,
        navigation: {
            nextEl: ".blog-navigation-next",
            prevEl: ".blog-navigation-prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            450: {
                slidesPerView: 1.5
            },
            768: {
                slidesPerView: 2
            },
            1024: {
                slidesPerView: 5
            },
        },
    })
}
);
document.addEventListener("DOMContentLoaded", () => {
    let prodListSwiper = new Swiper(".productsSwiper",{
        slidesPerView: 1,
        allowTouchMove: !1,
        spaceBetween: 10,
        effect: "slide",
        direction: "horizontal",
        keyboard: !0,
        loop: !0,
        navigation: !1,
        breakpoints: {
            345: {
                slidesPerView: 1.5,
            },
            500: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            1199: {
                slidesPerView: 4,
            },
        },
        navigation: {
            nextEl: ".product-navigation-next",
            prevEl: ".product-navigation-prev",
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: !1,
        },
        allowTouchMove: !0,
    });
    prodListSwiper.init()
}
);
document.addEventListener("DOMContentLoaded", () => {
    let advantagesSwiper = new Swiper(".aboutAdvantageSwiper",{
        slidesPerView: 1,
        loop: !0,
        spaceBetween: 20,
        effect: "fade",
        pagination: {
            el: ".aboutAdvantagesNavigation li",
            clickable: !0,
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
        },
    });
    const paginationBullets = document.querySelectorAll(".aboutAdvantagesNavigation li");
    paginationBullets.forEach( (el, index) => {
        el.addEventListener("mouseover", () => {
            advantagesSwiper.slideToLoop(index)
        }
        )
    }
    );
    advantagesSwiper.on("slideChange", () => {
        const activeIndex = advantagesSwiper.realIndex;
        paginationBullets.forEach( (el, index) => {
            if (index === activeIndex) {
                el.classList.add("activePagination")
            } else {
                el.classList.remove("activePagination")
            }
        }
        )
    }
    );
    advantagesSwiper.emit("slideChange");
    advantagesSwiper.init()
}
);
document.addEventListener("DOMContentLoaded", () => {
    let HeroSliderSwiper = new Swiper(".myHeroSlider",{
        slidesPerView: 1,
        spaceBetween: 10,
        effect: "fade",
        allowTouchMove: !1,
        draggable: !1,
        autoplay: !0,
        direction: "horizontal",
        keyboard: !0,
        navigation: !1,
        pagination: {
            enable: !0,
            el: ".hero-pagination",
            clickable: !0,
            type: "bullets",
            bulletElement: "span",
            bulletClass: "hero-pagination-bullet swiper-pagination-bullet",
            bulletActiveClass: "hero-pagination-active-bullet swiper-pagination-bullet-active",
        },
        breakpoints: {
            0: {
                allowTouchMove: !1,
                draggable: !1,
                direction: "horizontal",
            },
            991: {
                allowTouchMove: !0,
                draggable: !0,
                direction: "vertical",
            }
        },
    });
    HeroSliderSwiper.init()
}
);
document.addEventListener('DOMContentLoaded', () => {
    var btn = document.querySelectorAll('.mouse-cursor-gradient-tracking');
    for (let i = 0; i < btn.length; i++) {
        btn[i].onmousemove = function(e) {
            var x = e.pageX - btn[i].offsetLeft;
            var y = e.pageY - btn[i].offsetTop;
            btn[i].style.setProperty('--x', x + 'px');
            btn[i].style.setProperty('--y', y + 'px')
        }
    }
}
);
let lastScrollTop = 0;
const sections = document.querySelectorAll('section');
let counterStarted = !1;
let after_width = 90;
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    sections.forEach(section => {
        const offsetTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (scrollPosition >= offsetTop && scrollPosition <= offsetTop + sectionHeight) {
            if (section.id === 'discover-us') {
                let currentScrollTop = window.scrollY;
                if (after_width == 100) {
                    after_width = 100
                } else {
                    if (currentScrollTop > lastScrollTop) {
                        after_width += 0.2
                    } else if (currentScrollTop < lastScrollTop) {
                        after_width -= 0.2
                    }
                }
                if (after_width < 90) {
                    after_width = 90
                }
                $(".discover_us_bg").css({
                    "width": `${after_width}%`
                })
                lastScrollTop = currentScrollTop;
                let verticalScroll = window.scrollY
            }
        }
    }
    )
}
);
document.addEventListener("DOMContentLoaded", () => {
    const openButtons = document.querySelectorAll(".modalBtn");
    const closeButtons = document.querySelectorAll(".closeBtn");
    const modals = document.querySelectorAll(".customModalContainer");
    openButtons.forEach( (button) => {
        button.addEventListener("click", () => {
            const modalId = button.getAttribute("data-btn");
            const modal = document.querySelector(`.customModalContainer[data-modalId="${modalId}"]`);
            modal.classList.add("show");
            document.body.classList.add("no-scroll")
        }
        )
    }
    );
    closeButtons.forEach( (button) => {
        button.addEventListener("click", () => {
            const modalId = button.getAttribute("data-modalCloseId");
            const modal = document.querySelector(`.customModalContainer[data-modalId="${modalId}"]`);
            modal.classList.remove("show");
            document.body.classList.remove("no-scroll")
        }
        )
    }
    );
    modals.forEach( (modal) => {
        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.classList.remove("show");
                document.body.classList.remove("no-scroll")
            }
        }
        )
    }
    )
}
);
$(".internal_cat_list li").click(function() {
    $(this).children("ul").show();
    $(this).parent().siblings().children("li").children("ul").hide()
})
document.addEventListener('DOMContentLoaded', () => {
    let e = document.querySelector('#title_products_value')
      , t = document.querySelector('.products_title');
    e && t && (e.value = t.innerHTML)
}
);
function SelectList() {
    let listItem = document.querySelectorAll(".filter-list li");
    listItem.forEach( (item) => {
        item.addEventListener("click", () => {
            listItem.forEach( (li) => {
                li.classList.remove("active-item");
                closeList()
            }
            );
            item.classList.add("active-item");
            filterList(item.getAttribute("data-category"))
        }
        )
    }
    )
}
const eyeIcons = document.querySelectorAll('.show-hide');
eyeIcons.forEach( (eyeIcon) => {
    eyeIcon.addEventListener('click', () => {
        const pInput = eyeIcon.parentElement.querySelector('input');
        if (pInput.type === 'password') {
            eyeIcon.classList.replace('fa-eye-slash', 'fa-eye');
            return (pInput.type = 'text')
        }
        eyeIcon.classList.replace('fa-eye', 'fa-eye-slash');
        pInput.type = 'password'
    }
    )
}
);
document.addEventListener("DOMContentLoaded", () => {
    const corporative_queue = document.querySelectorAll(".corporative_queue");
    corporative_queue.forEach( (item, index) => {
        item.innerHTML = index + 1
    }
    )
}
);
Fancybox.bind("[data-fancybox='gallery1']", {});
Fancybox.bind("[data-fancybox='gallery']", {});
document.addEventListener("DOMContentLoaded", () => {
    const comments = document.querySelectorAll("#dle-comments-form");
    const ajaxComments = document.querySelectorAll("#dle-ajax-comments");
    if (comments) {
        comments.forEach( (item, index) => {
            item.remove()
        }
        )
    } else
        return;
    if (ajaxComments) {
        ajaxComments.forEach( (item, index) => {
            item.remove()
        }
        )
    } else
        return
}
);
const thumbSlider = new Swiper(".thumbSlider",{
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: !0,
    watchSlidesProgress: !0,
});
const mainSlider = new Swiper(".mainSlider",{
    spaceBetween: 10,
    navigation: {
        nextEl: ".sw-top",
        prevEl: ".sw-bot",
    },
    thumbs: {
        swiper: thumbSlider,
    },
})
