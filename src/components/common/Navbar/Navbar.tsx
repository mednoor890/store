import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { BottomContainer, ButtonsContainer, Link, LinksContainer, Nav, Promo, SearchBar, Separator, TextContainer, TopContainer } from "./Navbar.styled";
import { Button } from "../Button/Button";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode"; 
import { useEffect, useState } from "react";
import { fetchAzizaProducts, fetchExistProducts, fetchPointMProducts, fetchWikiProducts } from "../../../api/services/product.service";

export const Navbar = () => {
  const [token, setToken] = useState("");
  useEffect(() => {
    checkTokenValidity();
  }, []);
  
  const navigate = useNavigate();
  
  const checkTokenValidity = () => {
    const authToken = Cookies.get('customerToken');
    if (authToken) {
      try {
        const decodedToken = jwtDecode<{ exp: number }>(authToken);
        const currentTime = Math.floor(Date.now() / 1000); // Convert current time to seconds
  
        if (decodedToken.exp < currentTime) {
          handleLogout();
          return;
        }
  
        setToken(authToken);
      } catch (error) {
        console.error('Failed to decode token:', error);
        handleLogout();
      }
    }
  };
  
  
  const handleLogout = () => {
    Cookies.remove("customerToken");
    setToken("");
    navigate("/");
  };
  const handleCategoryClick = async (category:string) => {
    try {
      let products;

      // Make the API call based on the category
      switch (category) {
        case 'fashion':
          products = await fetchExistProducts();
          break;
        case 'electronics':
          products = await fetchWikiProducts();
          break;
        case 'supermarket':
          products = await fetchAzizaProducts();
          break;
        case 'lifestyle':
          products = await fetchPointMProducts();
          break;
        default:
          return;
      }

      console.log(products);
      navigate(`/${category}`);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Nav>
      <TopContainer>
        <TextContainer>Welcome!! Fi Promowafar !! عسلامة</TextContainer>
      </TopContainer>
      <RouterLink to="/"><Promo>PromoWAfar</Promo></RouterLink>
      <SearchBar type="text" placeholder="Search / ابحث" />
      <FontAwesomeIcon icon={faSearch} style={{ color: '#1AE216', position: 'absolute', top: '80px', left: '480px' }} />
      <LinksContainer>
        {token ? (
          <>
            <Link onClick={handleLogout}>Logout</Link>
          </>
        ) : (
          <>
            <RouterLink to="/signin">
              <Link>Sign In</Link>
            </RouterLink>
            <Separator />
            <RouterLink to="/signup">
              <Link>Sign Up</Link>
            </RouterLink>
          </>
        )}
      </LinksContainer>
      <BottomContainer>
        <ButtonsContainer>
          <Button
            backgroundcolor="#F3F9FB"
            hoverbackgroundcolor="#1AE216"
            hovercolor="white"
            onClick={()=>handleCategoryClick("fashion")}
          >
            Fashion man
          </Button>
          <Button
            backgroundcolor="#F2F8FB"
            hoverbackgroundcolor="#1AE216"
            hovercolor="white"
            onClick={()=>handleCategoryClick("electronics")}

          >
            Electronics
          </Button>
          <Button
            backgroundcolor="#F2F8FB"
            hoverbackgroundcolor="#1AE216"
            hovercolor="white"
            onClick={()=>handleCategoryClick("supermarket")}

          >
            Supermarket
          </Button>
          <Button
            backgroundcolor="#F2F8FB"
            hoverbackgroundcolor="#1AE216"
            hovercolor="white"
            onClick={()=>handleCategoryClick("lifestyle")} 
>
            lifeStyle
          </Button>
        </ButtonsContainer>
      </BottomContainer>
    </Nav>
  );
};

export default Navbar;
