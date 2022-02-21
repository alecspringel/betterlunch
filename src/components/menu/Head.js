import React from 'react';
import Divider from '../general/Divider';
import CarrotIcon from '../../assets/vegetarian.svg';
import GlutenFreeIcon from '../../assets/gluten-free.svg';

const Head = () => (
  <div
    className="flex-col align justify text-center"
    style={{ maxWidth: 800, margin: 'auto', padding: '40px 0' }}
  >
    <h4 style={{ margin: '0 0 25px 0' }}>Our Menu</h4>
    <p className="p-large">
      Our meals are made fresh everyday, with tons of options to choose from. We rotate our menu frequently, so be sure to check back here for updates and new additions!
    </p>
    <Divider style={{ margin: '25px 0' }} />
    <div className="flex-row text-orange text-bold margin-tb10">
      <div className="flex-row align" style={{ marginRight: 30 }}>
        <img src={GlutenFreeIcon} style={{ height: 18, marginRight: 10 }} />
        Gluten-Free
      </div>
      <div className="flex-row align">
        <img src={CarrotIcon} style={{ height: 18, marginRight: 10 }} />
        Vegetarian
      </div>
    </div>
  </div>
);

export default Head;
