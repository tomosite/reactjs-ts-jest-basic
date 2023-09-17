import React from 'react';
import { Container } from 'semantic-ui-react';
import { AppService } from './services/AppService';
import './App.css';
import { LinkItem, NaviItem } from './components/Navigation';

function App() {
  return (
    <>
      <Container>
        <NaviItem id="1" onClick={AppService.clickLink}>
          navi item 1
        </NaviItem>
        <LinkItem id="2" onClick={AppService.clickLink}>
          link item 1
        </LinkItem>
      </Container>
    </>
  );
}

export default App;
