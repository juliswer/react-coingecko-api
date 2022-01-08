import React from 'react'

const SingleCoin = ({coin}) => {

    const titles = ['#', 'Coin', 'Price', 'Price Change', '24h Volume']

    return (
        <table className="table table-dark mt-4 table-hover">
            <thead>
                <tr>
                    {titles.map((title, index) => (
                        <td key={index}>{title}</td>
                    ))}
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>{coin.index}</td>
                <td>
                    <img src={coin.image} alt={coin.name} className="img-fluid me-2" style={{width: '3%'}} />
                    <span>
                        {coin.name}
                    </span>
                    <span className="ms-2 text-muted text-uppercase">
                        {coin.symbol}
                    </span>
                </td>
                <td>{coin.current_price}</td>
                <td className={coin.price_change_percentage_24h > 0 ? 'text-success' : 'text-danger'}>{coin.price_change_percentage_24h}</td>
                <td>{coin.total_volume}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default SingleCoin
