import React from 'react'
import StartFirebase from '../firebaseConfig'
import {ref,set,get,update,remove,child, getDatabase, onValue} from 'firebase/database';



const db = StartFirebase();

export class Crud extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            db:'',
            platenumber:'',
            fname:'',
            lname:'',
            types:''
        }
        this.interface = this.interface.bind(this);
    }

    componentDidMount(){
        this.setState({
            db: StartFirebase()
        });
    }
    render(){
        return(
            <div class='flex flex-col justify-center items-center'>

                <label class='font-bold'>Enter Plate Number:</label>
                <input type='text' id='platebox' class="bg-gray-50 border border-gray-300 text-gray-900 text-md font-bold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20px p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={this.state.platenumber} 
                onChange={e=>{this.setState({platenumber:e.target.value});}}/>
                <br/>


                <label class='font-bold'>Enter First Name:</label>
                <input type='text' id='fnbox' class="bg-gray-50 border border-gray-300 text-gray-900 text-md font-bold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20px p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={this.state.firstname} 
                onChange={e=>{this.setState({firstname:e.target.value});}}/>
                <br/>


                <label class='font-bold'>Enter Last Name:</label>
                <input type='text' id='lnbox' class="bg-gray-50 border border-gray-300 text-gray-900 text-md font-bold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20px p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={this.state.lastname} 
                onChange={e=>{this.setState({lastname:e.target.value});}}/>
                <br/>


                <label class='font-bold'>Enter Type:</label>
                <input type='text' id='typebox' class="bg-gray-50 border border-gray-300 text-gray-900 text-md font-bold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20px p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={this.state.types} 
                onChange={e=>{this.setState({types:e.target.value});}}/>
                <br/>

                <button id="addBtn" className='ms-2 bg-sky-600 rounded-lg w-250px p-2.5 justify-center' onClick={this.interface}>Add Data</button>
            </div>
        )
    }
    interface(event){
        const id = event.target.id; 

        if(id=='addBtn'){
            this.insertData();
        }
    }
    getAllInputs(){
        return{
            platenumber: this.state.platenumber,
            fname: this.state.firstname,
            lname: this.state.lastname,
            types: this.state.types
        }
    }
    insertData(){
        const db = this.state.db;
        const data = this.getAllInputs();
    
        set(ref(db, 'Database/' + data.platenumber),
        {
            firstname: data.fname,
            lastname: data.lname,
            type: data.types
        })
        .then(()=>{
            alert('Record was added successfully');
            // Reset the state of the input fields
            this.setState({
                platenumber: '',
                firstname: '',
                lastname: '',
                types: ''
            });
        })
        .catch((error)=>{alert('There was an error, details: '+error)});
    }
}


export class CrudDedicatedParkSpace extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            db:'',
            platenumber:'',
            X1:'',
            X2:'',
            Y1:'',
            Y2:''
        }
        this.interface = this.interface.bind(this);
    }

    componentDidMount(){
        this.setState({
            db: StartFirebase()
        });
    }
    render(){
        return(
            <div class='flex flex-col justify-center items-center'>

                <label class='font-bold'>Enter Plate Number:</label>
                <input type='text' id='platebox' class="bg-gray-50 border border-gray-300 text-gray-900 text-md font-bold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20px p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={this.state.platenumber} 
                onChange={e=>{this.setState({platenumber:e.target.value});}}/>
                <br/>


                <label class='font-bold'>X1:</label>
                <input type='number' id='fnbox' class="bg-gray-50 border border-gray-300 text-gray-900 text-md font-bold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20px p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={this.state.x1} 
                onChange={e=>{this.setState({x1:e.target.value});}}/>
                <br/>


                <label class='font-bold'>X2:</label>
                <input type='number' id='lnbox' class="bg-gray-50 border border-gray-300 text-gray-900 text-md font-bold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20px p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={this.state.x2} 
                onChange={e=>{this.setState({x2:e.target.value});}}/>
                <br/>


                <label class='font-bold'>Y1:</label>
                <input type='number' id='typebox' class="bg-gray-50 border border-gray-300 text-gray-900 text-md font-bold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20px p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={this.state.y1} 
                onChange={e=>{this.setState({y1:e.target.value});}}/>
                <br/>


                <label class='font-bold'>Y2:</label>
                <input type='number' id='typebox' class="bg-gray-50 border border-gray-300 text-gray-900 text-md font-bold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20px p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={this.state.y2} 
                onChange={e=>{this.setState({y2:e.target.value});}}/>
                <br/>

                <button id="addBtn" className='ms-2 bg-sky-600 rounded-lg w-250px p-2.5 justify-center' onClick={this.interface}>Add Data</button>
                <p className = 'text-center text-md text-bold py-4 mt-3 font-bold' >Note: When adding new dedicated parking space, 
                restart the Parking Detection Application in Jetson Orin Nano by closing and reopening it. 
                Before adding a dedicated space, make sure that the camera is at fixed angle. 
                Refer to the documentation before adding a spot.</p>
            </div>
            
        )
    }
    interface(event){
        const id = event.target.id; 

        if(id=='addBtn'){
            this.insertData();
        }
    }
    getAllInputs(){
        return{
            platenumber: this.state.platenumber,
            X1: this.state.x1,
            X2: this.state.x2,
            Y1: this.state.y1,
            Y2: this.state.y2
        }
    }
    insertData(){
        const db = this.state.db;
        const data = this.getAllInputs();
    
        set(ref(db, 'dedicated/' + data.platenumber),
        {
            x1: data.X1,
            x2: data.X2,
            y1: data.Y1,
            y2: data.Y2
        })
        .then(()=>{
            alert('Record was added successfully');
            // Reset the state of the input fields
            this.setState({
                platenumber: '',
                x1: '',
                x2: '',
                y1: '',
                y2: ''
            });
        })
        .catch((error)=>{alert('There was an error, details: '+error)});
    }
}

  
 