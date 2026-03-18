import React, { useState } from "react";
import { Link as LinkR } from "react-router-dom";
import styled, { useTheme } from "styled-components";
import { Bio } from "../data/constants";
import { MenuRounded } from "@mui/icons-material";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";

const Nav = styled.div`
  background-color: ${({ theme }) => theme.bg};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  color: white;
`;
const ColorText = styled.div`
  color: ${({ theme }) => theme.primary};
  font-size: 32px;
`;

const NavbarContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
`;
const NavLogo = styled(LinkR)`
  display: flex;
  align-items: center;
  width: 80%;
  padding: 0 6px;
  font-weight: 500;
  font-size: 18px;
  text-decoration: none;
  color: inherit;
`;

const NavItems = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 0 6px;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const ButtonContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const GithubButton = styled.a`
  border: 1px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.6s ease-in-out;
  text-decoration: none;
  &:hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text_primary};
  }
`;

const MobileIcon = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.text_primary};
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 16px;
  padding: 0 6px;
  list-style: none;
  width: 100%;
  padding: 12px 40px 24px 40px;
  background: ${({ theme }) => theme.card_light + 99};
  position: absolute;
  top: 80px;
  right: 0;

  transition: all 0.6s ease-in-out;
  transform: ${({ isOpen }) =>
    isOpen ? "translateY(0)" : "translateY(-100%)"};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  z-index: ${({ isOpen }) => (isOpen ? "1000" : "-1000")};
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <ColorText>&lt;</ColorText>Sabbir
          <div style={{ color: theme.primary }}>/</div>Ahmed
          <ColorText>&gt;</ColorText>
        </NavLogo>

        <MobileIcon onClick={() => setIsOpen(!isOpen)}>
          <MenuRounded style={{ color: "inherit" }} />
        </MobileIcon>

        <NavItems>
          <NavLink href="#About">{t.about}</NavLink>
          <NavLink href="#Skills">{t.skills}</NavLink>
          <NavLink href="#Experience">{t.experience}</NavLink>
          <NavLink href="#Projects">{t.projects}</NavLink>
          <NavLink href="#Education">{t.education}</NavLink>
        </NavItems>

        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <NavLink onClick={() => setIsOpen(!isOpen)} href="#About">
              {t.about}
            </NavLink>
            <NavLink onClick={() => setIsOpen(!isOpen)} href="#Skills">
              {t.skills}
            </NavLink>
            <NavLink onClick={() => setIsOpen(!isOpen)} href="#Experience">
              {t.experience}
            </NavLink>
            <NavLink onClick={() => setIsOpen(!isOpen)} href="#Projects">
              {t.projects}
            </NavLink>
            <NavLink onClick={() => setIsOpen(!isOpen)} href="#Education">
              {t.education}
            </NavLink>
            <GithubButton
              href={Bio.github}
              target="_Blank"
              style={{
                background: theme.primary,
                color: theme.text_primary,
              }}
            >
              {t.githubProfile}
            </GithubButton>
            <GithubButton
              as="button"
              onClick={toggleLanguage}
              style={{
                background: "transparent",
                cursor: "pointer",
              }}
            >
              {language === "en" ? "日本語" : "EN"}
            </GithubButton>
          </MobileMenu>
        )}

        <ButtonContainer>
          <GithubButton href={Bio.github} target="_Blank">
            {t.githubProfile}
          </GithubButton>
          <GithubButton
            as="button"
            onClick={toggleLanguage}
            style={{
              background: "transparent",
              cursor: "pointer",
              marginLeft: "12px",
            }}
          >
            {language === "en" ? "日本語" : "EN"}
          </GithubButton>
        </ButtonContainer>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
