import "./product.css";

const Product = (props) => {
  const { item } = props;
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <a href={item.link} target="_blank" rel="noreferrer">
        <img src={item.img} alt="" className="p-img" />
      </a>
    </div>
  );
};

export default Product;
