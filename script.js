let h1 = document.getElementById("h1");

//Add intro animation
document.addEventListener("DOMContentLoaded", () => {
  const introAnimation = document.getElementById("intro-animation");

  setTimeout(() => {
    introAnimation.classList.add("hide");
  }, 3000); // Adjust the duration as needed
});
//End add intro

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

// When h2 headers are 33% into Viewport
const headingObservers = document.querySelectorAll(".heading");

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log("projects-heading target is intersecting");
        observer.unobserve(entry.target);
      }
      // const intersecting = entry.isIntersecting;
      // entry.target.style.backgroundColor = intersecting ? "blue" : "orange";
      // console.log("projects-heading target is intersecting");
    });
  },
  {
    rootMargin: "0px 0px -33% 0px",
  }
);

headingObservers.forEach((h2) => {
  observer.observe(h2);
});
