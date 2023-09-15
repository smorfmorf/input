const input = document.querySelector("input");
const div = document.querySelector("div");

input.addEventListener("input", () => {
  setTimeout(() => {
    div.textContent = input.value;
  }, 300);
});
