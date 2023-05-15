import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BottomContainer, ButtonsContainer, Link, LinksContainer, Nav, SearchBar, Separator, TextContainer, TopContainer } from "./Navbar.styled";
import { Button } from "../Button/Button";
export const Navbar = () => {
  return (
    <Nav>
      <TopContainer>
        <TextContainer>Welcome!!Fi Promowafar !!عسلامة</TextContainer>
      </TopContainer>
       
                <SearchBar type="text" placeholder="Search  /  lawaj  /  ابحث" />
                <FontAwesomeIcon icon={faSearch} style={{ color:'#1AE216',position: 'absolute', top: '80px', left: '480px' }} />

                <LinksContainer>
        <Link href="#">Sign In</Link>
        <Separator />
        <Link href="#">Sign Up</Link>
      </LinksContainer>
      <BottomContainer>
        <ButtonsContainer>
          <Button 
          backgroundcolor="#F3F9FB" 
           hoverbackgroundcolor="#1AE216"
           hovercolor="white"
          >Mode</Button>
          <Button
          backgroundcolor="#F2F8FB"
          hoverbackgroundcolor="#1AE216"
          hovercolor="white"
          >
         Informatique
          </Button>
          <Button
          backgroundcolor="#F2F8FB"
          hoverbackgroundcolor="#1AE216"
          hovercolor="white"
          >
           Supermarché
          </Button>
          </ButtonsContainer>
      </BottomContainer>
    </Nav>
  );
}

export default Navbar;
