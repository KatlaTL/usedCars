/**
 * Created by tha on 16-03-2017.
 */
import React, {Component} from 'react';
import './CarInput.css';
import {Link} from "react-router";

class CarInput extends Component {
    constructor(props) {
        super(props);
        this.state = {car: props.car};
    }
    //Ensure a setState with rerender whenever new props are send to CarInput from the UsedCarsApp render() method (when another car was chosen to edit)
    componentWillReceiveProps(nextProps) {
        this.setState({car: nextProps.car});
    };

    submitData(e) {
        const car = {};
        car.id = (this.state.car)?Number(this.state.car.id):0; //If no id availble set to 0; (this is the case when not edit but when register new car)
        car.year = Number(document.getElementById("year").value);
        car.registered = document.getElementById("registered").value;
        car.make = document.getElementById("make").value;
        car.model = document.getElementById("model").value;
        car.description = document.getElementById("description").value;
        car.price = Number(document.getElementById("price").value);

        e.stopPropagation();
        this.props.submit(car);
    }

    render() {
        //if no car reference in this.state then: provide a car object with empty properties else: use the car from this.state
        const car = (!this.state.car)?({car: {id: 0, year: '', registered: '', make: '', model: '', description: '', price: ''}}):(this.state.car);
        return <div className="car">
            <h2 className="car-header">Register Car</h2>
            <div className="car-container">
                <p><Input id="year" type="text" placeholder="year" val={car.year}/></p>
                <p><Input id="registered" type="text" placeholder="registered" val={car.registered}/></p>
                <p><Input id="make" type="text" placeholder="make" val={car.make}/></p>
                <p><Input id="model" type="text" placeholder="model" val={car.model}/></p>
                <p><Input id="description" type="text" placeholder="description" val={car.description}/></p>
                <p><Input id="price" type="text" placeholder="price" val={car.price}/></p>
                <p><Link to="/" onClick={this.submitData = this.submitData.bind(this)}>Submit car</Link></p>
            </div>
        </div>
    }
}

class Input extends Component {
    render() {
        return (
            <input
                key={this.props.val} //USING key combined with defaultValue is what makes it work !!!!!! Straing and wonderfull
                type={this.props.type}
                value={this.props.value}
                name={this.props.name}
                placeholder={this.props.placeholder}
                id={this.props.id}
                ref="myTextInput"
                //onBlur = {this.myTextInputHandler}
                defaultValue={this.props.val} //defaultValue does not work since it is only used in the very first render before the props is set.
            />)
    }
}
export default CarInput;
