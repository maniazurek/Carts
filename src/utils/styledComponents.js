import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.h2`
  color: #2c2c31;
  margin-top: 0;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  color: #fff;
  background-color: #2c2c31;
  cursor: pointer;
  border: 1px solid #2c2c31;
  border-radius: 6px;
  padding: 5px;
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.35);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const Window = styled.div`
  width: 700px;
  height: 500px;
  position: relative;
  background: #fff;
  borderradius: 15px;
  padding: 25px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CloseButton = styled.div`
  cursor: pointer;
  position: absolute;
  top: 25px;
  right: 25px;
  font-size: 25px;
`;

export const CartsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  overflow-y: auto;
`;

export const SingleCartContainer = styled.div`
  background-color: #fff;
  border-radius: 5px;
  width: 1100px;
  height: 30px;
  padding: 10px 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  align-items: center;
`;

export const Title = styled.p`
  font-size: 15px;
  margin: 0;
`;

export const Description = styled.p`
  font-size: 15px;
`;

export const List = styled.p`
  font-size: 10px;
`;

export const MainLayout = styled.div`
  margin-left: 148px;
  padding: 55px;
`;

export const SideNavigation = styled.nav`
  width: 100px;
  height: 100%;
  background-color: #2c2c31;
  position: fixed;
  top: 0;
  left: 0;
  padding: 55px 24px;
`;

export const NavigationHeader = styled.h1`
  color: #fff;
  font-size: 18px;
  cursor: pointer;
  margin: 0;
`;

export const NavigationItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const NavLinkElement = styled(NavLink)`
  &:hover h3,
  &:focus h3,
  &.active h3 {
    text-decoration: underline;
  }
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const NavigationItem = styled.h3`
  color: #fff;
  font-size: 15px;
  margin: 0px;
  padding: px;
`;
