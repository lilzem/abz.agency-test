import styles from '@src/components/Header.module.scss';
import logoIcon from '@src/assets/images/logo_with_name.svg';
import Button from './Button';

const Header = () => {
    return (
        <header>
            <div className={styles.container}>
                <img src={logoIcon} alt="logo" />

                <nav>
                    <Button text="Users" />
                    <Button text="Sign Up" />
                </nav>
            </div>
        </header>
    );
};

export default Header;
