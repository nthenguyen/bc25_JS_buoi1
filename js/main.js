//b1
//Dau vao: Tao bien soNgay
//Cho nguoi dung nhap soNgay
//Xu ly:
//Tao bien kq = soNgay * 100000
//Dau ra: Hien thi kq
document.getElementById("btnLuong").onclick = function () {
  var soNgay = document.getElementById("soNgay").value * 1;
  var kq = soNgay * 100000;
  var ketQua = "Lương nhân viên: " + kq;
  document.getElementById("thongBao1").innerHTML = ketQua;
  document.getElementById("thongBao1").classList.add("thong-Bao");
};

//b2
//Dau vao: Tao bien a,b,c,d,e
//Cho nguoi dung nhap a,b,c,d,e
//Xu ly:
//Tao bien kq = (a + b + c + d + e) / 5
//Dau ra: Hien thi kq
document.getElementById("btnTb").onclick = function () {
  var a = document.getElementById("mot").value * 1;
  var b = document.getElementById("hai").value * 1;
  var c = document.getElementById("ba").value * 1;
  var d = document.getElementById("bon").value * 1;
  var e = document.getElementById("nam").value * 1;
  var kq = (a + b + c + d + e) / 5;
  var ketQua = "Giá trị trung bình: " + kq;
  document.getElementById("thongBao2").innerHTML = ketQua;
  document.getElementById("thongBao2").classList.add("thong-Bao");
};

//b3
//Dau vao: Tao bien n;
//cho nguoi dung nhap n
//Xu ly:
//Tao bien kq = n * 23500
//Dau ra: hien thi kq
document.getElementById("btnDoi").onclick = function () {
  var n = document.getElementById("usd").value * 1;
  var kq = n * 23500;
  var ketQua = "Thành tiền VND: " + kq + "đ";
  document.getElementById("thongBao3").innerHTML = ketQua;
  document.getElementById("thongBao3").classList.add("thong-Bao");
};

//b4
//Dau vao: Tao bien cd, cr
//nhap cd, cr
//Xu ly:
//Tinh dien tich
//cd * cr
//Chu vi
//(cd + cr) * 2
//Dau ra: hien thi dt, cv
document.getElementById("btnDT").onclick = function () {
  var cd = document.getElementById("cd").value * 1;
  var cr = document.getElementById("cr").value * 1;
  var dt = cd * cr;
  var kq = "Diện tích hcn: " + dt;
  document.getElementById("thongBao4").innerHTML = kq;
  document.getElementById("thongBao4").classList.add("thong-Bao");
};
document.getElementById("btnCV").onclick = function () {
  var cd = document.getElementById("cd").value * 1;
  var cr = document.getElementById("cr").value * 1;
  var cv = (cd + cr) * 2;
  var kq = "Chu vi hcn: " + cv;
  document.getElementById("thongBao4").innerHTML = kq;
  document.getElementById("thongBao4").classList.add("thong-Bao");
};

//b5
//Tao bien n
//nhap so n
//Xu ly:
//Math.floor
//hang chuc: n / 10
//hang dv: n % 10
//Tao bien kq = chuc + dv
//Dau ra: hien thi kq
document.getElementById("btnTong").onclick = function () {
  var n = document.getElementById("num").value * 1;
  var chuc = Math.floor(n / 10);
  var dv = n % 10;
  var kq = chuc + dv;
  var ketQua = "Tổng 2 ký số: " + kq;
  document.getElementById("thongBao5").innerHTML = ketQua;
  document.getElementById("thongBao5").classList.add("thong-Bao");
};
