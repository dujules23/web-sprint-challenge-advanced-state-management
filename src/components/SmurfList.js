import React from 'react';
import Smurf from './Smurf';

import { connect } from "react-redux";

 const SmurfList = (props)=> {

    // console.log(props)
    if (props.isLoading) {
        return <h1>Loading...</h1>;
    }

    return(<div className="listContainer">
        {props.smurfs.map((item )=>
        <Smurf key={item.id} smurf={item}/>
        )}
    </div>);
}

const mapState = (state) => {
    // console.log(state.isLoading)
    return {
        smurfs: state.smurfs,
        isLoading: state.isLoading
    }
}


export default connect(mapState)(SmurfList);

//Task List:
//1. Connect the smurfs and loading state values to the SmurfList component.
//2. Replace the single Smurf component instance with a map return a Smurf component for each entry in the smurfs list.
//3. Replace the static isLoading variable with the state loading variable.