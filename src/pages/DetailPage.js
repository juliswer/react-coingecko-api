import {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';

const DetailCoin = () => {

    const {id} = useParams();

    const getSingleData = async () => {
        const res = await axios.get('https://api.coingecko.com/api/v3/coins/' + id);
        console.log(res)
    }

    useEffect(() => {
        getSingleData();
    }, [])

    return (
        <div>
            <h1>detail page</h1>
        </div>
    )
}

export default DetailCoin
