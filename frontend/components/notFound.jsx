import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';

export default () => {
    useEffect(() => {
        document.title = "Page Not Found"
      }, [])
    return (
        <div className='searchResult'>
            <h1>
                Sorry We couldn't find that page
            </h1>
            <h2>Try searching or go to <Link to='/'>Atoz's home page</Link></h2>
        </div>
    )
}