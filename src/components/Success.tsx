import styles from '@src/components/Success.module.scss';

import succesIcon from '@src/assets/images/success.svg';

const Success = () => {
    return (
        <div className={styles.container}>
            <h1>User successfully registered</h1>

            <img src={succesIcon} alt="success" />
        </div>
    );
};

export default Success;
