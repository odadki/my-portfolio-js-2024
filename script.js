//Add intro animation
// document.addEventListener("DOMContentLoaded", () => {
//   const introAnimation = document.getElementById("intro-animation");

//   setTimeout(() => {
//     introAnimation.classList.add("hide");
//   }, 1000); // Adjust the duration as needed

// });
//End add intro

// Intro animation OG
// document.addEventListener("DOMContentLoaded", () => {
//   const introAnimation = document.getElementById("intro-animation");

//   // Check if user already seen animation
//   const animationSeen = localStorage.getItem("animationSeen");

//   if (!animationSeen) {
//     setTimeout(() => {
//       introAnimation.classList.add("hide");
//       localStorage.setItem("animationSeen", "true");
//     }, 1000);

//     localStorage.setItem("animationSeen", "true");
//   } else {
//     introAnimation.classList.add("hide");
//   }
// });

// Intro Animation 2 - DODA one by one
document.addEventListener("DOMContentLoaded", () => {
  const introAnimation = document.getElementById("intro-animation");
  const introChars = document.querySelectorAll(".intro-characters");

  if (introAnimation) {
    introChars.forEach((introChar, index) => {
      setTimeout(() => {
        introChar.classList.add("show");

        if (index === introChars.length - 1) {
          setTimeout(() => {
            document
              .getElementById("intro-content")
              .classList.add("add-border");

            setTimeout(() => {
              introAnimation.classList.add("hide");

              // Wait for fade-out transition to finish
              setTimeout(() => {
                introAnimation.style.display = "none";

                requestAnimationFrame(() => {
                  const offset =
                    document
                      .querySelector(".logo-cont")
                      ?.getBoundingClientRect().top || 0;

                  // Set CSS variable globally
                  document.documentElement.style.setProperty(
                    "--scroll-align-offset",
                    `${offset}px`
                  );

                  // Ensure hash scroll aligns with updated layout
                  const hash = window.location.hash;
                  if (hash) {
                    const target = document.querySelector(hash);
                    if (target) {
                      setTimeout(() => {
                        target.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                      }, 10);
                    }
                  }
                });
              }, 1000); // this delay should match your animation fade-out
            }, 600);

            // add border last
          }, 100); // delay after last char appears
        }
      }, 250 * index);
    });
  } else {
    scrollOffset(); // fallback if animation is skipped
  }
});

// 6-8 display block on section when any nav-observer is selected
// const navObservers = document.querySelectorAll('.nav-observer');

// navObservers.forEach((navObserver) => {
//   navObserver.addEventListener('click', (e) => {
//     e.preventDefault();

//     const content = document.getElementById('content');

//     // Show the content
//     content.classList.add('visible');

//     // Scroll to it after rendering
//     setTimeout(() => {
//       content.scrollIntoView({ behavior: "smooth" });
//     }, 0); // Zero-delay timeout lets the DOM update first
//   })
// });
//6-8 END

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
// const isMobile = window.innerWidth <= 767;

// if (!isMobile) {
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      let screenWidth = window.innerWidth;

      if (entry.isIntersecting) {
        const sectionId = entry.target.dataset.nav;

        navLinks.forEach((link) => {
          link.classList.toggle("activeNav", link.dataset.nav === sectionId);
        });

        entry.target.classList.add("h2-animate");

        setTimeout(() => {
          entry.target.classList.add("animate-line");
        }, 100);
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
// }

// If browser is resized <=767
// let wasMobile = window.innerWidth <= 767;

// function handleResize() {
//   const isMobile = window.innerWidth <= 767;

//   if (isMobile && !wasMobile) {
//     // Just transitioned from desktop to mobile — clear activeNav
//     navLinks.forEach((link) => {
//       link.classList.remove("activeNav");
//     });
//   }

//   wasMobile = isMobile;
// }

// window.addEventListener("resize", handleResize);

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

mobNavLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent the default anchor jump

    const targetId = link.getAttribute("href")?.replace("#", "");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      // Optional: close mobile nav menu after clicking
      // document.querySelector(".mobile-menu").classList.remove("open");
    }
  });
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

