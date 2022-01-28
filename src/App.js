import React, {useState, useRef} from 'react'
import Values from 'values.js'
import ColorBox from './components/ColorBox'
import './App.css'

function App() {
  const [color,setColor] = useState('')
  const [error, setError] = useState(false)
  const [list, setList] = useState(new Values('#FF7777'))

  const submitHandler = (e) => {
    e.preventDefault()
    try{
      
      let colors = new Values(color).all(10)
      setList(colors)
      console.log(list);
    }catch (error) {
      console.log(error);
      setError(true)
      setColor('')
      setList([])
    }
  }

  
  return (
      <>
        <section className='container'>
          <h3>Color Generator</h3>
          <form type="text" onSubmit={submitHandler}>
            <input type="text" placeholder='#FF7777' value={color} onChange={(e) => setColor(e.target.value)} className={error ? 'error' : null}/>
            <button type='submit' className='btn'>Generate Colors</button>
          </form>
        </section>
        <section className='color-container'>
          {
            list.length > 1 
            &&
            list.map((color, id) => {
                return <ColorBox color={color} error={error} key={id} id={id} fullList={list} rgb={color.rgb}/>
            })            
          }
        </section>
      </>
  );
}

export default App;
