import './FilterPanel.css';
import Fragment from 'react';

const FilterPanel = () => {
  return(
    <>
      <button className='filter-button-todos'>All</button>
      <button className='filter-button-todos'>Active</button>
      <button className='filter-button-todos'>Completed</button>
    </>
  );
}

export default FilterPanel;
