function getDate(){
    var today = new Date();
    var month = (today.getMonth() + 1);
    month = month < 10 ? '0'+month : month
    var date  =  today.getDate() + ' / ' + month + ' / ' + today.getFullYear()
    $('.actual-date').text(date)
}

getDate()

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function showMenu() {
    document.getElementById("dropdown-icon").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.fa-bars')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }