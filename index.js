function Slider(sliderElement) {
  if (!(sliderElement instanceof Element)) {
    throw new Error("No slider passed in");
  }
  let current;
  let prev;
  let next;

  const slides = sliderElement.querySelector(".slides");
  const prevButton = sliderElement.querySelector(".goToPrev");
  const nextButton = sliderElement.querySelector(".goToNext");

  function startSlider() {
    current = sliderElement.querySelector(".current") || slides.firstElementChild;
    prev = current.previousElementSibling || slides.lastElementChild;
    next = current.nextElementSibling || slides.firstElementChild;
  }

  function applyClasses() {
    current.classList.add("current");
    prev.classList.add("prev");
    next.classList.add("next");
  }

  function move(direction) {
    const classesToMove = ["current", "prev", "next"];
    prev.classList.remove(...classesToMove);
    next.classList.remove(...classesToMove);
    current.classList.remove(...classesToMove);
    if (direction === "back") {
      [prev, current, next] = [
          prev.previousElementSibling || slides.lastElementChild, prev, current];
    } else {
      [prev, current, next] = [
          current, next, next.nextElementSibling || slides.firstElementChild];
    }
    applyClasses();
  }

  startSlider();
  applyClasses();

  prevButton.addEventListener("click", () => move('back'));
  nextButton.addEventListener("click", move);

}

const mainSlider = Slider(document.querySelector(".slider"));
const dogSlider = Slider(document.querySelector(".dog-slider"));
