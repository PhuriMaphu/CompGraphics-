document.addEventListener("DOMContentLoaded", function() {
console.log("Hello World!!");
const canvas = document.querySelector("#myCanvas"); // ใช้ ID ของ canvas ที่ต้องการเข้าถึง
const ctx = canvas.getContext("2d"); // ใช้ 2D context สำหรับวาดกราฟิก

const img = new Image(); // สร้างออบเจ็กต์ภาพ
	img.src = "./31dke4F+cTL.jpg"; // กำหนด URL ของภาพ
	/*img.onload = function() { // เมื่อภาพโหลดเสร็จ
		ctx.drawImage(img, 1200, 100, 500, 281); // วาดภาพบน canvas
	};*/





	let angle = 0; // มุมเริ่มต้นสำหรับการหมุน
	let lastTime = 0; // ตัวแปรสำหรับเก็บเวลาของเฟรมก่อนหน้า
	let fps; // ตัวแปรสำหรับเก็บค่าเฟรมต่อวินาที (FPS)
	let xx = 0;
	let yy = 400;
let direction = 1;
	// ฟังก์ชัน animate จะถูกเรียกใช้เพื่อวาดกราฟิกใหม่ในแต่ละเฟรม
	function animate() {
		ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); // ล้าง canvas
		// คำนวณค่าเฟรมต่อวินาที (FPS)
		const currentTime = performance.now(); // รับเวลาปัจจุบัน
		const deltaTime = currentTime - lastTime; // คำนวณเวลาที่ผ่านไปตั้งแต่เฟรมก่อนหน้า
		lastTime = currentTime; // อัปเดตเวลาของเฟรมก่อนหน้า
		fps = 1000 / deltaTime; // คำนวณค่าเฟรมต่อวินาที (FPS) 1000 มิลลิวินาทีหารด้วยเวลาที่ผ่านไปในมิลลิวินาที
		

		ctx.save(); // บันทึกสถานะปัจจุบันของ context
		ctx.translate(10, 20); // ย้ายจุดเริ่มต้นของการวาดไปที่ (10, 20)
		ctx.font = "20px Tahoma";
		ctx.fillStyle = "black";
		ctx.fillText(`FPS: ${fps.toFixed(2)}`, 0, 0);
		ctx.restore(); // คืนสถานะ context กลับไปยังสถานะที่บันทึกไว้ก่อนหน้านี้

		ctx.save(); // บันทึกสถานะปัจจุบันของ context
		ctx.translate(xx, yy); // ย้ายจุดเริ่มต้นของการวาดไปที่ (400, 300)
		ctx.rotate(angle); // หมุนกราฟิกตามมุมที่กำหนด 
		ctx.scale(1, 1); // ขนาดกราฟิกเท่าเดิม
		ctx.drawImage(img, -250, -140.5, 500, 281);
		ctx.restore(); // คืนสถานะ context กลับไปยังสถานะที่บันทึกไว้ก่อนหน้านี้


    	if (xx >= canvas.width) direction = -1;  
    	else if (xx <= 0) direction = 1;
    	xx += 10 * direction;
		
	

		angle += 0.02; // เพิ่มมุมเพื่อให้เกิดการหมุนในเฟรมถัดไป
		
		requestAnimationFrame(animate); // เรียกใช้ฟังก์ชัน animate อีกครั้งเพื่อสร้างการเคลื่อนไหวต่อเนื่อง
	}

	animate(); // เริ่มการเคลื่อนไหว
});
