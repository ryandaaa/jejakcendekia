"use strict";
document.addEventListener('DOMContentLoaded', function() {
    const videos = [
        {
            source: "https://www.youtube.com/embed/4H_oWdEd5e4?si=Vl3UEZTIuCBYUj3K",
            judul: "Kata Benda, Kata Sifat, dan Antonim",
            deskripsi: "Pelajari perbedaan kata benda dan kata sifat, serta temukan contoh antonim yang menarik. Video ini mencakup penjelasan sederhana dan contoh sehari-hari untuk memperkaya kosakata kamu!"
        },
        {
            source: "https://www.youtube.com/embed/JyWeiwWk3rc?si=b6PP0BhnGWDVO_GE",
            judul: "Ejaan: Penggunaan Huruf | Bahasa Indonesia",
            deskripsi: "Pelajari cara penggunaan huruf yang benar sesuai kaidah EYD dalam bahasa Indonesia. Video ini membahas aturan penulisan huruf kapital, huruf miring, dan teknik ejaan yang tepat untuk komunikasi formal dan informal."
        },
        {
            source: "https://www.youtube.com/embed/PL6MJP2F8hQ?si=xcTAHgs2o5oCwQ3D",
            judul: "Penggunaan Tanda Baca | Bahasa Indonesia",
            deskripsi: "Pelajari penggunaan tanda baca dengan penjelasan sederhana dan contoh sehari-hari untuk memperkaya kosakata kamu!"
        }
    ];

    // Fungsi untuk memilih video
    function selectVideo(index) {
        console.log('Memilih video:', index); // Debug log
        localStorage.setItem('selectedVideo', index);
        window.location.href = 'kontenvideo.html';
    }

    // Inisialisasi video di halaman konten video
    function initVideoPlayer() {
        const videoIndex = parseInt(localStorage.getItem('selectedVideo') || '0');
        console.log('Video index:', videoIndex); // Debug log

        const videoPlayer = document.getElementById('videoPlayer');
        const judulVideo = document.getElementById('judul');
        const deskripsiVideo = document.getElementById('deskripsi');

        if (videoPlayer && videos[videoIndex]) {
            videoPlayer.src = videos[videoIndex].source;
            judulVideo.textContent = videos[videoIndex].judul;
            deskripsiVideo.textContent = videos[videoIndex].deskripsi;
        }
    }

    // Tambahkan event listener ke tombol video di halaman awal
    const videoButtons = document.querySelectorAll('.video-button');
    videoButtons.forEach((button, index) => {
        button.addEventListener('click', function(e) {
            e.preventDefault(); // Cegah navigasi default
            selectVideo(index);
        });
    });

    // Jalankan inisialisasi video hanya di halaman konten video
    if (document.getElementById('videoPlayer')) {
        initVideoPlayer();
    }
});