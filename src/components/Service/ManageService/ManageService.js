import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import './ManageService.css';

const ManageService = () => {

    const [manageServices, setManageServices] = useState([])
    

    useEffect(() => {

        fetch('https://ancient-forest-25718.herokuapp.com/showServices')
            .then(res => res.json())
            .then(data => {
                setManageServices(data)
            })

    }, [manageServices])


    const deleteProduct = (id) => {
       
        fetch(`https://ancient-forest-25718.herokuapp.com/deleteService/${id}`,{
            method:'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            if(result){
               console.log('delete_success');
            }
        })
    }

    return (
        <section className='manage-service dashboard-container'>
            <h2 className='pl-5 text-dasboard-title'>Manage Service</h2>

            <div className="manage-service-table dashboard-box">
                <Table className='table-borderless'>
                    <thead>
                        <tr>
                            <th className='text-secondary'>SL No </th>
                            <th className='text-secondary'>Service Title </th>
                            <th className='text-secondary'>Service Price </th>
                            <th className='text-secondary'>Action </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            manageServices.map((service, index) =>
                                <tr className='text-brand-2'>
                                    <td>{index + 1}</td>
                                    <td>{service.title}</td>
                                    <td>$ {service.price}</td>
                                    <td>
                                        <button onClick={() => deleteProduct(service?._id)} className='btn delete-btn'>
                                            <FontAwesomeIcon icon={faTrashAlt} />
                                        </button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </Table>
            </div>

        </section>
    );
};

export default ManageService;