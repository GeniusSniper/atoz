import React, {useEffect} from 'react';

export default () => {
    useEffect(() => {
        document.title = "Page Not Found"
      }, [])
    return (
        <div>
            <h1>
                Sorry We couldn't find that page
            </h1>
            <h2>Try searching or got to Atoz's home page</h2>
        </div>
    )
}