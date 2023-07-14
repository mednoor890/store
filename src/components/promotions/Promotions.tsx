import { useQuery,  } from "@apollo/client";
import { GET_PRODUCTS } from "../../api/gql/queries/product.query";
import { LowestContainer } from "../DealsAz/Lowest.styled";
import Card from "../common/Card/Card";
import { LoadingIcon } from "../common/Card/Card.styled";
import { CardsContainer, CardContainer, Sign, Div } from "./Promotions.styled";
import { Link as RouterLink, useNavigate, useParams } from "react-router-dom";
import { Link } from "../common/Navbar/Navbar.styled";
import { Product } from "../../types/Products";
import { useState } from "react";
import { Button } from "../common/Button/Button";

const Promotions: React.FC = () => {
  const { page: pageParam='1' } = useParams<{ page: string | undefined}>();
  const [currentPage, setCurrentPage] = useState(parseInt(pageParam));
  const limit = 52;
  const navigate = useNavigate();
  const { loading, error, data } = useQuery(GET_PRODUCTS, {
    variables: {
      page:currentPage,
      limit,
    },
  });

  const products: Product[] = data?.getProducts.filter(
    (product: Product) => product.discount < 0
  );

  const nextPage = () => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    navigate(`/promotions/${nextPage}`);
  };
  const prevPage = () => {
    if (currentPage > 1) {
      const prevPage = currentPage - 1;
      setCurrentPage(prevPage);
      navigate(`/promotions/${prevPage}`);
    }
  };
  
  const hasNextPage = products && products.length <= limit;

  if (loading) {
    return <LowestContainer><LoadingIcon/></LowestContainer>;
  }
  if (error) {
    console.log(error);
    return (
      <CardsContainer>
        <Sign>
          <RouterLink to="/signin">
            <Link>Sign in</Link>
          </RouterLink>{" "}
          or{" "}
          <RouterLink to="/signup">
            <Link>Sign Up</Link>
          </RouterLink>{" "}
          to see promotions
        </Sign>
      </CardsContainer>
    );
  }

  return (
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
      <Div>
        {currentPage > 1 && (
          <Button backgroundcolor="#F5F5F5" hoverbackgroundcolor="#1AE216" color="black" position="absolute" hovercolor="F5F5F5" left="2px" top="0px"  onClick={prevPage}>
            Previous
          </Button>
        )}
        
        {hasNextPage&& (
          <Button
            backgroundcolor="#F5F5F5"
            hoverbackgroundcolor="#1AE216"
            color="black"
            hovercolor="F5F5F5"
            position="absolute"
            left="140px"
            top="0"
            onClick={nextPage}
          >
            Next
          </Button>
        )}
      </Div>
    </CardsContainer>
        
  );
};

export default Promotions;
