
import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {

  const [principle,setPrinciple] = useState("")
  const [rate,setRate] = useState("")
  const [year,setYear] = useState("")
  const [interest,setInterest]=useState(0)
  const [isPrinciple , setisPrinciple] = useState(true)
  const [isRate , setisRate] = useState(true)
  const [isYear , setisYear] = useState(true)

  const validate = (e)=>{
    console.log(e.target.name);
    console.log(e.target.value);

    console.log(!!e.target.value.match('^[0-9]*$'));

    if(!!e.target.value.match('^[0-9]*$')){
      
      if(e.target.name=='principle'){
        setPrinciple(e.target.value)
        setisPrinciple(true)
      }
      
      else if(e.target.name=='rate'){
        setRate(e.target.value)
        setisRate(true)
      }
      
      else{
        setYear(e.target.value)
        setisYear(true)
      }

    }
    else{

      if(e.target.name=='principle'){
        setPrinciple(e.target.value)
        setisPrinciple(false)
      }
      
      else if(e.target.name=='rate'){
        setRate(e.target.value)
        setisRate(false)
      }
      
      else{
        setYear(e.target.value)
        setisYear(false)
      }
    }
    
  } 

  const handleReset =()=>{
    setPrinciple("")
    setRate("")
    setYear("")
    setisPrinciple(true)
    setisRate(true)
    setisYear(true)
  }

  const handleCalc = () =>{

    setInterest((principle*rate*year)/100)

  }

  return (
    <>

      <div style={{height:'100vh'}} id='ovrbg'>

        <div style={{width:'500px'}} className='p-5 border-none rounded' id='sical'>

          <h1>Simple Interest App</h1>

          <p>Calculate Your Simple Interest Easily</p>

          <div style={{height:'100px'}} className='bg-warning border-none rounded d-flex justify-content-center align-items-center flex-column'>

            <h1>₹ {interest}</h1>
            <p>Total Simple Interest</p>

          </div>

          <div className="my-3">
            <TextField id="outlined-basic" value={principle} name='principle' label="₹ Principle Amount" variant="outlined" className='w-100' onChange={(e)=>{validate(e)}}/>
            
            {!isPrinciple && <span className='text-warning'>*invalid input</span>}
          </div>

          <div className="mb-3">
            <TextField id="outlined-basic" value={rate} name='rate' label="Rate of Interest (p.a)" variant="outlined" className='w-100' onChange={(e)=>{validate(e)}}/>
            
            {!isRate && <span className='text-warning'>*invalid input</span>}
          </div>

          <div className="mb-3">
            <TextField id="outlined-basic" value={year} name='year' label="Year(Yr)" variant="outlined" className='w-100' onChange={(e)=>{validate(e)}}/>

            {!isYear && <span className='text-warning'>*invalid input</span>}
          </div>

          <div className="mb-3 d-flex justify-content-between">

            <Button onClick={handleCalc} style={{width:'199px',height:'60px'}} variant="contained" color="success" disabled={isPrinciple && isRate && isYear ? false : true} >Calculate</Button>

            <Button style={{width:'199px',height:'60px'}} variant="outlined" onClick={handleReset}>Clear</Button>

          </div>

        </div>

        


      </div>
      
    </>
  )
}

export default App
