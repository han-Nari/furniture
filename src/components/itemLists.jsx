import product1 from "../assets/product-1.png";
import product2 from "../assets/product-2.png";
import product3 from "../assets/product-3.png";
import product4 from "../assets/chair.jpg";
import product5 from "../assets/chair2.jpg";
import product6 from "../assets/chair3.jpg";

export default function ItemLists() {
  const items = [
    {
      id: 1,
      name: "Nordic Chair",
      price: 50,
      img: product1,
    },

    {
      id: 2,
      name: "Kruzo Aero Chair",
      price: 70,
      img: product2,
    },

    {
      id: 3,
      name: "Ergonomic Chair",
      price: 48,
      img: product3,
    },

    {
      id: 4,
      name: "Oslo Wooden Armchair",
      price: 150,
      img: product4,
    },

    {
      id: 5,
      name: "Kruzo Aero Chair",
      price: 70,
      img: product5,
    },

    {
      id: 6,
      name: "Nordic Comfort Chair",
      price: 115,
      img: product6,
    },
  ];

  return { items };
}
