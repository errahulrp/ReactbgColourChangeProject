import { useState } from 'react'


function App() {
  const [color, setColor] = useState('black')

  const handleOnClick = (option) => {
    setColor(option);
  }
  
  return (
    <>
      <div className={`flex justify-center w-full h-screen  bg-${color}`}>
        <div className=' absolute flex gap-3 bottom-10 px-4 py-4 bg-white rounded-3xl '>
          <div className=' bg-red-700 px-4 py-2 rounded-2xl ' onClick={()=> handleOnClick('red-700')}>
            red
          </div>
          <div className=' bg-green-700 px-4 py-2 rounded-2xl 'onClick={()=> handleOnClick('green-700')}>
            green
          </div>
          <div className=' bg-blue-700 px-4 py-2 rounded-2xl 'onClick={()=> handleOnClick('blue-700')}>
            blue
          </div>
          <div className=' bg-yellow-700 px-4 py-2 rounded-2xl 'onClick={()=> handleOnClick('yellow-700')}>
            yellow
          </div>
        </div>
      </div>

    </>
  )
}

export default App
