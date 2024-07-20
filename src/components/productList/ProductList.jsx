import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-text">
        <h1 className="pl-title">Create & inspire. It's Sky....</h1>
        <p className="pl-desc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae
          quia perferendis dolores cupiditate exercitationem qui sunt ipsam, nam
          eveniet rem ad, a laborum aliquid eaque facilis iusto est reiciendis
          quisquam.
        </p>
        <div className="pl-list">
          {products.map((item, index) => (
            <Product key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
