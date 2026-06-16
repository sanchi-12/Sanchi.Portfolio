

// Resume download alert
const resumeBtn = document.querySelector(".btn");

if (resumeBtn) {
  resumeBtn.addEventListener("click", () => {
    alert("Your resume is downloading...");
  });
}