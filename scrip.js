document.addEventListener("DOMContentLoaded", function() {
console.log("Hello World!!");
const canvas = document.querySelector("#myCanvas"); // ใช้ ID ของ canvas ที่ต้องการเข้าถึง
const ctx = canvas.getContext("2d"); // ใช้ 2D context สำหรับวาดกราฟิก
const img = new Image(); // สร้างออบเจ็กต์ภาพ
	img.src = "./31dke4F+cTL.jpg"; // กำหนด URL ของภาพ
	img.onload = function() { // เมื่อภาพโหลดเสร็จ
		ctx.drawImage(img, 400, 50, 400, 200); // วาดภาพบน canvas
	};
ctx.fillStyle = "rgb(45, 138, 8)";
ctx.fillRect(50, 50, 50, 50);
});
