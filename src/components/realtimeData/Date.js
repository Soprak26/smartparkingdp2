import React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { getDatabase, ref, remove, onValue } from 'firebase/database';
import { Table, Button } from 'react-bootstrap';
import StartFirebase from '../firebaseConfig';
import * as XLSX from 'xlsx';

const db = StartFirebase();

export class DateSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      data: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleRemoveRow = this.handleRemoveRow.bind(this);
    this.handleDownload = this.handleDownload.bind(this);
  }

  componentDidMount() {
    // Fetch data for the current date
    this.fetchData(this.state.startDate);
  }
  
  handleChange(date) {
    this.setState({
      startDate: date
    });
  
    // Fetch data for the selected date
    this.fetchData(date);
  }
  
  fetchData(date) {
    // Format date as 'yyyy/mm/dd'
    const formattedDate = date.toISOString().split('T')[0];
  
    // Fetch data from Firebase
    const dbRef = ref(db, `/parkcarlog/date/${formattedDate}`);
  
    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      const dataWithKeys = Object.entries(data || {}).map(([key, value]) => ({ key, ...value }));
      this.setState({ data: dataWithKeys });
    });
  }
  
  // Function to handle row removal
  handleRemoveRow(index, rowKey) {
    const shouldRemove = window.confirm("Are you sure you want to delete this row?");
    if (shouldRemove) {
      const updatedData = [...this.state.data];
      updatedData.splice(index, 1); // Remove the row at the specified index
      this.setState({ data: updatedData });
  
      // Remove the corresponding record from Firebase
      const dbRef = ref(db, `/parkcarlog/date/${this.state.startDate.toISOString().split('T')[0]}/${rowKey}`);
      remove(dbRef);
    }
  }

  handleDownload() {
    // Change property name from 'key' to 'License Plate'
    const dataForDownload = this.state.data.map(row => {
      return {
        'License Plate': row.key,
        'Name':row.name,
        'Time In':row.time_in,
      };
    });
  
    const ws = XLSX.utils.json_to_sheet(dataForDownload);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
  
    // Format the date as 'yyyy-mm-dd'
    const formattedDate = this.state.startDate.toISOString().split('T')[0];
  
    // Include the date in the filename
    XLSX.writeFile(wb, `table_data_${formattedDate}.xlsx`);
  }

  render() {
    return (
      <div>
          <DatePicker selected={this.state.startDate} onChange={this.handleChange} dateFormat="yyyy-MM-dd" className="mb-4 p-2 border-2 border-gray-300 rounded-md" />
        {this.state.data.length > 0 && (
          <div><br></br><br></br>
            <Button onClick={this.handleDownload}>Download as Excel</Button><br></br><br></br><br></br>
            <Table className='container w-75 text-center' bordered striped variant='secondary'>
            <thead>
            <tr>
              <th>License Plate</th>
              <th>Name</th>
              <th>Time In</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((row, index) => (
              <tr key={index}>
                <td>{row.key}</td>
                <td>{row.name}</td>
                <td>{row.time_in}</td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => this.handleRemoveRow(index, row.key)}
                  >
                    Remove
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
            </Table>
          </div>
        )}
      </div>
    );
  }
}
