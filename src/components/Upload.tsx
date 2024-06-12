import styles from '@src/components/Upload.module.scss';

import { useEffect, useRef, useState } from 'react';

type UploadProps = {
    file: any;
    setFile: (file: any) => void;
};

const Upload = ({ file, setFile }: UploadProps) => {
    const uploadRef = useRef<HTMLInputElement>(null);
    const dropRef = useRef<HTMLDivElement>(null);

    const upload = () => {
        uploadRef.current?.click();
    };

    const handleFileChange = (event: any) => {
        setFile(event.target?.files[0]);
    };

    // const handleDragOver = (e: any) => {
    //     e.preventDefault();
    //     e.stopPropagation();
    // };

    // const handledrop = (e: any) => {
    //     e.preventDefault();
    //     e.stopPropagation();

    //     const { files } = e.dataTransfer;

    //     if (files && files.length && (files[0].type === 'image/jpeg' || files[0].type === 'image/jpg')) {
    //         setFile(files[0]);
    //     } else {
    //         setError(true);
    //     }
    // };

    // useEffect(() => {
    //     dropRef.current?.addEventListener('dragover', handleDragOver);
    //     dropRef.current?.addEventListener('dropRef', handledrop);

    //     return () => {
    //         dropRef.current?.removeEventListener('dragover', handleDragOver);
    //         dropRef.current?.removeEventListener('dropRef', handledrop);
    //     };
    // }, []);

    return (
        <div ref={dropRef} className={styles.container}>
            <div className={styles.upload} onClick={upload}>
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
    );
};

export default Upload;
