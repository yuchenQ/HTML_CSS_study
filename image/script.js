// when we click on the thumbnail we set the src attribute of the
// big image to be the same as the src of the image we have clicked on
// ("this"). This loads the same image file into the big image

// $(document).ready(() => {
//   $(".crop-img").click(function() {
//     $("#bigImage").attr('src', $(this).attr('src'));
//   });
// });

$(function(){
  $(".crop-img").click(function() {
    $("#bigImage").attr('src', $(this).attr('src'));
  });
});
