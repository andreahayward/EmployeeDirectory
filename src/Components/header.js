import React from 'react';

export default class PageHeader extends React.Component {
    render() {
        return (
            <div>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="text-center text-white">Employee Directory</h1>
                        <p className="lead text-center text-white">Click on the arrows to filter by headers or use the search box to find a specific employee.</p>
                    </div>
                </div>
            </div>
        )
    }
}