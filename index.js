/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString){
  /* The greet function should take one argument, a String which specifies the 24-hour time in the format HH:MM.
If the time is earlier than 12pm, return "Good Morning".
If the time is between 12pm and 5pm, return "Good Afternoon".
If the time is later than 5pm, return "Good Evening".
NOTE: The value returned from the <input> will be of type String. You’ll need to take the String of the 24 hour time and convert it to a number. The split() function and parseInt() function should help.
*/
const hour = timeString.split(':')[0];
if (hour < 12) return "Good Morning" ;
if (hour > 17) return "Good Evening" ;
return "Good Afternoon";
}

/* Write your implementation of displayMessage() */
function displayMessage(greet){
document.querySelector('#greeting').innerText = 'TEST'
}
