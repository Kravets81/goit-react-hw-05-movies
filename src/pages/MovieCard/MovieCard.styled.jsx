import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Button = styled(NavLink)`
  border-radius: 5px;
  width: 75px;
  background-color: tomato;
  text-decoration: none;
  padding: 5px;
  display: block;
  color: white;
  margin-bottom: 5px;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 15px;
`;

export const Image = styled.img`
  width: 250px;
  height=: auto;
`;

export const List = styled.ul`
  list-style: none;
`;

export const Item = styled.li`
  border-radius: 5px;
  width: 75px;
  background-color: tomato;
  text-decoration: none;
  padding: 5px;
  color: white;
  margin-bottom: 5px;
  text-align: center;
`;

export const ButtonLink = styled(NavLink)`
  text-decoration: none;
  display: block;
  color: white;
`;
