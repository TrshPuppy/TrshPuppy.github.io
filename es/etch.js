// Default variables:
let selectedDimension = 16;
let colorChoice = 'black';
let mouseDown = false;

// Generate backdrop grid:
 let backdrop = document.querySelector('.backdrop');
 backdrop.style.gridTemplateColumns = "repeat(64, 1fr)";
 backdrop.style.gridTemplateRows = "repeat(64, 1fr)";

 for(let h = 0; h < 4096; h++)
 {
    let backdropPixel = document.createElement('div');
    backdropPixel.style.backgroundColor = '#bca6f4';
    backdrop.insertAdjacentElement('beforeend', backdropPixel);

    backdropPixel.addEventListener('mouseover', e =>
    {
        backdropPixel.style.backgroundColor = "#cfc1f4";
    });
 }
 
// Function to generate canvas grid:
function generateCanvas(n)
{
    let canvas = document.querySelector('.canvas');
    let pixels = canvas.querySelectorAll('div');
    pixels.forEach((div) => div.remove());
    canvas.style.gridTemplateColumns = "repeat(" + n +", 1fr)";
    canvas.style.gridTemplateRows = "repeat(" + n +", 1fr)";

    let amount = n * n;
    for(let i = 0; i < amount; i++)
    {
        let pixel = document.createElement('div');
        pixel.style.backgroundColor = "white";
        canvas.insertAdjacentElement('beforeend', pixel);

        pixel.addEventListener('mousedown', () =>
        {
            mouseDown = true;
        });
        pixel.addEventListener('mouseover', changePixelColor);
        pixel.addEventListener('mouseup', () =>
        {
            mouseDown = false;
        });
        pixel.addEventListener('click', changePixelColor);
    }
}

function changePixelColor(e)
{
    if(e.type === 'mouseover' && mouseDown == true || e.type === 'click')
    {
        if(colorChoice != 'rainbow')
        {
            e.target.style.backgroundColor = colorChoice;
        }
        else // If user chooses rainbow pen.
        {
            let randomRed = Math.floor(Math.random()*256);
            let randomGreen = Math.floor(Math.random()*256);
            let randomBlue = Math.floor(Math.random()*256);
            e.target.style.backgroundColor = 'rgb('+randomRed+',' +randomGreen+','+randomBlue+')';
        }
    }
    else
    {
        return;
    }
}

// Update selected color when button presed:
const colorOptions = document.querySelectorAll('[data-color]');

colorOptions.forEach(option => 
    {
        option.addEventListener('click', e =>
        {
            colorChoice = option.dataset.color;
        });
    });

// Update selected dimension when button pressed:
const dimensionOptions = document.querySelectorAll('[data-selection]');
dimensionOptions.forEach(option => 
    {
        option.addEventListener('click', e =>
        {
            selectedDimension = parseInt(option.dataset.selection);
            resetCanvas(selectedDimension);
        });
    });

// Reset canvas when buttong pressed:
let resetButton = document.querySelector('#reset-btn');
resetButton.addEventListener('click', () =>
{
    resetCanvas(selectedDimension);
});

generateCanvas(selectedDimension);

function resetCanvas(dimension)
{
    generateCanvas(dimension);
}