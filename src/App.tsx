import styles from '@src/App.module.scss';

import { useEffect, useRef, useState } from 'react';
import { Radio, TextField } from '@mui/material';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import axios from 'axios';

import logoIcon from '@src/assets/images/logo_with_name.svg';
import Button from './components/Button';
import Card from './components/Card';
import { User } from './interfaces/User';
import { getPositions, getToken, getUsers } from './api/api';
import { BACKEND_URL, NUMBER_REGEXP, USER_COUNT } from './constants';
import { Position } from './interfaces/Position';
import Upload from './components/Upload';
import { useMask } from '@react-input/mask';

const App = () => {
    const usersRef = useRef<HTMLDivElement | null>(null);
    const signUpRef = useRef<HTMLDivElement | null>(null);
    const phoneInputRef = useMask({ mask: '+38__________', replacement: '_' });

    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [users, setUsers] = useState<Array<User>>([]);
    const [page, setPage] = useState<number>(1);
    const [file, setFile] = useState<any>(null);
    const [positions, setPositions] = useState<Array<Position>>([]);

    const validationSchema = Yup.object({
        name: Yup.string().required('name is required field'),
        email: Yup.string().email('Must be a valid email').required('Email is a required field'),
        phone: Yup.string().matches(NUMBER_REGEXP, 'Must be a valid phone number').required('phone is required field'),
    });

    const handleSubmit = async (
        values: { name: string; email: string; phone: string; position: string },
        { setSubmitting }: { setSubmitting: any }
    ) => {
        const formData = new FormData();

        formData.append('name', values.name);
        formData.append('email', values.email);
        formData.append('phone', values.phone);
        formData.append('position_id', values.position);
        formData.append('photo', file);

        const token = await getToken();
        console.log(token.token);

        try {
            axios.post(`${BACKEND_URL}/users`, formData, {
                headers: {
                    Token: token.token,
                },
            });

            fetchUsers(1);
        } catch (err) {
            console.log(err);
        } finally {
            setSubmitting(false);
        }
    };

    const fetchUsers = async (page: number) => {
        getUsers(page, USER_COUNT)
            .then((res) => setUsers(res.users))
            .catch((err) => console.log(err))
            .finally(() => setIsLoading(false));
    };

    const usersPaginate = () => {
        setIsLoading(true);

        let _page = page + 1;

        getUsers(_page, USER_COUNT)
            .then((res) => setUsers((prev) => prev.concat(res.users)))
            .catch((err) => console.log(err))
            .finally(() => {
                setIsLoading(false);
                setPage(_page);
            });
    };

    useEffect(() => {
        fetchUsers(page);
    }, []);

    useEffect(() => {
        getPositions()
            .then((res) => setPositions(res.positions))
            .catch((err) => console.log(err));
    }, []);

    return (
        <>
            <header>
                <div className={styles.container}>
                    <img src={logoIcon} alt="logo" />

                    <nav>
                        <Button
                            text="Users"
                            onClick={() => {
                                usersRef.current?.scrollIntoView({
                                    behavior: 'smooth',
                                });
                            }}
                        />
                        <Button
                            text="Sign Up"
                            onClick={() => {
                                signUpRef.current?.scrollIntoView({
                                    behavior: 'smooth',
                                });
                            }}
                        />
                    </nav>
                </div>
            </header>

            <main>
                <div className={styles.info_block}>
                    <div className={styles.text_block}>
                        <h1>Test assignment for front-end developer</h1>
                        <p>
                            What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS
                            with a vast understanding of User design thinking as they'll be building web interfaces with
                            accessibility in mind. They should also be excited to learn, as the world of Front-End
                            Development keeps evolving.
                        </p>

                        <Button
                            style={{ width: '100px', marginTop: '13px' }}
                            text="Sign Up"
                            onClick={() => {
                                signUpRef.current?.scrollIntoView({
                                    behavior: 'smooth',
                                });
                            }}
                        />
                    </div>
                </div>

                <div className={styles.get_block} ref={usersRef}>
                    <h1>Working with GET request</h1>

                    <div className={styles.card_list}>
                        {isLoading ? 'Loading....' : users.map((user) => <Card key={user.id} {...user} />)}
                    </div>

                    <Button text="Show more" style={{ margin: '0 auto' }} onClick={usersPaginate} />
                </div>

                <div className={styles.post_block} ref={signUpRef}>
                    <h1>Working with POST request</h1>
                    <Formik
                        initialValues={{
                            name: '',
                            email: '',
                            phone: '',
                            position: '',
                        }}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ values, handleChange, isSubmitting, errors, touched, handleBlur, dirty }) => (
                            <Form>
                                <div className={styles.input_wrapper}>
                                    <TextField
                                        label="Your name"
                                        name="name"
                                        value={values.name}
                                        onChange={handleChange}
                                        error={errors.name ? true : false}
                                        helperText={errors.name && touched.name ? errors.name : ''}
                                        onBlur={handleBlur}
                                    />
                                    <TextField
                                        label="Email"
                                        name="email"
                                        value={values.email}
                                        onChange={handleChange}
                                        error={errors.email ? true : false}
                                        helperText={errors.email ? errors.email : ''}
                                        onBlur={handleBlur}
                                    />
                                    <TextField
                                        inputRef={phoneInputRef}
                                        label="Phone"
                                        name="phone"
                                        value={values.phone}
                                        error={errors.phone && touched.name ? true : false}
                                        onChange={handleChange}
                                        helperText={
                                            errors.phone && touched.name ? errors.phone : '+38(XXX) XXX - XX - XX'
                                        }
                                        onBlur={handleBlur}
                                    />
                                </div>

                                <div className={styles.radio_wrapper}>
                                    <p>Select your position</p>

                                    {positions.map((position: Position) => (
                                        <div key={position.id} className={styles.radio}>
                                            <Radio
                                                size="small"
                                                name="position"
                                                value={position.id}
                                                onChange={handleChange}
                                                checked={+values.position === position.id}
                                                sx={{
                                                    '&.Mui-checked': {
                                                        color: '#00BDD3',
                                                    },
                                                    '&': {
                                                        color: '#D0CFCF',
                                                    },
                                                }}
                                            />{' '}
                                            <p>{position.name}</p>
                                        </div>
                                    ))}
                                </div>

                                <Upload file={file} setFile={setFile} />

                                <Button
                                    disabled={
                                        errors.email || errors.name || errors.phone || errors.position || !file
                                            ? true
                                            : false
                                    }
                                    text="Sign up"
                                    style={{
                                        marginTop: '50px',
                                        width: '100px',
                                        marginLeft: 'auto',
                                        margin: '50px auto 0',
                                    }}
                                />
                            </Form>
                        )}
                    </Formik>
                </div>
            </main>
        </>
    );
};

export default App;
