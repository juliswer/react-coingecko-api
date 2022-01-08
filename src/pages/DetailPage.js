import {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';

const DetailCoin = () => {

    const {id} = useParams();

    const [coin, setCoin] = useState({});

    const getSingleData = async () => {
        const res = await axios.get('https://api.coingecko.com/api/v3/coins/' + id);
        setCoin(res.data)
    }

    useEffect(() => {
        getSingleData();
    }, [])

    return (
        <div>
            <h1>{coin.name}</h1>
        </div>
    )
}

export default DetailCoin
