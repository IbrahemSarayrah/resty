
import './form.scss';
import { useState } from "react";

function Form(props) {

  const [method, setMethod] = useState('get');
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon');
  const [showTextArea, setshowTextArea] = useState(false);

  // https://pokeapi.co/api/v2/pokemon

  const handleSubmit = e => {
    e.preventDefault();
    const formData = {
      method: method,
      url: url,
    };
    props.handleApiCall(formData);
  }

  const handleMethod = (e)=>{
    setMethod(e.target.id);
    setshowTextArea(false);
  }

  const handleUrl = (e)=> {
    setUrl(e.target.value)
  }

  const textAreaHandler = (e) => {
    setshowTextArea(true);
    setMethod(e.target.id);
  };


  return (
    <>
      <form onSubmit={handleSubmit}>
        <label >
          <span>URL: </span>
          <input name='url' type='text' onChange={handleUrl} />
          <button type="submit">GO!</button>
        </label>
        <label className="methods">
          <span id="get" onClick={handleMethod}>GET</span>
          <span id="post" onClick={textAreaHandler}>POST</span>
          <span id="put" onClick={textAreaHandler}>PUT</span>
          <span id="delete" onClick={textAreaHandler}>DELETE</span>
        </label>
        {showTextArea && (
          <textarea rows="20" cols="45"></textarea>
        )
        }
      </form>
    </>
  );
}

export default Form;
