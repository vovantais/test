const burger=document.querySelector(".header__toggle"),menu=document.querySelector(".header__menu");function toggleMenu(){burger.addEventListener("click",e=>{e.stopPropagation(),menu.classList.toggle("active"),burger.classList.toggle("active"),document.body.classList.toggle("lock")}),document.addEventListener("click",e=>{const t=e.target,s=t==menu||menu.contains(t),a=t==burger,i=menu.classList.contains("active");s||a||!i||(menu.classList.toggle("active"),burger.classList.toggle("active"),document.body.classList.toggle("lock"))})}toggleMenu();class Slider{constructor(){this.el=document.querySelector(".js-slider"),this.images=[...this.el.querySelectorAll(".js-slide__image")],this.contents=[...this.el.querySelectorAll(".js-slide__content")],this.data={current:0,last:0,total:this.images.length-1},this.state={animating:!1},this.next=this.next.bind(this),this.init()}changeSlide(){this.state.animating=!0;const e=this.images[this.data.last],t=this.images[this.data.current],s=this.contents[this.data.last],a=this.contents[this.data.current],i=s.querySelectorAll(".js-stagger-item"),n=a.querySelectorAll(".js-stagger-item"),r=(e.querySelector("img"),t.querySelector("img")),l=new TimelineLite({paused:!0,onComplete:()=>{this.state.animating=!1}});l.set([t,a],{autoAlpha:1,zIndex:2}).set([e,s],{zIndex:1}).staggerFromTo(i,.75,{y:0,alpha:1},{y:-30,alpha:0,ease:Expo.easeIn},.075,0).fromTo(e,1.5,{xPercent:0},{xPercent:-15,ease:Expo.easeInOut},0).fromTo(t,1.5,{xPercent:100},{xPercent:0,ease:Expo.easeInOut},0).fromTo(r,1.5,{xPercent:-100,scale:1.2},{xPercent:0,scale:1,ease:Expo.easeInOut},0).staggerFromTo(n,1,{y:60,alpha:0},{y:0,alpha:1,ease:Expo.easeOut},.075,.75).set([e,s],{autoAlpha:0}),l.play()}next(){this.state.animating||(this.data.last=this.data.current,this.data.current=this.data.current===this.data.total?0:this.data.current+1,this.changeSlide(),setTimeout(()=>{},1e3))}addListeners(){this.el.addEventListener("click",this.next)}init(){this.addListeners()}}const slider=new Slider,interval=setInterval(slider.next,7e3);