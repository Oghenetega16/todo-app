import checkIcon from '../assets/images/icon-check.svg'
import closeIcon from '../assets/images/icon-cross.svg'

export default function TodoList({ list, checked, handleCheck, handleDeleteItem, filter}) {

    return (
        <li 
            style={{ textDecoration: checked ? 'line-through' : 'none' }} 
            className="todo-item"
        >
            <div className="row">
                <div 
                    className="circle"
                    onClick={handleCheck}
                    role="button"
                    style={{
                        background: checked 
                            ? "linear-gradient(to right, hsl(192, 100%, 67%), hsl(280, 87%, 65%))"  
                            : "transparent"
                    }}
                >
                    {checked && <img src={checkIcon} alt="check icon" />}
                </div>
                <span className="todo-text">{list}</span>
            </div>
            
            {filter == 'Active' || filter == 'Completed' ? <img 
                className="close-icon" 
                src={closeIcon} 
                alt="Delete item" 
                onClick={(e) => {
                    e.stopPropagation(); // Prevents accidental checking when deleting
                    handleDeleteItem();
                }}
                role="button"
            /> : null}
        </li>          
    )
}

