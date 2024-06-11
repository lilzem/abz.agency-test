import styles from '@src/components/Button.module.scss';

type ButtonProps = {
    text: string;
    style?: Object;
};

const Button = ({ text, style }: ButtonProps) => {
    return (
        <button className={styles.button} style={style}>
            {text}
        </button>
    );
};

export default Button;
