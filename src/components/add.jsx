import React, { Component } from 'react';

class Add extends Component {
add = () => {
    const name = document.getElementById('addHabit').value;
    console.log(name);
    this.props.onAddList(name);
};

handleChange = (e) => {
    this.props.onChange(e);
    
};

    render() {
        return (
          /*   <form>
                <input type="text" id="addHabit"></input>
                <button onClick="this.add">Add</button>
            </form> */
            
            <form onSubmit={this.add}>
                <input
               
                onChange={this.handleChange}
                />
                <button type="submit">Add</button>
            </form>
        );
    }
}

export default Add;