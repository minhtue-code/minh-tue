function kiemTraTamGiac() {
    let a = prompt("Nhập cạnh a của tam giác:");
    let b = prompt("Nhập cạnh b của tam giác:");
    let c = prompt("Nhập cạnh c của tam giác:");

    if (a <= 0 || b <= 0 || c <= 0) {
        alert("Vui lòng nhập ba cạnh của tam giác và lớn hơn 0.");
        return;
    }

    a = Number(a);
    b = Number(b);
    c = Number(c);

    if (a + b > c && a + c > b && b + c > a) {
        alert("Đây là ba cạnh của một tam giác.");
    } else {
        alert("Đây không phải là ba cạnh của một tam giác.");
    }
}
kiemTraTamGiac();



