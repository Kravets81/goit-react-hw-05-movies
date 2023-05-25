import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Navigation, Link, List, Main } from './Layout.styled';

export default function Layout() {
  return (
    <Container>
      <header>
        <Navigation>
          <List>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
          </List>
        </Navigation>
      </header>
      <Main>
        <Suspense>
          <Outlet />
        </Suspense>
      </Main>
    </Container>
  );
}
