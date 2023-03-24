// Hello there!
// Email bigfoot.gaming9999@gmail.com for any questions. I will reply usually within a day.


console.warn(
  "%cNote!",
  "color: purple; font-weight: 600; background: yellow; padding: 0 5px; border-radius: 5px",
  "Thanks for using Bigfoot's Game Shack! Tab Cloak made by 3kh0! If you are trying to steal my code its literally public on github, if you need games message me on Discord and ill hit you up."
);
function log(text) {
  
}
function tab(text) {
  
}
function script(text) {
  
}
// ====================================
// TAB CLOAK
// ====================================

tab("Loading Tab Cloak...");
//Declare variables for cloak here
const local_title = localStorage.getItem("title");
const local_icon = localStorage.getItem("icon");

// Set tab title (if needed)
if (Object.prototype.hasOwnProperty.call(window.localStorage, 'title')) {
  document.title = local_title;
  tab("Title set to: " + local_title);
} else {
  tab("Title not set :(");
}
// Set tab icon (if needed)
if (Object.prototype.hasOwnProperty.call(window.localStorage, 'icon')) {
  document.querySelector("link[rel=icon]").href = local_icon;
  tab("Icon set to: " + local_icon);
} else {
  tab("Icon not set :(");
}
tab("Tab cloak settings can be found in localStorage! If you want to change them, you can go tab cloak page.");
