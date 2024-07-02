import {useState} from 'react';
import './Assets/Counter.css'
function Counter()
{
    
    const [count, setCount] = useState(0);

    function handleIncrease()
    {
        setCount(count => count+1);
    }
    function handleDecrease()
    {
        setCount(count => count-1);
    }
    function handleReset()
    {
        setCount(count=> 0);
    }
    return(
    <div style={{marginTop: '10%'}} className='border'>
        <h1 className='font' style={{paddingLeft: '40%'} }>Count: {count}</h1>
        <button className="buttonStyle"style={{marginLeft: '35%'} } 
        onClick={handleIncrease}>Increase</button>
        <button className="buttonStyle"style={{marginLeft: ' 5%'}} onClick={handleReset}>Reset</button>
        <button className="buttonStyle" style={{marginLeft: '5%'}} onClick={handleDecrease}>Decrease</button>
        
    </div>
    );
}
export default Counter
