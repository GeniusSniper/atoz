import React from 'react';
import { Link } from 'react-router-dom';

class Item extends React.Component{
    componentDidMount(){
        this.props.needItem(this.props.match.params.id);
    }

    render(){
        return(
            <>
                hi
            </>
        )
    }
};

export default Item;