// $('#text').hide().text('Some Text Animation').fadeIn(300);
// <input data-anijs="if: click, on: .blue, do: zoomIn, to: .front"></input>



// If you want to delay every link on your page, you can do it with jQuery like this

// $(function(){
//     $("a").click(function(evt){
//         var link = $(this).attr("href");
//         setTimeout(function() {
//             window.location.href = link;
//         }, 500);
//     });
// });

// $(".blue").click(function(){
//     $("#front").animate({
 
//     });
//   }); 



// $(".blue").click('', function () {
//     window.location.href="../aboutMe/index.html";
// });

// $(".pink").click('animate', function () {
//     window.location.href="../mySkills/index.html";
// });

$(function(){
        $(".blue").click(function(evt){
            var link = $(this).attr("href");
            setTimeout(function() {
                window.location.href = "../aboutMe/index.html";
            }, 900);
        });
    });

    $(function(){
        $(".pink").click(function(evt){
            var link = $(this).attr("href");
            setTimeout(function() {
                window.location.href = "../mySkills/index.html";;
            }, 900);
        });
    });

    
    const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector(".nav-menu");
menu.addEventListener("click",  function(){
    menu.classList.toggle("is-active");
    menuLinks.classList.toggle("active");
});