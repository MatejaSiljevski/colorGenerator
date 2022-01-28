import React, {useEffect, useState} from 'react'
import rgbToHex from '../utils'

function ColorBox({color, id, fullList, rgb}) {
    const [alert, setAlert] = useState(false)
    const [newRgb, setNewRgb] = useState('')
    const colorString = color.rgb.toString()
    const hex = rgbToHex(...color.rgb)      
    
    useEffect(() => {
       const timeOut = setTimeout(() => {
            setAlert(false)
       }, 3000); 
       return () => clearTimeout(timeOut)

    }, [alert])
    
    // const newClipBoard = () => {
    //     // if(newRgb === rgb) {
    //     //     console.log(123);
    //     // }
    //    setNewRgb(rgb)
    //    console.log(newRgb);
       
    // }
    

    return (
      <>    
        <div className='color-box'
            style={{ backgroundColor: `rgb(${colorString})` }} onClick={(e) => {
                setAlert(true)
                navigator.clipboard.writeText(hex)
        }}>     
            <p className='hex' ><span>{`${color.weight}%`}</span>{hex}
            </p>
            

            {alert && <p className='alert'>Copied to clipboard</p>}
           
        </div>      
      </>
    )
}

export default ColorBox
