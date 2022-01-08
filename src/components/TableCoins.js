import React from 'react'

const TableCoins = ({coins}) => {

    

    return (
        <table>
            <thead>
                <tr>
                    <td>Name</td>
                </tr>
            </thead>
            <tbody>
                {coins.map(coin => (
                    <tr key={coin.id}>{coin.name}</tr>
                ))}
            </tbody>
        </table>
    )
}

export default TableCoins
