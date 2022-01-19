let barang = [
    {nama: "Beras", harga: 10000, jumlah: 5},
    {nama: "Gula", harga: 14000, jumlah: 5},
    {nama: "Telur", harga: 20000, jumlah: 2},
    {nama: "Minyak Goreng", harga: 9000, jumlah: 10}
]
let total=0

for (let index = 0; index < barang.length; index++) {
    total += barang[index].harga * barang[index].jumlah
    console.log(barang[index].nama + ": " + barang[index].harga * barang[index].jumlah)
}

console.log("total: "+ total)