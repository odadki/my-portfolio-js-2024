let h1 = document.getElementById("h1");

//Add intro animation
document.addEventListener("DOMContentLoaded", () => {
  const introAnimation = document.getElementById("intro-animation");

  setTimeout(() => {
    introAnimation.classList.add("hide");
  }, 3000); // Adjust the duration as needed
});

//add activeNav class to nav item that is clicked

//1-14 try to get intersectionobserver
const section = document.querySelector("section");
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    document.querySelector(".activeNav")?.classList.remove("activeNav");
    navLink.classList.add("activeNav");
  });
});

const projectHeading = document.querySelector(".projects-heading");
const aboutNavItem = document.querySelector("#about-link");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const intersecting = entry.isIntersecting;
    // entry.target.style.backgroundColor = intersecting ? "blue" : "orange";
    console.log("target is intersecting");
  });
});

observer.observe(projectHeading);

//1-14 END

// add styling when sectionContent enters screen
// const config = {
//   root: null, // avoiding 'root' or setting it to 'null' sets it to default value: viewport
//   rootMargin: "0px",
//   threshold: 1,
// };
// let observer2 = new IntersectionObserver(function (entries) {
//   console.log("VIEWED");
//   navLinks.forEach((navLink) => {
//     document.querySelector(".activeNav")?.classList.remove("activeNav");
//     navLink.classList.add("activeNav");
//   });
// }, config);

// const aboutHeading = document.querySelector(".projects-heading");
// observer2.observe(aboutHeading);

// const aboutLink = document.getElementById("about-link");
// const experienceLink = document.getElementById("experience-link");
// const projectsLink = document.getElementById("projects-link");

// function showSection(e) {
//   e.preventDefault();
//   console.log("clicked");

//   // section.classList.add("active");

//   // if (!section.classList.contains("active")) {
//   //   section.classList.add("active");
//   // } else {
//   //   return;
//   // }
// }
// aboutLink.addEventListener("click", showSection);
// experienceLink.addEventListener("click", showSection);
// projectsLink.addEventListener("click", showSection);

// aboutLink.addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log("clicked");
//   aboutSection.style.opacity = 1;
// });

// h1.innerHTML = "Changed";

// Update style on nav link when it comes into view
// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add("nav-active");
//     } else {
//       entry.target.classList.remove("nav-active");
//     }
//   });
// });

// document.querySelectorAll(".nav-link").forEach((element) => {
//   observer.observe(element);
// });
