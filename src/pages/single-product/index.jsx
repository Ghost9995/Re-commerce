import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../../components/Card";
import Loading from "../../components/Loading";
export default function SingleProduct() {
    const {productId} = useParams();
    const [product,setProduct] = useState(null);
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products/'+productId).then((res) => {
      setProduct(res.data);
    });
  });
  return <div className="container mt-24">
    {product ? <Card {...product}/> : <Loading />}
  </div>;
};