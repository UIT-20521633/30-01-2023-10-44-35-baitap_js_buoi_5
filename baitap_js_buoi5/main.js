// Quản lý tuyển sinh
var btnTinhDiem=document.getElementById("btnTinhDiem");
btnTinhDiem.onclick=function(){
    var txbDiemChuan=document.getElementById("txbDiemChuan").value *1;
    var txbDiem1=document.getElementById("txbDiem1").value *1;
    var txbDiem2=document.getElementById("txbDiem2").value *1;
    var txbDiem3=document.getElementById("txbDiem3").value *1;
    var KhuVuc=document.getElementById("KhuVuc").value *1;
    var DoiTuong=document.getElementById("DoiTuong").value *1;
    var ketqua="";
   
    var TongDiem=(txbDiem1+txbDiem2+txbDiem3)+(KhuVuc+DoiTuong);
    if(txbDiem1==0 || txbDiem2==0 || txbDiem3==0){
        ketqua="Rớt vì có điểm bằng 0";
    }else{
        if(TongDiem>=txbDiemChuan){
            ketqua="Đậu";
        }
        else{
            ketqua="Rớt vì không đủ điểm";
        }
    }
    var result="";
    var footerDiem=document.getElementById("footerDiem");
    result+="<p class='alert alert-success'>Thí sinh: "+ketqua+"<br>";
    result+="Tổng số điểm thi sinh đạt được: "+TongDiem+"</p>";
    footerDiem.innerHTML=result;
};

// Tính tiền điện
const Tien50kw=500;
const Tien50kwKe=650;
const Tien100kw=850
const Tien150kw=1100;
const TienConLai=1300;

var btnTinhTienDien=document.getElementById("btnTinhTienDien");
btnTinhTienDien.onclick=function(){
    var txbTen=document.getElementById("txbTen").value;
    var txbSoKw=document.getElementById("txbSoKw").value *1;
    var TongTienDien=0;
    if(txbSoKw<50){
        TongTienDien=txbSoKw*TienConLai;
    }else if(txbSoKw>=50 && txbSoKw<100){
        TongTienDien+=50*Tien50kw + ((txbSoKw-50)*TienConLai);
    }else if(txbSoKw>=100 && txbSoKw<200){
        TongTienDien+=50*Tien50kw + 50*Tien50kwKe + ((txbSoKw-100)*TienConLai);
    }else if(txbSoKw>=200 && txbSoKw<350){
        TongTienDien+=(50*Tien50kw) + (50*Tien50kwKe) +(100*Tien100kw) + ((txbSoKw-200)*TienConLai);
    }else if(txbSoKw>=350){
        TongTienDien+=(50*Tien50kw) + (50*Tien50kwKe) +(100*Tien100kw)+(150*Tien150kw) + ((txbSoKw-350)*TienConLai);
    }
    var result ="";
    var footerTienDien=document.getElementById("footerTienDien");
    result+="<p class='alert alert-success'>Tên khách hàng: "+txbTen+"<br>";
    result+="Số tiền điện khách hàng cần thanh toán: "+TongTienDien+"</p>";
    footerTienDien.innerHTML=result;
};

