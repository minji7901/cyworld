import './App.css';
import React from "react";
import styled from 'styled-components';
import GuestBook from './components/GuestBook';

const Content = styled.div`
  padding: 30px;
  width: 1200px;
  height: 90vh;
  border: 1px solid #222;
  border-radius: 40px;
  box-shadow: 0 0 10px 3px rgba(0,0,0,0.7);
  background: rgb(92, 191, 233);
`

const Box = styled.div`
  height: 100%;
  padding: 10px;
  border: 1px dashed #fff;
  border-radius: 30px;
`

export default function App() {
  return (
    <Content>
      <Box>
        <GuestBook />
      </Box>
    </Content>
  );
}