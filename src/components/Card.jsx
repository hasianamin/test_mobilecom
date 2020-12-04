import React, { useEffect, useState } from 'react';
import './../pages/style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2'

const Card=(props)=>{

    const [allData,setAllData] = useState(null)

    const deleteModal=(value)=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {                
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
            renderCard()
        })
    }

    const editModal=()=>{
        
    }

    useEffect(()=>{
        setAllData(props.data)
    },[])

    const renderCard=()=>{
        return allData.map((val,index)=>{
            return (
                <div className='card-container' key={index}>
                    <div className="card-header">
                        <div className="card-image">
                            <img src={val.image} alt=""/>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="card-upper">
                            <div className="card-left">
                                <img src={val.photo} alt=""/>
                            </div>
                            <div className="card-right">
                                <div className="card-user">
                                    <p>{val.username}</p>
                                </div>
                                <div className="card-date">
                                    <p>{val.date}</p>
                                </div>
                            </div>
                        </div>
                        <div className="card-lower">
                            <div className="card-title">
                                <h4>{val.title}</h4>
                            </div>
                            <div className="card-content">
                                <p>{val.content}</p>
                            </div>
                        </div>
                    </div>
                    {
                        val.username === props.user?
                        <div className="card-modify">
                            <div className="card-edit" onClick={()=>editModal(index)}>
                                <FontAwesomeIcon icon={faEdit} />                        
                            </div>
                            <div className="card-delete" onClick={()=>deleteModal(index)}>
                                <b>X</b>
                            </div>
                        </div>
                        :
                        null
                    }
                </div>
            )
        })
    }

    if(allData===null){
        return <div>Loading</div>
    }

    return (
        <>
            {renderCard()}
        </>
    )
}

export default Card