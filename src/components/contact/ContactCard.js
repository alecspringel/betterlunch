import React from 'react';
import styled from 'styled-components';

const ContactCard = ({
  actionText, href, iconPath, iconAlt, heading, description,
}) => (
  <Card>
    <Icon src={iconPath} alt={iconAlt} />
    <p className="p-large text-bold mont text-orange">{heading}</p>
    <p style={{ margin: 15 }}>{description}</p>
    <a className="text-orange" href={href}>{actionText}</a>
  </Card>
);

export default ContactCard;

const Card = styled.div`
  background: #fff;
  text-align: center;
  width: 45%;
  padding: 30px;
  box-shadow: 0px 1px 2px 1px #00000016;
  border-radius: 3px;
  margin: 0 10px;
  @media (max-width: 625px) {
    width: 100%;
    margin: 15px;
  }
`;

const Icon = styled.img`
  height: 32px;
  width: 32px;
  margin: 15px;
`;
