let masonry_btn = document.querySelector('button.view-more-button');
const imageList = document.querySelectorAll("img.lazy-load-image");
let counter = 0;
let offset = 2;

masonry_btn.addEventListener('click', () => {
    try {
        for (i = 0; i < offset; i++) {
            imageList[counter * offset + i].classList.remove("hidden");
        }
    } catch {
        console.log("Reached end of image list.")
    } finally {
        counter += 1;

        if (counter * offset > imageList.length) {
            masonry_btn.innerHTML = '<a href="https://drive.google.com/drive/folders/1MUzjOhZ88V_5IxKBUcTGDFy77uLI3Snr" target="blank noreferrer">View even more</a>';
        }
    }
})