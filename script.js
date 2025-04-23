//Add intro animation
// document.addEventListener("DOMContentLoaded", () => {
//   const introAnimation = document.getElementById("intro-animation");

//   setTimeout(() => {
//     introAnimation.classList.add("hide");
//   }, 3000); // Adjust the duration as needed
// });
//End add intro

//add activeNav class to nav item that is clicked

//1-14 try to get intersectionobserver
// const section = document.querySelector("section");
// const navLinks = document.querySelectorAll(".nav-link");

// navLinks.forEach((navLink) => {
//   navLink.addEventListener("click", () => {
//     document.querySelector(".activeNav")?.classList.remove("activeNav");
//     navLink.classList.add("activeNav");
//   });
// });

// When h2 headers are 33% into Viewport
const headingObservers = document.querySelectorAll(".heading");
const navLinks = document.querySelectorAll(".nav-observer");
let experienceHeading = document.querySelector(".experience-heading");
// const aboutLink = document.getElementById("about-link");

// const observer = new IntersectionObserver(
//   (entries, observer) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         console.log("projects-heading target is intersecting");
//         // entry.target.classList.add("activeNav");
//         aboutLink.classList.add("activeNav");
//         // observer.unobserve(entry.target);
//       }
//       // const intersecting = entry.isIntersecting;
//       // entry.target.style.backgroundColor = intersecting ? "blue" : "orange";
//       // console.log("projects-heading target is intersecting");
//     });
//   },
//   {
//     rootMargin: "0px 0px -33% 0px",
//   }
// );

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const sectionId = entry.target.dataset.nav; // Get the data-nav value

        // Find the corresponding navigation link
        navLinks.forEach((link) => {
          if (link.dataset.nav === sectionId) {
            link.classList.add("activeNav");
          } else {
            link.classList.remove("activeNav");
          }
        });

        entry.target.classList.add("h2-animate");
        //   observer.unobserve(entry.target);

        // Delay adding the animate-line class
        setTimeout(() => {
          entry.target.classList.add("animate-line");
        }, 20); // Adjust the delay as needed (10ms is usually fine)
      }
    });
  },
  {
    rootMargin: "0px 0px -50% 0px",
  }
);

headingObservers.forEach((h2) => {
  observer.observe(h2);
});

window.addEventListener("DOMContentLoaded", () => {
  const logoCont = document.querySelector(".logo-cont");
  if (!logoCont) return;

  const offset = logoCont.getBoundingClientRect().top + window.scrollY;

  document.documentElement.style.setProperty(
    "--scroll-align-offset",
    `${offset}px`
  );
});
