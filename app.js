const first = new TimelineLite();

first.add(
  TweenLite.to(".gear", 2.5, {
    rotation: 90,
    ease: Power1.easeInOut
  })
);
first.add(
    TweenLite.to(".gear2", 2.5, {
      rotation: -180,
      ease: Power1.easeInOut
    }), 0 
  );
first.add(
  TweenLite.to(".gear3", 2.5, {
    rotation: 360,
    ease: Power1.easeInOut
  }), 0 
);

first.add(
  TweenLite.to(".topBackground", 2.5, {
    bezier: {values: [{x: 0, yPercent: -30}]},
    filter: "brightness(0.8)",
  }), 0
);







const controller = new ScrollMagic.Controller();

const scene1 = new ScrollMagic.Scene({
  triggerElement: "#top",
  duration: 2000,
  triggerHook: 0
})
  .setTween(first)
  .setPin("#top")
  .addTo(controller);





  



  var playerAttack;
  var ogreHurt;
  var ogreAttackAnim;
  var canAttack = true;
  const buttons = document.querySelectorAll(".st");
  var playersprite = document.getElementById("playersprite");






  const images = [
    "gun1.png",
    "gun2.png",
    "gun1.png",
    "gun2.png",
    "gun1.png",
  ];
  

  var obj = { curImg: 0 };
  playerAttack = TweenMax.to(obj, 0.5, {
    curImg: images.length - 1,
    roundProps: "curImg",
    repeat: 2,
    ease: Linear.easeNone,
    onUpdate: function () {
      playersprite.src = images[obj.curImg];
    },
    onComplete: function () {
      playersprite.src = "sword.png";
    }
  });
  

  ogreHurt = new TimelineLite(); 
  ogreHurt.add(TweenLite.to("#ogresprite", 0.2, { filter: "brightness(300%)" }));
  ogreHurt.add(TweenLite.to("#ogresprite", 0.2, { filter: "brightness(100%)" }));
  ogreHurt.add(TweenLite.to("#ogresprite", 0.2, { filter: "brightness(300%)" }));
  ogreHurt.add(TweenLite.to("#ogresprite", 0.2, { filter: "brightness(100%)" }));
  ogreHurt.add(TweenLite.to("#ogresprite", 0.2, { filter: "brightness(300%)" }));
  ogreHurt.add(TweenLite.to("#ogresprite", 0.2, { filter: "brightness(100%)" }));
  ogreHurt.add(TweenLite.to("#ogresprite", 0.2, { filter: "brightness(300%)" }));
  ogreHurt.add(TweenLite.to("#ogresprite", 0.2, { filter: "brightness(100%)" }));






  var battle = new TimelineLite();

  // battle.add(playerAttack);

  battle.add(
    TweenLite.to("#player", 1.5, {
    })
  );

  battle.add(
    TweenLite.to("#ogre", 1, {
      scaleX: 1, 
      scaleY: 1,
    })
  );

  battle.add(
    TweenLite.to("#player", 1, {
      scaleX: 1, 
      scaleY: 1, 
    }), 0
  );

	new ScrollMagic.Scene({
    triggerElement: "#skills", 
    duration: 0,
    triggerHook: 0.3,
    reverse: false
  })
    .setTween(battle)
    .addTo(controller);




  var second = new TimelineLite();
  


  //shouldve made no1 indo a class
  second.add(TweenLite.to("#st1", 0.125, {rotationY: 90, ease: Power1.easeInOut}));
  second.add(TweenLite.to("#no1", 0, {opacity: 100}));
  second.add(TweenLite.to("#no1a", 0, {opacity: 100}));
  second.add(TweenLite.to("#st1", 0.125, {rotationY: 180, ease: Power1.easeInOut}));

  second.add(TweenLite.to("#st2", 0.125, {rotationY: 90, ease: Power1.easeInOut}));
  second.add(TweenLite.to("#no2", 0, {opacity: 100}));
  second.add(TweenLite.to("#no2a", 0, {opacity: 100}));
  second.add(TweenLite.to("#st2", 0.125, {rotationY: 180, ease: Power1.easeInOut}));

  second.add(TweenLite.to("#st3", 0.125, {rotationY: 90, ease: Power1.easeInOut}));
  second.add(TweenLite.to("#no3", 0, {opacity: 100}));
  second.add(TweenLite.to("#no3a", 0, {opacity: 100}));
  second.add(TweenLite.to("#st3", 0.125, {rotationY: 180, ease: Power1.easeInOut}));

  second.add(TweenLite.to("#st4", 0.125, {rotationY: 90, ease: Power1.easeInOut}));
  second.add(TweenLite.to("#no4", 0, {opacity: 100}));
  second.add(TweenLite.to("#no4a", 0, {opacity: 100}));
  second.add(TweenLite.to("#st4", 0.125, {rotationY: 180, ease: Power1.easeInOut}));

  second.add(TweenLite.to("#st5", 0.125, {rotationY: 90, ease: Power1.easeInOut}));
  second.add(TweenLite.to("#no5", 0, {opacity: 100}));
  second.add(TweenLite.to("#no5a", 0, {opacity: 100}));
  second.add(TweenLite.to("#st5", 0.125, {rotationY: 180, ease: Power1.easeInOut}));

  second.add(TweenLite.to("#st6", 0.125, {rotationY: 90, ease: Power1.easeInOut}));
  second.add(TweenLite.to("#no6", 0, {opacity: 100}));
  second.add(TweenLite.to("#no6a", 0, {opacity: 100}));
  second.add(TweenLite.to("#st6", 0.125, {rotationY: 180, ease: Power1.easeInOut}));

  second.add(TweenLite.to("#st7", 0.125, {rotationY: 90, ease: Power1.easeInOut}));
  second.add(TweenLite.to("#no7", 0, {opacity: 100}));
  second.add(TweenLite.to("#no7a", 0, {opacity: 100}));
  second.add(TweenLite.to("#st7", 0.125, {rotationY: 180, ease: Power1.easeInOut}));

  second.add(TweenLite.to("#st8", 0.125, {rotationY: 90, ease: Power1.easeInOut}));
  second.add(TweenLite.to("#no8", 0, {opacity: 100}));
  second.add(TweenLite.to("#no8a", 0, {opacity: 100}));
  second.add(TweenLite.to("#st8", 0.125, {rotationY: 180, ease: Power1.easeInOut}));

  second.add(TweenLite.to("#st9", 0.125, {rotationY: 90, ease: Power1.easeInOut}));
  second.add(TweenLite.to("#no9", 0, {opacity: 100}));
  second.add(TweenLite.to("#no9a", 0, {opacity: 100}));
  second.add(TweenLite.to("#st9", 0.125, {rotationY: 180, ease: Power1.easeInOut}));

  second.add(TweenLite.to("#st10", 0.125, {rotationY: 90, ease: Power1.easeInOut}));
  second.add(TweenLite.to("#no10", 0, {opacity: 100}));
  second.add(TweenLite.to("#no10a", 0, {opacity: 100}));
  second.add(TweenLite.to("#st10", 0.125, {rotationY: 180, ease: Power1.easeInOut}));

  second.add(TweenLite.to("#st11", 0.125, {rotationY: 90, ease: Power1.easeInOut}));
  second.add(TweenLite.to("#no11", 0, {opacity: 100}));
  second.add(TweenLite.to("#no11a", 0, {opacity: 100}));
  second.add(TweenLite.to("#st11", 0.125, {rotationY: 180, ease: Power1.easeInOut}));

  second.add(TweenLite.to("#st12", 0.125, {rotationY: 90, ease: Power1.easeInOut}));
  second.add(TweenLite.to("#no12", 0, {opacity: 100}));
  second.add(TweenLite.to("#no12a", 0, {opacity: 100}));
  second.add(TweenLite.to("#st12", 0.125, {rotationY: 180, ease: Power1.easeInOut}));



	const scene2 = new ScrollMagic.Scene({
    triggerElement: "#skills", 
    duration: 0,
    triggerHook: 0.3
  })
    .setTween(second)
    .addTo(controller);




  var third = new TimelineLite();
  

  third.add(
    TweenLite.to(".miles", 0.4, {
      bezier: {values: [{xPercent: 0, yPercent: 170}]}
    })
  );


  third.add(
    TweenLite.to(".miles", 0.5, {
      bezier: {values: [{xPercent: -5, yPercent: 155}]},
      ease: Back.easeOut,
    })
  );

  third.add(
    TweenLite.to(".miles", 0.5, {
      bezier: {values: [{xPercent: 20, yPercent: 155}]},
      ease: Back.easeOut,
    })
  );

  third.add(
    TweenLite.to(".miles", 0.5, {
      bezier: {values: [{xPercent: -15, yPercent: 155}]},
      ease: Back.easeOut,
    })
  );
  third.add(
    TweenLite.to(".miles", 0.5, {
      bezier: {values: [{xPercent: 0, yPercent: 155}]},
      ease: Back.easeOut,
    })
  );

  third.add(
    TweenLite.to(".miles", 0.5, {
      bezier: {values: [{xPercent: 0, yPercent: 100}]},
      ease: Back.easeOut,
    })
  );

  third.add(
    TweenLite.to(".miles", 0.4, {
      bezier: {values: [{xPercent: 0, yPercent: 300}]},
      ease: Back.easeOut,
    })
  );
  
  third.add(
    TweenLite.to(".city", 2.3, {
      bezier: {values: [{x: 0, yPercent: -30}]},
      ease: Back.easeOut,
    }), 0
  );


	const scene3 = new ScrollMagic.Scene({
    triggerElement: "#quote", 
    duration: 2300,
    triggerHook: 0
  })
    .setTween(third)
    .setPin("#quote")
    .addTo(controller);



    var fourth = new TimelineLite();

    fourth.add(
      TweenLite.to(".man", 15, {
        bezier: { values: [{ x: 0, y: 750 }] },
      })
    );
    
    const scene4 = new ScrollMagic.Scene({
      triggerElement: "#aboutme",
      duration: 0,
      triggerHook: 0.1,
    })
      .setTween(fourth)
      .addTo(controller);
    















    
		var wipeAnimation = new TimelineMax()
    // animate to second panel
    .to("#slideContainer", 0.5, {z: -150})	
    .to("#slideContainer", 1,   {x: "-33.33333%"})	
    .to("#slideContainer", 0.5, {z: 0})				
    // animate to third panel
    .to("#slideContainer", 0.5, {z: -150, delay: 1})
    .to("#slideContainer", 1,   {x: "-66.6666%"})
    .to("#slideContainer", 0.5, {z: 0})

  new ScrollMagic.Scene({
      triggerElement: "#projects",
      triggerHook: "onLeave",
      duration: "150%"
    })
    .setPin("#projects")
    .setTween(wipeAnimation)
    .addTo(controller);


    








    class Slideshow {
      constructor(elementId) {
        this.slides = document.querySelectorAll(`#${elementId} .slide`);
        this.buttons = document.querySelectorAll(`#${elementId} .btn`);
        this.activeSlide = 0;
        this.init();
      }
    
      init() {
        this.buttons.forEach((button, index) => {
          button.addEventListener('click', () => {
            this.switchSlide(index);
            clearInterval(autoLoopInterval);
            startAutoLoop();
          });
        });
      }
    
      switchSlide(index) {
        this.slides[this.activeSlide].classList.remove('active');
        this.buttons[this.activeSlide].classList.remove('active');
    
        this.slides[index].classList.add('active');
        this.buttons[index].classList.add('active');
    
        this.activeSlide = index;

      }
    }
    
  const slideshowElementIds = [];
  const slideshowObjects = {};
  for (let i = 1; i <= 3; i++) {
    slideshowElementIds.push(`slideshow${i}`);

    const slideshow = new Slideshow(`slideshow${i}`);
    slideshowObjects[`slideshow${i}`] = slideshow;
  }


  var activeSlideShow = slideshowObjects['slideshow1'];

  let autoLoopInterval;

  function startAutoLoop() {
    autoLoopInterval = setInterval(() => {
      const nextIndex = (activeSlideShow.activeSlide + 1) % activeSlideShow.slides.length;
      activeSlideShow.switchSlide(nextIndex);
    }, 6000);
  }
  
  
  

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        activeSlideShow = slideshowObjects[entry.target.id];
      }
    });
  });


  slideshowElementIds.forEach((elementId) => {
    observer.observe(document.querySelector('#'+elementId));
  });
  

  startAutoLoop();



