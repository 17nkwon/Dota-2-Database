import React from 'react';
import './App.css';
import header from './dota_2_header.png';

class App extends React.Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            heroes: [],
            tempName: "",
            tempAttack: "",
            tempAttribute: "",
            modName: "",
            modAttack: "",
            modAttribute: "",
            delName: "",
            delAttack: "",
            delAttribute: "",
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
        let hero = { name: this.state.modName, attack: this.state.modAttack, attribute: this.state.modAttribute };
        let options = {
            method: 'put',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(hero)
        }
        fetch('/heroes', options);
    }

    delData() {
        let hero = { name: this.state.delName, attack: this.state.delAttack, attribute: this.state.delAttribute };
        let options = {
            method: 'delete',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(hero)
        }
        fetch('/heroes', options);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    // display the forms
    render() {
        return (
            <div className="App">
                <img src={header} />

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

                    Enter Hero Name:
                    <input type="text" name="modName" value={this.state.modName} onChange={this.handleChange}></input>
                    Change Attack Type:
                    <input type="text" name="modAttack" value={this.state.modAttack} onChange={this.handleChange}></input>

                    <input type="submit" value="Submit"></input>

                </form>

                <h1>Delete a Hero</h1>
                <form onSubmit={() => { this.delData() }}>

                    Enter Hero Name:
                    <input type="text" name="delName" value={this.state.delName} onChange={this.handleChange}></input>
                    Enter Attack Type:
                    <input type="text" name="delAttack" value={this.state.delAttack} onChange={this.handleChange}></input>
                    Enter Attribute:
                    <input type="text" name="delAttribute" value={this.state.delAttribute} onChange={this.handleChange}></input>

                    <input type="submit" value="Submit"></input>

                </form>
                <br />
                <button onClick={() => { this.getData() }}>Database</button>
                
            </div>
        );
    }
}

export default App;