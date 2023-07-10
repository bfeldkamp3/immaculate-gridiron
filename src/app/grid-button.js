'use client'
  
export default function GridButton({ classes }) { 
    function handleClick() {
        console.log("clicked click")
        document.getElementById('playerSearch').focus()
    }

  return (
    <button 
        onClick={handleClick} 
        className={`${classes}`}
        data-te-toggle="modal"
        data-te-target="#exampleModal"
        data-te-ripple-init
        data-te-ripple-color="light">
    </button>
  )
}