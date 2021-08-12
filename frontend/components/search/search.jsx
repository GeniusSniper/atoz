import React from 'react';

class Search extends React.Component {
    componentDidMount(){
        this.props.allItems();
    }

    render(){
        let items = this.props.items;
        if(items.length === 0) return null;
        let need = this.props.match.params.keyword;
        let result = items.map(item => {
            if(item.item_name.includes(need) || item.descrption.includes(need)){
                return (
                    <div key={item.item_name} className='searchItems'>
                        <div><img src={item.image_url[0]} alt="img" /></div>
                        <div>{item.item_name}</div>
                        <div>{item.item_price}</div>
                    </div>
                )
            }
            return null;
        });
        return (
            <div className='searchResult'>
                {result}
            </div>
        );
    }
}

export default Search;