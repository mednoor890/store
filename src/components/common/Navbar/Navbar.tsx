import React, { useEffect, useState } from "react";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "../Button/Button";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import {
  BottomContainer,
  ButtonsContainer,
  Link,
  LinksContainer,
  Nav,
  Promo,
  SearchBar,
  Separator,
  TextContainer,
  TopContainer,
} from "./Navbar.styled";

export const Navbar = () => {
  const [token, setToken] = useState(""); 
 // const [showSearchResults, setShowSearchResults] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    checkTokenValidity();
  }, []);

  const checkTokenValidity = () => {
    const authToken = Cookies.get("customerToken");
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
        console.error("Failed to decode token:", error);
        handleLogout();
      }
    }
  };
  const handleLogout = () => {
    Cookies.remove("customerToken");
    setToken("");
    navigate("/");
  };

 
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      const searchInput = event.currentTarget.value;
      //handleSearch(searchInput);
     navigate(`/search?query=${searchInput}`);

    }
  };

  const handleCategoryClick = async (category: string) => {
    try {
      const authToken = Cookies.get("customerToken");
      if (authToken) {
        const decodedToken = jwtDecode<{ sub: string }>(authToken);
        const userId = decodedToken.sub;
        if (category === "profile" && userId) {
          navigate(`/profile/${userId}`);
        } else {
          navigate(`/${category}`);
        }
      } else {
        
        navigate("/signin");
      }
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
      <SearchBar type="text" placeholder="Search / ابحث" onKeyDown={handleKeyPress} />
      <FontAwesomeIcon icon={faSearch} style={{ color: "#1AE216", position: "absolute", top: "80px", left: "480px" }} />
      <LinksContainer>
        {token ? (
          <>
          
            <Link onClick={() => handleCategoryClick("profile")}>View Profile</Link>
            <Separator/>
            <Link onClick={handleLogout}>Logout</Link>
            
          </>
        ) : (
          <>
            <RouterLink to="/signin"><Link>Sign In</Link></RouterLink>
            <Separator />
            <RouterLink to="/signup"><Link>Sign Up</Link></RouterLink>
          </>
        )}
      </LinksContainer>
      <BottomContainer>
        <ButtonsContainer>
          <Button
            backgroundcolor="#F3F9FB"
            hoverbackgroundcolor="#1AE216"
            hovercolor="white"
            onClick={() => handleCategoryClick("fashion")}
          >
            Fashion Man
          </Button>
          <Button
            backgroundcolor="#F2F8FB"
            hoverbackgroundcolor="#1AE216"
            hovercolor="white"
            onClick={() => handleCategoryClick("electronics")}
          >
            Electronics
          </Button>
          <Button
            backgroundcolor="#F2F8FB"
            hoverbackgroundcolor="#1AE216"
            hovercolor="white"
            onClick={() => handleCategoryClick("supermarket")}
          >
            Supermarket
          </Button>
          <Button
            backgroundcolor="#F2F8FB"
            hoverbackgroundcolor="#1AE216"
            hovercolor="white"
            onClick={() => handleCategoryClick("lifestyle")}
          >
            LifeStyle
          </Button>
          <Button
            backgroundcolor="#F2F8FB"
            hoverbackgroundcolor="#1AE216"
            hovercolor="white"
            onClick={() => handleCategoryClick("decoration")}
          >
            Decoration
          </Button>
        </ButtonsContainer>
      </BottomContainer>

    </Nav>
  );
};

export default Navbar;
