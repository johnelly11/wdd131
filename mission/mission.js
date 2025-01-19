const themeSelector = document.querySelector("#theme-select")

function changeTheme() {
    if (themeSelector.value === "dark") {
        document.body.classList.add("dark");
        document.querySelector("footer img").src = "logo_dark.png";

    } else {
        document.body.classList.remove("dark");
        document.querySelector("footer img").src = "logo.webp";
    }
}

themeSelector.addEventListener('change', changeTheme);