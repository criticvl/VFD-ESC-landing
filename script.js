const navButtons = [...document.getElementsByClassName("navButton")];
const footerNavButtons = [
  ...document.getElementsByClassName("footerNavButton"),
];

const allNavButtons = navButtons.concat(footerNavButtons);

allNavButtons.forEach((item) => {
  item.addEventListener("click", () => {
    navButtons.forEach((i) => {
      i.classList.remove("active");
      if (i.getAttribute("href") == item.getAttribute("href")) {
        i.classList.add("active");
      }
    });
  });
});

const clipboardButtons = [...document.getElementsByClassName("clipboard")];

clipboardButtons.forEach((item) => {
  item.addEventListener("click", () => {
    navigator.clipboard.writeText(item.textContent).then(
      function () {
        swal("Email was copied to Clipboard!");
      },
      function (err) {
        console.error("Async: Could not copy text: ", err);
      }
    );
  });
});

const emailSubForm = document.getElementById("emailSubForm");
const emailSubButton = document.getElementById("emailSubButton");
emailSubButton.addEventListener("click", (e) => {
  if (!emailSubForm.checkValidity()) {
    var tmpSubmit = document.createElement("button");
    emailSubForm.appendChild(tmpSubmit);
    tmpSubmit.click();
    emailSubForm.removeChild(tmpSubmit);
  } else {
    swal("You have successfully subscribed to our Newsletter!");
    emailSubForm.reset();
  }
  e.preventDefault();
});

document.addEventListener("DOMContentLoaded", function () {
  new Splide("#image-carousel", {
    type: "slide",
    perPage: 1,
    rewind: true,
    autoplay: false,
  }).mount();
});
