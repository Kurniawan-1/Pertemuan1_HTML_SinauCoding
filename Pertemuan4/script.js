const totalBusTransjakarta = 10;
const busSedangLembur = 8;
const jumlahBusBeroprasi = 6;

for (let nomorBus = 1; nomorBus <= totalBusTransjakarta; nomorBus++) {
    const status = (nomorBus === busSedangLembur) 
        ? "sedang lembur" 
        : (nomorBus <= jumlahBusBeroprasi) 
        ? "sedang beroperasi dengan baik" 
        : "sedang tidak beroperasi";

    console.log(`Bus Transjakarta ${nomorBus} ${status}`);
}
