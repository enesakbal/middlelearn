import React, { useEffect, useState } from 'react';
import './custom_admin_pop_up.css'
import CustomButton from '../custom_button/custom_button'
import FileDatabase from '../../constants/file_data/file_data';

const CustomAdminPopup = ({ handleClose, show, data, children }) => {

    const { lesson_name, pic_url, subjects } = data;

    const [fileSelector, setFileSelector] = useState();

    const [style, setStyle] = useState('admin-dropzone-body');

    const [isInside, setIsInside] = useState(false);

    const [isUploaded, setIsUploaded] = useState(false);

    const [tempList, setTempList] = useState([]);

    const [localUploadedFiles, setLocalUploadedFiles] = useState([])


    const whichLesson = () => {
        switch (lesson_name) {
            case 'Mathematics':
                return FileDatabase.MATH_UPLOADED_FILES;
            case 'Physics':
                return FileDatabase.PHYSICS_UPLOADED_FILES;
            case 'Biology':
                return FileDatabase.BIOLOGY_UPLOADED_FILES;
            case 'Chemistry':
                return FileDatabase.CHEMISTRY_UPLOADED_FILES;
        }

    }


    useEffect(() => {
        console.log(show);
        const fileSelector = document.createElement('input');
        fileSelector.setAttribute('type', 'file');
        fileSelector.setAttribute('multiple', 'multiple');

        setFileSelector(fileSelector);
    }, [])

    const handleFileSelect = (e) => {
        e.preventDefault();
        fileSelector.addEventListener('change', getFile);

        fileSelector.click();
    }

    const getFile = (e) => {
        console.log('BURDA')

        let data = e.target.files;
        setTempList([...new Set(tempList)]);         /**TEKRARLANAN VERILER İCİN */

        for (let i = 0; i < data.length; i++) {
            setTempList(tempList => [...tempList, data[i]]);

        }

        setIsUploaded(true);

    }
    const clicksOutside = (e) => {
        setIsUploaded(false);

        if (!isInside) {
            setLocalUploadedFiles([])
        }

        return isInside ? null : handleClose();
    }


    const handleDragEnter = (e) => {
        e.preventDefault();
        setStyle('admin-dropzone-body dragover')
    }
    const handleDragLeave = (e) => {
        e.preventDefault();
        setStyle('admin-dropzone-body')
    }

    const handleDragOver = (e) => {
        e.preventDefault();
    }

    const handleDrop = (e) => {
        e.preventDefault();
        let data = e.dataTransfer.files;

        setStyle('admin-dropzone-body')
        setTempList([...new Set(tempList)]);
        for (let i = 0; i < data.length; i++) {
            setTempList(tempList => [...tempList, data[i]]);

        }
        setIsUploaded(true);

    }

    return (
        show === true ?
            <div className=' admin-modal admin-display-block' onClick={clicksOutside}>
                <div className="admin-modal-main">
                    <div className='admin-modal-body' onPointerEnter={() => { setIsInside(true); }} onPointerLeave={() => { setIsInside(false) }}>
                        <div className='admin-modal-firsthalf'>
                            <label className='admin-modal-title'>{lesson_name}</label>
                            <div className='admin-modal-li-box'>
                                {subjects.map((element, key) => {
                                    return <li key={key} className='admin-modal-li'><a href={element[1]} target='_blank'>{element[0]}</a></li>
                                })}

                                {

                                    
                                        whichLesson().map((element, key) => {
                                            return <li key={key} className='admin-modal-li'><a target='_blank'>{element.name}</a></li>
                                        })
                                    

                                }
                                {/* {localUploadedFiles.map((element, key) => {
                                    return <li key={key} className='modal-li'><a target='_blank'>{element}</a></li>
                                })} */}

                            </div>
                        </div>
                        <div className='admin-modal-secondhalf'>

                            {
                                isUploaded ?
                                    <div>
                                        {

                                            /** nameleri karşılaştır  */
                                            tempList.map((element, key) => {
                                                return <div key={key}>{element.name.toString()}</div>
                                            })
                                        }
                                    </div>
                                    : <input
                                        className={style}
                                        type='text'
                                        onClick={handleFileSelect}
                                        onDragEnter={handleDragEnter}
                                        onDragLeave={handleDragLeave}
                                        onDrop={handleDrop}
                                        onDragOver={handleDragOver}
                                        readOnly
                                        placeholder='Drag and drop your file here or click'
                                    />
                            }

                            <CustomButton buttonText='Upload' onClick={() => {
                                let unique = [...new Set(tempList)];
                                /** VERILER TEKRARLADIĞI İÇİN BUNA İHTİYAÇ DUYDUM */


                                unique.forEach(element => {
                                    setLocalUploadedFiles(localUploadedFiles => [...localUploadedFiles, element.name.toString()]);
                                    whichLesson().push(element);
                                });
                                setIsUploaded(false);
                                setTempList([]);
                            }}></CustomButton>
                        </div>



                    </div>
                </div>
            </div > : null


    );
};
export default CustomAdminPopup;

{/* <button onClick={handleClose}>




//TODO DRAG DROPUN YAZISINI DOSYA YÜKLENİNCE GÜNCELLE KOLAY İŞ
//TODO DOSYA EKLENDİĞİNDE LİSTEYE İSMİNİ YAZDIR YETERLİ

//TODO PROFİLE SAYFASINI UCUZ YAPABİLİRSİN
//TODO CARDLARIN BOYUTLARINI VH VW OLARAK VER KANSER EDİYOR
//TODO BU SANA BIRAKTIĞIM SON TODO OLACAK ONA GÖRE ÇALIŞ


//TODO YÜKLENEN DOSYALARA ÖZEL BOX COMPONENT
//TODO PROFİLE SAYFASI


</button> */}