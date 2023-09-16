import React from 'react';
import { Container, Header } from 'semantic-ui-react'
import './App.css';
import { NaviItem } from './components/Navigation';


function App() {

  return (
    <>
      <Container>
        <NaviItem id="1" onClick={() => {}}>item dummy 1</NaviItem>
      </Container>
    </>
  );
}

export default App;
