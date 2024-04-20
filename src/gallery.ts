import $ from "jquery";

var CURRENT_IMAGE: number = 0;
var XITION_TIME_MS: number = 1000;
var DELAY_MS: number = 5000;

$(".img-box img").on("click", function() {
  let attribution = $(this).data("attribution");
  if(attribution && window) {
    const link = document.createElement('a');
    link.href = attribution;
    link.target="_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
});

setTimeout(() => runCarousel("#gallery-img-number", "-Y"), 0);
setTimeout(() => runCarousel("#img-box-1", "-Y"), 0);
setTimeout(() => runCarousel("#img-box-2", "-X"), XITION_TIME_MS + 150);
setTimeout(() => runCarousel("#img-box-3", "+Y"), (XITION_TIME_MS + 150) * 2);

// Define a function to run a carousel animation on a set of images.
var runCarousel = (selector: string, direction: string): void => {
  // Initial setup: Select images and determine animation direction and axis.
  const $images: JQuery<HTMLElement> = $(selector).children();
  const axis: string = direction[1].toUpperCase();
  const imgOffsetDir: string = direction[0] === "+" ? "" : "-";
  const imgTranslateDir: string = direction[0] === "+" ? "-" : "";

  // Position images based on the specified axis (horizontal or vertical).
  for (let i = 0; i < $images.length; i++) {
    if (axis === "X") {
      $images[i].style.left = `${imgOffsetDir}${i * 100}%`;
    } else if (axis === "Y") {
      $images[i].style.top = `${imgOffsetDir}${i * 100}%`;
    }
  }

  // keep track of currently visible image on the carousel
  let curIdx: number = 0;

  // Function to transition to the next image in the carousel.
  const nextImage = () => {
    // Apply transition effect to each image.
    $images.each(function () {
      const transitionDuration: number = curIdx === 0 ? 0 : XITION_TIME_MS;
      const transformOffset: number = curIdx * 100;
      this.style.transition = `transform ${transitionDuration}ms cubic-bezier(.41,.07,.34,1)`;
      this.style.transform = `translate${axis}(${imgTranslateDir}${transformOffset}%)`;
    });

    // Update the current index for the next image and set a timeout for the next transition.
    curIdx = (curIdx + 1) % $images.length;
    CURRENT_IMAGE = curIdx;

    const timeoutDelay: number =
      curIdx === 0 ? XITION_TIME_MS : DELAY_MS + XITION_TIME_MS;

    setTimeout(nextImage, timeoutDelay);
  };

  // Start the loop
  nextImage();
};
