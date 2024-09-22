document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    const mediaItems = document.querySelectorAll('.media-item');
    let currentMediaIndex = 0;

    function changeMedia() {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;

        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop - windowHeight / 2 &&
                scrollPosition < sectionTop + sectionHeight - windowHeight / 2) {
                if (currentMediaIndex !== index) {
                    mediaItems[currentMediaIndex].classList.remove('active');
                    if (mediaItems[currentMediaIndex].tagName === 'VIDEO') {
                        console.log('Pausing');
                        mediaItems[currentMediaIndex].pause();
                    }

                    mediaItems[index].classList.add('active');
                    if (mediaItems[index].tagName === 'VIDEO') {
                        console.log('Playing');
                        mediaItems[index].play().catch(e => console.log("Video play failed:", e));
                    }

                    currentMediaIndex = index;
                }
            }
        });
    }

    // Ensure video plays when it becomes active
    mediaItems.forEach(item => {
        if (item.tagName === 'VIDEO') {
            item.addEventListener('transitionend', () => {
                if (item.classList.contains('active')) {
                    console.log('Playing');
                    item.play().catch(e => console.log("Video play failed:", e));
                }
            });
        }
    });

    window.addEventListener('scroll', () => {
        requestAnimationFrame(changeMedia);
    });
    window.addEventListener('resize', changeMedia);
    changeMedia(); // Initial call
});
