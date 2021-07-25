export default function slideCarousel(carouselRef, direction, speed, step) {
  const distance = carouselRef?.current.children[0]?.scrollWidth;

  let scrollAmount = 0;

  const sliderIntervalId = setInterval(() => {
    if (direction === "left") {
      carouselRef.current.scrollLeft -= step;
    } else {
      carouselRef.current.scrollLeft += step;
    }
    scrollAmount += step;
    if (scrollAmount >= distance) {
      clearInterval(sliderIntervalId);
    }
  }, speed);
}
