document.addEventListener("DOMContentLoaded", function() {
console.log("Hello World!!");
const canvas = document.querySelector("#myCanvas"); // ใช้ ID ของ canvas ที่ต้องการเข้าถึง
const ctx = canvas.getContext("2d"); // ใช้ 2D context สำหรับวาดกราฟิก

const img = new Image(); // สร้างออบเจ็กต์ภาพ
	img.src = "./31dke4F+cTL.jpg"; // กำหนด URL ของภาพ
	img.onload = function() { // เมื่อภาพโหลดเสร็จ
		ctx.drawImage(img, 1200, 100, 500, 281); // วาดภาพบน canvas
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
	ctx.moveTo(100, 80); // จุดเริ่มต้นของเส้น
	ctx.lineTo(500, 400); // จุดต่อไปของเส้น
	ctx.lineTo(250, 450); // จุดสิ้นสุดของเส้น
	ctx.lineTo(100, 80); // จุดสิ้นสุดของเส้น
	ctx.lineCap = "round"; // กำหนดรูปแบบปลายเส้น
	ctx.strokeStyle = "purple"; // กำหนดสีเส้น
	ctx.lineWidth = 8; // กำหนดความหนาของเส้น
	ctx.stroke(); // วาดเส้นตรง

    ctx.beginPath(); // เริ่มเส้นทางใหม่
	ctx.moveTo(0, 0); // จุดเริ่มต้นของเส้น
	ctx.lineTo(2000, 800); // จุดต่อไปของเส้น
	ctx.lineCap = "round"; // กำหนดรูปแบบปลายเส้น
	ctx.strokeStyle = "orange"; // กำหนดสีเส้น
	ctx.lineWidth = 8; // กำหนดความหนาของเส้น
	ctx.stroke(); // วาดเส้นตรง

	ctx.beginPath(); // เริ่มเส้นทางใหม่
	ctx.moveTo(50, 500); // จุดเริ่มต้นของ curve
	ctx.quadraticCurveTo(150, 400, 250, 500); // วาด curve แบบ quadratic
	ctx.strokeStyle = "pink"; // กำหนดสีเส้น
	ctx.lineWidth = 4; // กำหนดความหนาของเส้น
	ctx.stroke(); // วาดเส้น curve

	ctx.beginPath(); // เริ่มเส้นทางใหม่
	ctx.moveTo(300, 500); // จุดเริ่มต้นของ curve
	ctx.bezierCurveTo(400, 600, 500, 400, 600, 500); // วาด curve แบบ bezier
	ctx.strokeStyle = "red"; // กำหนดสีเส้น
	ctx.lineWidth = 4; // กำหนดความหนาของเส้น
	ctx.stroke(); // วาดเส้น curve
	
/*ctx.beginPath(); // เริ่มเส้นทางใหม่
	ctx.moveTo(1200, 600); // จุดเริ่มต้นของ curve
	ctx.quadraticCurveTo(1000, 500, 1200, 700); // วาด curve แบบ quadratic
	ctx.strokeStyle = "red"; // กำหนดสีเส้น
	ctx.lineWidth = 4; // กำหนดความหนาของเส้น
	ctx.stroke(); // วาดเส้น curve

ctx.beginPath(); // เริ่มเส้นทางใหม่
	ctx.moveTo(1200, 600); // จุดริ่มต้นของ curve
	ctx.quadraticCurveTo(1340, 500, 1200, 700); // วาด curve แบบ quadratic
	ctx.strokeStyle = "red"; // กำหนดสีเส้น
	ctx.lineWidth = 4; // กำหนดความหนาของเส้น
	ctx.stroke(); // วาดเส้น curve*/
    ctx.save(); // บันทึกสถานะปัจจุบันของ context
	ctx.translate(1000, 400); // ย้ายจุดเริ่มต้นของการวาดไปที่ (400, 300)
	ctx.rotate(0); // หมุนกราฟิก 0 องศา (0 เรเดียน)
	ctx.scale(1, 1); // ขนาดกราฟิกเท่าเดิม

	ctx.fillStyle = "rgb(255, 0, 0)"; // กำหนดสีเขียวสำหรับการเติมสี
	ctx.strokeStyle = "rgb(0, 0, 0)"; // กำหนดสีเส้นขอบเป็นสีดำ
	ctx.beginPath(); // เริ่มเส้นทางใหม่
	ctx.moveTo(0, -50); // ย้ายจุดเริ่มต้นของเส้นทางไปที่ (-25, -25)
	ctx.bezierCurveTo(70, -90, 90, 20, 0, 50); // วาดเส้นโค้ง Bezier
	ctx.bezierCurveTo(-90, 20, -70, -90, 0, -50); // วาดเส้นโค้ง Bezier
	ctx.fill(); // เติมสีภายในเส้นทางที่กำหนด
	ctx.stroke(); // วาดเส้นตามเส้นทางที่กำหนด
    ctx.restore(); 
});
