import React from 'react';
import Divider from '../general/Divider';
// import FilterSelect from '../.upcoming-features/FilterSelect';

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
    {/* <FilterSelect /> */}
  </div>
);

export default Head;
