import styled from "styled-components";

export const Button = styled.button`
  color: #000;
  background-color: #20b2aa;
  cursor: pointer;
  border: 1px solid #20b2aa;
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
  margin: 50px;
`;
