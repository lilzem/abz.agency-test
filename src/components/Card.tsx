import styles from '@src/components/Card.module.scss';

type CardProps = {
    name: string;
    photo: string;
    position: string;
    email: string;
    phone: string;
};

const Card = ({ name, photo, position, email, phone }: CardProps) => {
    return (
        <div className={styles.container}>
            <img src={photo} alt="photo" />
            <p id={styles.name}>{name}</p>
            <p>{position}</p>
            <p>{email}</p>
            <p>{phone}</p>
        </div>
    );
};

export default Card;
