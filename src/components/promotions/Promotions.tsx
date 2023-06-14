import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../../api/gql/queries/product.query";
import { LowestContainer } from "../DealsAz/Lowest.styled";
import Card from "../common/Card/Card";
import { LoadingIcon } from "../common/Card/Card.styled";
import { CardsContainer, CardContainer, Sign } from "./Promotions.styled";
import { Link as RouterLink} from "react-router-dom";
import { Link } from "../common/Navbar/Navbar.styled";
 
interface Product {
    _id: string;
    availibility: string;
    brand: string;
    category: {
      _id: string;
    };
    description: string;
    discount: number;
    endDate: string;
    image: string;
    name: string;
    price: number;
    price_on_discount: number;
    quantity: number;
    startDate: string;
    link: string;
  }
  
const Promotions: React.FC = () => {
    const { loading, error, data } = useQuery(GET_PRODUCTS);
    const products: Product[] = data?.getProducts.filter(
      (product: Product) => product.discount < 0
    );

    if (loading) {
      return <LowestContainer><LoadingIcon/></LowestContainer>;
    }
  
    if (error) {
      console.log(error);
      return <CardsContainer><Sign> <RouterLink to="/signin"><Link>Sign in</Link></RouterLink> or <RouterLink to='/signup'><Link>Sign Up</Link></RouterLink> to see promotions</Sign></CardsContainer>;
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
      </CardsContainer>
    );
  };
  
  export default Promotions;
  