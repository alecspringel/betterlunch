import React from 'react';
import Select from 'react-select';

const options = [
  { value: 'snack', label: 'Snacks' },
  { value: 'meal', label: 'Meals' },
  { value: 'vegetarian', label: 'Vegetarian' },
  { value: 'glutenfree', label: 'Gluten Free' },
];

const styles = {
  container: (base) => ({
    ...base,
    width: '100%',
  }),
};

const FilterSelect = () => (
  <div className="flex-row text-orange text-bold" style={{ width: '100%', margin: 10 }}>
    <Select
      isMulti
      options={options}
      styles={styles}
      menuPlacement="auto"
      menuPosition="fixed"
    />
  </div>
);

export default FilterSelect;
