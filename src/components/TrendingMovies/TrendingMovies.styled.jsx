import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Item = styled.li`
  margin-bottom: 3px;
  background-color: lightgrey;
  border-radius: 5px;
  padding: 7px;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  font-size: 17px;
  color: black;

  }
`;
