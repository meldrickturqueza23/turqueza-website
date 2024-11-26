const btnCourse = document.getElementById("btnCourse");
const btnAboutUs = document.getElementById("btnAbout");
const btnContact = document.getElementById("btnContact");

btnCourse.addEventListener("click",()=>{
    window.location.href="/content/course.html"
});
btnAboutUs.addEventListener("click",()=>{
    window.location.href="/content/AboutUs.html"
});
btnContact.addEventListener("click",()=>{
    window.location.href="/content/contactUs.html"
});