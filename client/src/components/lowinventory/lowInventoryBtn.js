import React from "react";
import { Link } from "react-router-dom";

class LowInventory extends React.Component {
    handleClick() {
        console.log('Clicked');
    }
    render() {
        return (
            <div className="buttons">
                <Link to={"/lowinventory"}>
                    <button className="button is-link is-large" onClick={this.handleClick.bind(this)}>Low Inventory</button>
                </Link>
            </div>
        )
    }
}

export default LowInventory;