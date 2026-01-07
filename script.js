// Reveal elements on scroll using Intersection Observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) e.target.classList.add('active');
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

// Active link highlighting on scroll
const sections = document.querySelectorAll('section');
const links = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach((sec) => {
    const sectionTop = sec.offsetTop;
    if (pageYOffset >= sectionTop - 120) {
      current = sec.getAttribute('id');
    }
  });

  links.forEach((a) => {
    a.classList.remove('active');
    if (a.getAttribute('href').includes(current)) {
      a.classList.add('active');
    }
  });
});

document.querySelectorAll('.value-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty('--x', `${x}px`);
    card.style.setProperty('--y', `${y}px`);
  });
});
// --- GANTIKAN DARI SINI ---

// 1. DATA UNTUK PAPARAN (Pastikan ID sepadan dengan data-id di HTML)
const exhibitionData = {
    "proto": {
        "title": "Zaman Proto-Sejarah",
        "image": "https://i.malaysiakini.com/815/09d0d53df272b714566417c8ef11fcf2.jpg", 
        "desc": "Penemuan Manusia Perak di Lembah Lenggong membuktikan kewujudan manusia purba yang mempunyai sistem pengebumian tersusun."
    },
    "kedah-tua": {
        "title": "Era Kedah Tua",
        "image": "https://www.utusan.com.my/wp-content/uploads/xx-2.jpg", 
        "desc": "Tamadun Sungai Batu merupakan tapak peleburan besi tertua di Asia Tenggara, membuktikan kemajuan teknologi nenek moyang kita."
    },
    "melaka": {
        "title": "Kesultanan Melaka",
        "image": "https://i.pinimg.com/1200x/7c/e1/8f/7ce18f185d40c751aa8845f9b6ef5ab3.jpg",
        "desc": "Melaka menjadi pelabuhan entrepot yang menghubungkan Timur dan Barat, dikenali sebagai 'The Venice of the East'."
    }
};

// 2. LOGIK MODAL
const modal = document.getElementById("artifactModal");
const closeBtn = document.querySelector(".close-btn");

// Fungsi untuk buka modal apabila kad diklik
document.querySelectorAll('.clickable-card').forEach(card => {
    card.style.cursor = "pointer"; // Tukar cursor jadi bentuk tangan
    card.addEventListener('click', () => {
        const id = card.getAttribute('data-id'); 
        const data = exhibitionData[id];

        if (data) {
            document.getElementById("modalTitle").innerText = data.title;
            document.getElementById("modalImage").src = data.image;
            document.getElementById("modalDescription").innerText = data.desc;
            modal.style.display = "block";
            document.body.style.overflow = "hidden"; // Elak skrol latar belakang
        }
    });
});

// Fungsi tutup modal
if(closeBtn) {
    closeBtn.onclick = () => {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    };
}

window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
};

// --- SEHINGGA KE SINI ---

closeBtn.onclick = () => modal.style.display = "none";
window.onclick = (event) => { if (event.target == modal) modal.style.display = "none"; }

// FUNGSI MAKLUM BALAS
document.getElementById('feedbackForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Elakkan page refresh

    // 1. Tunjukkan Modal Popup
    const modal = document.getElementById('thankYouModal');
    modal.style.display = 'block';

    // 2. Reset borang
    this.reset();
    
    // 3. Bersihkan mesej teks lama (jika ada)
    document.getElementById('formMessage').innerText = "";
});

// FUNGSI TUTUP POPUP
function closePopup() {
    document.getElementById('thankYouModal').style.display = 'none';
}

// TUTUP APABILA KLIK DI LUAR KOTAK
window.onclick = function(event) {
    const modal = document.getElementById('thankYouModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



