import React from 'react'

const SingleCoin = ({coin}) => {

    return (
        <div className="card text-white bg-dark mt-2">
            <div className="card-body">
                <h5 className="card-title">{coin.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{coin.symbol}</h6>
                <p className="card-text">{coin.description.en.slice(0,850)}...</p>
                <a href={coin.links.homepage} className="card-link">View Crypto's page</a>
            </div>
        </div>
    )
}

export default SingleCoin
