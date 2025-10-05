// Play videos smoothly on scroll
const videos = document.querySelectorAll("video");
videos.forEach(video => {
  video.addEventListener("mouseenter", () => video.play());
  video.addEventListener("mouseleave", () => video.pause());
});

// Redirect to Google Pay when Donate clicked
document.getElementById("donateBtn").addEventListener("click", () => {
  window.location.href = "upi://pay?pa=vakapi2009-1@okaxis&pn=Rescue%20Dog%20Fund&am=0&cu=INR";
});

// Ensure background music auto plays on first tap
document.body.addEventListener("click", () => {
  const audio = document.getElementById("bgMusic");
  if (audio.paused) audio.play();
});
