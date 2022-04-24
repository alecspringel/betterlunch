import React from 'react';
import styled from 'styled-components';

const ContactCard = ({
  actionText, href, iconPath, iconAlt, heading, description,
}) => (
  <Card href={href}>
    <Icon src={iconPath} alt={iconAlt} />
    <p className="p-large text-bold mont text-orange">{heading}</p>
    <p style={{ margin: 15 }}>{description}</p>
    <p className="text-orange">{actionText}</p>
  </Card>
);

export default ContactCard;

const Card = styled.a`
  background: #fff;
  text-align: center;
  width: 45%;
  padding: 30px;
  box-shadow: 0px 1px 2px 1px #00000016;
  border-radius: 3px;
  margin: 0 10px;
  text-decoration: none;
  transition: 150ms ease;
  @media (max-width: 625px) {
    width: 100%;
    margin: 15px;
  }
  :hover {
    transform: translateY(-4px);
    img {
      transition: 150ms ease;
      transform: translateY(-4px);
      transform: scale(1.1);
    }
  }
`;

const Icon = styled.img`
  height: 32px;
  width: 32px;
  margin: 15px;
`;
