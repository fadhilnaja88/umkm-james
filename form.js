const form = document.getElementById("webinarForm");

const nama = document.getElementById("nama");
const email = document.getElementById("email");
const hp = document.getElementById("hp");
const topik = document.getElementById("topik");
const syarat = document.getElementById("syarat");

function setError(input, msg) {
    input.nextElementSibling.textContent = msg;
}

function clearError(input) {
    input.nextElementSibling.textContent = "";
}

function validateNama() {
    if (nama.value.trim().length < 3) {
        setError(nama, "Nama minimal 3 karakter");
        return false;
    }
    clearError(nama);
    return true;
}

function validateEmail() {
    const val = email.value.trim();
    if (!val.includes("@") || val.endsWith("@yahoo.com")) {
        setError(email, "Email harus valid dan TIDAK boleh Yahoo");
        return false;
    }
    clearError(email);
    return true;
}

function validateHP() {
    if (!/^\d+$/.test(hp.value.trim())) {
        setError(hp, "No HP harus angka semua");
        return false;
    }
    clearError(hp);
    return true;
}

function validateTopik() {
    if (topik.value === "") {
        setError(topik, "Pilih salah satu topik");
        return false;
    }
    clearError(topik);
    return true;
}

function validateSyarat() {
    if (!syarat.checked) {
        setError(syarat.parentElement, "Harus menyetujui syarat & ketentuan");
        return false;
    }
    clearError(syarat.parentElement);
    return true;
}

// VALIDASI REAL-TIME
nama.addEventListener("input", validateNama);
email.addEventListener("input", validateEmail);
hp.addEventListener("input", validateHP);
topik.addEventListener("change", validateTopik);
syarat.addEventListener("change", validateSyarat);

// VALIDASI SAAT SUBMIT
form.addEventListener("submit", function(e) {
    e.preventDefault();

    const a = validateNama();
    const b = validateEmail();
    const c = validateHP();
    const d = validateTopik();
    const e2 = validateSyarat();

    if (a && b && c && d && e2) {
        alert("Pendaftaran berhasil!");
        form.reset();
    }
});
