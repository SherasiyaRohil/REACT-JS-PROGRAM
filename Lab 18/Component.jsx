import React from 'react'
import useToggle from './useToggle';

function Component() {
    const [visible, togglevisiblity] = useToggle(false);
     const [Loading, setLoading] = useState(true);
  return (
    <div>
        <h1>Component works!</h1>
        <button onClick={() => setLoading(!Loading)}>Click me</button>
        {visible && <p>Visible content</p>}
      
    </div>
  )
}

export default Component
