import styles from '@src/App.module.scss';

import { useEffect, useRef, useState } from 'react';
import { Radio, TextField } from '@mui/material';

import logoIcon from '@src/assets/images/logo_with_name.svg';
import Button from './components/Button';
import Card from './components/Card';
import { User } from './interfaces/User';
import { getUsers } from './api/api';
import { USER_COUNT } from './constants';

const App = () => {
    const usersRef = useRef<HTMLDivElement | null>(null);
    const signUpRef = useRef<HTMLDivElement | null>(null);

    const [users, setUsers] = useState<Array<User>>([]);
    const [page, setPage] = useState<number>(1);

    const usersPaginate = () => {
        setPage((prev) => prev + 1);

        getUsers(page, USER_COUNT)
            .then((res) => setUsers((prev) => [...prev, res.users]))
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        getUsers(page, USER_COUNT)
            .then((res) => setUsers(res.users))
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
                        {users.map((user) => (
                            <Card key={user.id} {...user} />
                        ))}
                    </div>

                    <Button text="Show more" style={{ margin: '0 auto' }} onClick={usersPaginate} />
                </div>

                <div className={styles.post_block} ref={signUpRef}>
                    <h1>Working with POST request</h1>

                    <form>
                        <div className={styles.input_wrapper}>
                            <TextField label="Your name" />
                            <TextField label="Email" />
                            <TextField label="Phone" />
                        </div>

                        <div className={styles.radio_wrapper}>
                            <p>Select your position</p>
                            <div className={styles.radio}>
                                <Radio
                                    size="small"
                                    sx={{
                                        '&.Mui-checked': {
                                            color: '#00BDD3',
                                        },
                                        '&': {
                                            color: '#D0CFCF',
                                        },
                                    }}
                                />{' '}
                                <p>Front-end</p>
                            </div>
                            <div className={styles.radio}>
                                <Radio
                                    size="small"
                                    sx={{
                                        '&.Mui-checked': {
                                            color: '#00BDD3',
                                        },
                                        '&': {
                                            color: '#D0CFCF',
                                        },
                                    }}
                                />{' '}
                                <p>Front-end</p>
                            </div>
                            <div className={styles.radio}>
                                <Radio
                                    size="small"
                                    sx={{
                                        '&.Mui-checked': {
                                            color: '#00BDD3',
                                        },
                                        '&': {
                                            color: '#D0CFCF',
                                        },
                                    }}
                                />{' '}
                                <p>Front-end</p>
                            </div>
                            <div className={styles.radio}>
                                <Radio
                                    size="small"
                                    sx={{
                                        '&.Mui-checked': {
                                            color: '#00BDD3',
                                        },
                                        '&': {
                                            color: '#D0CFCF',
                                        },
                                    }}
                                />{' '}
                                <p>Front-end</p>
                            </div>
                        </div>

                        <TextField label="Upload" />

                        <Button
                            text="Sign up"
                            style={{ marginTop: '50px', width: '100px', marginLeft: 'auto', margin: '50px auto 0' }}
                            onClick={() => {}}
                        />
                    </form>
                </div>
            </main>
        </>
    );
};

export default App;
