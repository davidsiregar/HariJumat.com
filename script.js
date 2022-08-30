const search = () => {
  const searchbox = document.getElementById("searchbox").value.toLowerCase(); //after taking values convert to uppercase//
  const course = document.querySelectorAll(".course");
  const courseName = document.getElementsByTagName("h4");

  for (var i = 0; i < courseName.length; i++) {
    let match = course[i].getElementsByTagName("h4")[0];

    if (match) {
      let textValue = match.textContent || match.innerHTML;

      if (textValue.toLowerCase().indexOf(searchbox) > -1) {
        course[i].style.display = "";
      } else {
        course[i].style.display = "none";
      }
    }
  }
};
