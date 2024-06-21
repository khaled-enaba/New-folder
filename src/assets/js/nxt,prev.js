const container = document.querySelector('.scrollContainer');
const scrollLeftButton = document.getElementById('left');
const scrollRightButton = document.getElementById('right');

scrollLeftButton.addEventListener('click', () => {
    container.left -= '5px'; // Adjust the value as needed
});

scrollRightButton.addEventListener('click', () => {
    container.left += '5px'; // Adjust the value as needed
});

//   $(document).ready(function(){
//     $('.customer-logos').slick({
//         slidesToShow: 6,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 1500,
//         arrows: false,
//         dots: false,
//         pauseOnHover: false,
//         responsive: [{
//             breakpoint: 768,
//             settings: {
//                 slidesToShow: 4
//             }
//         }, {
//             breakpoint: 520,
//             settings: {
//                 slidesToShow: 3
//             }
//         }]
//     });
// });
console.log('nxt work');