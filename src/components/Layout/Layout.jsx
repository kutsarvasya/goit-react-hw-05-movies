import { Outlet } from 'react-router-dom';

import { Container, Header } from './Layout.styled';
import Navigate from 'components/Navigate/Navigate';
import { Suspense } from 'react';

function Layout() {
  return (
    <Container>
      <Header>
        <Navigate />
      </Header>
      <main>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
}

export default Layout;
