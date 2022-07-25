// Retrieve contact-pic
const aboutPic = document.querySelector(".about-pic");

//Add hover event listener:
aboutPic.addEventListener('mouseover', e =>
{
    e.target.src = "./img/contact1.jpg";
})
aboutPic.addEventListener('mouseout', e =>
{
    e.target.src = "./img/contact-pix.jpg";
})