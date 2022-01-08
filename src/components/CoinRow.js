import React from 'react'
import {useNavigate} from 'react-router-dom';

const CoinRow = ({coin, index}) => {

    const navigate = useNavigate();

    return (
        <tr onClick={() => navigate(`/coin/${coin.id}`)}>
            <td>{index}</td>
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
    )
}

export default CoinRow
