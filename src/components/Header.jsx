import React from 'react';
import './../pages/style.css'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import Swal from 'sweetalert2'
import {LogoutFunc} from './../redux/actions'

const Header=(props)=>{

    const logout = () => {
        Swal.fire({
          title: 'Are you sure?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Logout!'
        }).then((result) => {
          if (result.isConfirmed) {
            localStorage.clear()
            props.LogoutFunc()
            Swal.fire(
              'Goodbye!',
              'You just logout',
              'success'
            )
          }
        })
    }

    return (
        <div className='header-section'>
            <div className="header-container">
                <div className="header-logo">
                    Logo
                </div>
                <div className="header-nav">
                    <div className="nav-item">
                        <Link to='/'>Home</Link>
                    </div>
                    {
                        props.Auth.isLogin?
                        <>
                            <div className="nav-item drop-down">
                                <Link to='/'>{props.Auth.username}</Link>
                                <div className="drop-down-content mt-2" onClick={logout}>
                                    Logout
                                </div>
                            </div>
                        </>
                        :
                        <div className="nav-item">
                            <Link to='/login'>Login</Link>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}


const Mapstatetoprops=(state)=>{
    return{
        Auth:state.Auth
    }
}

export default connect(Mapstatetoprops,{LogoutFunc})(Header)