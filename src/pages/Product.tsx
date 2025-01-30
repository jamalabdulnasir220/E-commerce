import { useContext } from "react";
import { useParams } from "react-router";
import { ShopContext } from "../context/ShopContext";
import BreadCrumbs from "../components/breadcrumbs/BreadCrumbs";
import ProductDisplay from "../components/productDisplay/ProductDisplay";

const Product = () => {
  const { productId } = useParams();
  const all_product = useContext(ShopContext);
  const product = all_product?.all_product.find(
    (e) => e.id === Number(productId)
  );

  return (
    <div>
      <BreadCrumbs product={product} />
      <ProductDisplay product={product}/>
    </div>
  );
};

export default Product;
