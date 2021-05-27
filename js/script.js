function handleMarquee(){
      function getRandomArbitrary(min, max) {
          return Math.random() * (max - min) + min;
      }

     const marquee = document.querySelectorAll('.marquee');
     // let speed = 2;
     let lastScrollPos = 0;
     let timer;

     marquee.forEach(function(el){

          const container = el.querySelector('.inner');
          const content = el.querySelector('.inner > *');
          const  elWidth = content.offsetWidth;

          let speed = getRandomArbitrary(1.1, 3.8);
          let clone = content.cloneNode(true);
          container.appendChild(clone);

          let progress = 1;
          function loop(){
               progress = progress-speed;
               if(progress <= elWidth*-1) {progress=0;}
               container.style.transform = 'translateX(' + progress + 'px)';
               container.style.transform += 'skewX(' + speed*0.5 + 'deg)';

               window.requestAnimationFrame(loop);
         }
         loop();
   });
};

function handleMarqueeL(){

      function getRandomArbitrary(min, max) {
          return Math.random() * (max - min) + min;
      }

     const marquee = document.querySelectorAll('.marquee-l');
     let lastScrollPos = 0;
     let timer;
     
     marquee.forEach(function(el){
          const container = el.querySelector('.inner');
          const content = el.querySelector('.inner > *');
          const  elWidth = content.offsetWidth;
          
          let speed = getRandomArbitrary(1.1, 3.8);
          let clone = content.cloneNode(true);
          container.appendChild(clone);
          
          let progress = 1;
          function loop(){
               progress = progress-speed;
               if(progress <= elWidth*-1) {progress=0;}
               container.style.transform = 'translateX(' + (progress * -1) + 'px)';
               container.style.transform += 'skewX(' + speed*0.4 + 'deg)';
               
               window.requestAnimationFrame(loop);
         }
         loop();
   });
};


function type(){
      new TypeIt(".multipleStrings", {
            strings: ["Graphic Design", "Department"],
            speed: 50,
            waitUntilVisible: true
      }).go();
}

function loco(){
  const scroller = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true
});

}
  
loco();
type();
handleMarqueeL();
handleMarquee();

