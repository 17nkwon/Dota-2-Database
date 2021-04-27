import React from 'react';
import './App.css';

class App extends React.Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            heroes: [],
            tempName: "",
            tempAttack: "",
            tempAttribute: "",
            // YOUR CODE HERE

            //
            success: true
        }
    }
    componentDidMount() {
        fetch('/heroes')
            .then(res => res.json())
            .then((heroPool) => { this.setState({ heroes: heroPool.info }) });
    }

    getData() {
        fetch('/heroes')
            .then(res => res.json())
            .then((heroPool) => { this.setState({ heroes: heroPool.info }) });
    }

    postData() {
        let hero = { name: this.state.tempName, attack: this.state.tempAttack, attribute: this.state.tempAttribute };
        let options = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(hero)
        }
        fetch('/heroes', options);
    }

    putData() {
        // YOUR CODE HERE

        //
    }

    delData() {
        // YOUR CODE HERE

        //
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    // display the forms
    render() {
        return (
            <div className="App">
                <button onClick={() => { this.getData() }}>Get Data</button>

                <h1>Create a Hero</h1>
                <form onSubmit={() => { this.postData() }}>
                    
                    Enter Hero Name:
                    <input type="text" name="tempName" value={this.state.tempName} onChange={this.handleChange}></input>
                    Enter Attack Type:
                    <input type="text" name="tempAttack" value={this.state.tempAttack} onChange={this.handleChange}></input>
                    Enter Attribute:
                    <input type="text" name="tempAttribute" value={this.state.tempAttribute} onChange={this.handleChange}></input>

                    <input type="submit" value="Submit"></input>

                </form>

                <h1>Modify a Hero</h1>
                <form onSubmit={() => { this.putData() }}>

                </form>

                <h1>Delete a Hero</h1>
                <form onSubmit={() => { this.delData() }}>

                </form>

                <ol>
                    {this.state.heroes.map(hero =>
                        <li key={hero.name}>Name: {hero.name}, Attack: {hero.attack}, Attribute: {hero.attribute} </li>)}
                </ol>
            </div>
        );
    }
}

export default App;