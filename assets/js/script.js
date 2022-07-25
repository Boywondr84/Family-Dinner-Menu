const breakfastObj = [{
    "name": "Toasted Coconut Granola",
    "link": "https://www.marthastewart.com/256537/farmhands-choice-granola"
},
{
    "name": "Coffee Cake",
    "link": "https://sugarspunrun.com/cinnamon-coffee-cake/#wprm-recipe-container-10225"
},
{
    "name": "Blueberry Honey Scone",
    "link": "https:/www.pastryaffair.com/blog/blueberry-honey-scones"
}]

var addBreakfastEl = document.querySelector("#demo");

for (var i = 0; i < breakfastObj.length; i++) {
    // console.log(breakfastObj[i]);
    breakfastOptions = (breakfastObj[i].name);
    console.log(breakfastOptions);

var breakfastOption1El = document.createElement("li");
breakfastOption1El.textContent = breakfastOptions;
addBreakfastEl.appendChild(breakfastOption1El);
}