
document.getElementById("add-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // This is to get the input values
  var fullName = document.getElementById("full-name").value;
  var episodeNumber = document.getElementById("episode-number").value;
  var comment = document.getElementById("comment").value;

  // This will create a new row for the table.
  var newRow = "<tr><td>" + fullName + "</td><td>" + episodeNumber + "</td><td>" + comment + "</td></tr>";
  document.getElementById("table-body").innerHTML += newRow;

  // This resets the form fields.
  document.getElementById("full-name").value = "";
  document.getElementById("episode-number").value = "";
  document.getElementById("comment").value = "";
});
