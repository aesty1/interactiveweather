import './Search.css';
import { Component } from 'react';
class Search extends Component {
    state = {
        data: []
    }
    onLabelChange = (e) => {
        this.setState({data: e.target.value})
    }
    handleKeyDown = (event) => {
        if(event.keyCode === 13) {
            this.props.updateData(this.state.data)
        }
    }
    render() {
        return (
            <div className="field__container">
                <input onKeyDown={this.handleKeyDown}
                onChange={this.onLabelChange}
                type="text"
                className="very_small_grey_text field"
                placeholder="Name the city.."></input>
                {/* <button onClick={() => this.props.updateData(this.state.data)}
                 className="submit_button"
                 ><p className='submit_button__text'>SUBMIT</p></button> */}
            </div>
        )
    }
}

export default Search;