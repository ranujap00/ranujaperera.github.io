document.addEventListener("DOMContentLoaded", function () {
    const sliderContainers = document.querySelectorAll(".card-slider-container");

    sliderContainers.forEach((container) => {
        const slider = container.querySelector(".project-image-container");
        const imagesList = slider.querySelectorAll("img");
        let index = 0;

        const changeImage = () => {
            if (index > imagesList.length - 1) index = 0;
            else if (index < 0) index = imagesList.length - 1;
            slider.style.transform = `translateX(${-index * 100}%)`;
        };

        const run = () => {
            index++;
            changeImage();
        };

        const resetInterval = () => {
            clearInterval(interval);
            interval = setInterval(run, 2500);
        };

        let interval = setInterval(run, 2500);

        const leftButton = container.querySelector(".right-icon");
        const rightButton = container.querySelector(".left-icon");

        rightButton.addEventListener("click", () => {
            index--;
            changeImage();
            resetInterval();
        });

        leftButton.addEventListener("click", () => {
            index++;
            changeImage();
            resetInterval();
        });
    });
});
