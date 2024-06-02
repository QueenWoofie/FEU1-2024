/* Open / Close Menu */ 

// function openNav() {
//     document.getElementById("navMenu").style.width = "500px";
//     document.getElementById("overlay").style.display = "block";
// }

function openNav() {
    var navMenu = document.getElementById("navMenu");
    var overlay = document.getElementById("overlay");

    if (window.innerWidth <= 600) {
        navMenu.style.width = "250px"; // Small screen width
    } else if (window.innerWidth <= 1024) {
        navMenu.style.width = "350px"; // Medium screen width
    } else {
        navMenu.style.width = "500px"; // Large screen width
    }

    overlay.style.display = "block";
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
// let slideIndex = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
// let slideId = ["mySlidesall", "mySlidesaction", "mySlidescomedy", "mySlidescrime", "mySlidesdrama", "mySlidesfamily", "mySlidesfantasy", "mySlideshorror", "mySlidesmusical", "mySlidesromance", "mySlidesscifi", "mySlidesshort", "MySlidesthriller"];

// for (let i = 0; i < slideId.length; i++) {
//     showSlides(1, i);
// }

// function plusSlides(n, no) {
//     showSlides(slideIndex[no] +=n, no)
// }

// function showSlides(n, no) {
//     let i;
//     let x = document.getElementsByClassName(slideId[no]);
//     if (n > x.length) {slideIndex[no] = x.length}
//     for (i = 0; i < x.length; i++) {
//         x[i].style.display ="none";
//     }
//     x[slideIndex[no]-1].style.display = "block";
// }