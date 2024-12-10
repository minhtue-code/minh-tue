function tinhTienDien() {
    let SoDienSuDung = prompt("Nhập số kWh điện đã sử dụng:");

    if (SoDienSuDung <= 0) {
        alert("Vui lòng nhập số kWh hợp lệ!");
        return;
    }

    SoDienSuDung = Number(SoDienSuDung); 
    let tongTien = 0; 

    if (SoDienSuDung <= 50) {
        tongTien = SoDienSuDung * 1678;
    } else if (SoDienSuDung <= 100) {
        tongTien = 50 * 1678 + (SoDienSuDung - 50) * 1734;
    } else if (SoDienSuDung <= 200) {
        tongTien = 50 * 1678 + 50 * 1734 + (SoDienSuDung - 100) * 2014;
    } else if (SoDienSuDung <= 300) {
        tongTien = 50 * 1678 + 50 * 1734 + 100 * 2014 + (SoDienSuDung - 200) * 2536;
    } else if (SoDienSuDung <= 400) {
        tongTien = 50 * 1678 + 50 * 1734 + 100 * 2014 + 100 * 2536 + (SoDienSuDung - 300) * 2834;
    } else {
        tongTien = 50 * 1678 + 50 * 1734 + 100 * 2014 + 100 * 2536 + 100 * 2834 + (SoDienSuDung - 400) * 2927;
    }

    alert(
        "Số kWh đã sử dụng: " + SoDienSuDung + " kWh   " +
        "Tổng tiền điện: " + tongTien.toLocaleString() + " đồng"
    );
}

tinhTienDien();
