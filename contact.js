// Retrieve contact-pic
const contactPic = document.querySelector(".contact-pic");

// Add hover event listener:
contactPic.addEventListener('mouseover', e =>
{
    e.target.src = "./img/about1.jpg";
});
contactPic.addEventListener('mouseout', e =>
{
    e.target.src = "./img/about-pix.jpg";
});