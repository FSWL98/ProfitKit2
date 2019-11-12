let images = ['img1.png', 'img2.png', 'img3.png', 'img4.png', 'img5.png'];
const button = document.getElementById('slick-add');
const createImage = src => {
    const container = document.createElement("div");
    const img = document.createElement("img");
    img.src = "images/" + src;
    img.classList.add('image')
    container.appendChild(img)
    return container;
};
const createSlider = () => {
    const slider = document.createElement("div");
    images.forEach(function (img) {
        slider.appendChild(createImage(img));
    });
    slider.classList.add('slider');
    return slider;
}
button.addEventListener('click', function (ev) {
    console.log(ev);
    document.body.appendChild(createSlider())
    const slider = document.getElementById("slider");
    $('.slider').slick({
        dots: true,
        accessibility: true,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true
    });
    button.disabled = true
});