{
  const nav = document.querySelector(".nav");
  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY) {
      nav.classList.add("nav--hidden");
    } else {
      nav.classList.remove("nav--hidden");
    }

    lastScrollY = window.scrollY;
  });
}








document.querySelectorAll('a.smoothNav').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));


      target.scrollIntoView({ behavior: 'smooth' });
  });
});


















function playerTurn() {
  buttons.forEach(function (button) {
    button.disabled = true;
    button.style.cursor = "not-allowed";
  });

  // var obj = { curImg: 0 };
  // playerAttack = TweenMax.to(obj, 0.5, {
  //   curImg: images.length - 1,
  //   roundProps: "curImg",
  //   repeat: 2,
  //   ease: Linear.easeNone,
  //   onUpdate: function () {
  //     playersprite.src = images[obj.curImg];
  //   },
  //   onComplete: function () {
  //     playersprite.src = "sword.png";
  //   }
  // });


  // ogreHurt = new TimelineLite(); 
  // ogreHurt.add(TweenLite.to("#ogresprite", 0.2, { filter: "brightness(300%)" }));
  // ogreHurt.add(TweenLite.to("#ogresprite", 0.2, { filter: "brightness(100%)" }));
  // ogreHurt.add(TweenLite.to("#ogresprite", 0.2, { filter: "brightness(300%)" }));
  // ogreHurt.add(TweenLite.to("#ogresprite", 0.2, { filter: "brightness(100%)" }));
  // ogreHurt.add(TweenLite.to("#ogresprite", 0.2, { filter: "brightness(300%)" }));
  // ogreHurt.add(TweenLite.to("#ogresprite", 0.2, { filter: "brightness(100%)" }));
  // ogreHurt.add(TweenLite.to("#ogresprite", 0.2, { filter: "brightness(300%)" }));
  // ogreHurt.add(TweenLite.to("#ogresprite", 0.2, { filter: "brightness(100%)" }));
}







