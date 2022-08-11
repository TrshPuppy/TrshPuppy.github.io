// Some globals:
const modeButton = document.querySelector(".mode-btn");
const body = document.querySelector("body");
let darkModeCurrent = false;

// Toggle darkmode:
modeButton.addEventListener('click', e =>
{
    if(darkModeCurrent === false)
    {
        body.classList.add('dark');
        e.target.src="./img/lightmode.png";
        darkModeCurrent = true;
    }
    else if(darkModeCurrent === true)
    {
        body.classList.remove('dark');
        e.target.src="./img/darkmode.png"
        darkModeCurrent = false;
    }
});