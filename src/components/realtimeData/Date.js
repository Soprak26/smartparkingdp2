import React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { getDatabase, ref, onValue } from 'firebase/database';
import { Table } from 'react-bootstrap';
import StartFirebase from '../firebaseConfig'

const db = StartFirebase(); 

export class DateSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      data: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });

    // Format date as 'yyyy/mm/dd'
    const formattedDate = date.toISOString().split('T')[0];

    // Fetch data from Firebase
    const dbRef = ref(db, `/parkcarlog/date/${formattedDate}`); // update this with the path to your data

    onValue(dbRef, (snapshot) => {
        const data = snapshot.val();
        const dataWithKeys = Object.entries(data || {}).map(([key, value]) => ({ key, ...value }));
        this.setState({ data: dataWithKeys });
      });
  }

  render() {
    return (
      <div>
        <DatePicker selected={this.state.startDate} onChange={this.handleChange} dateFormat="yyyy-MM-dd" />
        {this.state.data.length > 0 && (
          <Table striped bordered hover style={{ margin: '20px 0' }}>
            <thead>
              <tr>
                <th>License Plate</th>
                <th>Name</th>
                <th>Time In</th>
                <th>Time Out</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map((row, index) => (
                <tr key={index}>
                  <td>{row.key}</td>
                  <td>{row.name}</td>
                  <td>{row.time_in}</td>
                  <td>{row.time_out}</td>
                </tr>
                ))}
            </tbody>
          </Table>
        )}
      </div>
    );
  }
}