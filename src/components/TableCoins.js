import React from 'react'

const TableCoins = ({coins}) => {

    

    return (
        <table className="table table-dark mt-4 table-hover">
            <thead>
                <tr>
                    <td>Name</td>
                </tr>
            </thead>
            <tbody>
                {coins.map(coin => (
                    <tr key={coin.id}>
                        <td>{coin.name}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default TableCoins
