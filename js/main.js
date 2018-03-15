   $(document).ready(function () {
       
        $('#myImg').click(function(){
            var img_id = $(this).attr("src");
            $("#img_Modal").css("display", "block")
            $("#img").attr('src', img_id)
        });
       $('#myImg2').click(function(){
            var img_id = $(this).attr("src");
            $("#img_Modal").css("display", "block")
            $("#img").attr('src', img_id)
        });
       $('#myImg3').click(function(){
            var img_id = $(this).attr("src");
            $("#img_Modal").css("display", "block")
            $("#img").attr('src', img_id)
        });
       $('#myImg4').click(function(){
            var img_id = $(this).attr("src");
            $("#img_Modal").css("display", "block")
            $("#img").attr('src', img_id)
        });
       $('#myImg5').click(function(){
            var img_id = $(this).attr("src");
            $("#img_Modal").css("display", "block")
            $("#img").attr('src', img_id)
        });
       $('#myImg6').click(function(){
            var img_id = $(this).attr("src");
            $("#img_Modal").css("display", "block")
            $("#img").attr('src', img_id)
        });
       
       $("#img_Modal").click(function(){
            $("#img_Modal").css("display", "none")
        });

 
 $(window).scroll(function () {
            var scroll = $(window).scrollTop();
            if (scroll >= 700) {
                $("#first_indicator").fadeOut();
                $("#first_space").fadeOut();
                $(".story").fadeIn();
            }
            if (scroll > 900) {
                $(".second_text").fadeIn();
            }

            
            if (scroll >= 1100) {
                $("#second_indicator").fadeOut();
                $("#second_space").fadeOut();
                $(".memory_korea").fadeIn();
            }
            if (scroll > 1400) {
                $(".third_text").fadeIn();
            }

            
            if (scroll >= 1700) {
                $("#third_indicator").fadeOut();
                $("#third_space").fadeOut();
                $(".traveling_korea").fadeIn();
            }
            if (scroll > 1900) {
                $(".fourth_text").fadeIn();
            }
            
            
            if (scroll >= 2200) {
                $("#fourth_indicator").fadeOut();
                $("#fourth_space").fadeOut();
                $(".memory").fadeIn();
            }
            if (scroll > 2300) {
                $(".fifth_text").fadeIn();
            }
            
            
            if (scroll >= 2700) {
                $("#fifth_indicator").fadeOut();
                $("#fifth_space").fadeOut();
                $(".together").fadeIn();
            }
            if (scroll > 2900) {
                $(".sixth_text").fadeIn();
            }
            
            
            if (scroll >= 3300) {
                $("#sixth_indicator").fadeOut();
                $("#sixth_space").fadeOut();
                $(".future").fadeIn();
            }
            if (scroll > 4300) {
                $(".delay").fadeIn();
            }

            
            if (scroll >= 4800) {
                $("#seventh_indicator").fadeOut();
                $("#seventh_space").fadeOut();
                $(".last_text").fadeIn();
            }

        });
    });





    // Lightbox 2016

    function openModal() {
        document.getElementById('myModal').style.display = "block";
    }

    function closeModal() {
        document.getElementById('myModal').style.display = "none";
    }

    var slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("demo");
        var captionText = document.getElementById("caption");

        if (n > slides.length) {
            slideIndex = 1
        }
        if (n < 1) {
            slideIndex = slides.length
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
        captionText.innerHTML = dots[slideIndex - 1].alt;
    }

    // Lightbox Traveling_2016
    function sec_openModal() {
        document.getElementById('sec_myModal').style.display = "block";
    }

    function sec_closeModal() {
        document.getElementById('sec_myModal').style.display = "none";
    }

    var sec_slideIndex = 1;
    sec_showSlides(slideIndex);

    function sec_plusSlides(n) {
        sec_showSlides(slideIndex += n);
    }

    function sec_currentSlide(n) {
        sec_showSlides(slideIndex = n);
    }

    function sec_showSlides(n) {
        var i;
        var sec_slides = document.getElementsByClassName("sec_mySlides");
        var sec_dots = document.getElementsByClassName("sec_demo");
        var sec_captionText = document.getElementById("sec_caption");

        if (n > sec_slides.length) {
            slideIndex = 1
        }
        if (n < 1) {
            slideIndex = sec_slides.length
        }
        for (i = 0; i < sec_slides.length; i++) {
            sec_slides[i].style.display = "none";
        }
        for (i = 0; i < sec_dots.length; i++) {
            sec_dots[i].className = sec_dots[i].className.replace(" active", "");
        }
        sec_slides[slideIndex - 1].style.display = "block";
        sec_dots[slideIndex - 1].className += " active";
        sec_captionText.innerHTML = sec_dots[slideIndex - 1].alt;
    }

    // Lightbox 2017
    function third_openModal() {
        document.getElementById('third_myModal').style.display = "block";
    }

    function third_closeModal() {
        document.getElementById('third_myModal').style.display = "none";
    }

    var third_slideIndex = 1;
    third_showSlides(slideIndex);

    function third_plusSlides(n) {
        third_showSlides(slideIndex += n);
    }

    function third_currentSlide(n) {
        third_showSlides(slideIndex = n);
    }

    function third_showSlides(n) {
        var i;
        var third_slides = document.getElementsByClassName("third_mySlides");
        var third_dots = document.getElementsByClassName("third_demo");
        var third_captionText = document.getElementById("third_caption");

        if (n > third_slides.length) {
            slideIndex = 1
        }
        if (n < 1) {
            slideIndex = third_slides.length
        }
        for (i = 0; i < third_slides.length; i++) {
            third_slides[i].style.display = "none";
        }
        for (i = 0; i < third_dots.length; i++) {
            third_dots[i].className = third_dots[i].className.replace(" active", "");
        }
        third_slides[slideIndex - 1].style.display = "block";
        third_dots[slideIndex - 1].className += " active";
        third_captionText.innerHTML = third_dots[slideIndex - 1].alt;
    }

    function myFunction() {
        alert("Will You Marry Me?")
    }
