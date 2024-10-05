const orang = {
  nama: "Vera",
  alamat: "Jakarta",
  usia: 19,
  JK: "Perempuan",
  Kendaraan: {
    mobil: "Civic",
    mobil2: "Palisade",
    motor: "Beat",
    pesawat: "Boeing",
  },
};

console.log(orang.nama);
console.log(orang.alamat);
console.log(orang.usia);
console.log(orang.JK);

console.log(
  `Nama saya ${orang.nama}, saya berasal dari ${orang.alamat}, saya berjenis kelamin ${orang.JK}, dan saya berusia ${orang.usia}`
);

document.getElementById(
  "objek"
).innerHTML = `Nama saya ${orang.nama}, saya berasal dari ${orang.alamat}, saya berjenis kelamin ${orang.JK}, dan saya berusia ${orang.usia}`;

console.log(orang.Kendaraan.mobil);
console.log(orang.Kendaraan.mobil2);
console.log(orang.Kendaraan.motor);
console.log(orang.Kendaraan.pesawat);

const mahasiswa = {
  NamaDepan: "Vera",
  NamaBelakang: "Anggraini",
  NamaLengkap: function () {
    return `${this.NamaDepan} ${this.NamaBelakang}`;
  },
};

console.log(mahasiswa.NamaLengkap());

function MahasiswaSIK(nama, kelas, angkatan) {
  (this.nama = nama), (this.kelas = kelas), (this.angkatan = angkatan);
}

const Vera = new MahasiswaSIK("Vera Anggraini", "A", "2023");
const Fauziyah = new MahasiswaSIK("Fauziyah Salsabila", "A", "2023");

console.log(Vera.nama);
console.log(Vera.kelas);
console.log(Vera.angkatan);

console.log(Fauziyah.nama);
console.log(Fauziyah.kelas);
console.log(Fauziyah.angkatan);
