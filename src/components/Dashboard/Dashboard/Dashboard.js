import React, { useContext, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Route, Switch, useParams, useRouteMatch } from 'react-router';
import CustomerGivenReview from '../../CustomerGivenReview/CustomerGivenReview';
import MakeAdmin from '../../MakeAdmin/MakeAdmin';
import AddService from '../../Service/AddService/AddService';
import ManageService from '../../Service/ManageService/ManageService';
import Sidebar from '../Sidebar/Sidebar';
import PrivateRoute from './../../Login/PrivateRoute/PrivateRoute';
import Book from '../../Book/Book';
import ShowBookList from '../../ShowBookList/ShowBookList';
import OrderList from '../../OrdeList/OrdeList';
import { UserContext } from '../../../App';


const Dashboard = () => {
  const { url, path } = useRouteMatch();

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [admin, setAdmin] = useState()
  useEffect(() => {
    fetch('https://frozen-atoll-81810.herokuapp.com/isDoctor', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ email: loggedInUser.email })
    })
      .then(res => res.json())
      .then(data => setAdmin(data))
  }, [])

  return (

    <section className='d-block overflow-hidden w-100'>
      <Row>
        <Col md={2} className='pl-0 pr-0 support-bg'>
          <Sidebar url={url} path={path}></Sidebar>
        </Col>
        <Col md={10} className='pl-0 pr-0'>
          <div className="user-area">
            <img src={loggedInUser?.photoURL} alt=""/>
            <h5>{loggedInUser.name}</h5>
          </div>
          <Switch>

            <Route path={`${path}/addService`}>
              <AddService></AddService>
            </Route>
            <Route path={`${path}/manageService`}>
              <ManageService></ManageService>
            </Route>
            <Route path={`${path}/makeAdmin`}>
              <MakeAdmin></MakeAdmin>
            </Route>
            <PrivateRoute path={`${path}/customerReview`}>
              <CustomerGivenReview></CustomerGivenReview>
            </PrivateRoute>

            <PrivateRoute path={`${path}/bookingList`}>
              <ShowBookList></ShowBookList>
            </PrivateRoute>

            <PrivateRoute path={`${path}/orderList`}>
              <OrderList></OrderList>
            </PrivateRoute>

            {
              admin ?
                <>
                  <PrivateRoute path={`${path}/:id`}>
                    <AddService></AddService>
                  </PrivateRoute>
                  <PrivateRoute exact path={path}>
                    <AddService></AddService>
                  </PrivateRoute>
                </>
                :

                <>
                  <PrivateRoute path={`${path}/:id`}>
                    <Book></Book>
                  </PrivateRoute>
                  <PrivateRoute exact path={path}>
                    <Book></Book>
                  </PrivateRoute>
                </>

            }



          </Switch>
        </Col>
      </Row>
    </section>

  );
};

export default Dashboard;