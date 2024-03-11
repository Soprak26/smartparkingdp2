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
        .then(()=>{alert('Record was added successfully')})
        .catch((error)=>{alert('There was an error, details: '+error)});
    }


}


  
 