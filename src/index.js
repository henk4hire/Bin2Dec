import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            errormessage: '',
            decimal: '',
            binary: ''
        }
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        let bin = this.state.binary;
        let err = '';
        let regexp = /^[0-1]{1,}$/g
        this.setState({ errormessage: err })
        if (!regexp.test(bin)) {
            err = "Enter either 0 or 1";
            this.setState({ errormessage: err })
            this.setState({ decimal: '' })
        } else {
            let dec = parseInt(bin, 2)
            this.setState({ decimal: dec })
        }
    }

    onFormChange = (event) => {
        this.setState({ binary: event.target.value })
    }

    render() {
        return (
            <>
                <h1>Binary to Decimal Converter</h1>
                <form onSubmit={this.onFormSubmit}>
                    <span style={{ color: 'red' }}>{this.state.errormessage}</span>
                    <br />
                    <div>
                        <label>Binary Input</label>
                        <div>
                            <input
                                type="text"
                                name="binary"
                                placeholder="Enter 0 or 1"
                                autoComplete="off"
                                onChange={this.onFormChange}
                            />
                            <button type="submit">Convert</button>
                        </div>
                    </div>
                    <div>
                        <label>Decimal Output</label>
                        <div>
                            <input
                                type="text"
                                name="decimal"
                                value={this.state.decimal}
                                disabled
                            />
                        </div>
                    </div>
                </form>
            </>
        );
    }
}

const rootElement = document.getElementById('root')
ReactDOM.render(< App />, rootElement)
