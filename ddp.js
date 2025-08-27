document.addEventListener("DOMContentLoaded", function() {
console.log("Hello World!!");
const canvas = document.querySelector("#myCanvas"); // ใช้ ID ของ canvas ที่ต้องการเข้าถึง
const ctx = canvas.getContext("2d"); // ใช้ 2D context สำหรับวาดกราฟิก

ctx.strokeStyle = "red";
ctx.lineWidth = 5;
ctx.fillStyle = "rgb(234, 249, 234)"; //สี่เหลี่ยม
ctx.strokeRect(300, 200, 150, 150);

ctx.beginPath(); // เริ่มเส้นทางใหม่
	ctx.moveTo(100, 80); // จุดเริ่มต้นของเส้น
	ctx.lineTo(500, 400); // จุดต่อไปของเส้น
	ctx.lineTo(250, 450); // จุดสิ้นสุดของเส้น
	ctx.lineTo(100, 80); // จุดสิ้นสุดของเส้น
	ctx.lineCap = "round"; // กำหนดรูปแบบปลายเส้น
	ctx.strokeStyle = "purple"; // กำหนดสีเส้น
	ctx.lineWidth = 8; // กำหนดความหนาของเส้น
	ctx.stroke(); // วาดเส้นตรง

ctx.beginPath(); // เริ่มเส้นทางใหม่
	ctx.moveTo(1000, 400); // จุดเริ่มต้นของเส้น
	ctx.lineTo(1000, 0); // จุดต่อไปของเส้น บน
    
	ctx.moveTo(1000, 400); // จุดเริ่มต้นของเส้น
	ctx.lineTo(2000, 400); // จุดสิ้นสุดของเส้น ขวา

	ctx.moveTo(1000, 400); // จุดเริ่มต้นของเส้น
	ctx.lineTo(1000, 800); // จุดสิ้นสุดของเส้น ด้านล่าง

	ctx.moveTo(1000, 400); // จุดเริ่มต้นของเส้น
	ctx.lineTo(0, 400); // จุดสิ้นสุดของเส้น  ซ้าย

	ctx.strokeStyle = "purple"; // กำหนดสีเส้น
	ctx.lineWidth = 4; // กำหนดความหนาของเส้น
	ctx.stroke(); // วาดเส้นตรง

ctx.strokeStyle = "red";
	// วาดเส้น
	ctx.beginPath(); // กำหนดให้เริ่มวาดเส้น
	ctx.arc(1500,400, 50, 3, 10); // กำหนดลักษณะเส้นที่วาด arc คือเส้นโค้ง
	//ctx.closePath(); // คือทำให้มีการลงเส้นกลับมาที่จุดเริ่มต้น
	ctx.stroke(); // วาดเส้นตามที่กำหนด
});