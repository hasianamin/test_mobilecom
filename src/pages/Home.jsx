import React, { useEffect, useState } from 'react';
import './style.css'
import {Redirect} from 'react-router-dom'
import Header from '../components/Header';
import {UpdateFunc} from './../redux/actions'
import { 
    Button,
    Form,
    FormGroup, 
    Label, 
    Input
} from 'reactstrap';
import { connect } from 'react-redux';
import {LogoutFunc} from './../redux/actions'
import Swal from 'sweetalert2'

const Home=(props)=>{

    const [inputData,setInputData] = useState({
        input_dob:'',
        input_bio:'',
        input_address:'',
        input_gender:'',
        input_lastEdu:''
    })

    const [redirect,setRedirect] = useState(false)

    const onSubmitStory=()=>{
        console.log(inputData)
        const {input_dob,input_bio,input_address,input_gender,input_lastEdu} = inputData
        if(input_dob === '' || input_bio === '' || input_address === '' || input_gender === '' || input_lastEdu === ''){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please fill all the field!',
            })
        } else {
            let input_id = localStorage.getItem('id')
            let input_username = localStorage.getItem('username')
            let input_email = localStorage.getItem('email')
            let input_pass = localStorage.getItem('pass')
            props.UpdateFunc({
                id: input_id,
                username: input_username,
                password: input_pass,
                email: input_email,
                dob: input_dob,
                bio: input_bio,
                address: input_address,
                gender: input_gender,
                lastEdu: input_lastEdu
            })
            // setInputData({
            //     dob:'',
            //     bio:'',
            //     address:'',
            //     gender:'',
            //     lastEdu:''
            // })
            console.log(props.User)
            console.log(inputData)
            setRedirect(true)
            // props.LoginFunc({username:checkUser[0].username,password:hashPassword, loginTime:timeIn, id: checkUser[0].id})
            
        }

    }

    useEffect(()=>{
        console.log(props.Auth.loginTime)
    })

    if(!props.Auth.isLogin) {
        return (
            <Redirect to='/login'/>
        )
    }

    if(redirect) {
        return (
            <Redirect to='/list'/>
        )
    }

    return (
        <div>
            <Header/>
            <div className="home">
                <div className="home-container px-5">
                    <div className="home-title">
                        <h4>Fill the form</h4>
                    </div>
                    <div className="articles">
                        <Form>
                            <FormGroup>
                                <Label>Username</Label>
                                <Input value={props.Auth.username} type="text" readOnly/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleDate">Date of Birth</Label>
                                <Input
                                type="date"
                                name="date"
                                id="exampleDate"
                                placeholder="date placeholder"
                                onChange={e=>setInputData({...inputData,input_dob:e.target.value})}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label>Biodata</Label>
                                <Input onChange={e=>setInputData({...inputData,input_bio:e.target.value})} type="textarea" style={{height:'100px'}}/>
                            </FormGroup>
                            <FormGroup>
                                <Label>Address</Label>
                                <Input type="text" onChange={e=>setInputData({...inputData,input_address:e.target.value})}/>
                            </FormGroup>
                            <FormGroup tag="fieldset" row>
                                <legend className="col-form-label col-sm-2">Radio Buttons</legend>
                                <div className="d-flex flex-column ml-3">
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="radio" name="radio2" value="male" onClick={e=>setInputData({...inputData,input_gender:e.target.value})} />{' '}
                                            Male
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="radio" name="radio2" value="female" onClick={e=>setInputData({...inputData,input_gender:e.target.value})} />{' '}
                                            Female
                                        </Label>
                                    </FormGroup>
                                </div>
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleSelect">Select</Label>
                                <Input type="select" name="select" id="exampleSelect" onClick={e=>setInputData({...inputData,input_lastEdu:e.target.value})}>
                                    <option hidden>Select one</option>
                                    <option value='SMA'>SMA</option>
                                    <option value='D3'>D3</option>
                                    <option value='S1'>S1</option>
                                    <option value='S2'>S2</option>
                                    <option value='S3'>S3</option>
                                </Input>
                            </FormGroup>
                            <Button color="primary" onClick={onSubmitStory}>Submit</Button>{' '}
                            <Button color="secondary" type="reset">Reset</Button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Mapstatetoprops=(state)=>{
  return{
      Auth:state.Auth,
      User:state.User
  }
}

export default connect(Mapstatetoprops,{LogoutFunc,UpdateFunc})(Home)