function playPlayerAnim(dmg){
  setTimeout(function () {  
    pmp.setValue(pmp.value - 10);
    if(ohp.value - dmg <= 0){
      ohp.setValue(0);
      setTimeout(function () {
        gameover(true);
      }, 1500);
    }
    else{
      ohp.setValue(ohp.value - dmg);
      setTimeout(function () {
        ogreAttack();
      }, 1500);
    }
  }, 1500);
}









function handleButtonClick(buttonNumber) {
  if(canAttack){
    canAttack = false;
    if (!playerAttack) {
      playerTurn();
    }
      switch (buttonNumber) {
        case 1:
        playPlayerAnim(45);
        break;
      case 2:
        playPlayerAnim(45);
        break;
      case 3:
        playPlayerAnim(45);
        break;
      case 4:
        playPlayerAnim(45);
        break;
      case 5:
        playPlayerAnim(45);
        break;
      case 6:
        playPlayerAnim(35);
        break;
      case 7:
        playPlayerAnim(30);
        break;
      case 8:
        playPlayerAnim(25);
        break;
      case 9:
        playPlayerAnim(20);
        break;
      case 10:
        playPlayerAnim(15);
        break;
      case 11:
        playPlayerAnim(10);
        break;
      case 12:
        playPlayerAnim(5);
        break;
      default:
        console.log("Unknown button clicked!");
        break;
      }
    playerAttack.restart();
    ogreHurt.restart();
  }
}



