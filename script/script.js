let menu = document.querySelector("#menu")
let burger = document.querySelector(".burger")
burger.addEventListener('click',function () {
  menu.classList.toggle("active"); 
}) ;
let button = document.getElementById('showbutton');
let galhidden = document.querySelectorAll('.galhidden');
let counter = 0;
let clientHeight=document.documentElement.clientHeight;

function clickCount(){
  if(counter%2==0){button.innerHTML="Більше фото";}else{button.innerHTML="Менше фото";}}
clickCount();

button.onclick=function(){
   galhidden.forEach(function(element){element.classList.toggle('galhidden')});counter+=1;console.log(counter); clickCount()
};
let topbutton = document.querySelector('.topbutton');
window.onscroll=function(){  
  let clientHeight=document.documentElement.clientHeight;
    if(window.pageYOffset>clientHeight){
      topbutton.style.display='block'}
    else{topbutton.style.display='none'}
  };
function scrollTop(){
    let y=window.pageYOffset;if(y>0){ window.scrollTo(x,y);y=y-20}   else topbutton.removeEventListener('click',scrolloop())
};

topbutton.onclick=function(){
    let y=window.pageYOffset, timer;
    scrollTop();
    function scrollTop(){
    if(y>0){ window.scrollTo(0,y);y=y-40;
    timer=setTimeout(scrollTop,3);
    }
    else{clearTimeout(timer);}
}};
//Lazyload

window.addEventListener('scroll',function(){
  let lazyLoad = document.querySelectorAll('.lazyload')
  let coords = window.pageYOffset
  if (coords>2000){
  lazyLoad.forEach(it => it.classList.remove('lazyload'))}
  //if(window.pageYOffset)
 } )

//hamburger
let forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(let c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(let e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};

let hamburgers = document.querySelectorAll(".hamburger");
if (hamburgers.length > 0) {
  forEach(hamburgers, function(hamburger) {
    hamburger.addEventListener("click", function() {
      this.classList.toggle("is-active");
    }, false);
  });
}