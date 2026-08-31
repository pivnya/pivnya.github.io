let snd_active = false;

document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("a");
    const externalLinks = document.querySelectorAll('a[href^="http"]');

    const snd_btn = document.getElementById("snd-btn");
    const btn_state_text = document.getElementById("snd-btn-state");
    const btn_sub_text = document.getElementById("snd-btn-sub");

    const hover = new Audio("/snd/hover.mp3");
    const click = new Audio("/snd/click.mp3");

    const on = new Audio("/snd/snd-on.mp3");
    const off = new Audio("/snd/snd-off.mp3");

    hover.volume = 0.1;
    click.volume = 0.1;

    on.volume = 0.1;
    off.volume = 0.1;

    const save = localStorage.getItem("snd_active");
    if (save !== null) {
        snd_active = save === "true";
    }

    function updateBtn() {
        snd_btn.classList.toggle("active", snd_active);
        snd_btn.classList.toggle("disabled", !snd_active);

        if (snd_active) {
            btn_state_text.textContent = ".sounds on";
            btn_sub_text.textContent = "♪(´▽｀)";
        } else {
            btn_state_text.textContent = ".sounds off";
            btn_sub_text.textContent = "눈_눈";
        }
    }

    function saveState() {
        localStorage.setItem("snd_active", snd_active);
    }

    updateBtn();

    snd_btn.addEventListener("click", () => {
        snd_active = !snd_active;
        saveState();

        if (snd_active) {
            on.currentTime = 0;
            on.play().catch(console.error);
        } else {
            off.currentTime = 0;
            off.play().catch(console.error);
        }

        updateBtn();
    });

    links.forEach(link => {
        link.addEventListener("mouseenter", () => {
            if (!snd_active) return;

            hover.currentTime = 0;
            hover.play().catch(console.error);
        });


    });

    externalLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (!snd_active) return;
            if (link.hostname === location.hostname) return;

            click.currentTime = 0;
            click.play().catch(console.error);
        });
    });
});