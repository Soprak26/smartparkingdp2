
import StartFirebase from '../firebaseConfig/index';
import { ref, onValue, get } from 'firebase/database';
import { Table } from 'react-bootstrap';
import { CrudPanel } from './CrudPanel';
import React from 'react';



const db = StartFirebase();
let UniqueNumber = 0;

export class RealtimeDatainDatabase extends React.Component {
  constructor() {
    super();
    this.state = {
      tableData: []
    }
  }

  componentDidMount() {
    const dbRef = ref(db, 'Database');

    onValue(dbRef, (snapshot) => {
      let records = [];
      snapshot.forEach(childSnapshot => {
        let keyName = childSnapshot.key;
        let data = childSnapshot.val();
        records.push({ "key": keyName, "data": data });
      });
      this.setState({ tableData: records });
    });
  }


  render() {
    return (
      <Table className='container w-75 text-center' bordered striped variant='secondary'>
        <thead>
          <tr>
            <th>#</th>
            <th>License Plate</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Type</th>
            <th>Control Panel</th>
          </tr>
        </thead>
        
        <tbody>
          {this.state.tableData.map((row, index) => {
            return (
              <tr key={UniqueNumber++}>
                <td>{index + 1}</td>
                <td>{row.key}</td>
                <td>{row.data.firstname}</td>
                <td>{row.data.lastname}</td>
                <td>{row.data.type}</td>
                <td><CrudPanel platenumber={row.key} record={row.data} /></td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    )
  }
}

export class RealtimeDatainParkedCarLog extends React.Component {
  constructor() {
    super();
    this.state = {
      tableData: []
    }
  }

  componentDidMount() {
    const dbRef = ref(db, '/parkcarlog/date/2024-02-07');

    onValue(dbRef, (snapshot) => {
      let records = [];
      snapshot.forEach(childSnapshot => {
        let keyName = childSnapshot.key;
        let data = childSnapshot.val();
        records.push({ "key": keyName, "data": data });

      });
      this.setState({ tableData: records });
    });

  }

  render() {
    return (
      <Table className='container w-75 text-center' bordered striped variant='secondary'>
        <thead>
          <tr>
            <th>#</th>
            <th>License Plate</th>
            <th>Name</th>
            <th>Time In</th>
            <th>Time Out</th>
          </tr>
        </thead>

        <tbody>
          {this.state.tableData.map((row, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{row.key}</td>
                <td>{row.data.name}</td>
                <td>{row.data.time_in}</td>
                <td>{row.data.time_out}</td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    )
  }
}

export class DedicatedWarnLevel extends React.Component {
  state = {
    value: null,
  };

  componentDidMount() {
    this.fetchValue();
    this.setupAutoUpdate();
  }

  fetchValue = async () => {
    const dbRef = ref(db, "/dedicatedWarnLevel/value"); // Replace with your desired path

    try {
      const snapshot = await get(dbRef);
      if (snapshot.exists()) {
        const value = snapshot.val();
        this.setState({ value });
      }
    } catch (error) {
      console.error("Error fetching value from Firebase:", error);
    }
  };
  setupAutoUpdate = () => {
    const valueRef = ref(db, "/dedicatedWarnLevel/value"); // Replace with your desired path

    onValue(valueRef, (snapshot) => {
      if (snapshot.exists()) {
        const value = snapshot.val();
        this.setState({ value });
      }
    });
  };

  render() {
    const { value } = this.state;
  
    let color;
    let displayValue;
  
    if (value == "initial") {
      color = 'bg-gray-400 border-grey-600';
      displayValue = 'INITIAL'; // Display 'WARNING' when value is 'initial'
    } else if (value == "low") {
      color = 'bg-green-400 border-green-600';
      displayValue = 'ALL CLEAR';
    } else if (value == "designated") {
      color = 'bg-yellow-400 border-yellow-600';
      displayValue = 'DESIGNATED PARKING';
    } else if (value == "undesignated") {
      color = 'bg-red-400 border-red-600';
      displayValue = 'WARNING';
    } else {
      color = 'bg-blue-400 border-blue-600';
      displayValue = 'LOADING';
    }
  
    return (
      <div className={`border-3 ${color} w-[250px] h-[140px] items-center justify-center flex`}>
        <p className='text-center text-2xl font-bold '>{displayValue}</p>
      </div>
    );
  }
}
  













