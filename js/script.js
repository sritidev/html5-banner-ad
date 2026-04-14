const tl = gsap.timeline({ repeat: -1 });

// Animation
tl.from(".logo", { opacity: 0, scale: 0.5, duration: 0.5 })
  .from(".left h1", { x: -30, opacity: 0, duration: 0.8 })
  .from(".left p", { x: -30, opacity: 0, duration: 0.6 }, "-=0.4")
  .from(".right img", { scale: 0.8, opacity: 0, duration: 0.8 })

  // fade content only
  .to(".left, .right", { opacity: 0, duration: 0.5, delay: 2 })
  .to(".left, .right", { opacity: 1, duration: 0.5 });

// CTA animation
gsap.fromTo(
  ".cta",
  { scale: 1 },
  { scale: 1.05, duration: 0.8, repeat: -1, yoyo: true }
);

// ✅ FIX CLICK (attach to CTA instead)
document.querySelector(".cta").addEventListener("click", (e) => {
  e.stopPropagation(); // prevent conflict
  window.open("https://example.com", "_blank");
});

// Click tracking
document.querySelector(".banner").addEventListener("click", () => {
  console.log("Ad Clicked");
  window.open("https://example.com", "_blank");
});


