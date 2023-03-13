import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Button = styled.button`
  color: #fff;
  background-color: #2c2c31;
  cursor: pointer;
  border: 1px solid #2c2c31;
  border-radius: 6px;
  padding: 5px;
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
  padding: 15px;
  border-radius: 10px;
`;

export const CloseButton = styled.div`
  cursor: pointer;
  position: absolute;
  top: 15px;
  right: 15px;
`;

export const CartsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
`;

export const SingleCartContainer = styled.div`
  background-color: #fff;
  border-radius: 5px;
  width: 100px;
  height: 200px;
  padding: 10px 30px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
`;

export const TextContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const Title = styled.p`
  font-size: 15px;
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
