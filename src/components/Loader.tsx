import styles from '@src/components/Loader.module.scss';

import loaderIcon from '@src/assets/images/loader.svg';

const Loader = () => {
    return <img className={styles.loader} src={loaderIcon} alt="loader" />;
};

export default Loader;
