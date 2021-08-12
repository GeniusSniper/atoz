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
            if(item.item_name.includes(need) || item.descrption.includes(need)){
                result.push(
                    <div key={item.item_name} className='searchItems'>
                        <div><img src={item.image_url[0]} alt="img" className='searchImgs'/></div>
                        <div>{item.item_name}</div>
                        <div>${item.item_price}</div>
                    </div>
                )
            }
        });
        if(result.length === 0){
            result = (
                <div>
                    <h2>
                        No results for {need}.
                    </h2>
                    <h2>
                        Try checking your spelling or use more general terms
                    </h2>
                </div>
            )
        }
        return (
            <div className='searchResult'>
                {result}
            </div>
        );
    }
}

export default Search;