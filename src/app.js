import { useState, useEffect, useReducer } from 'react';
import axios from 'axios';

import './app.scss';

import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';
import History from './components/history';

const initialState = {
  ApiRequestData: [],
  activeResult: {},
};

function historyReducer(state, action) {
  // console.log(action.payload);
  console.log(state);
  switch (action.type) {
    case 'Add_API_REQUEST':
      return {
        ...state,
        ApiRequestData: [...state.ApiRequestData, action.payload]
      }
      case "ACTIVE_RESULT":
        return {
          ...state,
          activeResult: state.ApiRequestData.filter(
            (apiResult) => apiResult.result === action.payload
          )[0]
        };
    default:
      return state;
  }

}

function App() {

  const [data, setData] = useState(null)
  const [requestParams, setRequestParams] = useState({})
  const [textAreaBody, setTextAreaBody] = useState("");
  const [state, dispatch] = useReducer(historyReducer, initialState);
  const [show, setShow] = useState(false);

  function handleApiRequest(requestParams, data) {
    return {
      type: 'Add_API_REQUEST',
      payload: {
        url: requestParams.url,
        method: requestParams.method,
        result: data,
      },
    };
  }

  function handleActiveResult(result) {
    const action = {
      type: "ACTIVE_RESULT",
      payload: result,
    };
    dispatch(action);
    setShow(true)
  }


  useEffect(() => {

    const getData = async () => {
      if (requestParams.url) {
        const getDataApi = await axios({
          method: requestParams.method,
          url: requestParams.url,
          data: textAreaBody
        });
        dispatch(handleApiRequest(requestParams,getDataApi.data))
        setData(getDataApi)
      }
    }
    getData();
  }, [requestParams]);

  const callApi = (formData) => {

    setRequestParams(formData)
    setTextAreaBody(formData.requestTextAreaBody)
    console.log(formData.requestTextAreaBody);
  }

  return (
    <>
      <Header />
      <div>Request Method: {requestParams.method}</div>
      <div>URL: {requestParams.url}</div>
      <Form handleApiCall={callApi} />
      <Results data={data} />
      <History data={state.ApiRequestData} active={state.activeResult} handleActiveResult={handleActiveResult} show={show} />
      <Footer />
    </>
  );

}

export default App;
