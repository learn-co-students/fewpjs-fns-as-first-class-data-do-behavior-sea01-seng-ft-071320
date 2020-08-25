/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById("time").value;
  displayMessage(greet(timeString));
}

/* End Given Code, don't edit above here...*/

function greet(stringTime) {
  let time = stringTime.split(":");
  let timeObj = { hour: parseInt(time[0]), minute: parseInt(time[1]) };
  if (timeObj.hour < 12) {
    return "Good Morning";
  } else if ([12, 13, 14, 15, 16, 17].includes(timeObj.hour)) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
}

function displayMessage(message) {
  document.getElementById("greeting").innerText = message;
}
