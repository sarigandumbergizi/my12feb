document.addEventListener("DOMContentLoaded", () => {
    // --- Elements ---
    const startOverlay = document.getElementById('start-overlay');
    const startBtn = document.getElementById('start-btn');

    const introSection = document.getElementById('intro');
    const video = document.getElementById('intro-video');
    const skipBtn = document.getElementById('skip-btn');

    const slideshowSection = document.getElementById('slideshow');
    const musicSlideshow = document.getElementById('music-slideshow');
    const photoWrapper = document.getElementById('photo-wrapper');

    const messageSection = document.getElementById('message');
    const musicFinale = document.getElementById('music-finale');

    // --- Configuration ---
    // User bisa menambah foto di sini. Pastikan nama file sesuai!
    const photos = [
        'assets/photos/photo1.jpg',
        'assets/photos/photo2.jpg',
        'assets/photos/photo3.jpg',
        'assets/photos/photo4.jpg',
        'assets/photos/photo5.jpg',
        'assets/photos/photo6.jpg',
        'assets/photos/photo7.jpg',
        'assets/photos/photo8.jpg',
        'assets/photos/photo9.jpg',
        'assets/photos/photo10.jpg',
        'assets/photos/photo11.jpg',
        'assets/photos/photo12.jpg',
        'assets/photos/photo13.jpg',
        'assets/photos/photo14.jpg',
        'assets/photos/photo15.jpg',
        'assets/photos/photo16.jpg',
        'assets/photos/photo17.jpg',
        'assets/photos/photo18.jpg',
        'assets/photos/photo19.jpg',
        'assets/photos/photo20.jpg',
        'assets/photos/photo21.jpg',
        'assets/photos/photo22.jpg',
        'assets/photos/photo23.jpg',
        'assets/photos/photo24.jpg',
        'assets/photos/photo25.jpg',
        'assets/photos/photo26.jpg',
        'assets/photos/photo27.jpg',
        'assets/photos/photo28.jpg',
        'assets/photos/photo29.jpg',
        'assets/photos/photo30.jpg',
        'assets/photos/photo31.jpg',
        'assets/photos/photo32.jpg',
        'assets/photos/photo33.jpg',
        'assets/photos/photo34.jpg',
        'assets/photos/photo35.jpg',
        'assets/photos/photo1.jpg',
        'assets/photos/photo2.jpg',
        'assets/photos/photo3.jpg',
        'assets/photos/photo4.jpg',
        'assets/photos/photo5.jpg',
        'assets/photos/photo6.jpg',
        'assets/photos/photo7.jpg',
        'assets/photos/photo8.jpg',
        'assets/photos/photo9.jpg',
        'assets/photos/photo10.jpg',
        'assets/photos/photo11.jpg',
        'assets/photos/photo12.jpg',
        'assets/photos/photo13.jpg',
        'assets/photos/photo14.jpg',
        'assets/photos/photo15.jpg',
        'assets/photos/photo16.jpg',
        'assets/photos/photo17.jpg',
        'assets/photos/photo18.jpg',
        'assets/photos/photo19.jpg',
        'assets/photos/photo20.jpg',
        'assets/photos/photo21.jpg',
        'assets/photos/photo22.jpg',
        'assets/photos/photo23.jpg',
        'assets/photos/photo24.jpg',
        'assets/photos/photo25.jpg',
        'assets/photos/photo26.jpg',
        'assets/photos/photo27.jpg',
        'assets/photos/photo28.jpg',
        'assets/photos/photo29.jpg',
        'assets/photos/photo30.jpg',
        'assets/photos/photo31.jpg',
        'assets/photos/photo32.jpg',
        'assets/photos/photo33.jpg',
        'assets/photos/photo34.jpg',
        'assets/photos/photo35.jpg',
        'assets/photos/photo1.jpg',
        'assets/photos/photo2.jpg',
        'assets/photos/photo3.jpg',
        'assets/photos/photo4.jpg',
        'assets/photos/photo5.jpg',
        'assets/photos/photo6.jpg',
        'assets/photos/photo7.jpg',
        'assets/photos/photo8.jpg',
        'assets/photos/photo9.jpg',
        'assets/photos/photo10.jpg',
        'assets/photos/photo11.jpg',
        'assets/photos/photo12.jpg',
        'assets/photos/photo13.jpg',
        'assets/photos/photo14.jpg',
        'assets/photos/photo15.jpg',
        'assets/photos/photo16.jpg',
        'assets/photos/photo17.jpg',
        'assets/photos/photo18.jpg',
        'assets/photos/photo19.jpg',
        'assets/photos/photo20.jpg',
        'assets/photos/photo21.jpg',
        'assets/photos/photo22.jpg',
        'assets/photos/photo23.jpg',
        'assets/photos/photo24.jpg',
        'assets/photos/photo25.jpg',
        'assets/photos/photo26.jpg',
        'assets/photos/photo27.jpg',
        'assets/photos/photo28.jpg',
        'assets/photos/photo29.jpg',
        'assets/photos/photo30.jpg',
        'assets/photos/photo31.jpg',
        'assets/photos/photo32.jpg',
        'assets/photos/photo33.jpg',
        'assets/photos/photo34.jpg',
        'assets/photos/photo35.jpg',
        'assets/photos/photo1.jpg',
        'assets/photos/photo2.jpg',
        'assets/photos/photo3.jpg',
        'assets/photos/photo4.jpg',
        'assets/photos/photo5.jpg',
        'assets/photos/photo6.jpg',
        'assets/photos/photo7.jpg',
        'assets/photos/photo8.jpg',
        'assets/photos/photo9.jpg',
        'assets/photos/photo10.jpg',
        'assets/photos/photo11.jpg',
        'assets/photos/photo12.jpg',
        'assets/photos/photo13.jpg',
        'assets/photos/photo14.jpg',
        'assets/photos/photo15.jpg',
        'assets/photos/photo16.jpg',
        'assets/photos/photo17.jpg',
        'assets/photos/photo18.jpg',
        'assets/photos/photo19.jpg',
        'assets/photos/photo20.jpg',
        'assets/photos/photo21.jpg',
        'assets/photos/photo22.jpg',
        'assets/photos/photo23.jpg',
        'assets/photos/photo24.jpg',
        'assets/photos/photo25.jpg',
        'assets/photos/photo26.jpg',
        'assets/photos/photo27.jpg',
        'assets/photos/photo28.jpg',
        'assets/photos/photo29.jpg',
        'assets/photos/photo30.jpg',
        'assets/photos/photo31.jpg',
        // Tambahkan sebanyak yang dimau
    ];
    let currentPhotoIndex = 0;
    const photoDuration = 3000; // Durasi per foto dalam ms (3 detik)
    let slideshowInterval;

    // --- Steps ---

    // 1. Start Button Click (Overlay)
    startBtn.addEventListener('click', () => {
        startOverlay.style.opacity = '0';
        setTimeout(() => {
            startOverlay.style.display = 'none';
            playIntro();
        }, 1000);
    });

    // 2. Play Intro Video
    function playIntro() {
        introSection.classList.remove('hidden');
        video.play().catch(e => {
            console.log("Autoplay blocked, user interaction needed handled by overlay.");
        });

        // Event listener ketika video selesai
        video.onended = () => {
            endIntro();
        };

        // Skip button
        skipBtn.addEventListener('click', () => {
            video.pause();
            endIntro();
        });
    }

    function endIntro() {
        // Fade out intro
        introSection.style.transition = "opacity 1s ease";
        introSection.style.opacity = "0";
        setTimeout(() => {
            introSection.classList.add('hidden');
            startSlideshow();
        }, 1000);
    }

    // 3. Slideshow Logic
    function startSlideshow() {
        slideshowSection.classList.remove('hidden');
        musicSlideshow.play(); // Play music

        // Generate img elements logic if needed, or just swap src
        // Kita gunakan swap src agar lebih simpel atau toggle class active
        // Reset Wrapper
        photoWrapper.innerHTML = '';

        // Buat elemen img untuk setiap foto (preload)
        photos.forEach((src, index) => {
            const img = document.createElement('img');
            img.src = src;
            if (index === 0) img.classList.add('active');
            photoWrapper.appendChild(img);
        });

        // Loop foto
        const images = photoWrapper.querySelectorAll('img');

        slideshowInterval = setInterval(() => {
            images[currentPhotoIndex].classList.remove('active');
            currentPhotoIndex++;

            if (currentPhotoIndex < images.length) {
                images[currentPhotoIndex].classList.add('active');
            } else {
                // Slideshow selesai
                clearInterval(slideshowInterval);
                endSlideshow();
            }
        }, photoDuration);
    }

    function endSlideshow() {
        // Fade out music
        let vol = 1;
        const fadeAudio = setInterval(() => {
            if (vol > 0) {
                vol -= 0.1;
                musicSlideshow.volume = vol.toFixed(1);
            } else {
                clearInterval(fadeAudio);
                musicSlideshow.pause();
            }
        }, 200);

        slideshowSection.style.transition = "opacity 1s ease";
        slideshowSection.style.opacity = "0";
        setTimeout(() => {
            slideshowSection.classList.add('hidden');
            startMessage();
        }, 1000);
    }

    // 4. Message Section
    function startMessage() {
        messageSection.classList.remove('hidden');
        musicFinale.volume = 1;
        musicFinale.play();

        // Animasi typewriter opsional atau animasi CSS sudah cukup
    }
});
