import React from 'react';
import styled from 'styled-components';
import Divider from '../general/Divider';
import stephanieImg from '../../assets/team/stephanie.jpg';
import markImg from '../../assets/team/mark.jpg';
import kristineImg from '../../assets/team/kristine.jpg';
import jaimeImg from '../../assets/team/jaime.jpg';
import virginiaImg from '../../assets/team/virginia.jpg';
import beckyImg from '../../assets/team/becky.jpg';
import annaImg from '../../assets/team/anna.jpg';

const OurTeam = () => (
  <section className="wrapper padded-section text-center">
    <h3 className="margin-bottom">Our Team</h3>
    <p className="margin-bottom p-large">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod
    </p>
    <Divider style={{ margin: '1.725rem auto' }} />
    <Grid>
      <Member>
        <TeamImg src={stephanieImg} className="shadow" />
        <p className="text-bold">Stephanie</p>
        <p>Founder</p>
      </Member>
      <Member>
        <TeamImg src={markImg} className="shadow" />
        <p className="text-bold">Mark</p>
        <p>
          Kitchen Manager,
          <br />
          Lead Chef
        </p>
      </Member>
      <Member>
        <TeamImg src={kristineImg} className="shadow" />
        <p className="text-bold">Kristine</p>
        <p>Office Manager</p>
      </Member>
      <Member>
        <TeamImg src={jaimeImg} className="shadow" />
        <p className="text-bold">Jaime</p>
        <p>Lead Chef</p>
      </Member>
      <Member>
        <TeamImg src={virginiaImg} className="shadow" />
        <p className="text-bold">Virginia</p>
        <p>Baker</p>
      </Member>
      <Member>
        <TeamImg src={beckyImg} className="shadow" />
        <p className="text-bold">Becky</p>
        <p>Chef</p>
      </Member>
      <Member>
        <TeamImg src={annaImg} className="shadow" />
        <p className="text-bold">Anna</p>
        <p>Customer Support</p>
      </Member>
    </Grid>
  </section>
);

export default OurTeam;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 74.4375rem;
  margin: auto;
  margin-top: 2.5rem;
`;

const TeamImg = styled.img`
  border-radius: 50%;
  width: 100%;
  max-width: 8.7rem;
`;

const Member = styled.div`
  width: 100%;
  flex: 0 50%;
  padding: 20px;
  @media (min-width: 680px) {
    flex: 0 33%;
  }
  @media (min-width: 1180px) {
    flex: 0 25%;
  }
`;