// Recalculate after full page load
// window.addEventListener("load", scrollOffset);
window.addEventListener("load", () => {
  scrollOffset(); // Set --scroll-align-offset

  const hash = window.location.hash;
  if (hash) {
    // Delay until styles/layouts are recalculated
    setTimeout(() => {
      const target = document.querySelector(hash);
      if (target) {
        // target.scrollIntoView({ behavior: "smooth", block: "start" });

        // Optional: trigger nav observer after manual scroll
        setTimeout(() => window.dispatchEvent(new Event("scroll")), 10);
      }
    }, 0);
  }
});

window.addEventListener("DOMContentLoaded", () => {
  // scrollOffset();

  const hash = window.location.hash;
  if (hash) {
    setTimeout(() => {
      const target = document.querySelector(hash);
      if (target) {
        // Manual scroll ensures it respects the updated scroll-margin-top
        // target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 1); // Small delay ensures styles are computed
  }
});

// Optional: Recalculate on resize (debounced)
// let resizeTimeout;
// window.addEventListener("resize", () => {
//   clearTimeout(resizeTimeout);

//   resizeTimeout = setTimeout(() => {
//     scrollOffset(); // recalculate CSS var
//     const hash = window.location.hash;
//     if (hash) {
//       const target = document.querySelector(hash);
//       if (target) {
//         // Re-align to the section with scroll-margin-top now updated
//         target.scrollIntoView({ behavior: "instant", block: "start" });
//       }
//     }
//   }, 150); // debounce
// });

// window.addEventListener("resize", () => {
//   scrollOffset();
// });

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

// Remove class activeNav on screenwidths <=767
const aboutId = document.getElementById("about-link");

function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top < window.innerHeight &&
    rect.bottom > 0 &&
    rect.left < window.innerWidth &&
    rect.right > 0
  );
}

function removeActiveIfVisible(el) {
  if (isInViewport(el)) {
    el.classList.remove("activeNav");
  }
}

function handleScroll() {
  if (window.innerWidth <= 1023) {
    const target = document.querySelector(".activeNav");
    if (target) {
      removeActiveIfVisible(target);
    }
  }
}

window.addEventListener("scroll", handleScroll);
// window.addEventListener("resize", handleScroll);

// Page Reload Listener - not sure if this is needed. Commenting out allows for delay in render
window.addEventListener("load", () => {
  requestAnimationFrame(() => {
    const offset =
      document.querySelector(".logo-cont")?.getBoundingClientRect().top || 0;

    // Set CSS variable globally
    document.documentElement.style.setProperty(
      "--scroll-align-offset",
      `${offset}px`
    );

    // Apply scroll-margin-top dynamically
    // document.querySelectorAll(".section-div").forEach((el) => {
    //   el.style.scrollMarginTop = `var(--scroll-align-offset, 0px)`;
    // });

    // Force scroll only if there's a hash
    const hash = window.location.hash;
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 10); // small delay ensures margin is applied
      }
    }
  });
});

// Smooth scroll when nav item is clicked
document.querySelectorAll(".nav-link-section").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const targetId = link.getAttribute("href"); // e.g., "#about"
    const target = document.querySelector(targetId);
    const logoOffset =
      document.querySelector(".logo-cont")?.getBoundingClientRect().top || 0;

    if (target) {
      // Update scroll-margin-top inline
      target.style.scrollMarginTop = `${logoOffset}px`;

      // Smooth scroll to target
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      // Update the URL hash without jumping
      history.pushState(null, "", targetId);
    }
  });
});

// Calculate --scroll-align-offset when browser's Y-axis is resized
let resizeTimer;
window.addEventListener("resize", function () {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function () {
    const newHeight = window.innerHeight;
    // console.log('Debounced new window height (Y-axis):', newHeight);

    const offset =
      document.querySelector(".logo-cont")?.getBoundingClientRect().top || 0;

    // Set CSS variable globally
    document.documentElement.style.setProperty(
      "--scroll-align-offset",
      `${offset}px`
    );

    // console.log(`offset: ${offset}`);
  }, 250); // Execute after 250ms of no further resize events
});
