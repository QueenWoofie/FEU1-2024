/* Open / Close Menu */ 

function openNav() {
    document.getElementById("navMenu").style.width = "500px";
    document.getElementById("overlay").style.display = "block";
}

function closeNav() {
    document.getElementById("navMenu").style.width = "0";
    document.getElementById("overlay").style.display = "none";
}

/* Genre Menu List - Sidebar*/

function toggleGenres () {
    var genreList = document.getElementById("genreList");
    if (genreList.classList.contains("hidden")) {
        genreList.classList.remove("hidden");
        genreList.classList.add("displaygenre");
    } else {
        genreList.classList.add("hidden");
        genreList.classList.remove("displaygenre");
    }
}

/* Carousel - CODE TAKEN FROM W3SCHOOLS */
/*let slideIndex = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
let slideId = ["mySlidesall", "mySlidesaction", "mySlidescomedy", "mySlidescrime" ]