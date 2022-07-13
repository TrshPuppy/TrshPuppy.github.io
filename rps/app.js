// commit: Fix playAgainBtn listener to fade into faceOff screen instead of intro. Style.

// Global variables:
let playerScore = 0;
let computerScore = 0;
let playerScoreboard = document.querySelector('.player-score p');
let compScoreboard = document.querySelector('.computer-score p');
let playerFaceoff = document.querySelector('.scoreboard .player-choice');
let compFaceoff = document.querySelector('.scoreboard .computer-choice');
let winnerScreen = document.querySelector('.winner-screen');
let winnerText = document.querySelector('.winner-screen .text');
let playAgainBtn = document.querySelector('.winner-screen button');
const introScreen = document.querySelector('.intro');
const faceOffScreen = document.querySelector('.faceoff');
const playButton = document.querySelector('.intro button');
const SELECTIONS = 
[
    {
        name: 'rock',
        image: "<img class = 'scoreboard' src = 'img/rock.gif'>",
        beats: 'scissors'
    },
    {
        name: 'paper',
        image: "<img class = 'scoreboard' src = 'img/paper.gif'>",
        beats: 'rock'
    },
    {
        name: 'scissors',
        image: "<img class = 'scoreboard' src = 'img/scissors.gif'>",
        beats: 'paper'
    }
]
const COMPUTERCHOICES = 
[
    {
        name: 'rock',
        image: "<img class = 'scoreboard' src = 'img/rock.gif'>"
    },
    {
        name: 'paper',
        image: "<img class = 'scoreboard' src = 'img/paper.gif'>"
    },
    {
        name: 'scissors',
        image: "<img class = 'scoreboard' src = 'img/scissors.gif'>"
    }
];

function playGame()
{
    // Fade in game from intro:
    playButton.addEventListener('click', () =>
    {
        introScreen.classList.add('fadeOut');
        faceOffScreen.classList.add('fadeIn');
    });

    // Get player options from document:
    const playerOptions = document.querySelectorAll('[data-selection]');

    // Start new when player clicks options:
    playerOptions.forEach(option => 
    {
        // Add event listener for player options:
        option.addEventListener('click', e =>
        {
            const playerSelection = option.dataset.selection;
            makeSelection(playerSelection);

            // Generate computer's selection:
            let randomNum = Math.floor(Math.random() *3);
            let computerSelection = COMPUTERCHOICES[randomNum].name;
            compFaceoff.innerHTML = COMPUTERCHOICES[randomNum].image;

            // Convert playerSelection to selection (SELECTIONS array):
            const selection = SELECTIONS.find(selection => selection.name === playerSelection);

            // Update player scoreboard w/ slection gif:
            playerFaceoff.innerHTML = selection.image;

            // Compare hands:
            if(selection.beats === computerSelection)
            {
                playerScore += 1;
                playerScoreboard.textContent = playerScore;
            }
            else if(selection.name === computerSelection)
            {
                playerScore += 0;
                computerScore += 0;
            }
            else
            {
                computerScore += 1;
                compScoreboard.textContent = computerScore;
            }

            // Call checkForWinner function:
            if(checkForWinner(playerScore, computerScore) === true)
            {                
                // Call chooseWinner function:
                let youWin = chooseWinner(playerScore, computerScore);
                if(youWin === true)
                {
                    faceOffScreen.classList.remove('fadeIn');
                    winnerScreen.classList.add('fadeIn');
                    winnerText.textContent = "You Win!";
                }
                else
                {
                    faceOffScreen.classList.remove('fadeIn');
                    winnerScreen.classList.add('fadeIn');
                    winnerText.textContent = "You Lose!";
                }
            }
        });
    });
}
playGame();

//Return to intro screen when Play Again button pressed:
playAgainBtn.addEventListener('click', e =>
{
    faceOffScreen.classList.add('fadeIn');
    winnerScreen.classList.remove('fadeIn');
    resetScoreboard();
});

function makeSelection(selection)
{
    return;
}

// Check for score of 5:
function checkForWinner(pScore, cScore)
{
    if(pScore === 5 || cScore === 5)
    {
        return true;
    }
    else
    {
        return false;
    }
}

// Choose winner when xScore = 5:
function chooseWinner(pScore, cScore)
{
if(pScore === 5)
{
    return true;
}
else if(cScore === 5)
{
    return false;
}
else
{
    return;
}
}

// Reset scoreboard for new game:
function resetScoreboard(x)
{
    playerScore = 0;
    computerScore = 0;
    compScoreboard.textContent = computerScore;
    playerScoreboard.textContent = playerScore;
}