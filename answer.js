"use strict";
(function () {
    window.addEventListener("load", init);

    // Array soal dan jawaban
    let questions = [
        {
            text: "Presiden _____ pidato kenegaraan pada upacara HUT Kemerdekaan.",
            options: ["Membaca", "Membacakan", "Dibaca", "Dibacakan"],
            correct: "Membacakan",
        },
        {
            text: "Para siswa _____ kerja praktik di pabrik tersebut minggu depan.",
            options: ["Akan Melaksanakan", "Melaksanakan", "Telah Melaksanakan", "Sedang Melaksanakan"],
            correct: "Akan Melaksanakan",
        },
        {
            text: "Kami _____ rapat Himalkom dengan sangat serius.",
            options: ["Dihadiri", "Dihadirkan", "Menghadiri", "Menghadirkan"],
            correct: "Menghadiri",
        },
        {
            text: "Gedung museum _____ dengan arsitektur modern yang menakjubkan.",
            options: ["Dibangun", "Membangun", "Bangun", "Pembangunan"],
            correct: "Dibangun",
        },
        {
            text: "Tim peneliti _____ berbagai macam sampel untuk pengujian.",
            options: ["Analisis", "Dianalisis", "Penganalisisan", "Menganalisis"],
            correct: "Menganalisis",
        }
    ];

    let currentQuestionIndex = 0; // Indeks soal saat ini
    let score = 0; // Skor pengguna

    function init() {
        showQuestion(); // Tampilkan soal pertama
    }

    function showQuestion() {
        const question = questions[currentQuestionIndex];
        const titleElement = document.getElementById("question-title");
        const textElement = document.getElementById("question-text");
        const answerButtons = document.getElementById("answer-buttons");

        // Perbarui teks soal
        titleElement.textContent = `Soal #${currentQuestionIndex + 1}`;
        textElement.textContent = question.text;

        // Bersihkan tombol jawaban sebelumnya
        answerButtons.innerHTML = "";

        // Buat tombol jawaban
        question.options.forEach((option) => {
            const button = document.createElement("button");
            button.className = "btn btn-dark";
            button.textContent = option;

            // Tambahkan event listener ke tombol
            button.addEventListener("click", () => {
                selectAnswer(option);
            });

            // Tambahkan tombol ke container
            answerButtons.appendChild(button);
        });
    }

    function selectAnswer(selectedOption) {
        const question = questions[currentQuestionIndex];

        // Periksa apakah jawaban benar
        if (selectedOption === question.correct) {
            score++;
        }

        // Pindah ke soal berikutnya
        currentQuestionIndex++;

        // Tampilkan soal berikutnya atau hasil akhir
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showResult();
        }
    }

    function showResult() {
        const cardBody = document.querySelector(".card-body");
    
        // Kosongkan konten card-body sebelum menampilkan hasil
        cardBody.innerHTML = '';
    
        // Buat elemen hasil
        const resultTitle = document.createElement("h5");
        resultTitle.classList.add("card-title");
        resultTitle.textContent = "Hasil";
    
        const resultText = document.createElement("p");
        resultText.classList.add("card-text");
        resultText.textContent = `Skor Anda: ${score} dari ${questions.length}`;
    
        const restartButton = document.createElement("button");
        restartButton.classList.add("btn", "btn-dark");
        restartButton.textContent = "Ulangi";
        restartButton.addEventListener("click", () => {
            location.reload();  // Atau Anda bisa menggunakan logika lain untuk mereset kuis
        });
    
        // Tambahkan elemen-elemen ke dalam cardBody
        cardBody.appendChild(resultTitle);
        cardBody.appendChild(resultText);
        cardBody.appendChild(restartButton);
    }
    
})();
