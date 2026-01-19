// Câu 1: Khai báo constructor function Product để tạo đối tượng sản phẩm
function Product(id, name, price, quantity, category, isAvailable) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.quantity = quantity;
  this.category = category;
  this.isAvailable = isAvailable;
}

// Câu 2: Khởi tạo mảng products gồm ít nhất 5 sản phẩm, thuộc tối thiểu 2 danh mục khác nhau
const products = [
  new Product(1, "Laptop", 1000, 5, "Electronics", true),
  new Product(2, "Mouse", 25, 15, "Accessories", true),
  new Product(3, "Keyboard", 80, 0, "Accessories", false),
  new Product(4, "Monitor", 300, 3, "Electronics", true),
  new Product(5, "USB Cable", 10, 20, "Accessories", true),
  new Product(6, "Headphones", 150, 2, "Electronics", true)
];

console.log("===== PRODUCTS LIST =====");
products.forEach((product, index) => {
  console.log(`${index + 1}. ${product.name} - Category: ${product.category} - Price: ${product.price} - Quantity: ${product.quantity}`);
});

// Câu 3: Tạo mảng mới chỉ chứa: name, price của mỗi sản phẩm
console.log("\n===== CÂU 3: NAME AND PRICE =====");
const productNamePrice = products.map(product => ({
  name: product.name,
  price: product.price
}));
console.log(productNamePrice);

// Câu 4: Lọc ra các sản phẩm còn hàng trong kho (quantity > 0)
console.log("\n===== CÂU 4: PRODUCTS IN STOCK =====");
const inStockProducts = products.filter(product => product.quantity > 0);
console.log(inStockProducts.map(p => `${p.name} (${p.quantity} units)`));

// Câu 5: Kiểm tra xem có ít nhất một sản phẩm có giá trên 30 hay không
console.log("\n===== CÂU 5: CHECK IF ANY PRODUCT >= 30 =====");
const hasProductAbove30 = products.some(product => product.price >= 30);
console.log(`Has at least one product >= 30: ${hasProductAbove30}`);

// Câu 6: Kiểm tra xem tất cả sản phẩm thuộc danh mục "Accessories" có đang được bán (isAvailable = true) hay không
console.log("\n===== CÂU 6: CHECK IF ALL ACCESSORIES ARE AVAILABLE =====");
const allAccessoriesAvailable = products
  .filter(product => product.category === "Accessories")
  .every(product => product.isAvailable === true);
console.log(`All Accessories available: ${allAccessoriesAvailable}`);
const accessoriesStatus = products
  .filter(product => product.category === "Accessories")
  .map(p => `${p.name}: ${p.isAvailable ? "Available" : "Not available"}`);
console.log(accessoriesStatus);

// Câu 7: Tính tổng giá trị kho hàng. Giá trị kho = price × quantity
console.log("\n===== CÂU 7: TOTAL INVENTORY VALUE =====");
const totalInventoryValue = products.reduce((total, product) => {
  return total + (product.price * product.quantity);
}, 0);
console.log(`Total Inventory Value: ${totalInventoryValue}`);

// Câu 8: Dùng for...of Duyệt mảng products và in ra: Tên sản phẩm – Danh mục – Trạng thái
console.log("\n===== CÂU 8: FOR...OF - PRODUCT INFO =====");
for (const product of products) {
  const status = product.isAvailable ? "Available" : "Not Available";
  console.log(`${product.name} – ${product.category} – ${status}`);
}

// Câu 9: dùng for...in để:
// - In ra tên thuộc tính
// - In ra giá trị tương ứng
console.log("\n===== CÂU 9: FOR...IN - FIRST PRODUCT PROPERTIES =====");
console.log(`Product: ${products[0].name}`);
for (const property in products[0]) {
  console.log(`${property}: ${products[0][property]}`);
}

// Câu 10: Lấy danh sách tên các sản phẩm đang bán và còn hàng
console.log("\n===== CÂU 10: AVAILABLE PRODUCTS IN STOCK =====");
const availableInStock = products
  .filter(product => product.isAvailable === true && product.quantity > 0)
  .map(product => product.name);
console.log(availableInStock);
