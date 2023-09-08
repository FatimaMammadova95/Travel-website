const header = document.querySelector("header");
const mobile = document.querySelector(".mobile");
const email = document.querySelector(".email");
const placeholder = document.querySelector(".holder");
const description = document.querySelector(".description");
const hearts = document.querySelectorAll(".fa-heart");

function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    header.style.background = "rgba(0, 0, 0, 0.7)";
  } else {
    header.style.background = "";
  }
}
window.addEventListener("scroll", scrollFunction);

mobile?.addEventListener("click", function () {
  this.classList.add("active");
  email.classList.remove("active");
  placeholder.innerText = "+91 Mobile number";
  description.innerText = "phone number";
});
email?.addEventListener("click", function () {
  this.classList.add("active");
  mobile.classList.remove("active");
  placeholder.innerText = "@gmail.com";
  description.innerText = "email adress";
});

hearts?.forEach((heart) => {
  heart.addEventListener("click", function () {
    if (this.className=="fa-regular fa-heart") {
        this.className="fa-solid fa-heart"
    }else{
        this.className="fa-regular fa-heart"
    }
  });
});
