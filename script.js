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

// Desktop nav observer
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

// Mobile nav scroll observer
const mobNavLinks = document.querySelectorAll(".mob-nav-observer");

const mobileObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const mobSectionId = entry.target.dataset.mobileNav;

        // Find the corresponding navigation link
        mobNavLinks.forEach((link) => {
          if (link.dataset.mobileNav === mobSectionId) {
            link.classList.add("activeNav", "h2-animate");
          } else {
            link.classList.remove("activeNav");
          }
        });

        // entry.target.classList.add("h2-animate");
        //   observer.unobserve(entry.target);

      }
    })

  },
  {
    rootMargin: "0px 0px -50% 0px",
  }
);

headingObservers.forEach((h2) => {
  mobileObserver.observe(h2);
});

// Add margin at the top when nav item is clicked so it doesn't get hidden
function scrollOffset() {
  const logoCont = document.querySelector(".logo-cont");
  if (!logoCont) return;

  const offset = logoCont.getBoundingClientRect().top + window.scrollY;

  document.documentElement.style.setProperty(
    "--scroll-align-offset",
    `${offset}px`
  );
}

window.addEventListener("DOMContentLoaded", scrollOffset);

window.addEventListener("resize", () => {
  scrollOffset();
});

// Add mobile sticky nav after 100vh
window.addEventListener('scroll', function() {
  const nav = this.document.getElementById('mobile-sticky-nav');
  const navCont2 = this.document.querySelector('.nav-cont-2');
  const scrollPosition = this.window.scrollY;
  const viewportHeight = this.window.innerHeight;

  const navCont2Position = navCont2.getBoundingClientRect().bottom + this.window.scrollY;

  if (scrollPosition > navCont2Position) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
})
