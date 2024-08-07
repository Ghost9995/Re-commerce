import { useEffect, useState } from "react";
import Card from "../../components/Card";
import axios from "axios";
import Loading from "../../components/Loading";

function HomePage() {
  const [products,setProducts] = useState(null);
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then((res) => {
      setProducts(res.data);
    });
  });
  return (
      <>
        {products ?  <div className="container grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-24">
              {products.map((product) => <Card key={product.id} {...product}/>)}
        </div>  : 
        <div className="mt-32">
          <Loading />
        </div>}
      </>
  );
};

export default HomePage;