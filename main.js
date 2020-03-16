TweenMax.to('.fa-arrow-down', 0.7, {
    y: "+=30px",
    yoyo:true,
    repeat:-1,
    ease: Power3.easeInOut
  });
  
  TweenMax.from(".header-img", 2, {
    delay: .3,
    y: 10,
    opacity: 0,
    ease: Expo.easeInOut
  })
  
  TweenMax.from(".description", 2, {
    delay: .4,
    y: 10,
    opacity: 0,
    ease: Expo.easeInOut
  })
  
  TweenMax.from(".nav", 2, {
    delay: .5,
    y: 10,
    opacity: 0,
    ease: Expo.easeInOut
  })
  
  TweenMax.from(".dp", 2, {
    delay: .7,
    y: 10,
    opacity: 0,
    ease: Expo.easeInOut
  })
  
  TweenMax.from(".spinner", 2, {
    delay: .8,
    y: 10,
    opacity: 0,
    ease: Expo.easeInOut
  })