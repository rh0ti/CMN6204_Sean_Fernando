//-------------------------------------------------------------- Intro ---------------------------------------------------------------//

const intro = document.querySelector('.intro');
const logo = document.querySelector('.logo-header');
const logoSpan = document.querySelectorAll('.logo');

window.addEventListener('DOMContentLoaded', ()=>{

  setTimeout(()=>{

    logoSpan.forEach((span, idx)=>{
      setTimeout(()=>{
        span.classList.add('active');
      }, (idx + 1) * 800)
    });

    setTimeout(()=>{

      logoSpan.forEach((span, idx)=>{
        setTimeout(()=>{
          span.classList.remove('active');
          span.classList.add('fade');
        }, (idx + 1) * 50)
      })
      
      },2800);

      setTimeout(()=>{
        intro.style.top = '-100vh';
      },3600)

  })
})

console.log(logoSpan);
//-------------------------------------------------------------- ScrollUp Button ---------------------------------------------------------------//
$(document).ready(function (){

    //While scrolling up the topBtn will slowly disappear
    
      $(window).scroll(function(){
        if($(this).scrollTop() > 40){
          $('#topBtn').fadeIn();
        }else{
          $('#topBtn').fadeOut();
        }
      })
      
      //When click on the topBtn-Button the side will Scroll to the top
    
      $("#topBtn").click(function(){
        // $(console.log) - Debug-Logs
        $('html ,body').animate({
        scrollTop : 0},800);
      });
    
    });

    
    //-------------------------------------------------------------- Sidebar ---------------------------------------------------------------//

$(document).ready(function(){

    //By clicking the Burgermenu (SidebarBtn), the sidebar will show. When click on Bergermenu again it will close.(Toggle)
        $('.sidebarBtn').click(function(){
                  //$(console.log) - Debug-Logs
            $('.sidebar').toggleClass('active');
            $('.sidebarBtn').toggleClass('toggle');
        })
    
    })

//-------------------------------------------------------------- Circle ---------------------------------------------------------------//

// const text = document.querySelector('.text p');
// text.innerHTML = text.innerText.split("").map(
//   (char, i) =>
//   `<span style="transform:rotate(${i * 7}deg)">${char}</span>`
// ).join("")


//-------------------------------------------------------------- Hover Effect ---------------------------------------------------------------//


new hoverEffect({
  parent: document.querySelector('#about .distortion'),
  intensity: 0.2,
  image1: '/images/bw1.png',
  image2: '/images/bw2.png',
  displacementImage: '/images/diss.png'
});

//-------------------------------------------------------------- GSAP Animation ---------------------------------------------------------------//

var tl = gsap.timeline();
tl.to(".welcome-subtitle",{duration: 4.2, opacity: 0, ease: "slow"})
  .to(".welcome-subtitle",{duration: 1.5 ,opacity: 1 , ease: "slow"},)
  .to(".name-title",{duration: 2 ,opacity: 0 , ease: "slow"},"-=3.2")
  .to(".name-title",{duration: 1 ,opacity: 1 , ease: "slow"})
  .to(".name-subtitle",{opacity: 0 , ease: "slow"},"-=4")
  .to(".name-subtitle",{duration: 2 ,opacity: 1 , ease: "slow"});


//-------------------------------------------------------------- Transition ---------------------------------------------------------------//

ScrollOut({
  targets: 'h1,h2,figure,table,div,h3,p,a'
})