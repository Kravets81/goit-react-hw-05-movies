import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
`;

export const Main = styled.main`
  display: flex;
`;

export const Navigation = styled.nav`
  background-color: lightgrey;
  padding: 7px;
  border-radius: 5px;
  margin-bottom: 15px;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  font-size: 25px;
  font-weight: bold;
  color: black;

  &.active {
    color: tomato;
  }

  :not(.active):hover,
  :not(.active):focus {
    text-decoration: underline;
  }
`;

export const List = styled.ul`
  padding: 0px;
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-bottom: 15 px;
`;
