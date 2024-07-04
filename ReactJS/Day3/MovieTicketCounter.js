import {useState} from 'react';
import './Assets/Counter.css'
function Counter()
{
     const movie=["KALKI","GARUDAN","INDIAN 2"];
     const timings=["10:00 AM","2:00 PM","7:00 PM"]
     const prices=[170,120,150]
     const year = new Date();

    const [count, setCount] = useState(0);
    const [qty, setQty] = useState(0);
    const [price, setPrice]=useState(0);
    const [value, setValue]=useState('');
    const [name, setName]=useState('KALKI');

    function handleChange(e) {
        const tickets = e.target.value;
        if (tickets === '') {
          setValue('');
          setPrice(0);
          setQty(0);
        } 
        else 
        {
          const ticketCount = e.target.value;
          if ((ticketCount)>0   ) {
            setQty(ticketCount);
            setValue(tickets);
            setPrice(ticketCount * prices[count]);
          }
        }
      }
      function handleName(e)
      {
        setName(e.target.value);
      }

    function handleIncrease()
    {
        // setCount(count=>{
        //     const newcount=(count+1)%3;
        //     setQty(qty=> 0);
        //     setPrice(price=>0)
        //     return newcount;
        // })
        setCount(count=> {
            setQty(qty=>0);
            setPrice(price=>0)
           return (count+1)%(3);
        });
    }
    function handleDecrease()
    {
        setCount(count=>{
            setQty(qty=> 0);
            setPrice(price=>0);
            if(count===0)
            {
                return count+2;
            }
            return count-1;
        }
        )
    }
    function handleIncQty()
    {
        setQty(qty=>{
            const newQty=qty+1;
            setPrice(price => newQty*prices[count]);
            return newQty;
        }

            )
    }
    function handleDecQty()
    {
        setQty(qty=>
            {
                if(qty==0)
                {
                  return qty;
                }
            const newQty=qty-1;
            setPrice(price=>newQty*prices[count]);
            return  newQty;
            });
    }
    function handleAlert(movie,time,qty,price)
    {
        if(qty===0 || price===0)
        {
            alert("Invalid Booking")
        }
        else {
            alert(`BOOKING SUCCESSFUL!!! 
        Movie Name: ${movie}
        Show Time: ${time}
        No. Of. Tickets: ${qty}
        Amount: ${price}`);
        }
    }
  
    return(
      <div>
      <header>
      <h1>BOOKING.COM</h1>
    </header>
        <h2 style={{paddingLeft: '40%'} }>Today's Show Details</h2>
    <div style={{marginTop: '2px'}} className='border'>
          <h1 className='font' style={{paddingLeft: '30%'} }>Movie Name: {movie[count]}</h1>
        <h1 className='font' style={{paddingLeft: '30%'} }>Movie Time: {timings[count]}</h1>
        <h1 className='font' style={{paddingLeft: '30%'}}>Ticket Price: ₹ {prices[count]}</h1>

        <button className="buttonStyle"style={{marginLeft: '35%'}} 
        onClick={handleIncrease }>Next</button>

        <button className="buttonStyle" style={{marginLeft: '5%'}} onClick={handleDecrease}>Previous</button>
        <ul className='inline-list'>
            <li className='item'>
        <h1 className='font' style={{paddingLeft: '100px'}}>No Of Tickets: </h1>
        <button className='plusbutton' onClick={handleIncQty} >+</button>
        <h2> Qty: {qty}</h2>
        <button className='plusbutton' onClick={handleDecQty}>--</button>
        </li>
        <li className='item'>
        <h1 className='font' style={{paddingLeft: '100px',}} >Total Price: ₹{price}</h1> 
        </li>
        </ul>
        <button className='bookbutton' style={{marginLeft: '45%'}} onClick={()=>handleAlert(movie[count],timings[count],qty,price)}>Book Now</button>
      
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
          <h2 className='font'>Enter Tickets: </h2>
          <input type='number' value={value} onChange={handleChange} style={{ marginLeft: '10px' }} />
        </div>
        <div style={{ textAlign: 'center', marginTop: '10px' }}>
          <h2 className='font'>Ticket Price: ₹{price}</h2>
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
        <h3 className='font'> Choose Your Movie:  </h3>
        <select value={name} onChange={handleName}>
            <option>Kalki</option>
            <option>Garudan</option>
            <option>Indian 2</option>
        </select>
        
        </div>
        <h2 style={{paddingLeft: '70px'}}>You have selected the movie: {name}</h2>
        </div>
        <br></br>
        <footer>
      Copyright &copy; {year.getFullYear()}
      <p>Designed By Mahudesh P</p>
    </footer>
    </div>
    
    
    );
}
export default Counter
