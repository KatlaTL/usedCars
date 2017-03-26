/**
 * Created by tha on 16-03-2017.
 */
import React, {Component} from "react";
import logo from "../logo.svg";
//import './App.css';
import currency from "../Currency";
//import orderBy from 'lodash'; //npm install --save lodash@4.17.4
import {orderBy} from 'lodash';
import {Link} from "react-router";
//import paramFilter from './FilterOnParams';

class UsedCarsView extends Component{
    constructor(props){
        super(props);
        this.state = {
            cars: this.props.cars,
            sortedBy: {col: 'year', dir: 'asc'}
        };
        this.sort = this.sort.bind(this);
        this.delete = this.delete.bind(this);
        this.edit = this.edit.bind(this);
    }

    //See this https://developmentarc.gitbooks.io/react-indepth/content/life_cycle/update/component_will_receive_props.html
    componentWillReceiveProps(nextProps) {
        this.setState({cars: nextProps.cars});
    };

    //This method is used to sort the dataset on any column, ascending or descending.
    sort(e){
        const column = e.target.innerText.toLowerCase();
        var dir = this.state.sortedBy.dir;
        var orderedCarsArr = orderBy(this.state.cars, [column]); //orderBy function from lodash takes the array and an array of columns to sort on
        if(this.state.sortedBy.col === column && dir === 'asc'){
            orderedCarsArr = orderedCarsArr.reverse();
            dir = 'desc';
        } else {
            dir = 'asc'
        }
        this.setState({cars: orderedCarsArr, sortedBy:{col: column, dir: dir}});
    }

    delete(e){
        e.preventDefault();
        this.props.delete(e.target);
    }
    edit(e){
        this.props.edit(e.target);
    }

    render() {
        const cars = this.state.cars;

        const carlines = cars.map((car, index) => {
                //const registered = (new Date(car.registered)).toISOString().slice(0, 10);
                return <tr key={car.id}>
                    <td>{car.year}</td>
                    <td>{car.registered}</td>
                    <td>{car.make}</td>
                    <td>{car.model}</td>
                    <td>{car.description}</td>
                    <td>{currency(car.price)}</td>
                    <td>
                        <Link to={"/edit"} id={car.id} onClick={this.edit}>edit</Link> | <a id={car.id}
                        onClick={this.delete}>delete</a>
                    </td>
                </tr>;
            }
        );
        const carsTable = <table className="table-striped">
            <thead>
            <tr>
                {/*<th>Year</th>*/}
                <SortingTH sort={this.sort}>Year</SortingTH>
                <SortingTH sort={this.sort}>Registered</SortingTH>
                <SortingTH sort={this.sort}>Make</SortingTH>
                <SortingTH sort={this.sort}>Model</SortingTH>
                <SortingTH sort={this.sort}>Description</SortingTH>
                <SortingTH sort={this.sort}>Price</SortingTH>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {carlines}
            </tbody>
        </table>;
        return (
            <div className="car-app">
                <h3 className="grey-back">Number of cars in the list: {cars.length}</h3>
                {carsTable}
            </div>
        );
    }
}
const SortingTH = (props) => {
    return (<th onClick={props.sort} className="sort-by">{props.children}</th>);
}
// class FilterInput extends Component{
//     constructor(props){
//         super(props);
//         this.update = this.update.bind(this);
//     }
//     update(){
//         var modifiedValue=this.refs.inputValue.getDOMNode().value;
//         this.props.updateValue(modifiedValue);
//     }
//     return(<input type="text" ref="inputValue" value={this.props.value} onChange={this.update} />)
//
// }
export default UsedCarsView;