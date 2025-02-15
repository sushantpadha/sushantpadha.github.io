document.addEventListener('DOMContentLoaded', () => {
    console.log('loaded');

    document.querySelectorAll('.gallery-item-media').forEach(item => {
        console.log('found element');

        // Find the media element (img or video)
        const mediaEl = item.querySelector('img, video');

        // If no media element is found, skip the current item
        if (!mediaEl) return;

        const isVideo = (mediaEl.tagName === 'VIDEO');

        // Add click event listener to open media in a new tab
        item.addEventListener('click', function () {
            window.open(mediaEl.src, '_blank'); // Open in a new tab
        });

        // If the media is a video, add hover play/pause behavior
        if (isVideo) {
            console.log('found video element');
            
            // Add event listeners for mouse enter and leave
            item.addEventListener('mouseenter', () => {
                console.log('Mouse entered');
                mediaEl.play();  // Play the video when hovered
            });

            item.addEventListener('mouseleave', () => {
                mediaEl.pause(); // Pause the video when not hovered
            });
        }
    });
});
