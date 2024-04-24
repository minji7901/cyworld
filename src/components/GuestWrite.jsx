import React, { useState } from "react";
import styled from 'styled-components';

const WriteCont = styled.div`
  h3 {
    margin-bottom: 15px;
    color: #777;
    font-size: 1.125rem;
    font-family: 'NeoDunggeunmo';
  }
`

const InputBox = styled.div`
  padding: 20px;
  border: 1px solid #ccc;
  background: #eee;
  textarea {
    padding: 20px;
    width: 100%;
    height: 100px;
    border: 1px solid #ccc;
  }
  button {
    display: flex;
    margin: 10px 0 0 auto;
    padding: 7px 10px;
    font-size: 0.75rem;
    font-weight: 700;
    font-family: 'NeoDunggeunmo';
    border: 1px solid #ccc;
    border-radius: 5px;
    background: #fff;
  }
`

export default function GuestWrite({onWrite}) {
  const [inputValue, setInputValue] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue === "") { 
      return;
    };
    onWrite(inputValue);
    setInputValue('');
  }
  return (
    <WriteCont>
      <h3>방명록을 남겨보세요:&#41;</h3>
      <InputBox>
        <form onSubmit={handleSubmit}>
          <textarea
            type="text"
            value={inputValue}
            placeholder="입력해주세요"
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button>작성하기</button>
        </form>
      </InputBox>
    </WriteCont>
  );
}

