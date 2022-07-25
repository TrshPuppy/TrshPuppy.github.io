// Retrieve contact-pic
const contactPic = document.querySelector(".contact-pic");

//Add hover event listener:
contactPic.addEventListener('mouseover', e =>
{
    e.target.src = "./img/contact1.jpg";
})
contactPic.addEventListener('mouseout', e =>
{
    e.target.src = "./img/contact-pix.jpg";
})