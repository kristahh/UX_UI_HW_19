// $('#text').hide().text('Some Text Animation').fadeIn(300);
// <input data-anijs="if: click, on: .blue, do: zoomIn, to: .front"></input>



// If you want to delay every link on your page, you can do it with jQuery like this

$(function(){
    $("a").click(function(evt){
        var link = $(this).attr("href");
        setTimeout(function() {
            window.location.href = link;
        }, 500);
    });
});