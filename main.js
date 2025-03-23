class Kendaraan {
    constructor(nama, tipe) {
        this.nama = nama;
        this.tipe = tipe;
    }

    getInfo() {
        return `${this.nama} (${this.tipe})`;
    }
}

class Pelanggan {
    constructor(nama, nomorTelepon) {
        this.nama = nama;
        this.nomorTelepon = nomorTelepon;
        this.kendaraanDisewa = null;
    }

    sewaKendaraan(kendaraan) {
        if (this.kendaraanDisewa) {
            console.log(`${this.nama} sudah menyewa kendaraan.`);
        } else {
            this.kendaraanDisewa = kendaraan;
            console.log(`${this.nama} menyewa ${kendaraan.getInfo()}.`);
        }
    }
}

class SistemManajemenTransportasi {
    constructor() {
        this.pelangganList = [];
    }

    tambahPelanggan(pelanggan) {
        this.pelangganList.push(pelanggan);
    }

    tampilkanPelangganMenyewa() {
        console.log("Daftar Pelanggan yang Menyewa Kendaraan:");
        this.pelangganList.forEach(pelanggan => {
            if (pelanggan.kendaraanDisewa) {
                console.log(`${pelanggan.nama} - ${pelanggan.nomorTelepon} - ${pelanggan.kendaraanDisewa.getInfo()}`);
            }
        });
    }
}
