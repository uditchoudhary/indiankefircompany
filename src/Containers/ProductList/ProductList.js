import ProductCard from "../../Components/ProductCard/ProductCard";
import "./ProductList.css";


const list = [
  {
    id: 11,
    category: "Kambucha",
    name: "Apple Cinnamon",
    image: "https://i.ibb.co/qsXQrn3/kapple.png",
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: "Rs 150",
    availableSize: ["300ml", "500ml", "1000ml"],

    reviews: "",
  },
  {
    id: 12,
    category: "Kambucha",
    name: "Tulsi ginger",
    image: "https://i.ibb.co/r543LtV/ktulsi.png",

    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: "Rs 150",
    availableSize: ["300ml", "500ml", "1000ml"],
    reviews: "",
  },
  {
    id: 13,
    category: "Kambucha",
    name: "Black Current",
    image: "https://i.ibb.co/fVRDR0w/kblack.png",

    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: "Rs 150",
    availableSize: ["300ml", "500ml", "1000ml"],

    reviews: "",
  },
  {
    id: 14,
    category: "Kambucha",
    name: "Orange",
    image: "https://i.ibb.co/p239bZG/korange.png",

    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: "Rs 150",
    availableSize: ["300ml", "500ml", "1000ml"],

    reviews: "",
  },
  {
    id: 21,
    category: "Kefir",
    name: "Mango",
    image: "https://i.ibb.co/p239bZG/korange.png",

    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: "Rs 150",
    availableSize: ["300ml", "500ml", "1000ml"],

    reviews: "",
  },
  {
    id: 22,
    category: "Kefir",
    name: "Cranberry",
    image: "https://i.ibb.co/p239bZG/korange.png",

    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: "Rs 150",
    availableSize: ["300ml", "500ml", "1000ml"],

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
    <div className="product-list">
      <div className="product-list-title d-flex justify-content-center p-3">
        Most Selling Products
      </div>
      <div className=" d-flex justify-content-around flex-wrap p-3">
        {list.map((item) => {
          return <ProductCard key={item.id} product={item} />;
        })}
      </div>
      <div className="allProducts-btn d-flex justify-content-center">
        <button className="btn btn-secondary my-2">See All Products</button>
      </div>
    </div>
  );
};
export default ProductList;
