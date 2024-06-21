document.addEventListener("DOMContentLoaded", function () {
  // Get All Arrows
  const arrows = document.querySelectorAll(".arrow");
  const descriptions = document.querySelectorAll(".lessons");

  // For one Arrow
  arrows.forEach((arrow, index) => {
    // Add Events to onclick
    arrow.addEventListener("click", () => {
      // Change Arrow direction when Clicked
      if (descriptions[index].style.display === "none") {
        arrow.style.transform = "rotate(90deg)";
        arrow.style.color = "#111";
        arrow.style.transition = "0.3s";
        descriptions[index].style.display = "block";
      } else {
        arrow.style.transform = "rotate(0deg)";
        descriptions[index].style.display = "none";
        arrow.style.color = "#0fc2bc";
      }
    });
  });
});

/**(:دا كود التايب سكريب يا بيه 
 document.addEventListener("DOMContentLoaded", function () {
  // Get All Arrows
  const arrows: NodeListOf<Element> = document.querySelectorAll(".arrow");
  const descriptions: NodeListOf<Element> = document.querySelectorAll(".lessons");

  // For one Arrow
  arrows.forEach((arrow: Element, index: number) => {
    // Add Events to onclick
    arrow.addEventListener("click", () => {
      // Change Arrow direction when Clicked
      if ((descriptions[index] as HTMLElement).style.display === "none") {
        arrow.style.transform = "rotate(90deg)";
        arrow.style.color = "#111";
        arrow.style.transition = "0.3s";
        (descriptions[index] as HTMLElement).style.display = "block";
      } else {
        arrow.style.transform = "rotate(0deg)";
        (descriptions[index] as HTMLElement).style.display = "none";
        arrow.style.color = "#0fc2bc";
      }
    });
  });
});

 */
