import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchAzizaProducts, fetchExistProducts, fetchPointMProducts, fetchWikiProducts } from "../../api/services/product.service";
import Card from "../common/Card/Card";
import Navbar from "../common/Navbar/Navbar";
import { CardContainer, CardsContainer } from "../promotions/Promotions.styled";

const CategoryPage :React.FC= () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      try {
        let fetchedProducts 
        switch (category) {
            case 'fashion':
              fetchedProducts = await fetchExistProducts();
              break;
            case 'electronics':
              fetchedProducts = await fetchWikiProducts();
              break;
            case 'supermarket':
              fetchedProducts = await fetchAzizaProducts();
              break;
            case 'lifestyle':
              fetchedProducts = await fetchPointMProducts();
              break;
            default:
              return;
          }
          setProducts(fetchedProducts);
        }
      
      catch (error) {
        console.error(error);
      }
    };

    fetchCategoryProducts();
  }, [category]);

  return (
  <>
    <Navbar/>
    <CardsContainer>
        {products.map((product) => (
          <CardContainer key={product._id}>
            <Card
              imageUrl={product.image}
              name={product.name}
              price={product.price}
              oldPrice={product.price_on_discount}
              discount={product.discount}
              link={product.link}
              priceDifference={product.price_on_discount - product.price}
            />
          </CardContainer>
        ))}
      </CardsContainer>
  </>
  );
};

export default CategoryPage;
