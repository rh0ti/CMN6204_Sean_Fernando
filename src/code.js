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
      
      },3800);

      setTimeout(()=>{
        intro.style.top = '-100vh';
      },4600)

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

        $('.sidebar a').click(function(){
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

// var tl = gsap.timeline();
// tl.to(".welcome-subtitle",{duration: 4.2, opacity: 0, ease: "slow"})
//   .to(".welcome-subtitle",{duration: 1.5 ,opacity: 1 , ease: "slow"},)
//   .to(".name-title",{duration: 2 ,opacity: 0 , ease: "slow"},"-=3.2")
//   .to(".name-title",{duration: 1 ,opacity: 1 , ease: "slow"})
//   .to(".name-subtitle",{opacity: 0 , ease: "slow"},"-=4")
//   .to(".name-subtitle",{duration: 2 ,opacity: 1 , ease: "slow"});


//-------------------------------------------------------------- Transition ---------------------------------------------------------------//

ScrollOut({
  targets: 'h1,h2,figure,table,div,h3,p,a'
})

//-------------------------------------------------------------- Language ---------------------------------------------------------------//



$(function(){
  $(".de").click(function(){

    $('#about .about-text p').text('Sean Fernando ist am 19.05.1997 in Z??rich geboren und aufgewachsen. Die Musik hat ihn immer begleitet und ihm Kraft gegeben, speziell in schweren Zeiten hat sie ihn st??rker gemacht. Sean liebt es, zu kochen, Videogames zu spielen und Quality Time mit seiner Familie zu verbringen. Er hat eine Schw??che f??r Champagner und gutes Essen.');
    $('#about .my-story .one').text('??Ich singe seit ich denken kann. Musik hat mich schon immer begeistert und es vergeht bei mir kein Tag ohne Musik.?? -Sean Fernando-');
    $('#about .my-story .two').text('Sean ist halb Schweizer und halb Singhalese. Grossen Bezug zu seinen singhalesischen Wurzeln hat er nicht. Dies soll sich jedoch bald ??ndern, nat??rlich mit Hilfe von Musik.');
    $('#about .my-story .three').text('Auf die Frage, was seine Ziele sind antwortet er: ??Meine Ziele? Gute Frage. Ich bin so nahe an meinem Ziel und habe das Gl??ck, dass ich mit Audio arbeiten kann; ob als S??nger, Songwriter, Producer oder Tontechniker, in jedem Bereich kenn ich mich aus.??');
    $('#lyrics .text-meaning p').html('??Bye Bye?? ist eine Hymne f??r jedes gebrochene Herz. Wenn dir jemand unrecht getan hat, dann sag Bye Bye. Was willst du machen? It is what it is! <br></br> Die Beweggr??nde f??r diesen Song sind sehr pers??nlich. Es geht um einen Menschen, der Sean sehr nahe stand. Sean hat alles stehen und liegen lassen, um dieser Person in einer schweren Zeit beizustehen. Nachdem alles durchgestanden war und es wieder aufw??rts ging, wurde Sean von dieser Person hintergangen. Zutiefst verletzt hat er ??Bye Bye?? geschrieben. Seinem Herzschmerz hat Sean mit diesem Song Ausdruck verliehen. Aber nicht nur das, er ermutigt seine Fans zudem, toxische Beziehungen hinter sich zu lassen, egal wie schmerzhaft es auf den ersten Blick erscheinen mag, und erhobenen Hauptes weiterzugehen.<br></br> Das Leben ist zu kurz und zu wertvoll, um es an solche Menschen zu verschwenden. DU bist zu wertvoll um dich mit betr??gerischen Menschen zu umgeben!');

  });

  
});

$(function(){
  $(".en").click(function(){
    $('#about .about-text p').text('Sean Fernando was born in Zurich on 19.05.1997 and grew up there, too. Music was always part of his life and it supported him, especially during hard times. Sean loves cooking, playing video games and spending quality time with his family. He has a weakness for champagne and good food.');
    $('#about .my-story .one').text('???I???ve been singing as long as I can remember. I was always fascinated by music and there???s not a single day without music in my life.??? -Sean Fernando-');
    $('#about .my-story .two').text('Sean is half Swiss and half Singhalese. He doesn???t really have a connection to his Singhalese roots. However, he wants to change that fact sometime soon and what could be of better support than music?');
    $('#about .my-story .three').text('To the question, what his goals are, he says: ???My goals? Good question. I???m so close to achieving my goals and I???m lucky to be able to work with audio, whether it be as a singer, songwriter, producer or audio engineer, I can do it all.??? ');
    $('#lyrics .text-meaning p').html('???Bye Bye??? is a hymn for every single broken heart out there. If someone did you wrong, just say Bye Bye. What else can you do about it? It is what it is! <br></br> The reason behind this song is very personal. It???s about a person, who was very close to Sean. He left everything aside to assist that person in an enormous difficult time. After the situation improved, that person betrayed Sean in the worst way possible. Left with a broken heart, Sean decided to write ???Bye Bye???. This song does not only reflect Sean???s heart ache, but it also encourages his fans to leave toxic relationships behind, no matter how painful it might seem at that very moment, and move on with your life.<br></br> Life is too short and precious to waste it on that kind of people. YOU are too precious to keep fraudulent people in your life!');
  });

});