import React from 'react'

const CoinRow = ({coin, index}) => {
    return (
        <tr>
            <td>{index}</td>
            <td>
                <img src={coin.image} alt={coin.name} className="img-fluid me-2" style={{width: '3%'}} />
                <span>
                    {coin.name}
                </span>
            </td>
            <td>{coin.current_price}</td>
            <td>{coin.price_change_percentage_24h}</td>
            <td>{coin.total_volume}</td>
        </tr>
    )
}

export default CoinRow
