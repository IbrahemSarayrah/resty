import './results.scss'
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css';

function Results(props) {
    return (
      <section>
        {/* <pre>{props.data ? JSON.stringify(props.data, undefined, 2) : null}</pre> */}
        <JSONPretty id="json-pretty" data={props.data ? JSON.stringify(props.data, undefined, 2) : null}></JSONPretty>
      </section>
    );
}

export default Results;
