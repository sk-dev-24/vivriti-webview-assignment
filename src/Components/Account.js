import React from 'react';
import { Modal } from 'react-bootstrap';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { logIn, logOut } from '../Redux/accountSlice';

const Account = ({ show, hide }) => {
    const account = useSelector((state) => state.account);
    const dispatch = useDispatch();

    return (
        <Modal show={show} onHide={hide} centered className='form-account'>
            <Modal.Header closeButton>
                <Modal.Title>Account</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {!account.status ? <Formik
                    initialValues={{ username: '', email: '', password: '' }}
                    validate={values => {
                        const errors = {};
                        if (!values.username || !values.email || !values.password) {
                            if (!values.username) errors.username = 'Email Name';
                            if (!values.email) errors.email = 'Email required';
                            if (!values.password) errors.password = 'Password required';
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                            errors.email = 'Invalid email address';
                        }
                        return errors;
                    }}
                    onSubmit={(values) => {
                        hide();
                        dispatch(logIn(values));
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <label htmlFor="username">Enter Name</label>
                            <Field type="text" name="username" />
                            <ErrorMessage name="username" component="div" className='text-danger' />
                            <label htmlFor="email">Enter Email</label>
                            <Field type="email" name="email" />
                            <ErrorMessage name="email" component="div" className='text-danger' />
                            <label htmlFor="email">Enter Password</label>
                            <Field type="password" name="password" />
                            <ErrorMessage name="password" component="div" className='text-danger' />
                            <button type="submit" disabled={isSubmitting} className='btn btn-dark mt-2'>
                                Submit
                            </button>
                        </Form>
                    )}
                </Formik>
                    : <div className='user-details text-center'>
                        <div>Welcome</div>
                        <h4>{account.details.username}</h4>
                        <button className='btn btn-dark mt-2'
                            onClick={() => {
                                hide();
                                dispatch(logOut());
                            }}>
                            Log Out
                        </button>
                    </div>}
            </Modal.Body>
        </Modal>
    );
}

export default Account;