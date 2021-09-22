import './history.scss'
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css';

function History(props) {

  return (
    <dev className="history">
      <h2>History</h2>
      <ul>
        {props.data.map((data,index) => (
          <li key={index}>
            {data.url}
            <br/> 
            {data.method}
            <br/> <br/>
            <button onClick={() => props.handleActiveResult(data.result)}>Get History</button>
          </li>
        ))}
      </ul>
      {props.show && <JSONPretty id="json-pretty" data={props.active ? props.active : null}></JSONPretty>}
    </dev>
  );
}

export default History;

/* <JSONPretty id="json-pretty" data={props.data ? props.data.data : null}></JSONPretty> */