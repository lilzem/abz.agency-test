import styles from '@src/components/Button.module.scss';

type ButtonProps = {
    text: string;
    style?: Object;
    disabled?: boolean;
    onClick?: () => void;
};

const Button = ({ text, style, onClick, disabled }: ButtonProps) => {
    return (
        <button className={styles.button} type="submit" style={style} onClick={onClick} disabled={disabled}>
            {text}
        </button>
    );
};

export default Button;
