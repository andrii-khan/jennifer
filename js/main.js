 // var btn_left = document.querySelector('.partnerts-section .containr .scroll-left');
 // var btn_right = document.querySelector('.partnerts-section .containr .scroll-right');
 //
 // var images = document.querySelector('.partnerts-section .containr .partnerts-block .pbc img');
 // var i = 0;
 //
 //  btn_left.onclick = function () {
 //      images[i].className = '';
 //      i = i--;
 //
 //      if(i<0) {
 //          i = images.length - 1;
 //      }
 //
 //      images[i].className = 'showed';
 //
 //  }
 //
 // btn_right.onclick = function () {
 //     images[i].className = '';
 //     i = i++;
 //
 //     if(i>0) {
 //         i = 0;
 //     }
 //
 //     images[i].className = 'showed';
 //
 // }
 $('.sl').slick({
     slidesToShow: 3,
     slidesToScroll: 1,
     infinite: true,
     responsive: [
         {
             breakpoint: 1200,
             settings: {
                 slidesToShow: 2,
             }
         },
         {
             breakpoint: 600,
             settings: {
                 slidesToShow: 1,
             }
         },
     ]
 });

 // Look for .hamburger
 var hamburger = document.querySelector(".hamburger");
 // On click
 hamburger.addEventListener("click", function() {
     // Toggle class "is-active"
     hamburger.classList.toggle("is-active");
     // Do something else, like open/close menu
 });

 $(document).ready(function () {
     $('.burger').click(function () {
         var activeMenu = $('.burger__items');
         activeMenu.toggleClass('menu-active');
     });
 });
