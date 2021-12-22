import "./index.css";

const div=document.createElement("div");
div.classList.add("container");
const h=document.createElement("h3");
h.innerText="More Than Meetings";
const p=document.createElement("p");
p.innerText="Discover how you can elevate the way you work by combining webinar, chat, meetings, and phone solutions into one seamless platform.";
p.classList.add("para");
const button=document.createElement("button");
button.innerText="Explore what's possible with zoom!";
 const img=document.createElement("img");
img.src="https://zoom.us/docs/image/postattendee/Post-Attendee_More-than-Meetings.png";
let para=document.createElement("p");
para.innerText="HELLOHELLO";
const br=document.createElement("br");
// div1.append(img)
div.append(h,p,button,br,img);
document.getElementById("parent").append(div);