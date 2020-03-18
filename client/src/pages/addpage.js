import React from "react";
import BackButton from "../components/backbutton/backbutton";
import { Input, FormBtn } from "../components/form/form";
import Hero from "../components/hero/hero";
import "./mainpage.css"

class AddPage extends React.Component {
    state = {
        inventory: [],
        itemNumber: "",
        add: ""
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    //   handleFormSubmit = event => {
    //     event.preventDefault();
    //     if (this.state.itemNumber && this.state.subtract) {
    //       API.subtractQuantity({
    //         itemNumber: this.state.itemNumber,
    //         subtract: this.state.subtract
    //       })
    //         .then(res => this.viewInventory())
    //         .catch(err => console.log(err));
    //     }
    //   };

    render() {
        return (
            <div>
                <Hero />
                <div className="container mainContain">
                    <h1 className="is-size-1">Add Inventory</h1>
                    <hr />
                    <div className="columns">
                        <div className="column is-9">
                            <form>
                                <Input
                                    value={this.state.itemNumber}
                                    onChange={this.handleInputChange}
                                    name="itemNumber"
                                    placeholder="Item Number (required)"
                                />
                                <Input
                                    value={this.state.add}
                                    onChange={this.handleInputChange}
                                    name="subtract"
                                    placeholder="Quantity to Add (required)"
                                />
                                <div className="columns">
                                    <div className="column is-3">
                                        <FormBtn
                                            disabled={!(this.state.add && this.state.itemNumber)}
                                            onClick={this.handleFormSubmit}
                                        >
                                            Submit
                                        </FormBtn>
                                    </div>
                                    <div className="column is-3">
                                        <BackButton />
                                    </div>
                                </div>

                            </form>
                        </div>
                        <div className="column is-3">


                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddPage;