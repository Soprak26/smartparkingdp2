import React from 'react';
import StartFirebase from '../firebaseConfig/index';
import { ref, onValue } from 'firebase/database';
import { Table } from 'react-bootstrap';
import { CrudPanel } from './CrudPanel';


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
        const dbRef = ref(db, 'ParkedCarLog');

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
                        <th>Date</th>
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
                                <td>{row.data.date}</td>
                                <td>{row.data.timein}</td>
                                <td>{row.data.timeout}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        )
    }
}

