import { useState } from "react";

function SearchBar({ onSubmit }) {
    const [term, setTerm]= useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        // onSubmit(
            //NEVER EVER DO THIS
            // document.getElementById('input').value
        // )
        onSubmit(term)

    }
    const handleChange = (event)=>{
        setTerm(event.target.value)
    }
    return (
        <div>
            
            <form onSubmit={handleSubmit}>
            <input value={term} onChange={handleChange}/>
            <button>Search!
            </button>
            </form>
            
        </div>
    )

}
export default SearchBar;