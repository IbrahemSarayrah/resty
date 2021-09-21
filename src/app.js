import { useState, useEffect} from 'react';
import axios from 'axios';

import './app.scss';

import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';

function App () {

  const [data , setData] = useState(null)
  const [requestParams,setRequestParams]=useState({})
  const [textAreaBody, setTextAreaBody] = useState("");
  // const[getData,setgetData]=useState()

  useEffect(() => {

    const getData = async()=>{
      if (requestParams.url) {
        const getDataApi =  await axios({
          method: requestParams.method,
          url: requestParams.url,
          data:textAreaBody
        });
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
        <Footer />
      </>
    );

}

export default App;
