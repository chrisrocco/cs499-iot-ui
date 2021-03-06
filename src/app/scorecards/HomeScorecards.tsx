import * as React from 'react'

export const HomeScorecards = ({ home }) => {
    return (
        <div className="App-scorecards">

            <div className="stat-box stat-box-cool-gray">
                <div className="stat-box-icon"><i className="fa fa-comments" /></div>
                <strong>${home.power + home.water + home.gas}</strong>
                <span>Cost This Month</span>
            </div>

            <div className="stat-box stat-box-green">
                <div className="stat-box-icon"><i className="fa fa-bolt" /></div>
                <strong>{home.power}</strong>
                <span>Watts Used</span>
            </div>

            <div className="stat-box stat-box-blue">
                <div className="stat-box-icon"><i className="fa fa-water" /></div>
                <strong>{home.water}</strong>
                <span>Gallons of Water</span>
            </div>

            <div className="stat-box stat-box-red">
                <div className="stat-box-icon"><i className="fa fa-gas-pump" /></div>
                <strong>{home.gas}</strong>
                <span>Gas Used</span>
            </div>

        </div>
    )
}