const playerDiv = document.getElementById('playersprite');
const playerRect = playerDiv.getBoundingClientRect();

const ogreDiv = document.getElementById('ogre');
const ogreRect = ogreDiv.getBoundingClientRect();



function ogreTurn() {

  ogreAttackAnim = new TimelineLite();
  

  ogreAttackAnim.add(
    TweenLite.to("#ogre", 0.05, {
      bezier: {values: [{xPercent: 5, yPercent: 5}]},
    })
  );

  ogreAttackAnim.add(
    TweenLite.to("#ogre", 0.05, {
      bezier: {values: [{xPercent: 0, yPercent: 0}]},
    })
  );
  ogreAttackAnim.add(
    TweenLite.to("#ogre", 0.05, {
      bezier: {values: [{xPercent: -5, yPercent: 5}]},
    })
  );

  ogreAttackAnim.add(
    TweenLite.to("#ogre", 0.05, {
      bezier: {values: [{xPercent: 0, yPercent: 0}]},
    })
  );
  ogreAttackAnim.add(
    TweenLite.to("#ogre", 0.05, {
      bezier: {values: [{xPercent: 5, yPercent: 5}]},
    })
  );
  ogreAttackAnim.add(
    TweenLite.to("#ogre", 0.05, {
      bezier: {values: [{xPercent: 0, yPercent: 0}]},
    })
  );
  ogreAttackAnim.add(
    TweenLite.to("#ogre", 0.05, {
      bezier: {values: [{xPercent: -5, yPercent: 5}]},
    })
  );

  ogreAttackAnim.add(
    TweenLite.to("#ogre", 0.05, {
      bezier: {values: [{xPercent: 0, yPercent: 0}]},
    })
  );



  ogreAttackAnim.add(
    TweenLite.to("#ogre", 0.25, {
      bezier: {values: [{xPercent: -25, yPercent: 25}]},
      ease: Back.easeOut,
    })
  );
  ogreAttackAnim.add(
    TweenLite.to("#ogre", 0.25, {
      bezier: {values: [{xPercent: 0, yPercent: 0}]},
      ease: Back.easeOut,
      onComplete: function () {
        canAttack = true;

        omp.setValue(omp.value - 10);
        php.setValue(php.value - 10);


        if(php.value == 0){
          gameover(false);
        }
        else{
          buttons.forEach(function (button) {
            button.disabled = false;
            button.style.cursor = "pointer";
          });
        }

        
      }
    })
  );

}

