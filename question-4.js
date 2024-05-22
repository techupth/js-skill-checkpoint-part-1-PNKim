// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้
let minQuantityOfFruit = inventory[0].quantity;
let index = 0;
for (let i = 0; i < inventory.length; i++) {
  if (minQuantityOfFruit > inventory[i].quantity) {
    minQuantityOfFruit = inventory[i].quantity;
    index = i;
  }
}

console.log(
  `สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${inventory[index].name} ซึ่งมี ${minQuantityOfFruit} ชิ้น`
);
