'use client'
  
export default function GridButton(props) {
  
  function handleClick(e, props) {
      document.getElementById('playerSearch').focus()
      localStorage.setItem('grid', JSON.stringify(props.grid));
  }

  return (
    <button 
        onClick={((e) => handleClick(e, props))}
        className={`${props.classes}`}
        id={`${props.grid.id}`}
        data-te-toggle="modal"
        data-te-target="#exampleModal"
        data-te-ripple-init
        data-te-ripple-color="light">
    </button>
  )
}