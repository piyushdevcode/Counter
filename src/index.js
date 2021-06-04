// import "./styles.css";
const btns = document.querySelectorAll("button");
const ctr = document.querySelector(".counter");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    let val = parseInt(ctr.textContent, 10);
    if (e.target.id === "increment") {
      val += 1;
      ctr.textContent = val;
      if (val > 0) {
        ctr.style.color = "rgb(128,128,255)";
      }
    }
    if (e.target.id === "decrement") {
      val -= 1;
      ctr.textContent = val;
      if (val < 0) {
        ctr.style.color = "rgb(128,128,128)";
      }
    }
    if (e.target.id === "reset") {
      ctr.textContent = 0;
      ctr.style.color = "rgb(20,20,20)";
    }
  });
});
