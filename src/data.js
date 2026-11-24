// Basic product data. Prices are in Indian Rupees.
export const brands = ["HP", "Lenovo", "Asus", "Dell", "Acer", "Apple"];

export const products = [
  { id: 1, brand: "HP", name: "HP Pavilion 15", price: 54990, cpu: "Intel Core i5 12th Gen", ram: "16 GB", storage: "512 GB SSD", screen: '15.6" FHD', color: "#0096d6" },
  { id: 2, brand: "HP", name: "HP 255 G9", price: 32990, cpu: "AMD Ryzen 3", ram: "8 GB", storage: "256 GB SSD", screen: '15.6" HD', color: "#0b6fa4" },
  { id: 3, brand: "Lenovo", name: "Lenovo IdeaPad Slim 3", price: 41990, cpu: "Intel Core i3 12th Gen", ram: "8 GB", storage: "512 GB SSD", screen: '15.6" FHD', color: "#e2231a" },
  { id: 4, brand: "Lenovo", name: "Lenovo ThinkPad E14", price: 68990, cpu: "Intel Core i5 13th Gen", ram: "16 GB", storage: "512 GB SSD", screen: '14" FHD', color: "#2b2b2b" },
  { id: 5, brand: "Asus", name: "Asus VivoBook 15", price: 44990, cpu: "Intel Core i5 12th Gen", ram: "8 GB", storage: "512 GB SSD", screen: '15.6" FHD', color: "#00539b" },
  { id: 6, brand: "Asus", name: "Asus TUF Gaming F15", price: 74990, cpu: "Intel Core i5 + RTX 3050", ram: "16 GB", storage: "512 GB SSD", screen: '15.6" 144Hz', color: "#d9a400" },
  { id: 7, brand: "Dell", name: "Dell Inspiron 15", price: 47990, cpu: "Intel Core i5 12th Gen", ram: "8 GB", storage: "512 GB SSD", screen: '15.6" FHD', color: "#007db8" },
  { id: 8, brand: "Dell", name: "Dell Vostro 3510", price: 39990, cpu: "Intel Core i3 11th Gen", ram: "8 GB", storage: "256 GB SSD", screen: '15.6" FHD', color: "#4a5568" },
  { id: 9, brand: "Acer", name: "Acer Aspire 7", price: 52990, cpu: "AMD Ryzen 5", ram: "16 GB", storage: "512 GB SSD", screen: '15.6" FHD', color: "#83b81a" },
  { id: 10, brand: "Apple", name: "MacBook Air M2", price: 99990, cpu: "Apple M2", ram: "8 GB", storage: "256 GB SSD", screen: '13.6" Retina', color: "#8e8e93" },
];

export const formatPrice = (n) => "₹" + n.toLocaleString("en-IN");
