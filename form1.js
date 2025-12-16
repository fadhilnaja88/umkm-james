import { formatPesan } from "./utils.js";

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const nama = document.getElementById("nama").value;
        const kategori = document.getElementById("Kategori").value;
        const pesan = document.getElementById("pesan").value;

        const hasil = document.getElementById(nama, kategori, pesan);
        alert(hasil);
    });
});