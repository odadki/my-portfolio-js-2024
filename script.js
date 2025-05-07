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
const isMobile = window.innerWidth <= 767;

if (!isMobile) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.dataset.nav;

          navLinks.forEach((link) => {
            link.classList.toggle("activeNav", link.dataset.nav === sectionId);
          });

          entry.target.classList.add("h2-animate");

          setTimeout(() => {
            entry.target.classList.add("animate-line");
          }, 20);
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
}

// If browser is resized <=767
let wasMobile = window.innerWidth <= 767;

function handleResize() {
  const isMobile = window.innerWidth <= 767;

  if (isMobile && !wasMobile) {
    // Just transitioned from desktop to mobile — clear activeNav
    navLinks.forEach((link) => {
      link.classList.remove("activeNav");
    });
  }

  wasMobile = isMobile;
}

window.addEventListener("resize", handleResize);

// Remove activeNav
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 767) {
      navLinks.forEach((l) => l.classList.remove("activeNav"));
    }
  });
});

if (window.innerWidth <= 767) {
  window.addEventListener("scroll", () => {
    navLinks.forEach((l) => l.classList.remove("activeNav"));
  });
}

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
            link.classList.add("mob-active-nav");
          } else {
            link.classList.remove("mob-active-nav");
          }
        });

        entry.target.classList.add("h2-animate");

        // Delay adding the animate-line class
        setTimeout(() => {
          entry.target.classList.add("animate-line");
        }, 20);

        // entry.target.classList.add("h2-animate");
        //   observer.unobserve(entry.target);
      }
    });
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
window.addEventListener("scroll", function () {
  const nav = this.document.getElementById("mobile-sticky-nav");
  const navCont2 = this.document.querySelector(".nav-cont-2");
  const scrollPosition = this.window.scrollY;
  const viewportHeight = this.window.innerHeight;

  const navCont2Position =
    navCont2.getBoundingClientRect().bottom + this.window.scrollY;

  if (scrollPosition > navCont2Position) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
});
