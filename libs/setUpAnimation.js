export const setUpAnimation = () => {
  const appearOption = {
    threshold: 0,
    rootMargin: "0px 0px -200px",
  };

  const appear = document.querySelectorAll(".slide-in");

  const cb = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("view");
      }
    });
  };

  const observer = new IntersectionObserver(cb, appearOption);

  // Observe each element with the className "slide-in"
  appear.forEach((element) => {
    observer.observe(element);
  });
};
