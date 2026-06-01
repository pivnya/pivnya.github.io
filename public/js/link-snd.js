const hover = new Audio("/snd/hover.wav");
const click = new Audio("/snd/click.wav");

hover.volume = 0.12;
click.volume = 0.24;

const links = document.querySelectorAll("a");

links.forEach(function(link) {

    link.addEventListener("mouseenter", function () {
        hover.currentTime = 0;
        hover.play().catch(err => console.log(err));
    });

    link.addEventListener("click", function () {
        click.currentTime = 0;
        click.play().catch(err => console.log(err));
    });
});