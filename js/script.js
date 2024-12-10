// ハンバーガーメニュー
document.getElementById("hamburger").addEventListener("click", function () {
  document.querySelector(".sp-nav").classList.toggle("open");
  document.body.classList.toggle("hamburger-active");
});

// headerのスクロールアニメーションで背景色を表示させる
window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");

  if (window.scrollY > 50) {
    // スクロール量が50px以上の場合
    header.classList.add("scrolled"); // .scrolledクラスを追加
  } else {
    header.classList.remove("scrolled"); // スクロール量が50px未満の場合、.scrolledクラスを削除
  }
});

// フェードインアニメーション
document.addEventListener("DOMContentLoaded", () => {
  const infoElements = document.querySelectorAll(".info");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // 一度だけフェードインさせる
      }
    });
  });

  infoElements.forEach((element) => observer.observe(element));
});
