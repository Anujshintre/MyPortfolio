// function Fun(){
//     if(window.pageYOffset>300){
//       document.getElementById("nav").style.backgroundColor="rgb(6, 6, 94)";
//     }
//     else{
//       document.getElementById("nav").style.backgroundColor="transparent";
//     }
//   }
  
// block


// 

  function updateTime() {
    const timeElement = document.getElementById('time');
    const currentTime = new Date();
    const hours = String(currentTime.getHours()).padStart(2, '0');
    const minutes = String(currentTime.getMinutes()).padStart(2, '0');
    const seconds = String(currentTime.getSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    
    timeElement.textContent = timeString;
}

// Update the time every second
setInterval(updateTime, 1000);

// Initial call to display the time immediately
updateTime();  


$('.awesome-tooltip').tooltip({
  placement: 'left'
});
$('body').scrollspy({
  target: '#mainnav',
  offset: 0
});
/* CSS Tricks smooth scrolling : https://css-tricks.com/snippets/jquery/smooth-scrolling/ */
$('a[href*=#]:not([href=#])').click(function () {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
          $('html, body').animate({
              scrollTop: target.offset().top
          }, 500);
          return false;
      }
  }
});


// skills
$(document).ready(function(){
  $('.progress-value > span').each(function(){
      $(this).prop('Counter',0).animate({
          Counter: $(this).text()
      },{
          duration: 3500,
          easing: 'swing',
          step: function (now){
              $(this).text(Math.ceil(now));
          }
      });
  });
});










  



  
  