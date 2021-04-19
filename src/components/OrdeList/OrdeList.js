import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { UserContext } from './../../App';

const OrdeList = () => {

    const [orderList, setOrderList] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    useEffect(() => {
        fetch('https://ancient-forest-25718.herokuapp.com/showBookList', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setOrderList(data))
    }, [])
    console.log(orderList);
    
    const handleUpdateStatus = (id,event) => {
        console.log('update', event.target.value);
        console.log('id', id);

        const updateData = {
            updateId: id,
            status: event.target.value
        }
        fetch('https://ancient-forest-25718.herokuapp.com/updateStatus', {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updateData)
        })
            .then(res => res.json())
            .then(data => {
                console.log("updated", data);
            })

    }


    return (
        <section className="dashboard-container">
            <h1 className="dashboard-title pl-5">Order List</h1>


            <div className="dashboard-box">
                <Table className='table-borderless'>
                    <thead>
                        <tr>
                            <th className='text-secondary'>Name </th>
                            <th className='text-secondary'>Email </th>
                            <th className='text-secondary'>Service </th>
                            <th className='text-secondary'>Pay With </th>
                            <th className='text-secondary'>Status </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orderList.map((service, index) =>

                                <tr className='text-brand-2'>
                                    <td>{service.name}</td>
                                    <td>{service.logInEmail}</td>
                                    <td>$ {service.title}</td>
                                    <td> {service.cards} card</td>
                                    <td>
                                        <select onChange={(event) => handleUpdateStatus(service._id,event)} defaultValue={service.status} className='form-control'>
                                            <option value='pending'>Pending</option>
                                            <option value='ongoing'>Ongoing</option>
                                            <option value="done">Done</option>
                                        </select>
                                    </td>
                                </tr>
                            )

                            // orderList.map((service, index) => <OrderListDetails orderService={service} /> )
                        }
                    </tbody>
                </Table>
            </div>
        </section>
    );
};

export default OrdeList;