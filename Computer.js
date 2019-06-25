import React, { Component } from 'react';
// import WmicData from './NewData';
// import { combineReducers } from 'redux';
// import reducer from './reducers';
import './computer.css';
import { Formik } from 'formik';
// import store from './Store';
// import axios from 'axios'; 

class Computer extends Component {
  // adding blank user obect to state and rendering it.
  constructor(props) {
    super(props);
    // REDUCER
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = ({
      userId: '',
      serielId: '',
      model: '',
      operatingSystem: '',
      lastKnownIp: '',
      mac: '',
    });
    this.state = { value: '' };
  }

  // control changes in all our inputs, static and dynamic, and our final state
  handleChange = e => {
    if (["userId", "manufacturere", "model", "operatingSystem", "ipAdress", "mac"].includes(e.target.className)) {
      let user = [...this.state.value]
      user[e.target.WmicData.id][e.target.className] = e.target.value
      this.setState({ user }, () => console.log(this.state.user))
    } else {
      this.setState({ [e.target.name]: e.target.value })
    }
    this.setState({ value: e.target.value() });
  }

  handleSubmit = event  => {
    event.preventDefault();
    this.setState.value = { value: '' }
    const newData = new newData(event.target)
  };
 
  addUser = (e) => {
this.setState ({user:e.target.value})
  };

formSubmit  = e =>{
  e.preventDefault();
  this.props.addToFavelist(this.state.user);

  this.stateState({
    userid:'',
    serielId:'',
    manufacturer:'',
    model:'',
    operatingSystem:'',
    ipAdress:'',
    macAdress:''
  });
}
  render() {
    const mapStateToProps = (state, props) => ({
      message: `${state.data} ${props.extra}`
    });
    const basic = () => (
      <div>
        <Formik
          initialValue={{ userId: '', serielId: '', model: '', operatingSystem: '', ipAdress: '', mac: '' }}
          validate={values => {
            let errors = {};
            if (
              !values.serielId,
              !values.model,
              !values.operatingSystem,
              !values.ipAdress,
              !values.mac
            ) 
            {
              errors.userId = 'required';
              errors.serielId = 'required';
              errors.manufacturer = 'required';
              errors.model = 'required';
              errors.ipAdress = 'required';
              errors.mac = 'required';
            }
       
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            mac
          }) => (
              <form>

              </form>
            )}
        </Formik>
      </div>
    )
    return (
      <div className='add'>
        <form
          onSubmit={this.handleSubmit}
          className='sub'>
          <div className='column1'>
            <h1>Add A User</h1>

            <h3>User:</h3>
            <input
              name="userId"
              className="bar"
              type='text'
              value={this.state.value.userId}
              onChange={this.addUser}
              >
            </input>

            <br />
            <h3>Seriel Id:</h3>
            <input
              name="serielId"
              className="bar"
              type='text'
              value={this.state.value.serielId}
              onChange={this.addUser}
              >
            </input>

            <br />
            <h3>Manufacturer:</h3>

            <input
              name="manufacturer"
              className="bar"
              type='text'
              value={this.state.value.manufacturer}
              onChange={this.addUser}
              >
              </input>

            <br />
            <h3> Model:</h3>

            <input
              name="model"
              className="bar"
              type='text'
              value={this.state.value.model}
              onChange={this.addUser}
              >
            </input>

            <br />
            <h3> Operating Systen:</h3>

            <input
              name="operatingSystem"
              className="bar"
              type='text'
              value={this.state.value.operatingSystem}
              onChange={this.addUser}
              >
            </input>

            <br />
            <h3>IP Adress:</h3>

            <input
              name="ipAdress"
              className="bar"
              type='text'
              value={this.state.value.ipAdress}
              onChange={this.addUser}
              >
            </input>

            <br />
            <h3>Mac Adress:</h3>

            <input
              name="mac"
              className="bar"
              type='text'
              value={this.state.value.mac}
              onChange={this.addUser}
              >
            </input>

            <br />
            <button onClick={this.formSubmit.bind(this)} value={this.state.value} handleSubmit={this.handleSubmit} class='button' type='submit'> Add User </button>
            <br />
          </div>
        </form>
      </div>
    )
  }
}
export default Computer;


    // const mapDispatchToProps  =  dispatch =>({
    //   get:()  =>  dispatch({type:"FETCH_DATA", payload:"add user"}),
    //   reset:()  =>  dispatch({type:"RESET_DATA", payload:"null"})
    // });

    // const ConnectedData = connect (
    //   mapStateToProps,
    //   mapDispatchToProps
    // )(Data); 