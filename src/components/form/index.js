
import './form.scss';
import { useState } from "react";

function Form(props) {

  const [method, setMethod] = useState('get');
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon');
  const [showTextArea, setshowTextArea] = useState(false);
  const [requestTextAreaBody, setRequestTextAreaBody] = useState("");

  // https://pokeapi.co/api/v2/pokemon

 
   const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      method: method,
      url: url,
      requestTextAreaBody:requestTextAreaBody,
    };

    props.handleApiCall(formData);
  }

  const handleGetMethod = (e) => {
    setMethod(e.target.id);
    setshowTextArea(false);
  }

  const handleUrl = (e) => {
    setUrl(e.target.value)
  }

  const handelPostMethod = (e) => {
    setshowTextArea(true);
    setMethod(e.target.id);
  };

  const handelPutMethod = (e) => {
    setshowTextArea(true);
    setMethod(e.target.id);
  };

  const handelDeleteMethod = (e) => {
    setshowTextArea(false);
    setMethod(e.target.id);
  };

  const textAreaHandler = (e) => {
    let textAreaData = e.target.value;
    setRequestTextAreaBody(textAreaData);
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
          <span id="get" onClick={handleGetMethod}>GET</span>
          <span id="post" onClick={handelPostMethod}>POST</span>
          <span id="put" onClick={handelPutMethod}>PUT</span>
          <span id="delete" onClick={handelDeleteMethod}>DELETE</span>
        </label>
        {showTextArea && <textarea rows="4" cols="50" onChange={textAreaHandler}></textarea>}
      </form>
    </>
  );
}

export default Form;
