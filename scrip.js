document.addEventListener("DOMContentLoaded", function() {
console.log("Hello World!!");
const canvas = document.querySelector("#myCanvas"); // ใช้ ID ของ canvas ที่ต้องการเข้าถึง
const ctx = canvas.getContext("2d"); // ใช้ 2D context สำหรับวาดกราฟิก

const img = new Image(); // สร้างออบเจ็กต์ภาพ
	img.src = "./31dke4F+cTL.jpg"; // กำหนด URL ของภาพ
	img.onload = function() { // เมื่อภาพโหลดเสร็จ
		ctx.drawImage(img, 400, 50, 400, 200); // วาดภาพบน canvas
	};

ctx.strokeStyle = "red";
ctx.lineWidth = 5;
ctx.fillStyle = "rgb(234, 249, 234)"; //สี่เหลี่ยม
ctx.strokeRect(300, 200, 150, 150);

ctx.strokeStyle = "red";
ctx.lineWidth = 5;
ctx.fillStyle = "rgb(234, 249, 234)"; //สี่เหลี่ยม
ctx.fillRect(0, 0, 150, 150);


ctx.strokeStyle = "red";
	// วาดเส้น
	ctx.beginPath(); // กำหนดให้เริ่มวาดเส้น
	ctx.arc(500,400, 50, 3, 10); // กำหนดลักษณะเส้นที่วาด arc คือเส้นโค้ง
	//ctx.closePath(); // คือทำให้มีการลงเส้นกลับมาที่จุดเริ่มต้น
	ctx.stroke(); // วาดเส้นตามที่กำหนด

    ctx.font = "20px Tahoma"; //ข้อความ
	ctx.fillStyle = "black";
	ctx.fillText("Hello",500,400);

	ctx.beginPath(); // เริ่มเส้นทางใหม่
	ctx.moveTo(0, 0); // จุดเริ่มต้นของเส้น
	ctx.lineTo(1000, 800); // จุดต่อไปของเส้น
	//ctx.lineTo(250, 450); // จุดสิ้นสุดของเส้น
	ctx.lineCap = "round"; // กำหนดรูปแบบปลายเส้น
	ctx.strokeStyle = "purple"; // กำหนดสีเส้น
	ctx.lineWidth = 8; // กำหนดความหนาของเส้น
	ctx.stroke(); // วาดเส้นตรง

});
