import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import Metronome from './Metronome.js'
import Harp from './harpsound'
import * as serviceWorker from './serviceWorker';

class Metro extends React.Component {
    render(){
        return(
            <div>
                <Metronome />
                <Harp />
            </div>
        );
    }
}

ReactDOM.render(<Metro/>, document.getElementById('root'));

