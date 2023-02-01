import React from 'react'

const useOnKeyPress = (keyCode, callback) => {
  React.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === keyCode) callback(event)
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])
}
export default useOnKeyPress