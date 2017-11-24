import React from 'react';
import ReactDOM from 'react-dom';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';


class Budget extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      budgetTotal: 0,
      moneyLeft: 0,
      moneySpent: 0,
      activities: [],
    }
  }


  render(){
    return (
      <div>
        <Table >
          <TableHeader displaySelectAll={false}>
            <TableRow>
              <TableHeaderColumn colSpan="3" tooltip="BudgetTrip" style={{textAlign: 'center'}}>{<h1>{`Total Budget: $${this.state.budgetTotal} Total Spent: $${this.state.moneySpent} Budget Left: $${this.state.moneyLeft}`}</h1>}</TableHeaderColumn>
            </TableRow>
            <TableRow >
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Description</TableHeaderColumn>
              <TableHeaderColumn>Price</TableHeaderColumn>
            </TableRow>
          </TableHeader>
        </Table>
      </div>
      )
  }
}

export default Budget;
