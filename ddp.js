document.addEventListener("DOMContentLoaded", function() {
console.log("Hello World!!");
const canvas = document.querySelector("#myCanvas"); // ใช้ ID ของ canvas ที่ต้องการเข้าถึง
const ctx = canvas.getContext("2d"); // ใช้ 2D context สำหรับวาดกราฟิก

ctx.fillStyle = "red";
ctx.fillRect(0, 0, 10, 20);  // สี่เหลี่ยมสีแดง fillRect(x, y, width, height)

ctx.moveTo(0, 0);    //วาดเส้นตรง
ctx.lineTo(1000, 500);
ctx.lineWidth = 10; //ความหนาเส้น
ctx.strokeStyle = "blue"; //สีเส้น
ctx.lineCap = "round"; //รูปแบบปลายเส้น  ("butt", "round" or "square")
ctx.stroke();



ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);  // วาดวงกลม (x, y, radius, มุมเริ่ม, มุมจบ)
ctx.fillStyle = "green";
ctx.fill();     // เติมสีวงกลม
ctx.stroke();

ctx.fillStyle = "rgba(45, 218, 10, 1)";
ctx.strokeStyle = "black";
ctx.moveTo(1000, 500);
ctx.lineTo(0, 500);
//ctx.lineTo(0, 1000);
//ctx.lineTo(1000, 1000);
ctx.moveTo(1000, 500);
ctx.lineTo(1000, 1000);
ctx.fill();
ctx.stroke();

function grass() {
for (let i = 0; i < 10; i++) {
let x = 0;
let y = 300;
ctx.translate(x, y);
ctx.moveTo(0, 0);    //วาดเส้นตรง
ctx.lineTo(-150, 150);
ctx.stroke();
x+=1;
 }
}
grass();
});