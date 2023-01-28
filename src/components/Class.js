import React from "react";

class Class extends React.Component {
    constructor() {
        super()
        this.state = {
            qty: 1,
        }

        this.testing();
    }

    increaseQty = () => {
        // this.setState({ qty: this.state.qty + 1 })
        // this.setState({ qty: this.state.qty + 1 })
        // this.setState({ qty: this.state.qty + 5 })

        this.setState((prevState) => {
            return {
                qty: prevState.qty + 1,
            }
        }, () => { console.log(this.state.qty) })

        this.setState((prevState) => {
            return {
                qty: prevState.qty + 1,
            }
        }, () => { console.log(this.state.qty) })

        this.setState((prevState) => {
            return {
                qty: prevState.qty + 1,
            }
        }, () => console.log(this.state.qty))
    }

    testing() {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('done');
            }, 5000)
        })

        promise.then(() => {
            this.setState({ qty: this.state.qty + 4 })

            this.setState({ qty: this.state.qty + 4 })

            this.setState({ qty: this.state.qty + 4 })

            console.log('State: ', this.state);
        })
    }

    render() {
        console.log("Render");
        return (
            <div>
                <button onClick={this.increaseQty}>Click Me</button>
                <p style={{ textAlign: "center", fontSize: "3rem" }}>{this.state.qty}</p>
            </div>
        )
    }
}


export default Class;
