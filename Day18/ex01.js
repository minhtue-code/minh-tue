function tinhThue() {
    let thuNhap = prompt("Nhập thu nhập hàng tháng của bạn (VNĐ):");

    if (thuNhap <= 0) {
        alert("Vui lòng nhập số tiền hợp lệ!");
        return;
    }

    thuNhap = Number(thuNhap);
    let thue = 0;

    if (thuNhap <= 11000000) {
        thue = 0;
    } else if (thuNhap <= 25000000) {
        thue = (thuNhap - 11000000) * 0.05;
    } else if (thuNhap <= 50000000) {
        thue = (25000000 - 11000000) * 0.05 + (thuNhap - 25000000) * 0.1;
    } else if (thuNhap <= 80000000) {
        thue = (25000000 - 11000000) * 0.05 +
               (50000000 - 25000000) * 0.1 +
               (thuNhap - 50000000) * 0.2;
    } else {
        thue = (25000000 - 11000000) * 0.05 +
               (50000000 - 25000000) * 0.1 +
               (80000000 - 50000000) * 0.2 +
               (thuNhap - 80000000) * 0.3;
    }

    alert(
        "Thu nhập: " + thuNhap.toLocaleString() + " VNĐ " +
        "Thuế phải nộp: " + thue.toLocaleString() + " VNĐ"
    );
}

tinhThue();



