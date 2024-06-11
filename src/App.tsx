import styles from '@src/App.module.scss';

import { useState } from 'react';
import Header from './components/Header';
import Button from './components/Button';
import Card from './components/Card';
import { FormControlLabel, Input, Radio, TextField } from '@mui/material';

const App = () => {
    console.log('hello people');

    return (
        <>
            <Header />

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

                        <Button style={{ width: '100px', marginTop: '13px' }} text="Sign Up" />
                    </div>
                </div>

                <div className={styles.get_block}>
                    <h1>Working with GET request</h1>

                    <div className={styles.card_list}>
                        <Card
                            photo="https://s3-alpha-sig.figma.com/img/a120/4546/b321b7fbb0fb4c239e8a4c33e7af0e99?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AEBbNRyQXJAxZHE3G3798i-~hLSiDpHTzvTT-5P9rYRhUSiB9rHgwcrltxNhi3PCeLwJiLGsgTPfQyqGKqtSZ7TTEBK5YuEsBHJF0nAMBrOakcVKa2HWHb-xXb34gygN9z0Wj~Y6iRbdmklBJDIkcJmtRLV~DB3xmV7FY5vTLdiSw~cIkWslr0i6OHbc564PkBeBjJeFBeD7xK8z2tGVUJGqHDHS3kk2BLaJo7fCrGPK3BK9DBAH9BLqae1uyHgH6YIRupbFPne3wEjzafcmttDgVcER4tRH4WNkwG2MuVxy2P6uO990lXi5XFtMcs7X9DdngkIbz9O8yUrFzO16zQ__"
                            name="Alexandre"
                            position="Lead Independent Director"
                            email="Alexandr_develop@gmail.com"
                            phone="+38 (098) 198 44 24"
                        />
                        <Card
                            photo="https://s3-alpha-sig.figma.com/img/a120/4546/b321b7fbb0fb4c239e8a4c33e7af0e99?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AEBbNRyQXJAxZHE3G3798i-~hLSiDpHTzvTT-5P9rYRhUSiB9rHgwcrltxNhi3PCeLwJiLGsgTPfQyqGKqtSZ7TTEBK5YuEsBHJF0nAMBrOakcVKa2HWHb-xXb34gygN9z0Wj~Y6iRbdmklBJDIkcJmtRLV~DB3xmV7FY5vTLdiSw~cIkWslr0i6OHbc564PkBeBjJeFBeD7xK8z2tGVUJGqHDHS3kk2BLaJo7fCrGPK3BK9DBAH9BLqae1uyHgH6YIRupbFPne3wEjzafcmttDgVcER4tRH4WNkwG2MuVxy2P6uO990lXi5XFtMcs7X9DdngkIbz9O8yUrFzO16zQ__"
                            name="Alexandre"
                            position="Lead Independent Director"
                            email="Alexandr_develop@gmail.com"
                            phone="+38 (098) 198 44 24"
                        />
                        <Card
                            photo="https://s3-alpha-sig.figma.com/img/a120/4546/b321b7fbb0fb4c239e8a4c33e7af0e99?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AEBbNRyQXJAxZHE3G3798i-~hLSiDpHTzvTT-5P9rYRhUSiB9rHgwcrltxNhi3PCeLwJiLGsgTPfQyqGKqtSZ7TTEBK5YuEsBHJF0nAMBrOakcVKa2HWHb-xXb34gygN9z0Wj~Y6iRbdmklBJDIkcJmtRLV~DB3xmV7FY5vTLdiSw~cIkWslr0i6OHbc564PkBeBjJeFBeD7xK8z2tGVUJGqHDHS3kk2BLaJo7fCrGPK3BK9DBAH9BLqae1uyHgH6YIRupbFPne3wEjzafcmttDgVcER4tRH4WNkwG2MuVxy2P6uO990lXi5XFtMcs7X9DdngkIbz9O8yUrFzO16zQ__"
                            name="Alexandre"
                            position="Lead Independent Director"
                            email="Alexandr_develop@gmail.com"
                            phone="+38 (098) 198 44 24"
                        />
                        <Card
                            photo="https://s3-alpha-sig.figma.com/img/a120/4546/b321b7fbb0fb4c239e8a4c33e7af0e99?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AEBbNRyQXJAxZHE3G3798i-~hLSiDpHTzvTT-5P9rYRhUSiB9rHgwcrltxNhi3PCeLwJiLGsgTPfQyqGKqtSZ7TTEBK5YuEsBHJF0nAMBrOakcVKa2HWHb-xXb34gygN9z0Wj~Y6iRbdmklBJDIkcJmtRLV~DB3xmV7FY5vTLdiSw~cIkWslr0i6OHbc564PkBeBjJeFBeD7xK8z2tGVUJGqHDHS3kk2BLaJo7fCrGPK3BK9DBAH9BLqae1uyHgH6YIRupbFPne3wEjzafcmttDgVcER4tRH4WNkwG2MuVxy2P6uO990lXi5XFtMcs7X9DdngkIbz9O8yUrFzO16zQ__"
                            name="Alexandre"
                            position="Lead Independent Director"
                            email="Alexandr_develop@gmail.com"
                            phone="+38 (098) 198 44 24"
                        />
                        <Card
                            photo="https://s3-alpha-sig.figma.com/img/a120/4546/b321b7fbb0fb4c239e8a4c33e7af0e99?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AEBbNRyQXJAxZHE3G3798i-~hLSiDpHTzvTT-5P9rYRhUSiB9rHgwcrltxNhi3PCeLwJiLGsgTPfQyqGKqtSZ7TTEBK5YuEsBHJF0nAMBrOakcVKa2HWHb-xXb34gygN9z0Wj~Y6iRbdmklBJDIkcJmtRLV~DB3xmV7FY5vTLdiSw~cIkWslr0i6OHbc564PkBeBjJeFBeD7xK8z2tGVUJGqHDHS3kk2BLaJo7fCrGPK3BK9DBAH9BLqae1uyHgH6YIRupbFPne3wEjzafcmttDgVcER4tRH4WNkwG2MuVxy2P6uO990lXi5XFtMcs7X9DdngkIbz9O8yUrFzO16zQ__"
                            name="Alexandre"
                            position="Lead Independent Director"
                            email="Alexandr_develop@gmail.com"
                            phone="+38 (098) 198 44 24"
                        />
                        <Card
                            photo="https://s3-alpha-sig.figma.com/img/a120/4546/b321b7fbb0fb4c239e8a4c33e7af0e99?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AEBbNRyQXJAxZHE3G3798i-~hLSiDpHTzvTT-5P9rYRhUSiB9rHgwcrltxNhi3PCeLwJiLGsgTPfQyqGKqtSZ7TTEBK5YuEsBHJF0nAMBrOakcVKa2HWHb-xXb34gygN9z0Wj~Y6iRbdmklBJDIkcJmtRLV~DB3xmV7FY5vTLdiSw~cIkWslr0i6OHbc564PkBeBjJeFBeD7xK8z2tGVUJGqHDHS3kk2BLaJo7fCrGPK3BK9DBAH9BLqae1uyHgH6YIRupbFPne3wEjzafcmttDgVcER4tRH4WNkwG2MuVxy2P6uO990lXi5XFtMcs7X9DdngkIbz9O8yUrFzO16zQ__"
                            name="Alexandre"
                            position="Lead Independent Director"
                            email="Alexandr_develop@gmail.com"
                            phone="+38 (098) 198 44 24"
                        />
                    </div>

                    <Button text="Show more" style={{ margin: '0 auto' }} />
                </div>

                <div className={styles.post_block}>
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
                        />
                    </form>
                </div>
            </main>
        </>
    );
};

export default App;
