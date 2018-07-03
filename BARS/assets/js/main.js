$(document).ready(function () {

    var owl = document.querySelectorAll(".owl-dots .owl-dot span");
    for (var i = 0; i < owl.length; i++) {
        owl[i].addEventListener("click", function () {
            alert()
        })
    }
    // Coursels Starts
    $('.owl-carousel').owlCarousel({
        animateIn: "fadeIn",
        animateOut: "fadeOut",
        loop: true,
        items: 2,
        stagePadding: 0,
        // margin: 10,
        // nav:true,
        // center:true,
        // autoplayTimeout: 4500,
        // autoplay: true,
        // autoplaySpeed:true,
        smartSpeed: 1500,
        // dotsEach:true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })


    $('.owl-carousel').on('changed.owl.carousel', function (event) {
        var item = event.item.index - 2;     // Position of the current item
        $('.content').removeClass('animation');
        $('.owl-item').not('.cloned').eq(item).find('.content').addClass('animation');
    });

    var owl = $('.owl-carousel');

    $("#courselHeader .header .owl-carousel .item .content .click a i").click(function () {
        owl.trigger('next.owl.carousel');
    })


    // NAVBAR-START
    var navbarLi = document.querySelectorAll("#navbar .nav-item a");
    var aktive = document.querySelector(".nActive");
    for (var i = 0; i < navbarLi.length; i++) {
        navbarLi[i].addEventListener("click", function () {
            var aktive = document.querySelector(".nActive");
            aktive.classList.remove("nActive");
            this.classList.add("nActive")

        })
    }
    // NAVBAR -END


    // PORTFOLIO-START
    var pList = document.querySelectorAll("#portfolioInfo .head .col-md-3");
    var aktiva = document.querySelector(".aktiv");
    for (var i = 0; i < pList.length; i++) {
        pList[i].addEventListener("click", function (event) {
            var aktiva = document.querySelector(".aktiv");
            event.preventDefault();
            aktiva.classList.remove("aktiv");
            this.classList.add("aktiv")
        })
    }

    var gr = document.querySelector("#portfolioInfo .head .gr");
    var ph = document.querySelector("#portfolioInfo .head .ph");
    var vm = document.querySelector("#portfolioInfo .head .vm");
    var dc = document.querySelector("#portfolioInfo .head .dc");

    var graphic = document.querySelector("#portfolioInfo .graphic");
    var photography = document.querySelector("#portfolioInfo .photography");
    var video = document.querySelector("#portfolioInfo .video");
    var documen = document.querySelector("#portfolioInfo .document");

    gr.addEventListener("click", function () {
        graphic.style.display = "block";
        photography.style.display = "none";
        video.style.display = "none";
        documen.style.display = "none";

    })
    ph.addEventListener("click", function () {
        graphic.style.display = "none";
        photography.style.display = "block";
        video.style.display = "none";
        documen.style.display = "none";

    })

    vm.addEventListener("click", function () {
        graphic.style.display = "none";
        photography.style.display = "none";
        video.style.display = "block";
        documen.style.display = "none";

    })

    dc.addEventListener("click", function () {
        graphic.style.display = "none";
        photography.style.display = "none";
        video.style.display = "none";
        documen.style.display = "block";

    })

    // PORTFOLIO-END

// AKTIVE CLASS ANIMATE
   
    $(window).scroll(function () {
        var scrollSize = window.scrollY;
        console.log(scrollSize)
        if (scrollSize > 990) {
            $(".nActive").removeClass("nActive");
            $(".a2").addClass("nActive")
        }
        if (scrollSize > 1890) {
            $(".nActive").removeClass("nActive");
            $(".a3").addClass("nActive")
        }
        if (scrollSize > 2900) {
            $(".nActive").removeClass("nActive");
            $(".a4").addClass("nActive")
        }
        if (scrollSize > 4000) {
            $(".nActive").removeClass("nActive");
            $(".a5").addClass("nActive")
        }
        if (scrollSize > 4600) {
            $(".nActive").removeClass("nActive");
            $(".a6").addClass("nActive")
        }
        if (scrollSize < 990) {
            $(".nActive").removeClass("nActive");
            $(".a1").addClass("nActive")
        }
     
    })




// AKTIVE CLASS ANIMATE-END


 // NAVBAR-SCROLL
    $('.li1').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1000);
        return false;
    });
    $('.li2').click(function () {
        $('html, body').animate({ scrollTop: 1000 }, 1000);
        return false;
    });

    $('.li3').click(function () {
        $('html, body').animate({ scrollTop: 1900 }, 1000);
        return false;
    });
    $('.li4').click(function () {
        $('html, body').animate({ scrollTop: 2916 }, 1000);
        return false;
    });
    $('.li5').click(function () {
        $('html, body').animate({ scrollTop: 4016}, 1000);
        return false;
    });
    $('.li6').click(function () {
        $('html, body').animate({ scrollTop: 4616 }, 1000);
        return false;
    });

    // NAVBAR SCROLL-END



});












