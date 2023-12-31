import React from 'react'
import { Button, Modal, InputGroup, Form, ModalFooter } from 'react-bootstrap'
import { ref, set, get, update, remove, child } from 'firebase/database'
import StartFirebase from '../firebaseConfig/index'

const db = StartFirebase();

export class CrudPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: '',
            isOpen: false,
            record: {
                platenumber: props.platenumber,
                Firstname: props.record.firstname,
                last: props.record.lastname,
                types: props.record.type
            },
            modPlatenumber: '',
            modfirstname: '',
            modLast: '',
            modTypes: ''

        }
    }
    componentsDidMount() {
        console.log(this.state.record);

    }
    render() {
        return (
            <>

                <Button variant='primary' className='ms-2' onClick= {()=>{this.openModal('edit')}}>Edit Record</Button>

                <Modal show={this.state.isOpen}>
                    <Modal.Header>
                        <Modal.Title>{(this.state.mode == 'add') ? 'Add New Record' : 'Edit Record'}</Modal.Title>
                        <Button size='sm' variant='dark' onClick= {() =>{this.closeModal()}}>X</Button>
                    </Modal.Header>
                    <Modal.Body>

                        <InputGroup>
                            <InputGroup.Text>Plate Number</InputGroup.Text>
                            <Form.Control
                                value={this.state.modPlatenumber}
                                onChange={e => { this.setState({ modPlatenumber: e.target.value }) }}
                                disabled={(this.state.mode != 'add')}
                            />
                        </InputGroup>

                        <InputGroup>
                            <InputGroup.Text>First Name</InputGroup.Text>
                            <Form.Control
                                value={this.state.modfirstname}
                                onChange={e => { this.setState({ modfirstname: e.target.value }) }}
                            />
                        </InputGroup>

                        <InputGroup>
                            <InputGroup.Text>Last Name</InputGroup.Text>
                            <Form.Control
                                value={this.state.modLast}
                                onChange={e => { this.setState({ modLast: e.target.value }) }}
                            />
                        </InputGroup>

                        <InputGroup>
                            <InputGroup.Text>Type</InputGroup.Text>
                            <Form.Control
                                value={this.state.modTypes}
                                onChange={e => { this.setState({ modTypes: e.target.value }) }}
                            />
                        </InputGroup>

                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant='success' className='ms-2' onClick= {()=>{this.interface('update')}} style={(this.state.mode == 'add')?{display:'none'}:{}}>Update Record</Button>
                        <Button variant='danger' className='ms-2' onClick= {()=>{this.interface('delete')}} style={(this.state.mode == 'add')?{display:'none'}:{}}>Delete Record</Button>
                    </Modal.Footer>

                </Modal>
            </>
        )
    }

    openModal(option){
        if(option=='add'){
            this.setState({
                isOpen: true,
                mode: option, 
                modPlatenumber:'',
                modfirstname:'',
                modLast:'',
                modTypes:''

            });
        }
        else if(option == 'edit'){
            let rec = this.state.record;

            this.setState({ 
                isOpen: true,
                mode: option,
                modPlatenumber: rec.platenumber,
                modfirstname: rec.Firstname,
                modLast: rec.last,
                modTypes: rec.types
            });

        }

    }

    closeModal(){
        this.setState({
            isOpen:false
        })
    }
    
    getAllData(){
        return{
            id: this.state.modPlatenumber,
            data:{
                firstname: this.state.modfirstname,
                lastname: this.state.modLast,
                type: this.state.modTypes
            }
        }
    }

    interface(option){
        if (option == 'add')
            this.insertData();

        else if (option == 'update')
            this.updateData();

        else if (option == 'delete')
            this.deleteData();
        
        this.closeModal();
    }

    insertData(){
        const dbRef = ref(db);
        const record = this.getAllData();
        const address = 'Database/' + record.id;

        get(child(dbRef, address)).then(snapshot =>{
            if(snapshot.exists()){
                alert('Cannot create, user already exists');
            }
            else{
                set(ref(db, address), record.data);
            }

        })
    }

    updateData(){
        const dbRef = ref(db);
        const record = this.getAllData();
        const address = 'Database/' + record.id;

        get(child(dbRef, address)).then(snapshot =>{
            if(snapshot.exists()){
                update(ref(db, address), record.data);
            }
            else{
                
                alert('Cannot update, user already exists');
            }

        })
    }

    deleteData(){
        const dbRef = ref(db);
        const record = this.getAllData();
        const address = 'Database/' + record.id;

        get(child(dbRef, address)).then(snapshot =>{
            if(snapshot.exists()){
                remove(ref(db, address));

            }
            else{
                
                alert('Cannot delete, user already exists');
            }

        })
    }
    

}
