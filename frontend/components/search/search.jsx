import React from 'react';
import { Link } from 'react-router-dom';

class Search extends React.Component {
    componentDidMount(){
        this.props.allItems();
        document.title = this.props.match.params.keyword;
    }

    render(){
        let items = this.props.items;
        if(items.length === 0) return null;
        let need = this.props.match.params.keyword;
        let result = [];
        items.forEach(item => {
            if(item.item_name.includes(need) || item.descrption.includes(need)){
                result.push(
                    <div key={item.item_name}>
                        <div className='searchItems'>
                            <Link to={`/items/${item.id}`} className='searchLink'> 
                                <div className='searchImgsDiv'>
                                    <img src={item.image_url[0]} alt="img" className='searchImgs'/>
                                </div>
                            </Link>
                            <div>
                                <Link to={`/items/${item.id}`} className='searchLink'> 
                                    <div>{item.item_name}</div>
                                </Link>
                                <div>${item.item_price}</div>
                            </div>
                        </div>
                    </div>
                )
            }
        });
        if(result.length === 0){
            result = (
                <div className='searchNoResult'>
                    <h2>
                        No results for {need}.
                    </h2>
                    <br />
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


let itemName = name => {
    return name.length > 60 ? name.slice(0, 60) + '...' : name;
}