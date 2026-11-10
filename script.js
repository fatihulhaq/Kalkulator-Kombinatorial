// Fitur Ganti Tema Terang/Gelap
function ubahTema() {
    document.body.classList.toggle('dark-mode');
    let tombolTema = document.getElementById('btnTema');
    
    if (document.body.classList.contains('dark-mode')) {
        tombolTema.innerText = '☀️';
    } else {
        tombolTema.innerText = '🌙';
    }
}

// Algoritma Faktorial
function faktorial(bilangan) {
    if (bilangan === 0 || bilangan === 1) return 1;
    let hasil = 1;
    for (let i = 2; i <= bilangan; i++) {
        hasil *= i;
    }
    return hasil;
}

// Logika Kalkulator
function hitungKombinatorial() {
    let n = parseInt(document.getElementById('nilaiN').value);
    let r = parseInt(document.getElementById('nilaiR').value);
    
    let elemenPermutasi = document.getElementById('hasilPermutasi');
    let elemenKombinasi = document.getElementById('hasilKombinasi');
    let elemenLangkah = document.getElementById('langkahPenyelesaian');

    if (isNaN(n) || isNaN(r)) {
        alert("Mohon masukkan angka pada kedua kolom!");
        return;
    }
    
    if (n < 0 || r < 0) {
        alert("Nilai n dan r tidak boleh negatif!");
        return;
    }
    
    if (n < r) {
        alert("Syarat kombinatorial: Nilai n harus lebih besar atau sama dengan r (n >= r)!");
        elemenPermutasi.innerText = "-";
        elemenKombinasi.innerText = "-";
        elemenLangkah.style.display = "none";
        return;
    }

    let nFaktorial = faktorial(n);
    let nMinRFaktorial = faktorial(n - r);
    let rFaktorial = faktorial(r);

    let permutasi = nFaktorial / nMinRFaktorial;
    let kombinasi = nFaktorial / (rFaktorial * nMinRFaktorial);

    elemenPermutasi.innerText = permutasi;
    elemenKombinasi.innerText = kombinasi;

    // Menampilkan penjabaran langkah penyelesaian
    elemenLangkah.style.display = "block";
    
    // Hapus inline styling warna agar otomatis mengikuti Mode Terang/Gelap CSS
    elemenLangkah.innerHTML = `
        <strong>Langkah Penyelesaian:</strong><br>
        n = ${n}, r = ${r}<br><br>
        
        <strong>1. Menghitung Faktorial:</strong><br>
        n! = ${n}! = ${nFaktorial}<br>
        (n-r)! = (${n}-${r})! = ${n - r}! = ${nMinRFaktorial}<br>
        r! = ${r}! = ${rFaktorial}<br><br>
        
        <strong>2. Menghitung Permutasi P(${n},${r}):</strong><br>
        Rumus: n! / (n-r)!<br>
        = ${nFaktorial} / ${nMinRFaktorial} = <strong class="angka-highlight">${permutasi}</strong><br><br>
        
        <strong>3. Menghitung Kombinasi C(${n},${r}):</strong><br>
        Rumus: n! / (r! * (n-r)!)<br>
        = ${nFaktorial} / (${rFaktorial} * ${nMinRFaktorial}) = <strong class="angka-highlight">${kombinasi}</strong>
    `;
}