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
import TextField from 'material-ui/TextField';

const WAIT_INTERVAL = 2000;

class Budget extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      budgetTotal: 2000,
      moneyLeft: 0,
      moneySpent: 0,
      activities: [],
      value: 0,
      fields: {},
      table: {
        fixedHeader: true,
        fixedFooter: true,
        stripedRows: false,
        showRowHover: false,
        selectable: false,
        showCheckboxes: false,
     
      }
    }
  };

  componentWillMount() {
    let fieldInputs = {};
    this.setState({})
  }

  componentDidMount() {
    // a call to the db to assign activities array.
    this.timer = null;

    this.setState({
      moneyLeft: this.state.budgetTotal,
      activities: [
        {name: 'Skydiving', description: 'Death is Certain', price: 100.00},
        {name: 'Bird Watching', description: 'Living on the edge', price: 0},
        {name: 'Bungee Jumping', description: 'Throw me off!!', price: 75}
      ]
    });
  }

  handleToggle = (e, toggled) => {
    this.setState({
      [event.taget.name]: toggled
    });
  };

  handleCh = (e) => {
    this.setState({height: event.target.value});
  };

  handleThrottledInput(e, newVal) {
    let self = this;
    let target = e.target.id
    let targetValue = e.target.value
    clearTimeout(this.timer);

    this.timer = setTimeout(function() {
      self.handlePriceInput(target, targetValue, newVal)
    }, WAIT_INTERVAL);

  }

  handlePriceInput = (target, targetValue, newVal) => {
    // need to handle backspaced no value.
      // might need to have a prev val state and a new val state
    let fields = Object.assign({}, this.state.fields);
    fields[target] = newVal;
    this.setState({fields})
    if (parseFloat(targetValue === NaN)) {
      this.setState({moneySpent: 0 })
    }

    this.setState({
      value: targetValue,
      moneySpent: this.state.moneySpent + parseFloat(targetValue)
    }, function() {
      this.setState({moneyLeft: this.state.budgetTotal - this.state.moneySpent})
    });
  };

  render(){
    return (
      <div className="budget">
        <Table
          height={this.state.table.height}
          fixedHeader={this.state.table.fixedHeader}
          fixedFooter={this.state.table.fixedFooter}
          selectable={this.state.table.selectable}
          multiSelectable={this.state.table.multiSelectable}
        >
          <TableHeader
            displaySelectAll={false}
            adjustForCheckbox={this.state.table.showCheckboxes}
            enableSelectAll={this.state.table.enableSelectAll}
            >
            <TableRow>
              <TableHeaderColumn colSpan="3" tooltip="BudgetTrip" style={{textAlign: 'center'}}>{<h1>{`Total Budget: $${this.state.budgetTotal} Total Spent: $${this.state.moneySpent} Budget Left: $${this.state.moneyLeft}`}</h1>}</TableHeaderColumn>
            </TableRow>
            <TableRow >
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Description</TableHeaderColumn>
              <TableHeaderColumn>Cost</TableHeaderColumn>
              <TableHeaderColumn>Price</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={this.state.table.showCheckboxes}
            deselectOnClickaway={this.state.deselectOnClickaway}
            showRowHover={this.state.showRowHover}
            stripedRows={this.state.stripedRows}
          >
            {this.state.activities.map((activity, idx) => (
              <TableRow key={`${activity}_${idx}`}>
                <TableRowColumn key={activity.name}>{activity.name}</TableRowColumn>
                <TableRowColumn key={activity.description}>{activity.description}</TableRowColumn>
                <TableRowColumn key={activity.price}>{activity.price}</TableRowColumn>
                <TextField
                  key={`${idx}`}
                  id={`${activity.name}`}
                  onChange={(e, newVal) => {this.handleThrottledInput(e, newVal)}}
                  type="number"
                  />
              </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
      )
  }

}

export default Budget;