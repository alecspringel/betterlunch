import React from 'react';
import styled from 'styled-components';
import FilterIcon from '../../assets/filter.png';
import ExitIcon from '../../assets/exit.svg';

const FilterCancel = ({ filter, filterIsInViewport, setFilter }) => (
  <CancelContainer
    filterIsInViewport={filterIsInViewport}
    isFiltering={!!filter.value}
    onClick={() => { setFilter({ value: null, label: 'All' }); window.scrollTo(0, 0); }}
  >
    <CancelButton>
      <img src={FilterIcon} alt="test" style={{ height: 20, marginLeft: 12, marginTop: 2 }} />
      <p className="mont text-bold text-orange" style={{ marginLeft: 4, marginRight: 4, padding: '9px 0' }}>
        Filtering by
        {' '}
        {filter.label}
      </p>
      <Divider>|</Divider>
      <XIcon src={ExitIcon} alt="test" />
    </CancelButton>
  </CancelContainer>
);

export default FilterCancel;

const CancelContainer = styled.div`
  position: fixed;
  bottom: ${(props) => (props.filterIsInViewport || !props.isFiltering ? '-50px' : '40px')};
  left: 0;
  width: 100%;
  z-index: 2;
  transition: ${(props) => (props.isFiltering ? '200ms' : 'none')};
  transition-timing-function: ease-in-out;
  display: flex;
  justify-content: center;
`;

const CancelButton = styled.button`
  cursor: pointer;
  background: #fff;
  border: 1px solid #d8d8d8;
  width: fit-content;
  align-items: center;
  display: flex;
  justify-content: center;
  border-radius: 50px;
`;

const Divider = styled.p`
  margin: 0 7px 2px 7px;
  color: #00000030;
`;

const XIcon = styled.img`
  opacity: 0.3;
  height: 20px;
  margin-right: 12px;
  margin-top: 2px;
`;
