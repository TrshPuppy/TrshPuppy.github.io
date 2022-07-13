// Logo on hover animation:
const logo = document.getElementById("logo");
console.log(logo);

logo.addEventListener("mouseenter", (e) =>
{
    e.target.style = "transform:scale(1.1,1.1);";
});

logo.addEventListener("mouseleave", (e) =>
{
    e.target.style = "transform:scale(1,1);";
})
