AOS.init({
  offset: 10,
});

jQuery(document).ready(function ($) {
  // Logos slider
  $(".logos-slider").slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // Success slider
  $(".success-slider").slick({
    slidesToShow: 2.8,
    dots: false,
    arrows: false,
    centerMode: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // Navigation buttons for success slider
  $(".prev-btn").click(function () {
    $(".success-slider").slick("slickPrev");
  });

  $(".next-btn").click(function () {
    $(".success-slider").slick("slickNext");
  });

  // Testimonial slider
  $(".testimonial-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    infinite: false,
    prevArrow:
      "<button type='button' class='slick-prev'><i class='fa-solid fa-arrow-left' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next'><i class='fa-solid fa-arrow-right' aria-hidden='true'></i></button>",
  });

  $("a[data-slide]").click(function (e) {
    e.preventDefault();
    var slideno = $(this).data("slide");
    $(".testimonial-for").slick("slickGoTo", slideno - 1);
    $("a[data-slide]").removeClass("active");
    $(this).addClass("active");
  });

  $(".testimonial-for").on(
    "afterChange",
    function (event, slick, currentSlide) {
      $("a[data-slide]").removeClass("active");
      $('a[data-slide="' + (currentSlide + 1) + '"]').addClass("active");
    }
  );
});
// Accordion with tabs
document.addEventListener("DOMContentLoaded", () => {
  const accordions = document.querySelectorAll(".accordion");

  accordions.forEach((accordion) => {
    const header = accordion.querySelector(".accordion-header");
    header.addEventListener("click", () => {
      accordions.forEach((item) => {
        if (item !== accordion) {
          item.classList.remove("active");
        }
      });
      accordion.classList.toggle("active");
    });
  });
});

//Counter JS
let targets = {
  counter1: 20,
  counter2: 200,
  counter3: 100,
};

function startCounter(element, target) {
  let count = 0;
  const increment = Math.ceil(target / 100);
  const interval = setInterval(() => {
    if (count < target) {
      count += increment;
      element.innerText = Math.min(count, target);
    } else {
      clearInterval(interval);
    }
  }, 20);
}

const counters = document.querySelectorAll(".counter");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      startCounter(entry.target, targets[entry.target.id]);
      observer.unobserve(entry.target);
    }
  });
});

counters.forEach((counter) => {
  observer.observe(counter);
});
