import React, { useState } from 'react';
import styled from 'styled-components';
import PlusIcon from '../../assets/plus.svg';

const QuestionDropdown = ({ question, answer }) => {
  const [isOpen, toggleOpen] = useState(false);
  return (
    <Background type="button" onClick={() => toggleOpen(!isOpen)} isOpen={isOpen}>
      <QuestionWrapper className="flex-row">
        <p className="text-bold" style={{ flexGrow: 1 }}>
          {question}
        </p>
        <div>
          <Plus src={PlusIcon} />
        </div>

      </QuestionWrapper>
      {isOpen && <p style={{ marginTop: 15 }}>{answer}</p>}
    </Background>
  );
};

export default QuestionDropdown;

const Background = styled.button`
  cursor: pointer;
  background: #F7F8F9;
  border: none;
  border-radius: 5px;
  width: 100%;
  text-align: left;
  padding: 15px;
  margin: 7px 0;
  background: ${(props) => (props.isOpen ? '#f2f2f2' : '#F7F8F9')};
  transition: all 50ms ease-in-out;
  :hover {
    background: #f2f2f2;
  }
`;

const QuestionWrapper = styled.div`
  align-items: flex-start;
`;

const Plus = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 24px;
`;
