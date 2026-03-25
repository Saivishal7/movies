
  const btn = document.querySelector(".button a");
  const container = document.querySelector(".button");

  document.addEventListener("mousemove", (e) => {
    const btnRect = btn.getBoundingClientRect();

    const btnX = btnRect.left + btnRect.width / 2;
    const btnY = btnRect.top + btnRect.height / 2;

    const distance = Math.hypot(e.clientX - btnX, e.clientY - btnY);

    // distance threshold (px)
    if (distance < 120) {
      const maxX = container.clientWidth - btn.offsetWidth;
      const maxY = container.clientHeight - btn.offsetHeight;

      btn.style.left = Math.random() * maxX + "px";
      btn.style.top = Math.random() * maxY + "px";
    }
  });




const checkbox=document.getElementById("termsCheckbox");
const link=document.getElementById("exploreLink");

link.addEventListener("click",function(e){
  if(!checkbox.checked){
    e.preventDefault();
    alert("Please accept the Terms and Conditions first.");

  }
});
 