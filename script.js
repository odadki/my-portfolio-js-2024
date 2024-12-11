let h1 = document.getElementById("h1");

//Add intro animation
document.addEventListener("DOMContentLoaded", () => {
  const introAnimation = document.getElementById("intro-animation");

  setTimeout(() => {
    introAnimation.classList.add("hide");
  }, 3000); // Adjust the duration as needed
});

// const aboutLink = document.getElementById("about-link");
// const experienceLink = document.getElementById("experience-link");
// const projectsLink = document.getElementById("projects-link");
const section = document.querySelector("section");
const navLinks = document.querySelectorAll(".nav-item");

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
