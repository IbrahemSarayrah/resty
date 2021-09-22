import './results.scss'
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css';
import Loading from '../Loading';

function Results(props) {
    return (
      <dev className="section">
        {/* <pre>{props.data ? JSON.stringify(props.data, undefined, 2) : null}</pre> */}
        {props.data ? <div>
          <h2>Headers</h2>
          <JSONPretty id="json-pretty" data={props.data ? props.data.headers : null}></JSONPretty>
          <h2>Results</h2>
          <JSONPretty id="json-pretty" data={props.data ? props.data.data : null}></JSONPretty>
        </div>: <Loading/>}
      </dev>
    );
}

export default Results;
