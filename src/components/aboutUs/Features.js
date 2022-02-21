import React from 'react';
import styled from 'styled-components';
import CancelImg from '../../assets/cancel-blue.svg';
import CalendarImg from '../../assets/calendar-blue.svg';
import TimerImg from '../../assets/timer-blue.svg';

const Features = () => (
  <Background className="padded-section">
    {/* <div className="flex-col"> */}
    {/* <h6 className="text-blue text-bold text-center">WHY BETTERLUNCH?</h6> */}
    <FlexDiv className="flex-row" style={{ maxWidth: '84rem' }}>
      <Item>
        <Icon src={CalendarImg} className="margin-b10" />
        <h6 className="margin-b10 text-blue text-bold">Flexible Ordering</h6>
        <p className="p-large">
          Pick and choose the days
          <br />
          you want BetterLunch.
        </p>
      </Item>
      <Item>
        <Icon src={CancelImg} className="margin-b10" />
        <h6 className="margin-b10 text-blue text-bold">Need to Cancel ?</h6>
        <p className="p-large">
          Cancel any order by 8AM
          <br />
          to receive credit for a meal.
        </p>
      </Item>
      <Item>
        <Icon src={TimerImg} className="margin-b10" />
        <h6 className="margin-b10 text-blue text-bold">
          Last Minute Options
        </h6>
        <p className="p-large">
          Forget to pack a lunch?
          <br />
          Order up to 8AM same day.
        </p>
      </Item>
    </FlexDiv>
    {/* </div> */}
  </Background>
);

export default Features;

const Background = styled.section`
  background-color: #dbeaec;
`;

const Item = styled.div`
  flex: 1;
  text-align: center;
  @media (max-width: 53.75rem) {
    margin: 30px 0;
  }
`;

const Icon = styled.img`
  height: 40px;
`;

const FlexDiv = styled.div`
  margin: auto;
  @media (max-width: 53.75rem) {
    flex-direction: column;
  }
`;
