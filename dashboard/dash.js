// Some globals:
const modeButton = document.querySelector(".mode-btn");
const body = document.querySelector("body");
let darkModeCurrent = false;

// Toggle darkmode:
modeButton.addEventListener("click", (e) => {
  if (darkModeCurrent === false) {
    body.classList.add("dark");
    e.target.src = "./dash-img/lightmode.png";
    darkModeCurrent = true;
  } else if (darkModeCurrent === true) {
    body.classList.remove("dark");
    e.target.src = "./dash-img/darkmode.png";
    darkModeCurrent = false;
  }
});












// [2,3,1,2]    [1,1,1]    [1,2,10,5,7]...[3,2,4,5]......[105,924,32,968].......[512,867,904,997,403]
var canBeIncreasing = function (nums) {
  let counter = 0;

  for (let i = 0; i < nums.length-1; i++) 
  {
    if (!((i === 0)) && !(checkIncreasing(nums[i], nums[i+1])))
    {
        counter += 1
        if(!(checkIncreasing(nums[i-1], nums[i + 1]))) // check for removal of i
        {
            if(!(checkIncreasing(nums[i],nums[i + 2]))) // check for removal of i+1
            {
                return false;
            }
        }
    }
    if(counter > 1)
    {
        return false;
    }
  }
  return true;
  
  function checkIncreasing(a,b)
    {
        if(a < b)
        {
            return true;
        }
        return false;
    }





    // is there a number which is not strictly increasing r/t it's neighbors
    //          if ther is: will it's neighbors be strictly increasing w/o it.
    //                  if they WONT: will the OG number and the other numbers be strictly increasing w/o one of OG's neighbors
    // is there a number which is equal to one of its neighbors?
    //      if ther is: will its neighbors be strictly increasing w/o it?
    //                  if they WONT: 

    function checkIncreasing(a,b)
    {
        if(a < b)
        {
            return true;
        }
        return false;
    }
    // 
    
    





//counter += 1;
//       if(nums[i-1] > 0)
//       {
//         if(nums[i-1] > nums[i+1])
//         {
//             counter+=1;
//         }
//       }
//       }
//     else if (counter > 1) 
//     {
//       return false;
//     }
//     }
// return true;
  }




for (let j = 0; j < nums.length; j++) {
    if (!nums[j].isNaN) {
      poppedArray.push(nums[j]);
    }