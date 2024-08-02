const doors = document.querySelectorAll(".door");
const buttons = document.querySelectorAll("button");

const disableButtons = (disable) => {
  buttons.forEach((element) => {
    element.disabled = disable;
    // console.log(element.disabled);
  });
};

function moveToFloor(floor) {
  const elevator = document.getElementById("elevator");
  const height = 200 * (floor - 1);
  doors[0].classList.remove("door-left");
  doors[1].classList.remove("door-right");
  buttons.forEach((button) => button.classList.add("disable"));
  disableButtons(true);

  setTimeout(() => {
    elevator.style.bottom = height + "px";
  }, 1000);

  setTimeout(() => {
    doors[0].classList.add("door-left");
    doors[1].classList.add("door-right");
    disableButtons(false);
    buttons.forEach((button) => {
      button.classList.remove("disable");
    });
  }, 2600);
}