function ogreAttack() {
  if (!ogreAttackAnim) {
    ogreTurn();
  }
  ogreAttackAnim.restart();
}



class bar{
  constructor(element, initialValue = 100){
    this.fillElem = element.querySelector('.fill');

    this.setValue(initialValue);
  }

  setValue(newValue){
    this.value = newValue;
    this.update();
  }

  update(){
    const percentage = this.value + '%';

    this.fillElem.style.width = percentage;
  }


}

const php = new bar(document.getElementById('playerhp'));
const pmp = new bar(document.getElementById('playermp'));
const ohp = new bar(document.getElementById('ogrehp'));
const omp = new bar(document.getElementById('ogremp'));





 



function gameover(win){
  const dialogueCont = document.createElement('div');
  const dialogue = document.createElement('div');

  dialogueCont.id = 'dialogueCont';
  dialogue.id = 'dialogue';

  dialogueCont.style.display = 'flex';
  dialogueCont.style.alignItems = 'center';
  dialogueCont.style.justifyContent = 'center';
  dialogueCont.style.height = '100%';
  dialogueCont.style.width = '100%';

  dialogue.style.top = '18%';
  dialogue.style.position = 'absolute';
  dialogue.style.height = 'fit-content';
  dialogue.style.width = 'fit-content';
  dialogue.style.maxWidth = '40%';
  dialogue.style.border = '0.5vw solid #000';
  dialogue.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
  dialogue.style.padding = '2%';
  dialogue.style.zIndex = '0';
  dialogue.style.fontFamily = "gill sans, sans-serif;";

  if(window.innerWidth < 450){
    dialogue.style.fontSize = "1em";
  }
  else if(window.innerWidth < 768){
    dialogue.style.fontSize = "1.5em";
  }
  else{
    dialogue.style.fontSize = "2.5em";
  }
  

  const skillsDiv = document.getElementById('skills');
  skillsDiv.appendChild(dialogueCont);
  dialogueCont.appendChild(dialogue);

  const revealText = document.getElementById('dialogue');
  var textToReveal = ""
  if(win){
    textToReveal = "Congratulations, you just murdered an innocent ogre who is also a father of 3 kids!";
  }
  else{
    textToReveal = "You lost on purpose expecting something to happen.. well congratulations! you just unlocked something.";
  }

  function displayTextCharByChar(index) {
      if (index >= textToReveal.length) return;
      const char = textToReveal[index];
      revealText.innerHTML += char;
      setTimeout(() => displayTextCharByChar(index + 1), 100); 
  }

  displayTextCharByChar(0);
}






