import * as React from 'react'

export const HomeScorecards = () => {
    return (
        <div className="App-scorecards">

            <div className="stat-box stat-box-cool-gray">
                <div className="stat-box-icon"><i className="fa fa-comments" /></div>
                <strong>$654</strong>
                <span>Cost This Month</span>
            </div>

            <div className="stat-box stat-box-green">
                <div className="stat-box-icon"><i className="fa fa-bolt" /></div>
                <strong>4,558</strong>
                <span>Watts Used</span>
            </div>

            <div className="stat-box stat-box-blue">
                <div className="stat-box-icon"><i className="fa fa-water" /></div>
                <strong>438</strong>
                <span>Gallons of Water</span>
            </div>

            <div className="stat-box stat-box-red">
                <div className="stat-box-icon"><i className="fa fa-gas-pump" /></div>
                <strong>101.25 mcf</strong>
                <span>Gas Used</span>
            </div>

        </div>
    )
}