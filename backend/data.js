import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Juan",
      email: "admin@example.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
    },
    {
      name: "Admin",
      email: "administrador@example.com",
      password: bcrypt.hashSync("root", 8),
      isAdmin: true,
    },
    {
      name: "Diego",
      email: "diego@example.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "Case para PC",
      category: "Case",
      image: "/images/p1.jpg",
      price: 30,
      countInStock: 10,
      brand: "Cooler Master",
      rating: 4.5,
      numReviews: 10,
      description:
        "Chasis Cooler Master con USB 3.0 y 2.0 Sin fuente de poder.",
    },
    {
      name: "Mouse Logitech",
      category: "Mice",
      image: "/images/p2.jpg",
      price: 45,
      countInStock: 20,
      brand: "Logitech",
      rating: 5,
      numReviews: 4,
      description: "Mouse inalambrico recargable Logitech MX Master 3",
    },
    {
      name: "Teclado Redragon",
      category: "Keyboard",
      image: "/images/p3.jpg",
      price: 60,
      countInStock: 0,
      brand: "Redragon",
      rating: 4.5,
      numReviews: 10,
      description: "Teclado Mecanico RGB Red Switch",
    },
    {
      name: "Headset Cooler Master",
      category: "Headset",
      image: "/images/p4.jpg",
      price: 30,
      countInStock: 15,
      brand: "Cooler Master",
      rating: 4.5,
      numReviews: 10,
      description: "Headset alambrico para PC, XBOX o PS4. Implementación 7.1",
    },
    {
      name: "Procesador Ryzen 5",
      category: "Proccess",
      image: "/images/p5.jpg",
      price: 30,
      countInStock: 5,
      brand: "Ryzen",
      rating: 4.5,
      numReviews: 10,
      description:
        "Procesador con tarjeta gráfica integrada. 4 núcelos y 3.7 GHz",
    },
    {
      name: "Monitor Asus 24inch",
      category: "Monitors",
      image: "/images/p6.jpg",
      price: 150,
      countInStock: 2,
      brand: "Asus",
      rating: 4.5,
      numReviews: 10,
      description: `Monitor Gamer 24". Frecuencia de 144Hz y tasa de refresco de 1ms`,
    },
  ],
};

export default data;
