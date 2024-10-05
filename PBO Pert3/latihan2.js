class Kapal {
  constructor(nama, jenis, panjang, lebar) {
    this.nama = nama;
    this.jenis = jenis;
    this.panjang = panjang;
    this.lebar = lebar;
  }

  infoKapal() {
    return `Kapal ${this.nama} merupakan jenis ${this.jenis} yang berukuran ${this.panjang}m x ${this.lebar}m.`;
  }
}

// Subclass KapalPenumpang
class KapalPenumpang extends Kapal {
  constructor(nama, jenis, panjang, lebar, kapasitasPenumpang) {
    super(nama, jenis, panjang, lebar); // memanggil dari superclass
    this.kapasitasPenumpang = kapasitasPenumpang;
  }

  infoKapal() {
    return `${super.infoKapal()} Kapal ini memiliki kapasitas ${
      this.kapasitasPenumpang
    } orang.`;
  }
}

// Membuat isi dari KapalPenumpang
const kapalFerry = new KapalPenumpang(
  "Budiyono Siregar",
  "Ferry",
  200,
  100,
  600
);

// Subclass DataPenumpang
class DataPenumpang {
  constructor(NamaPenumpang, NIK, TempatTanggalLahir, kapal) {
    this.NamaPenumpang = NamaPenumpang;
    this.NIK = NIK;
    this.TempatTanggalLahir = TempatTanggalLahir;
    this.kapal = kapal; // Kapal yang ditumpangi oleh penumpang
  }

  infoPenumpang() {
    return `Nama: ${this.NamaPenumpang}, NIK: ${this.NIK}, Tempat/Tanggal Lahir: ${this.TempatTanggalLahir}. Kapal yang ditumpangi: ${this.kapal.nama}`;
  }
}

// Membuat isi dari DataPenumpang
const penumpang = new DataPenumpang(
  "Vera Anggraini",
  360218000000000,
  "Lebak, 4 September 2005",
  kapalFerry
);

// Kelas Tiket
class Tiket {
  constructor(nomorKursi, kelasTiket, penumpang) {
    this.nomorKursi = nomorKursi;
    this.kelasTiket = kelasTiket;
    this.penumpang = penumpang; // Penumpang yang memegang tiket
  }

  infoTiket() {
    return `Tiket untuk ${this.penumpang.NamaPenumpang}: Kelas ${this.kelasTiket}, Nomor Kursi: ${this.nomorKursi}.`;
  }
}

// Membuat isi dari Tiket
const tiketPenumpang = new Tiket("14A", "Business Class", penumpang);

// Cetak informasi penumpang
console.log(penumpang.infoPenumpang());

// Cetak informasi kapal
console.log(kapalFerry.infoKapal());

// Cetak informasi tiket
console.log(tiketPenumpang.infoTiket());
