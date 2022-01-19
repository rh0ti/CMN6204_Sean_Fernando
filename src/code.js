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

//-------------------------------------------------------------- Intro ---------------------------------------------------------------//

let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');

window.addEventListener('DOMcontentLoaded', ()=>{

  setTimeout(()=>{

    logoSpan.forEach((span, idx)=>{
      setTimeout(()=>{
        span.classList.add('active');
      }, (idx + 1) * 400)
    });

    setTimeout(()=>{

      logoSpan.forEach((span, idx)=>{

        setTimeout(()=>{
          span.classList.remove('active');
          span.classList.fade('fade');
        }, (idx + 1) * 50)
      })
      
      },2000);

      setTimeout(()=>{
        intro.style.top = '-100vh';
      })

  })
})
