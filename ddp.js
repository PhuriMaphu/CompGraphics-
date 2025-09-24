document.addEventListener("DOMContentLoaded", function() {
console.log("Hello World!!");
const canvas = document.querySelector("#myCanvas"); // ใช้ ID ของ canvas ที่ต้องการเข้าถึง
const ctx = canvas.getContext("2d"); // ใช้ 2D context สำหรับวาดกราฟิก


	ctx.fillStyle = "blue"; // กำหนดสีเติม
	ctx.fillRect(50, 50, 100, 100); // วาดสี่เหลี่ยมผืนผ้k
	ctx.strokeStyle = "#ff0000"; // กำหนดสีเส้นขอบ
	ctx.lineWidth = 5; // กำหนดความหนาของเส้น
	

	ctx.beginPath();
	ctx.arc(95, 50, 40, 0, 2 * Math.PI);
	ctx.fillStyle = "red";
	ctx.fill();
	ctx.lineWidth = 4;
	ctx.strokeStyle = "#ff0000";
	ctx.stroke();


});