# UsedCars App starter project

###This project is the starter code for exercises used in React course week 1.

### To get started

- Clone the project

- Open it in webstorm or similar editor

- Open the console/terminal and write

  ```
  npm install
  ```

  This will install all the node module dependencies required by react and other libraries used in the application. It can take a while to download and install since there are many dependencies.

### Important files in the project.

- **UsedCarsApp.js** - this is the main container Component of the project. Inside it are 2 other components: 
  - **usedcarsview/UsedCarsView.js** - this is the table showing all the cars
  - **carinput/CarInput.js** - this is the input form that is used to update/edit car data and to submit new cars.
- Then there are the helper components like
  - Currency.js, App.css, CarInput.css etc..

### The whole idea

The project was created first as a solution to the exercise and then method bodies were removed for the student to implement.

The methods that needs to be implemented are all inside the containing app: UsedCarsApp it is here on the  level shared by the 2 sub components, that the CRUD operations are performed. 

In terms of CRUD both Create and Update are done by the same method: submitCar() (but you can have 2 if you want)

The methods to implement are:

- deleteCar()
- grabCar() - used for filling the input form with data from the car that had its edit button clicked
- submitCar()



#### Thats it - Have fun!