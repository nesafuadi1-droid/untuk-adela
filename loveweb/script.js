// Smooth Scroll
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });

    // Panggil fungsi ketik HANYA jika yang diklik adalah 'surat'
    if (id === 'surat') {
        jalankanEfekKetik();
    }
}

// Interaksi tombol dengan gaya lebih cantik
function loveMessage() {
    // Menggunakan SweetAlert jika ingin sangat pro, 
    // tapi ini versi native yang sudah dimodifikasi agar tampilannya elegan
    const message = "❤️ Aku Sayang Kamu, Adela Kusumalia ❤️\n\nTerima kasih sudah hadir di hidup aku. Semoga kita selalu bersama. 🤍";
    
    // Efek sederhana untuk menunjukkan kasih sayang
    alert(message); 
}

// Hujan Hati (Optimasi)
function buatHati() {
    const hati = document.createElement("div");
    hati.classList.add("heart");
    hati.innerHTML = "❤️";
    
    // Random posisi, ukuran, dan durasi agar lebih natural
    hati.style.left = Math.random() * 100 + "vw";
    hati.style.fontSize = (Math.random() * 15 + 10) + "px"; // Ukuran bervariasi
    hati.style.opacity = Math.random() * 0.6 + 0.4;        // Transparansi bervariasi
    hati.style.animationDuration = (Math.random() * 3 + 4) + "s"; // Kecepatan variatif
    
    document.body.appendChild(hati);

    // Hapus elemen setelah selesai animasi
    setTimeout(() => {
        hati.remove();
    }, 7000);
}

// Menjalankan fungsi hujan hati setiap 400ms agar tidak terlalu ramai/berat
setInterval(buatHati, 400);
document.addEventListener('click', function(e) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '❤️';
    heart.style.left = e.pageX + 'px';
    heart.style.top = e.pageY + 'px';
    heart.style.animation = 'floatUp 2s linear forwards';
    document.body.appendChild(heart);
    
    setTimeout(() => { heart.remove(); }, 2000);
});
// Fungsi untuk menjalankan efek ketik
function jalankanEfekKetik() {
    const p = document.getElementById('teks-surat');
    if (!p) return; // Kalau tidak ketemu teks-surat, berhenti
    
    const teksAsli = p.innerText;
    p.innerText = "";
    let i = 0;

    function ketik() {
        if (i < teksAsli.length) {
            p.innerText += teksAsli.charAt(i);
            i++;
            setTimeout(ketik, 40); // Kecepatan mengetik
        }
    }
    ketik();
}

// Panggil fungsi ini saat tombol diklik
// Ubah bagian scrollToSection kamu jadi seperti ini:
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    if (id === 'surat') {
        jalankanEfekKetik();
    }
}