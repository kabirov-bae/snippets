function dropdownInit() {
  const dropdowns = document.querySelectorAll(".js-dropdown");
  window.addEventListener("click", function (e) {
    if (!e.target.closest(".js-dropdown")) {
      dropdowns.forEach((dropdown) => {
        dropdown.classList.remove("active", "expanded");
      });
    }
    const dropdown = e.target.closest(".js-dropdown");
    console.log(dropdown);
    dropdown.classList.toggle("expanded");
    dropdown.classList.toggle("active");
  });
}

dropdownInit();
