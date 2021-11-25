import React,{useState} from 'react';

function App() {
  
  const [search, setSearch] = useState("shows");
  
  const onRadioChange = (E)=>{
    setSearch(E.target.value);
  }

  console.log(search);

  return (
    <>
    <fieldset id="grp">
      <label>
        Shows<input type="radio" value="shows" onChange={onRadioChange} name="grp"/> 
      </label>
      <label>
        Peoples<input type="radio" value="peoples" onChange={onRadioChange} name="grp"/>
      </label>
    </fieldset>
    </>
  );
}

export default App;
