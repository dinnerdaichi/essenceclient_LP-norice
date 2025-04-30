
// Swiperの初期化
const swiper = new Swiper('.swiper1', {
  // autoplay: {
  //   delay: 3000,
  // },
  speed: 2000,
  slidesPerView: 1, // 5枚表示
  spaceBetween: 0, // スライド間の間隔
  centeredSlides: true,
  loop: true, // ループ設定
  slideToClickedSlide: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "bullets",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // クリックしたスライドに移動
  // breakpoints: {
  //   // 画面幅が小さい場合のレスポンシブ設定
  //   1080: {
  //     slidesPerView: 3.5, // 3枚表示
  //     spaceBetween: 10,
  //   },
  //   768: {
  //     slidesPerView: 1.5, // 3枚表示
  //     spaceBetween: 10,
  //   },
  //   480: {
  //     slidesPerView: 1.5, // 1枚表示
  //     spaceBetween: 0,
  //   }
  // },

});

document.querySelectorAll(".accordion-header").forEach(button => {
  button.addEventListener("click", () => {
    const content = button.nextElementSibling;
    const icon = button.querySelector(".icon");

    content.classList.toggle("open");

    if (content.classList.contains("open")) {
      icon.textContent = "➖";
    } else {
      icon.textContent = "➕";
    }
  });
});

// const header = document.querySelector('header');
// const body = document.body;

// function updateBodyMargin() {
//   if (header) {
//     const headerHeight = header.offsetHeight;
//     body.style.marginTop = `${headerHeight}px`;
//   }
// }

// // 初期設定
// updateBodyMargin();

// // ResizeObserverで監視するよっ✨
// const observer = new ResizeObserver(() => {
//   updateBodyMargin();
// });

// if (header) {
//   observer.observe(header);
// }

document.getElementById('hamburger').addEventListener('click', function () {
  // ハンバーガーメニューのクラスをトグル
  document.querySelector('.menu-right').classList.toggle('open');
  // ハンバーガーのクロス用クラスをトグル
  document.body.classList.toggle('hamburger-active');
});
// menu-rightをクリックした時の処理
document.querySelector('.menu-right').addEventListener('click', function () {
  // ハンバーガーメニューのクラスを閉じる
  this.classList.remove('open');
  // ハンバーガーのクロス用クラスも削除
  document.body.classList.remove('hamburger-active');
});