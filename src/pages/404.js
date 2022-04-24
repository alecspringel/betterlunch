import React from 'react';
import styled from 'styled-components';
import HeartLunchSvg from '../assets/heart-lunch.svg';

const NotFound404 = () => (
  <div>
    <Icon src={HeartLunchSvg} />
  </div>
);

export default NotFound404;

const Icon = styled.img`
  height: 60px;
  margin-bottom: 40px;
`;
