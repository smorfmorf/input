const input = document.querySelector("input");
const div = document.querySelector("div");
let timeoutId;

input.addEventListener("input", () => {
  clearTimeout(timeoutId);

  timeoutId = setTimeout(() => {
    div.textContent = input.value;
  }, 300);
});