submit.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(document.getElementById('submit'));

  const email = {
    to: formData.get('email'),
    body: formData.get('message'),
    name: formData.get('name')
  };
  const sendCopyToSender = formData.get('sendCopy');

  const promises = [];

  promises.push(
    Email.send({
      SecureToken: "125cca7f-c2cc-4ea1-9d5e-f4de5b721c34", 
      From: "manilalouisangel2@gmail.com", 
      To: "manilalouisangel2@gmail.com",
      Subject: "Email from website portfolio",
      Body: "E-mail: " + email.to + " <br> " + "Name: " + email.name + " <br> " + email.body + " <br>Copy = " + sendCopyToSender
    })
  );

  if (sendCopyToSender) {
    promises.push(
      Email.send({
        SecureToken: "125cca7f-c2cc-4ea1-9d5e-f4de5b721c34", 
        From: "manilalouisangel2@gmail.com", 
        To: email.to,
        Subject: "Copy of email to manilalouisangel2@gmail.com",
        Body: "Thank you for showing interest in me, please expect a response soon. You received this email because you wanted a copy of your message. This is what I received:<br><br>" + email.body + " <br> -" + email.name
      })
    );
  }

  Promise.all(promises)
    .then((results) => {
      const originalEmailResult = results[0];
      const copyEmailResult = results[1];

      if(!sendCopyToSender){
        if(originalEmailResult === "OK"){
          showNotification("Email sent successfuly.");
        }
        else{
          showNotification("Failed to send email, please try again later.", false);
        }
      }
      else{
        if(originalEmailResult === "OK" && copyEmailResult === "OK"){
          showNotification("Emails sent successfully, a copy of the message wil be sent to " + email.to + " shortly. It might be in the spam folder.");
        }
        else if(originalEmailResult !== "OK" && copyEmailResult === "OK"){
          showNotification("Failed to send email to me, please try again later. However, a copy of the email will shortly be sent to " + email.to, false);
        }
        else if(originalEmailResult === "OK" && copyEmailResult !== "OK"){
          showNotification("Failed to send a copy of the email to " + email.to + ". However, the email has been successfully sent to me. If you want a copy of the email, please try again later.", false);
        }
        else{
          showNotification("Failed to send email, please try again later.", false);
        }
      }


    });

});



const overlay = document.getElementById('notificationOverlay');
const notifmessage = document.getElementById('notificationMessage');

function showNotification(message, good = true) {
  if(good){
    overlay.classList.add('success');
  }
  else{
    overlay.classList.add('error');
  }

overlay.style.display = 'block';
notifmessage.textContent = message;

}


function hideOverlay() {
  overlay.style.display = 'none';
  if(overlay.classList.contains('success')){
    overlay.classList.remove('success');
  }
  else if(overlay.classList.contains('error')){
    overlay.classList.remove('error');
  }
}



const contactButton = document.querySelector('.contactMe');
const targetDiv = document.getElementById('contact');
const stopPosition = targetDiv.offsetTop - contactButton.offsetHeight-300;

function handleScroll() {
  const scrollY = window.scrollY;

  if (scrollY >= stopPosition) {
    contactButton.style.display = 'none';
  } else {
    contactButton.style.display = 'block';
  }
}

window.addEventListener('scroll', handleScroll);
