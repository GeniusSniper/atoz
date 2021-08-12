import React from 'react';

class Search extends React.Component {
    componentDidMount(){
        this.props.allItems();
    }

    render(){
        let items = this.props.items;
        if(items.length === 0) return null;
        let need = this.props.match.params.keyword;
        let result = [];
        items.forEach(item => {
            if(item.item_name.includes(need) || item.descrption.includes(need))
            result.push(item);
        });
        return (
            <div>

            </div>
        );
    }
}

export default Search;