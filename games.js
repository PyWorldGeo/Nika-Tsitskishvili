function isMobileDevice() {
    return /Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent);
}

window.addEventListener("DOMContentLoaded", () => {
    const desktopGame = document.getElementById("desktopGame");
    const mobileWarning = document.getElementById("mobileWarning");

    if (isMobileDevice()) {
        desktopGame.classList.add("hidden");
        mobileWarning.classList.remove("hidden");
    } else {
        mobileWarning.classList.add("hidden");
        desktopGame.classList.remove("hidden");
    }
});