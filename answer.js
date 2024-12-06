"use strict";
(function () {
    window.addEventListener("load", init);

    // Array soal dan jawaban
    let questions = [
        {
            text: "Yo Ndak tau Kok Tanya ____",
            options: ["Saya", "Jokowi", "Prabowo", "Anies"],
            correct: "Saya",
        },
        {
            text: "Ibukota Indonesia adalah ____",
            options: ["Surabaya", "Jakarta", "Bandung", "Medan"],
            correct: "Jakarta",
        },
        {
            text: "Gunung tertinggi di dunia adalah ____",
            options: ["Fuji", "Kilimanjaro", "Everest", "Alps"],
            correct: "Everest",
        },
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

        // Tampilkan hasil akhir
        cardBody.innerHTML = `
            <h5 class="card-title">Hasil</h5>
            <p class="card-text">Skor Anda: ${score} dari ${questions.length}</p>
            <button class="btn btn-dark" onclick="location.reload()">Ulangi</button>
        `;
    }
})();
