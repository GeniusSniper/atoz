import React from 'react';
import { Link } from 'react-router-dom';

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text: '',
        };
    }

    update(p) {
        return e => this.setState({ [p]: e.currentTarget.value });
    }

    render(){
        return (
            <div className='searchTool' >
              <input type="search" value={this.state.text} onChange={this.update('text')} className='searchBar'/>
              <Link to={`/search/${this.state.text}`}>
                <button className='searchButton' onClick={ () => { this.setState({text: ''}) } }><img src="https://atoz-seeds.s3.us-east-2.amazonaws.com/seach_icon_by_skydragon.png" alt="search" className='searchIcon' /></button>
              </Link>
            </div>
        )
    }
}
export default SearchBar;