import ProductCard from "../../Components/ProductCard/ProductCard";
import "./ProductList.css";


const list = [
  {
    id: 11,
    category: "Probiotics",
    name: "Apple Cinnamon",
    image: "https://i.ibb.co/YXhf0tC/Kombucha-demo.png",
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: "Rs 150",
    availableSize: [1, 2, 3],
    reviews: "",
  },
  {
    id: 12,
    category: "Probiotics",
    name: "Tulsi ginger",
    image: "https://i.ibb.co/YXhf0tC/Kombucha-demo.png",

    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: "Rs 150",
    availableSize: [1, 2, 3],
    reviews: "",
  },
  {
    id: 13,
    category: "Probiotics",
    name: "Black Current",
    image: "https://i.ibb.co/YXhf0tC/Kombucha-demo.png",

    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: "Rs 150",
    availableSize: [1, 2, 3],
    reviews: "",
  },
  {
    id: 14,
    category: "Probiotics",
    name: "Orange",
    image: "https://i.ibb.co/YXhf0tC/Kombucha-demo.png",

    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: "Rs 150",
    availableSize: [1, 2, 3],
    reviews: "",
  },
  {
    id: 21,
    category: "Kefir",
    name: "Mango",
    image: "https://i.ibb.co/YXhf0tC/Kombucha-demo.png",

    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: "Rs 150",
    availableSize: [1, 2, 3],
    reviews: "",
  },
  {
    id: 22,
    category: "Kefir",
    name: "Cranberry",
    image: "https://i.ibb.co/YXhf0tC/Kombucha-demo.png",

    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: "Rs 150",
    availableSize: [1, 2, 3],
    reviews: "",
  },
  // {
  //   id: 23,
  //   category: "Kefir",
  //   name: "Fennel",
  //   image: "https://i.ibb.co/YXhf0tC/Kombucha-demo.png",

  //   details:
  //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  //   price: "Rs 150",
  //   availableSize: [1, 2, 3],
  //   reviews: "",
  // },
  // {
  //   id: 24,
  //   category: "Kefir",
  //   name: "Mojito",
  //   image: "https://i.ibb.co/YXhf0tC/Kombucha-demo.png",

  //   details:
  //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  //   price: "Rs 150",
  //   availableSize: [1, 2, 3],
  //   reviews: "",
  // },
];

const ProductList = () => {
  return (
    <div className="product-list d-flex justify-content-around flex-wrap p-3">
      {list.map((item) => {
        return <ProductCard key={item.id} product={item} />;
      })}
    </div>
  );
};
export default ProductList;
