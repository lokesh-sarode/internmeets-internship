const triggers = document.querySelectorAll(".nav-trigger");
const profileTrigger = document.querySelector(".profile-trigger");
profileTrigger.addEventListener("click", (e) => {
    e.stopPropagation();
    const popup = profileTrigger.nextElementSibling;
    // Closing other popups
    const p = document.querySelector(".profile-popup");
    if (p !== popup) {
        p.style.display = "none";
    }
    // open and close current popup
    popup.style.display =
        popup.style.display === "flex" ? "none" : "flex";
})

triggers.forEach(trigger => {
    trigger.addEventListener("click", (e) => {
        e.stopPropagation();
        const popup = trigger.nextElementSibling;

        // Closing other popups
        document.querySelectorAll(".nav-popup").forEach(p => {
            if (p !== popup) {
                p.style.display = "none";
            }
        })

        // open and close current popup
        popup.style.display =
            popup.style.display === "flex" ? "none" : "flex";
    })
})

// close popup when clicked outside
document.addEventListener("click", () => {
    document.querySelectorAll(".nav-popup").forEach(p => {
        p.style.display = "none";
    })
    document.querySelector(".profile-popup").style.display = "none";
})