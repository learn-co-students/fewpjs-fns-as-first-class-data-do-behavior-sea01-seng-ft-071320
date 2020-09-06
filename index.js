/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById("time").value;
  console.log(timeString);
  displayMessage(greet(timeString));
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(StringOfTime) {
  let times = StringOfTime.split(" ");
  console.log(times);
  let hour = parseInt(times[0]);
  console.log(hour);
  if (hour < 12) {
    return "Good Morning";
  } else if ([12, 13, 14, 15, 16, 17].includes(hour)) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
}

function displayMessage(pushmessage) {
  document.getElementById("greeting").innerText = pushmessage;
}
