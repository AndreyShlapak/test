$(function () {
    //radio

    $('input[type=radio][name=radio-btn]').change(function() {
        if (this.value == 'first') {
            $(".skills__ul-list").addClass("show");
            $(".skills__ol-list").removeClass("show");
        }
        else if (this.value == 'second') {
            $(".skills__ol-list").addClass("show");
            $(".skills__ul-list").removeClass("show");
        }
    });

    //select

    $("select").change(function () {
        $("select option:selected").each(function () {
            if (this.value == 'first') {
                $(".ul-list--select").addClass("show");
                $(".ol-list--select").removeClass("show");
                
                
            }
            else if (this.value == 'second') {
                $(".ol-list--select").addClass("show");
                $(".ul-list--select").removeClass("show");
            }
        });
    });

    // smooth scroll 

    $("[data-scroll]").click(function (e) { 
        e.preventDefault();
        
        let elementId = $(this).data("scroll");
        let elementOffSet = $(elementId).offset().top;
        
        $("html, body").animate({
            scrollTop: elementOffSet -90
        }, 1000);
    });

});