import React from 'react';
import Select from 'react-select';

const options = [
  { value: null, label: 'All' },
  { value: 'snack', label: 'Snacks', type: 'category' },
  { value: 'meal', label: 'Meals', type: 'category' },
  { value: 'vegetarian', label: 'Vegetarian', type: 'key' },
  { value: 'glutenfree', label: 'Gluten Free', type: 'key' },
];

const styles = {
  container: (base) => ({
    ...base,
    width: '100%',
    height: 38,
  }),
  control: (base) => ({
    ...base,
    height: 38,
  }),
  option: (provided, state) => ({
    ...provided,
    // color: '#333',
    backgroundColor: state.isSelected ? '#f69353' : 'white',
    '&:hover': { backgroundColor: state.isSelected ? '#f69353' : '#f693533d' },
    height: 35,
  }),
};

const FilterSelect = ({ onChange, filter }) => (
  <div
    className="flex-row lato"
    style={{
      minWidth: 150, width: 'fit-content', margin: 10, overflowY: 'auto',
    }}
  >
    <Select
      value={filter}
      defaultValue={options[0]}
      onChange={onChange}
      options={options}
      styles={styles}
      menuPlacement="auto"
      menuPosition="fixed"
      isSearchable={false}
      closeMenuOnScroll={() => true}
    />
  </div>
);

export default FilterSelect;
