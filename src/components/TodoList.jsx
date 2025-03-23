import checkIcon from '../assets/images/icon-check.svg'
import closeIcon from '../assets/images/icon-cross.svg'

export default function TodoList({list, checked, handleCheck}) {

    return (
        <>
            <li style={{textDecoration: checked ? 'line-through' : 'none'}}>
                <div className="row" onClick={handleCheck}>
                    <div className="circle" 
                        style ={{background: checked ? "linear-gradient(to right, hsl(192, 100%, 67%), hsl(280, 87%, 65%))"  : "transparent"}}>
                        {checked && <img src={checkIcon} alt="check icon"/>}
                    </div>
                    <span>{list}</span>
                </div>
                <img className="close-icon" src={closeIcon} alt=""/>
            </li>
        </>          
    )
}