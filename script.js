console.log("welcome");
let divs= document.createElement("div");
let div= document.createElement("div");
let p2= document.querySelector(".p2");
let p1= document.querySelector(".p1");

// first one--------
const populate=()=>{
divs.innerHTML="";
let heading=document.querySelector(".heading");
div.innerHTML=`<h3 style="margin-top:-2px;">Frontend Development</h3>
<div style="margin-top:-20px;">HTML,CSS,Javascript and libraries Bootstrap,Tailwind</div>
<div>Javacript features like AJAX,Fetch API,Async await</div>
<div>Frameworks React js,React Router Dom,Redux toolkit</div>
<h3 style="margin-top:-2px;">Backend Development</h3>
<div style="margin-top:-20px;">Work with Node js,frameworks Express js</div>
 <div>Redis Storage,REST API,Socket.io</div>
<h3 style="margin-top:-2px;">Database</h3>
<div style="margin-top:-20px;">Database Mongodb with Mongoose,CRUD operations</div>
<h3 style="margin-top:-2px;">Deployment</h3>
 <div style="margin-top:-20px;">Working with Docker,knowledge of linux basics,Ubuntu</div>
 <div>Website Deployment on AWS cloud,Nginx as proxy server with SSL certificate</div>
 `
 

            
heading.after(div);

div.style.color="white";
div.style.height="280px";
div.style.width="33%";
div.style.fontSize="1rem";
// div.style.border="1px solid white";
div.style.position="absolute";
div.style.margin="255px 0px";
div.setAttribute("class","para");
let para=document.querySelector(".para");
let h3=para.querySelectorAll("h3");
h3[0].style.color="red";
h3[1].style.color="red";
h3[2].style.color="red";
h3[3].style.color="red";
// para.style.margin="280px 10px";
}
populate();

let btn=document.querySelector(".heading .p1");

btn.addEventListener("click",(evt)=>{
populate();
evt.preventDefault();
divs.innerHTML="";
p2.classList.remove("new");
p1.classList.add("new");
})


// 2nd one----------
const populate1=()=>{

let heading=document.querySelector(".heading");
div.innerHTML="";
divs.innerHTML=`<h3>2005-2007-10th Board</h3>
            <span>Railway Higher Secondary School</span>
            <h3>2005-2007-10th Board</h3>
            <span>Railway Higher Secondary School</span>
            <span>Btech from WBUT 2011</span><br>
            <span>PGDDM from Manipal University</span>`
heading.after(divs);
divs.style.color="white";
divs.style.height="200px";
divs.style.width="25%";

divs.style.position="absolute";
divs.setAttribute("class","para1");
let para=document.querySelector(".para1");
let h3=para.querySelectorAll("h3");
h3[0].style.color="red";
h3[1].style.color="red";
para.style.margin="250px 10px";

}


let btns=document.querySelector(".heading .p2");

btns.addEventListener("click",(evt)=>{
populate1();
evt.preventDefault();

p2.classList.add("new");
p1.classList.remove("new");
});


// Show/Hide Navbar-----------------------------------
let nav =document.querySelector("#navbar");
// track previous postion-----
let pre= window.scrollY;

window.addEventListener("scroll",()=>{
let now=window.scrollY;

// scrolling up to show navbar---------------
if(pre>now){
    nav.style.top="0";
    nav.style.backgroundColor="brown";

}
// scrolling down to hide navbar---------------
else{
    nav.style.top="-75px";
}
// updating previous postion------
pre=now;
})

// ---------------------------------
let touch= document.querySelector(".pro");
touch.addEventListener("click",()=>{
  let drop=document.querySelector(".drop");
  let n=document.querySelectorAll(".news");
  drop.classList.toggle("drops")
  n.forEach(i=>{
   i.classList.toggle("item");
  })
})


 




