/* Open / Close Menu */ 

// function openNav() {
//     document.getElementById("navMenu").style.width = "500px";
//     document.getElementById("overlay").style.display = "block";
// }

function openNav() {
    var navMenu = document.getElementById("navMenu");
    var fadeoverlay = document.getElementById("fadeoverlay");

    if (window.innerWidth <= 600) {
        navMenu.style.width = "250px"; // Small screen width
    } else if (window.innerWidth <= 1024) {
        navMenu.style.width = "350px"; // Medium screen width
    } else {
        navMenu.style.width = "500px"; // Large screen width
    }

    fadeoverlay.style.display = "block";
}

function closeNav() {
    document.getElementById("navMenu").style.width = "0";
    document.getElementById("fadeoverlay").style.display = "none";
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

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

//MOVIE OVERLAY

document.addEventListener("DOMContentLoaded", function() {
    const movies = document.querySelectorAll(".movie");

    movies.forEach(movie => {
        movie.addEventListener("click", function() {
            const title = movie.getAttribute("data-title");
            const year = movie.getAttribute("data-year");
            const runtime = movie.getAttribute("data-runtime");
            const movieInfo = movie.querySelector(".movie-info");

            movie.querySelector(".movie-title").textContent = title;
            movie.querySelector(".movie-year").textContent = `Year: ${year}`;
            movie.querySelector(".movie-runtime").textContent = `Runtime: ${runtime}`;
            movie.querySelector(".view-more").href = `${title.toLowerCase().replace(/ /g, '-')}.html`; // Assuming a standard URL format

            movieInfo.style.display = "block";
        });
    });
});

function closeInfo(event) {
    event.stopPropagation();
    event.target.closest(".movie-info").style.display = "none";
}

// UNDER CONSTRUCTION

function openPopup() {
    document.getElementById("construction-popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("construction-popup").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function() {
    const underConstructionLinks = document.querySelectorAll(".under-construction");

    underConstructionLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent the default navigation behavior
            openPopup();
        });
    });
});