function openMenu() {
    const sidebar = document.getElementById("sidebar");

    if (sidebar) {
        sidebar.classList.toggle("active");
    }
}

document.addEventListener("click", function(event) {
    const sidebar = document.getElementById("sidebar");
    const menu = document.querySelector(".menu");

    if (
        sidebar &&
        menu &&
        !sidebar.contains(event.target) &&
        !menu.contains(event.target)
    ) {
        sidebar.classList.remove("active");
    }
});

const searchButton = document.querySelector(".search-box button");
const noteSearch = document.getElementById("noteSearch");

if (searchButton && noteSearch) {
    searchButton.addEventListener("click", function() {
        const search = noteSearch.value.toLowerCase();

        document.querySelectorAll(".note-card").forEach(function(note) {
            note.style.display = note.innerText.toLowerCase().includes(search)
                ? "block"
                : "none";
        });
    });
}

document.querySelectorAll(".save").forEach(function(button) {
    button.addEventListener("click", function() {
        button.innerHTML = "✅ Saved";
    });
});

document.querySelectorAll(".like").forEach(function(button) {
    button.addEventListener("click", function() {
        const number = Number((button.innerText.match(/\d+/) || ["0"])[0]);
        button.innerHTML = "❤️ Like " + (number + 1);
    });
});