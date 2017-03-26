import React, {Component} from 'react';
import './App.css';
import UsedCarsView from './usedcarsview/UsedCarsView';
import CarInput from './carinput/CarInput';
import {Router, Route, Link, hashHistory, NavLink, IndexRoute} from 'react-router'

var carsArray = [
    {id: 1, year: 1997, registered: 867621600000, make: 'Ford', model: 'E350', description: 'ac,abs, moon', price: 3000}
    , {id: 2, year: 1999, registered: 945212400000, make: 'Chevy', model: 'Venture', description: 'None', price: 4900}
    , {id: 3,year: 2000, registered: 953766000000, make: 'Chevy', model: 'Venture', description: '', price: 5000}
    , {id: 4,year: 1996,registered: 844380000000,make: 'Jeep',model: 'GrandCherokee',description: 'Air, moon roof, loaded',price: 4799}
    , {id: 5,year: 2012,registered: 844380000000,make: 'VW',model: 'Up',description: 'Air, moon roof, loaded',price: 2799}
    , {id: 6,year: 2015,registered: 844380000000,make: 'Fiat',model: 'Panda',description: 'Breaks, Seats, Steering wheel',price: 1799}
];


class UsedCarsApp extends Component{
    constructor(props){
        super(props);
        //format the date string to something usefull in each car object
        carsArray.forEach((car)=>{
            car.registered =(new Date(car.registered)).toISOString().slice(0, 10);
        });
        //Set State object
        this.state = { cars: carsArray};
        //Bind the 'this' reference to each method in this class
        this.deleteCar = this.deleteCar.bind(this);
        this.grabCar = this.grabCar.bind(this);
        this.submitCar = this.submitCar.bind(this);
    }

    //This method is run from the UsedCarsView (the delete button)
    deleteCar = function(target){
        var filteredCars = carsArray.filter(car => car.id != target.id);
        carsArray = filteredCars;
        this.setState({cars: carsArray});
    }

    //This method is run from the UsedCarsView (edit buttons) in order to fill the CarInput component with the appropriate data.
    grabCar = function(target){
        this.setState({car: carsArray[target.id-1]});
    }

    //This method is run from the CarInput Component with the data from the user form.
    submitCar = function(newCar){
        if(newCar.id === 0) {
            newCar.id = carsArray[carsArray.length-1].id + 1;
            carsArray.push(newCar);
            this.setState({cars: carsArray});
        } else {
            carsArray[newCar.id-1].year = newCar.year;
            carsArray[newCar.id-1].registered = newCar.registered;
            carsArray[newCar.id-1].make = newCar.make;
            carsArray[newCar.id-1].model = newCar.model;
            carsArray[newCar.id-1].description = newCar.description;
            carsArray[newCar.id-1].price = newCar.price;
            this.setState({cars: carsArray, car:null});
        }
    }
    //Edit virker ikke
    render(){
        document.title = "Used Cars App";
        const car = this.state.car;
        const AllCarsView = () => <UsedCarsView cars={this.state.cars} delete={this.deleteCar} edit={this.grabCar}/>;
        const EditCarsView = () => <CarInput car={car} submit={this.submitCar}/>;
        const NotFound = () => <h1>404... Page not found</h1>;
        const Nav = () => (
            <div id="containerDiv">
                <ul role="nav" id="nav">
                    <li><Link to="/" onlyActiveOnIndex activeStyle={{color:'#53acff'}}>All Cars</Link></li>
                    <li><Link to="/edit" activeStyle={{color:'#53acff'}}>Add Car</Link></li>
                </ul>
            </div>
        );
        const Container = (props) => (
            <div>
                <Nav />
                {props.children}
            </div>
        );

        return(
            <Router history={hashHistory}>
                <Route path="/" component={Container}>
                    <IndexRoute component={AllCarsView}/>
                    <Route path="/edit" component={EditCarsView}/>
                    <Route path="*" component={NotFound}/>
                </Route>
            </Router>
            );
    }

    getHighestID(arr){
        var highest = 0;
        arr.forEach(car=>{
            if(car.id > highest){
                highest = car.id;
            }
        });
        return highest;
    }
}
export default UsedCarsApp;
