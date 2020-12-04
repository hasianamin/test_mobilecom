import React, { useEffect, useState } from 'react';
import './style.css'
import Header from './../components/Header'
import {connect} from 'react-redux'
import {Table} from 'reactstrap'
import {Redirect} from 'react-router-dom'

const List=(props)=>{

    const [allData,setAllData] = useState(null)

    const renderTable=()=>{
        return allData.map((val,index)=>{
            return (
                <tr key={val.id}>
                    <th scope="row">{index+1}</th>
                    <td>{val.username}</td>
                    <td>{val.dob}</td>
                    <td>{val.bio}</td>
                    <td>{val.address}</td>
                    <td>{val.gender}</td>
                    <td>{val.lastEdu}</td>
                </tr>
            )

        })
    }

    useEffect(()=>{
        console.log(props.User)
        setAllData(props.User)
    })

    if(allData === null) {
        return (
            <div>Loading</div>
        )
    }

    if(!props.Auth.isLogin) {
        return (
            <Redirect to='/login'/>
        )
    }

    return (
        <>
            <Header/>
            <div className="home">
                <div className="home-container">
                    <div className="home-title">
                        <h4>All Data</h4>
                    </div>
                    <div className="d-flex">
                        <Table responsive hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Username</th>
                                    <th>DoB</th>
                                    <th>Biodata</th>
                                    <th>Address</th>
                                    <th>Gender</th>
                                    <th>Last Education</th>
                                </tr>
                            </thead>
                            <tbody>
                                {renderTable()}
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </>
    )
}

const Mapstatetoprops=(state)=>{
    return{
        Auth:state.Auth,
        User:state.User
    }
  }
  
export default connect(Mapstatetoprops)(List)