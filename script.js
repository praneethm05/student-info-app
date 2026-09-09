// Student Information System
// Toggle the extra student details when the "Show Details" button is clicked.

document.addEventListener("DOMContentLoaded", function () {
  var button = document.getElementById("showDetailsBtn");
  var details = document.getElementById("details");

  if (!button || !details) {
    return;
  }

  button.addEventListener("click", function () {
    var isHidden = details.hidden;

    details.hidden = !isHidden;
    button.setAttribute("aria-expanded", String(isHidden));
    button.textContent = isHidden ? "Hide Details" : "Show Details";
  });
});
