import './ItemEvent.css';

const ItemEvent = (props) => {
  const {text, active} = props.value;
  return (
    <div className='item-container-todos'>
      <div className='item-mark-container-todo'>
        <div className='item-mark-todo'></div>
      </div>
      <div className='item-text-todos'> {text} </div>
    </div>
  );
}

export default ItemEvent;
