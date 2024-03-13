
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


export class VacantCounter1Cars extends React.Component {
  state = {
    value: null,
  };

  componentDidMount() {
    this.fetchValue();
    this.setupAutoUpdate();
  }

  fetchValue = async () => {
    const dbRef = ref(db, "/vacantcounter1/cars"); // Replace with your desired path

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
    const valueRef = ref(db, "/vacantcounter1/cars"); // Replace with your desired path

    onValue(valueRef, (snapshot) => {
      if (snapshot.exists()) {
        const value = snapshot.val();
        this.setState({ value });
      }
    });
  };

  render() {
    const { value } = this.state;

    return (
      <div className='border-3 border-red-600 bg-red-400  w-[250px] h-[140px] items-center justify-center flex'>
        <p className='text-center text-2xl font-bold '>Occupied: {value}</p>
      </div>
    );
  }
}

export class VacantCounter1Vacant extends React.Component {
  state = {
    value: null,
  };

  componentDidMount() {
    this.fetchValue();
    this.setupAutoUpdate();
  }

  fetchValue = async () => {
    const dbRef = ref(db, "/vacantcounter1/vacant"); // Replace with your desired path

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
    const valueRef = ref(db, "/vacantcounter1/vacant"); // Replace with your desired path

    onValue(valueRef, (snapshot) => {
      if (snapshot.exists()) {
        const value = snapshot.val();
        this.setState({ value });
      }
    });
  };

  render() {
    const { value } = this.state;

    return (
      <div className='border-3 border-green-600 bg-green-400 w-[250px] h-[140px] items-center justify-center flex'>
        <p className='text-center text-2xl font-bold '>Vacant: {value}</p>
      </div>
    );
  }
}


export class VacantCounter2Cars extends React.Component {
  state = {
    value: null,
  };

  componentDidMount() {
    this.fetchValue();
    this.setupAutoUpdate();
  }

  fetchValue = async () => {
    const dbRef = ref(db, "/vacantcounter2/cars"); // Replace with your desired path

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
    const valueRef = ref(db, "/vacantcounter2/cars"); // Replace with your desired path

    onValue(valueRef, (snapshot) => {
      if (snapshot.exists()) {
        const value = snapshot.val();
        this.setState({ value });
      }
    });
  };

  render() {
    const { value } = this.state;

    return (
      <div className='border-3 border-red-600 bg-red-400  w-[250px] h-[140px] items-center justify-center flex'>
        <p className='text-center text-2xl font-bold '>Occupied: {value}</p>
      </div>
    );
  }
}

export class VacantCounter2Vacant extends React.Component {
  state = {
    value: null,
  };

  componentDidMount() {
    this.fetchValue();
    this.setupAutoUpdate();
  }

  fetchValue = async () => {
    const dbRef = ref(db, "/vacantcounter2/vacant"); // Replace with your desired path

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
    const valueRef = ref(db, "/vacantcounter2/vacant"); // Replace with your desired path

    onValue(valueRef, (snapshot) => {
      if (snapshot.exists()) {
        const value = snapshot.val();
        this.setState({ value });
      }
    });
  };

  render() {
    const { value } = this.state;

    return (
      <div className='border-3 border-green-600 bg-green-400 w-[250px] h-[140px] items-center justify-center flex'>
        <p className='text-center text-2xl font-bold '>Vacant: {value}</p>
      </div>
    );
  } 
}













