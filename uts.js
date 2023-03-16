// nomor 1

class SorumMobil {
    constructor(merkMobil, hargaMobil, jenisMobil, tahun) {
        this.merek = merkMobil;
        this.harga = hargaMobil;
        this.jenis = jenisMobil;
        this.keluaran = tahun;
    }
    starter() {
        return ('Mesin Mobil ' + this.merek + ' Telah Menyala')
    }
    matikan() {
        return (`Mesin Mobil ${this.merek} Telah Mati`)
    }
}

var mobil1 = new SorumMobil("Toyota", 200000000, 'APV', '2019');
console.log(mobil1);
console.log(mobil1.starter());
console.log(mobil1.merek);
console.log(mobil1.keluaran);

var mobil2 = new SorumMobil("Grand Livina", 90000000, 'Sedan', '2015');
console.log(mobil2);
console.log(mobil2.matikan());
console.log(mobil2.merek);
console.log(mobil2.keluaran);


//  nomor2

function tombol() {
    document.getElementById('paragraf').innerHTML = '<p>Berhasil !!</p>'
}

var btnSatu = document.getElementById('click-1')
btnSatu.addEventListener('dblclick', function () {
    alert('tombol sudah Di klik sebanyak 2x')
})



function masuk() {
    document.getElementById("paragraf-2").Style.color = 'green';
}

function keluar() {
    document.getElementById("paragraf-2").Style.color = 'red';
}

function hapusSemua() {
    const bodi = document.getElementsByClassName('body')
    bodi.removeChild(bodi.firstElementChild)
}























