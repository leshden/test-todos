import './FooterPanel.css'
import FilterPanel from '../filter-panel/FilterPanel';

const FooterPanel = () => {
  return (
    <div className='footer-container-todos'>
      <div className='footer-todos'>
        <div className='items-left-todo'>
          2 items left
        </div>
        <div className='filter-button-container-todo'>
          <FilterPanel />
        </div>
        <button className='clear-completed-container-todo'>
          Clear completed
        </button>
      </div>
      <div className='footer-fake-page-todos' />
      <div className='footer-fake-second-page-todos' />
    </div>
  );
}

export default FooterPanel;
