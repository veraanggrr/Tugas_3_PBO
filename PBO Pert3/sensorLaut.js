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
      return `Sensor ${this.nama} di lokasi ${this.lokasi} sedang dalam kondisi ${this._status}`;
    }
  }
  
  const sensorPasut = new Sensor("pasut selat sunda", "merak");
  console.log(sensorPasut.aktifkan());
  console.log(sensorPasut.getStatus());
  