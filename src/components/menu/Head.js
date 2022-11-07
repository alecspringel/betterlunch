import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Divider from '../shared/Divider';
import FilterCancel from './FilterCancel';
import FilterSelect from './FilterSelect';

const Head = ({ filter, setFilter }) => {
  const filterDropdownRef = useRef(null);
  const [filterIsInViewport, setFilterIsInViewport] = useState(true);

  useEffect(() => {
    function isIntoView(entries) {
      entries.forEach((entry) => {
        if (entry.target.id === 'filterDropdown') {
          if (entry.isIntersecting === true) {
            setFilterIsInViewport(true);
          } else {
            setFilterIsInViewport(false);
          }
        }
      });
    }

    if (filterDropdownRef.current) {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0,
      };
      const observer = new IntersectionObserver(isIntoView, options);
      observer.observe(filterDropdownRef.current);
    }

    return (observer) => { observer.disconnect(); };
  }, []);

  return (
    <div
      className="flex-col align justify text-center"
      style={{ maxWidth: 800, margin: 'auto', padding: '3.5rem 2.5rem 0 2.5rem' }}
    >
      <h4 style={{ margin: '0 0 25px 0' }}>Our Menu</h4>
      <p className="p-large">
        Our meals are made fresh everyday, with tons of options to choose from. We rotate our menu frequently, so be sure to check back here for updates and new additions!
      </p>
      <Divider style={{ margin: '25px 0' }} />
      <FilterBar className="flex-row align justify" ref={filterDropdownRef} id="filterDropdown">
        {/* <p className="text-bold">Menu Category</p> */}
        <p className="mont text-bold">Menu Category</p>
        {' '}
        <FilterSelect onChange={setFilter} filter={filter} />
      </FilterBar>
      <FilterCancel filter={filter} setFilter={setFilter} filterIsInViewport={filterIsInViewport} />
    </div>
  );
};

export default Head;

const FilterBar = styled.div`
  /* position: fixed;
  bottom: 20px;
  left: 0; */
  width: 100%;
  /* background: #fff; */
  /* z-index: 2; */
  /* box-shadow: 0px -2px 2px 0px #0000001c; */
`;
