/**
 * Created by tha on 15-03-2017.
 */
import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import currency from './Currency';

var cars = [
    {year: 1997, registered: 867621600000, make: 'Ford', model: 'E350', description: 'ac,abs, moon', price: 3000}
    , {year: 1999, registered: 945212400000, make: 'Chevy', model: 'Venture', description: 'None', price: 4900}
    , {year: 2000, registered: 953766000000, make: 'Chevy', model: 'Venture', description: '', price: 5000}
    , {year: 1996,registered: 844380000000,make: 'Jeep',model: 'GrandCherokee',description: 'Air, moon roof, loaded',price: 4799}
    , {year: 2012,registered: 844380000000,make: 'VW',model: 'Up',description: 'Air, moon roof, loaded',price: 2799}
    , {year: 2015,registered: 844380000000,make: 'Fiat',model: 'Panda',description: 'Breaks, Seats, Steering wheel',price: 1799}
];

class DataTableSortable extends Component {

    render() {
        document.title = "Used Cars App";
        const carlines = cars.map((car, index) => {
                const registered = (new Date(car.registered)).toISOString().slice(0, 10);
                return <tr key={index}>
                    <td>{car.year}</td>
                    <td>{registered}</td>
                    <td>{car.make}</td>
                    <td>{car.model}</td>
                    <td>{car.description}</td>
                    <td>{currency(car.price)}</td>
                </tr>;
            }
        );
        const carsTable = <table className="table-striped">

            <thead>
            <tr>
                <th>Year</th>
                <th>Registered</th>
                <th>Make</th>
                <th>Model</th>
                <th>Description</th>
                <th>Price</th>
            </tr>
            </thead>
            <tbody>
            {carlines}
            </tbody>
        </table>;
        return (
            <div className="UsedCarsApp">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Used cars</h2>
                    <h1>Det er en test</h1>
                </div>
                <h3>Number of cars in the list: {cars.length}</h3>

                {carsTable}

            </div>
        );
    }
}

export default DataTableSortable;
