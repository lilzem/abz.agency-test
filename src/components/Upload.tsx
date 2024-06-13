import styles from '@src/components/Upload.module.scss';

import { useRef, useState } from 'react';

type UploadProps = {
    file: any;
    setFile: (file: any) => void;
};

const Upload = ({ file, setFile }: UploadProps) => {
    const uploadRef = useRef<HTMLInputElement>(null);

    const [error, setError] = useState<boolean>(false);

    const upload = () => {
        uploadRef.current?.click();
    };

    const handleFileChange = (event: any) => {
        const path = event.target.value.split('.');
        const extension = `${path[path.length - 1]}`;

        if (extension == 'jpg' || extension == 'jpeg') {
            setFile(event.target?.files[0]);
        } else {
            setError(true);
            event.target.value = '';
        }
    };

    // const handleFileChange = (event: any) => {
    //     setFile(event.target?.files[0]);
    // };

    return (
        <>
            <div className={`${styles.container} ${error ? styles.error : ''}`}>
                <div className={`${styles.upload} ${error ? styles.error : ''}`} onClick={upload}>
                    <p>Upload</p>
                    <input
                        ref={uploadRef}
                        onChange={handleFileChange}
                        type="file"
                        accept="image/jpeg, image/jpg"
                        style={{ display: 'none' }}
                    />
                </div>

                {file ? <p className={styles.filename}>{file.name}</p> : <p>Upload your photo</p>}
            </div>

            {error && <p className={styles.error_text}>Wrong type of file, should be jpg/jpeg</p>}
        </>
    );
};

export default Upload;
