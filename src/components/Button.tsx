import styles from '@src/components/Button.module.scss';

type ButtonProps = {
    text: string;
    style?: Object;
    onClick: () => void;
};

const Button = ({ text, style, onClick }: ButtonProps) => {
    return (
        <button className={styles.button} style={style} onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;
