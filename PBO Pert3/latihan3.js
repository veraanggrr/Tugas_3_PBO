class Sensor {
  constructor(nama, lokasi) {
    this.nama = nama;
    this.lokasi = lokasi;
    this._status = "Mati";
  }
  aktifkan() {
    this._status = "aktif";
    return `Sensor ${this.nama} di lokasi ${this.lokasi} telah diaktifkan`;
  }
  nonaktifkan() {
    this._status = "Mati";
    return `Sensor ${this.nama} di lokasi ${this.lokasi} telah dinonaktifkan`;
  }
  getStatus() {
    return `Sensor ${this.nama} di ${this.lokasi} sedang dalam kondisi ${this._status}`;
  }
}

class SensorLaut extends Sensor {
  constructor(nama, lokasi, Waktu, TinggiGelombang) {
    super(nama, lokasi);
    this.Waktu = Waktu;
    this.TinggiGelombang = TinggiGelombang;
  }
  getStatus() {
    let status = super.getStatus();
    if ((this._status = "aktif")) {
      status += `. Pada jam ${this.Waktu} WIB, tinggi gelombang mencapai ${this.TinggiGelombang}m. Data sedang dipantau secara aktif.`;
    }
    return status;
  }
}

const SensorGelombang = new SensorLaut("pasut sunda", "Merak", "15:00", 12);

console.log(SensorGelombang.aktifkan());

console.log(SensorGelombang.getStatus());
