console.log("%c* \uD835\uDC7A\uD835\uDC7B\uD835\uDC76\uD835\uDC77 \uD835\uDC6A\uD835\uDC76\uD835\uDC77\uD835\uDC80 \uD835\uDC7A\uD835\uDC76\uD835\uDC7C\uD835\uDC79\uD835\uDC6A\uD835\uDC6C !","color: red; font-size: 50px; font-family: sans-serif; text-shadow: 1px 1px 5px #000;"),console.log("%c- C\xf3 vẻ như bạn đang cố t\xecnh ăn cắp m\xe3 nguồn của t\xf4i </ Tien Minh >.","color: #444; font-size: 25px; font-family: sans-serif;"),console.log("%c- Đ\xf3 l\xe0 h\xe0nh vi kh\xf4ng tốt, cần source inbox facebook để xin.\n","color: #444; font-size: 25px; font-family: sans-serif;"),document.addEventListener("DOMContentLoaded",function(){var e=document.getElementById("overlay"),o=document.getElementById("text"),t=new Audio("./assets/music/hbd.mpeg");document.body.addEventListener("click",function(){t.loop=!0,t.play(),e.style.opacity=0,e.style.pointerEvents="none",o.style.opacity=0,o.style.pointerEvents="none",setTimeout(function(){e.style.display="none",o.style.display="none",document.body.style.overflow="auto",document.body.style.pointerEvents="auto"},500)}),document.body.style.overflow="hidden",document.body.style.pointerEvents="none"}),document.body.addEventListener("click",function(){overlay.style.display="none",animationTimeline()});const animationTimeline=()=>{let e=document.getElementsByClassName("hbd-chatbox")[0],o=document.getElementsByClassName("wish-hbd")[0];e.innerHTML=`<span>${e.innerHTML.split("").join("</span><span>")}</span`,o.innerHTML=`<span>${o.innerHTML.split("").join("</span><span>")}</span`;let t={opacity:0,y:-20,rotationX:5,skewX:"15deg"},a={opacity:0,y:20,rotationY:5,skewX:"-15deg"},i=new TimelineMax;i.to(".container",.1,{visibility:"visible"}).from(".one",.7,{opacity:0,y:10}).from(".two",.4,{opacity:0,y:10}).to(".one",.7,{opacity:0,y:10},"+=2.5").to(".two",.7,{opacity:0,y:10},"-=1").from(".three",.7,{opacity:0,y:10}).to(".three",.7,{opacity:0,y:10},"+=2").from(".four",.7,{scale:.2,opacity:0}).from(".fake-btn",.3,{scale:.2,opacity:0}).staggerTo(".hbd-chatbox span",.5,{visibility:"visible"},.05).to(".fake-btn",.1,{backgroundColor:"rgb(127, 206, 248)"}).to(".four",.5,{scale:.2,opacity:0,y:-150},"+=0.7").from(".idea-1",.7,t).to(".idea-1",.7,a,"+=1.5").from(".idea-2",.7,t).to(".idea-2",.7,a,"+=1.5").from(".idea-3",.7,t).to(".idea-3 strong",.5,{scale:1.2,x:10,backgroundColor:"black",color:"red"}).to(".idea-3",.7,a,"+=1.5").from(".idea-4",.7,t).to(".idea-4",.7,a,"+=1.5").from(".idea-5",.7,{rotationX:15,rotationZ:-10,skewY:"-5deg",y:50,z:10,opacity:0},"+=0.5").to(".idea-5 span",.7,{rotation:90,x:8},"+=0.4").to(".idea-5",.7,{scale:.2,opacity:0},"+=2").staggerFrom(".idea-6 span",.8,{scale:3,opacity:0,rotation:15,ease:Expo.easeOut},.2).staggerTo(".idea-6 span",.8,{scale:3,opacity:0,rotation:-15,ease:Expo.easeOut},.2,"+=1").staggerFromTo(".baloons img",2.5,{opacity:.9,y:1400},{opacity:1,y:-1e3},.2).from(".profile-picturet2",.5,{scale:3.5,opacity:0,x:25,y:-25,rotationZ:-45,delay:.5}).from(".profile-picturep2",.5,{scale:3.5,opacity:0,x:25,y:-25,rotationZ:-45,delay:.5}).from(".profile-picturet1",.5,{scale:2,opacity:0,x:25,y:-25,rotationZ:-45,delay:.5}).from(".profile-picturep1",.5,{scale:2,opacity:0,x:25,y:-25,rotationZ:-45,delay:.5}).from(".profile-picture",.5,{scale:0,opacity:0,x:25,y:-25,rotationZ:-45,delay:.5}).from(".svhat",3,{x:-900,y:500,rotation:-800,opacity:0}).staggerFrom(".wish-hbd span",.7,{opacity:0,y:-50,rotation:150,skewX:"30deg",ease:Elastic.easeOut.config(1,.5)},.1).staggerFromTo(".wish-hbd span",.7,{scale:1.4,rotationY:150},{scale:1,rotationY:0,color:"#fff",ease:Expo.easeOut},.1,"party").from(".wish h5",.5,{opacity:0,y:10,skewX:"-15deg"},"party").staggerTo(".eight svg",1.5,{visibility:"visible",opacity:0,scale:80,repeat:3,repeatDelay:1.4},.3).to(".six",.5,{opacity:0,y:30,zIndex:"-1"}).staggerFrom(".nine p",1,t,1.2).to(".last-smile",.5,{rotation:90},"+=1");let n=document.getElementById("replay");n.addEventListener("click",()=>{i.restart()})};
