'use client'
  
export default function GridButton({ classes }) { 
    function handleClick() {
        console.log("clicked click")
    }

  return (
      <button onClick={handleClick} className={`${classes}`}></button>
  )
}