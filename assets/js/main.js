$(function() {
    let header = $('#header');
    let introH = $('#intro').innerHeight();
    let scrollOfset = $(window).scrollTop();

 // fixed header 
    checkScroll(scrollOfset);

    $(window).on("scroll", function() {
        scrollOfset = $(this).scrollTop();
        checkScroll(scrollOfset); 
    });

    function checkScroll(scrollOffset){
        if(scrollOfset >= introH){
            header.addClass("fixed");
        } else{
            header.removeClass("fixed");
        }
    }
});

// // smooth scroll
// $("[data-scroll]").on("click",function(event){
//     event.preventDefault();
//     let $this = $(this);
//     let blockId = $this.data('scroll');
//     let blockOffset = $(blockId).offset().top;
    

//     $("#nav a").removeClass("active");
//     $this.addClass("active");
    
//     $("html,body").animate({
//         scrollTop: blockOffset
//     }, 500); 
// })
$("a").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();
      let hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    } 
  });

// nav toggle
$("#nav-toggle").on('click', function(event){
    event.preventDefault();

    $(this).toggleClass("active");
    $("#nav").toggleClass("active");
    
})

// collapse
$("[ data-collapse]").on('click', function(event){
    event.preventDefault();
   
    
    let blockId = $(this).data('collapse');
    $(blockId).slideToggle();
    $(blockId).parent().toggleClass("active")
})

// slider
$("[data-slider]").slick({
    infinite: true,
    fade: false,
    slidesToShow: 1,
    slidesToScroll: 1
})