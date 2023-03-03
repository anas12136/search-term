import SearchBar from './components/SearchBar'
import searchImages from './api';
import ImageList from './components/ImageList';
import { useState } from 'react';
function App(){
    const [result, setResult] = useState([])
 const  handleSubmit =async (term)=>{
const result =  await searchImages(term)
return setResult(result);
 } 
return (
    <div>
        <SearchBar onSubmit={handleSubmit}/>
        <ImageList  images={result}/>       
    </div>
)

}
export default App;