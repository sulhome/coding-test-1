# About this Repository

This README file will describe the changes which were made to the [connect](https://github.com/commaai/connect) repository in order to implement the **Fleet Manager** UI coding task.

## Libraries used
### @emotion/styled
This library was used to create ui components with specific css properties. Example usage exists in `fleet-manager/ui-components`
The advantage of using this library is that you can customise native html tags with css syntax inside JavaScript files. 

### @testing-library/react
The recommended testing library for react applications. This was used to test the `DriverActivity` component. Sample usage can be found in `DriverActivity.test.js`

## Solution Structure
### Container Components
`FleetManager.js` contains all the other ui components, although it is not managing the state for driver activities.

`DriversActivityList.js` contains all the ui and interaction logic related to the activities list (like dismiss, flag and pagination). Please note that pagination was not implemented but `dismiss` and `flag` are implemented.

### Presentation components
`ActivityListPagination.js` contains ui for pagination. Pagination was not implemented as part of this solution

`DriverActivity.js` contains ui for displaying an activity. It also raises various events like dismiss and flag

`ui-components.js` contains various `styled` components which are used in `DriverActivity.js`

### Data files
`activities.js` contains a read only list of activities

## State management
**React hooks** were used to maintain state throughout the solution. State management were used in container components only

## Unit tests
On component was unit tested as a showcase only. The component is `DriverActivity.js`. Unit tests are included in this file `DriverActivity.test.js`. `@testing-library/react` was used to interact with the component and `jest` as a test runner, mocking and assertion library.  

### Running unit tests
After moving into solution directory run
`npm run unit-test`

Please note that this command will run unit tests in `DriverActivity.test.js` file only.
## Limitations
* The solution was not tested on mobile view
* Unit testing were created for one component only.
* Pagination contains only ui with no interactivity

## Running the demo
After moving into solution directory run 
`npm run start`
When you open the home page click on `Fleet Manager` link found below `Try a demo` link