//Tính tiền thuế
var btnTinhTienThue=document.getElementById("btnTinhTienThue");
btnTinhTienThue.onclick=function(){
    var txbHoTen=document.getElementById("txbHoTen").value;
    var txbTongThuNhap=document.getElementById("txbTongThuNhap").value *1;
    var txbSoNguoi=document.getElementById("txbSoNguoi").value *1;
    var ThuNhapChiuThe=txbTongThuNhap- 4 - txbSoNguoi*1.6;
    var ThueThuNhapCaNhan=0;
    if(ThuNhapChiuThe <=60){
        ThueThuNhapCaNhan+=ThuNhapChiuThe*(5/100);
    }else if(ThuNhapChiuThe>60 && ThuNhapChiuThe<=120){
        ThueThuNhapCaNhan+=ThuNhapChiuThe*(10/100);
    }else if(ThuNhapChiuThe>120 && ThuNhapChiuThe<=210){
        ThueThuNhapCaNhan+=ThuNhapChiuThe*(15/100);
    }else if(ThuNhapChiuThe>210 && ThuNhapChiuThe<=384){
        ThueThuNhapCaNhan+=ThuNhapChiuThe*(20/100);
    }else if(ThuNhapChiuThe>384 && ThuNhapChiuThe<=624){
        ThueThuNhapCaNhan+=ThuNhapChiuThe*(25/100);
    }else if(ThuNhapChiuThe>624 && ThuNhapChiuThe<=960){
        ThueThuNhapCaNhan+=ThuNhapChiuThe*(30/100);
    }else if(ThuNhapChiuThe>960){
        ThueThuNhapCaNhan+=ThuNhapChiuThe*(35/100);
    }
    var result ="";
    var footerTienThue=document.getElementById("footerTienThue");
    result+="<p class='alert alert-success'>Họ và tên: "+txbHoTen+"<br>";
    result+="Thu nhập chịu thế :"+ThuNhapChiuThe+" Tr<br>";
    result+="Số tiền Thuế thu nhập cá nhân cần thanh toán: "+ThueThuNhapCaNhan+" Tr</p>";
    footerTienThue.innerHTML=result;
};

// Tính tiền cáp
//Cá nhân
const cnPhiXuly=4.5;
const cnPhiDichVu=20.5;
const cnThueKenhCaoCap=7.5;
//DoanhNghiep
const dnPhiXuly=15;
const dnPhiDichVu=75;
const dnPhiDichVuThem=5;
const dnThueKenhCaoCap=50;

var btnTinhTienCap=document.getElementById("btnTinhTienCap");
function showHiddenConnect(){
    var loaiKhachHang=document.getElementById("loaiKhachHang").value;
    var SoKetNoiGroup=document.getElementById("SoKetNoiGroup");
    if(loaiKhachHang==="CN"){
        SoKetNoiGroup.style.display="none";
    }else if(loaiKhachHang==="DN"){
        SoKetNoiGroup.style.display="block";
    }
}
function tinhHoaDonKhacHang() {
    var loaiKhachHang=document.getElementById("loaiKhachHang").value;
    var txbSoKetNoi=document.getElementById("txbSoKetNoi").value*1;
    var txbSoKenh=document.getElementById("txbSoKenh").value *1;
    var ketqua=0;
    var PhiDichVuDoanhNghiep=0;
    if(loaiKhachHang==="CN"){
        ketqua+=cnPhiXuly+cnPhiDichVu+(txbSoKenh*cnThueKenhCaoCap)
    }else if(loaiKhachHang==="DN"){
        PhiDichVuDoanhNghiep = dnPhiDichVu + (txbSoKetNoi>10?(txbSoKetNoi-10)*dnPhiDichVuThem:0);
        ketqua+=dnPhiXuly+PhiDichVuDoanhNghiep+(txbSoKenh*dnThueKenhCaoCap);
    }
    return ketqua;
}
btnTinhTienCap.onclick=function(){
    var txbMaKH=document.getElementById("txbMaKH").value;
    var loaiKhachHang=document.getElementById("loaiKhachHang").value;
    var txbSoKenh=document.getElementById("txbSoKenh").value *1;
    var txbSoKetNoi=document.getElementById("txbSoKetNoi").value*1;
    var ketqua=tinhHoaDonKhacHang();
    var result="";
    var footerTienCap=document.getElementById("footerTienCap");
    result+="<p class='alert alert-success'>Mã khách hàng: "+txbMaKH+"<br>";
    if(loaiKhachHang==="DN"){
        result+="Loại khách hàng: Doanh nghiệp"+"<br>";
        result+="Số kết nối của doanh nghiệp: "+txbSoKetNoi+"<br>";
    }else if(loaiKhachHang==="CN"){
        result+="Loại khách hàng: Nhà dân"+"<br>";
    }
    result+="Số kênh khách hàng đã thuê: "+txbSoKenh+"<br>";
    result+="Số tiền cáp khách hàng cần thanh toán: "+ketqua+" $</p>";
    footerTienCap.innerHTML=result;
};