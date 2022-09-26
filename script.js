function openTab(evt, tabName) {
    //Declare all variables;
    var i, tabcontent, tabLinks;
    //Get all elements with class="tabcontent" and hide them

    tabcontent = document.getElementsByClassName("tabcontent");
for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
}



//Get all elements with class="tabLinks" and remove the class "active";

tabLinks = document.getElementsByClassName("tabLinks");
for (i = 0; i < tabLinks.length; i++) {
    tabLinks[i].className = tabLinks[i].className.replace("active", "");
}

//Show the current tab, and add an "active" class to the button that opened the tab

document.getElementById(tabName).style.display = "grid";
evt.currentTarget.className += "active";

}



//Get element with id="defaultOpen" and click on it;

document.getElementById("defaultOpen").click();