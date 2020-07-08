import React from 'react'
import Harp1 from './Harp run 1.wav'
import Harp2 from './Harp run 2.wav'
import './harpsound.css'

class Harp extends React.Component {
    constructor(props){
        super(props)
        this.state={playing: false,
        count: 0,
        beatsPerMeasure: 4,
        bpm: 100}

        this.Harp1 = new Audio(Harp1);
        this.Harp2 = new Audio(Harp2);
    }

    handleBpmChange =(event)=> {
        const bpm = event.target.value;
        
        if (this.state.playing) {
            clearInterval(this.timer);
            this.timer = setInterval(this.playClick, (60/bpm) * 1000)

            this.setState({
                count: 0,
                bpm
            })
        } else {
            this.setState({ bpm })
        }
    }

    startStop=()=>{
        if (this.state.playing) {
            clearInterval(this.timer);
            this.setState({
                playing: false
            });
        } else {
            this.timer = setInterval(
                this.playClick, 
                (60 / this.state.bpm) * 1000
            );
            this.setState(
                {
                    count: 0,
                    playing: true
                },
                this.playClick
            );
        }
    }

    playClick=()=>{
        const { count, beatsPerMeasure } = this.state;
        
        if (count % beatsPerMeasure === 0) {
            this.Harp2.play();
        } else {
            this.Harp1.play();
        }

        this.setState(state=> ({
            count: (state.count + 1) % state.beatsPerMeasure
        }))
    }

    render(){
        const {playing, bpm} = this.state;
        return(
            <div className="harp">
                <div classname="harpSlider">
                    <div className="harpBPM">{bpm} BPM</div>
                    <input className="slider" type="range" min="60" max="240" value={bpm}
                    onChange={this.handleBpmChange}/>
                </div>
                <button className="harpButton" onClick={this.startStop}>{playing ? 'Stop' : 'Start'}</button>
            </div>
        ); 
    }
}

export default Harp;
