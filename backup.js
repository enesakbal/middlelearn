import React, { useEffect, useState } from 'react';
import './custom_admin_pop_up.css'
import CustomButton from '../custom_button/custom_button'
import FileDatabase from '../../constants/file_data/file_data';

const CustomAdminPopup = ({ handleClose, show, data, children }) => {

    const { lesson_name, pic_url, subjects } = data;

    const [fileSelector, setFileSelector] = useState();

    const [style, setStyle] = useState('dropzone-body');

    const [isInside, setIsInside] = useState(false);

    const [isUploaded, setIsUploaded] = useState(false);

    const [localUploadedFiles, setLocalUploadedFiles] = useState([]);

    const [tempList, setTempList] = useState([]);





    useEffect(() => {
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
        setTempList([...new Set(tempList)]);
        for (let i = 0; i < data.length; i++) {
            setTempList(tempList => [...tempList, data[i]]);

        }

        setIsUploaded(true);

    }
    const clicksOutside = (e) => {
        setIsUploaded(false);
        return isInside ? null : handleClose();
    }


    const handleDragEnter = (e) => {
        e.preventDefault();
        setStyle('dropzone-body dragover')
    }
    const handleDragLeave = (e) => {
        e.preventDefault();
        setStyle('dropzone-body')
    }

    const handleDragOver = (e) => {
        e.preventDefault();
    }

    const handleDrop = (e) => {
        e.preventDefault();
        let data = e.dataTransfer.files;

        setStyle('dropzone-body')
        setTempList([...new Set(tempList)]);
        for (let i = 0; i < data.length; i++) {
            setTempList(tempList => [...tempList, data[i]]);

        }

        setIsUploaded(true);
        for (let i = 0; i < data.length; i++) { FileDatabase.UPLOADED_FILES.push(data[i]); }
        console.log("--------------------")
        console.log(FileDatabase.UPLOADED_FILES);
        console.log("--------------------")

    }

    const uniqueList = () => {
        let unique = [...new Set(tempList)];


    }

    return (
        show === true ?
            <div className=' modal display-block' onClick={clicksOutside}>
                <div className="modal-main">
                    <div className='modal-body' onPointerEnter={() => { setIsInside(true); }} onPointerLeave={() => { setIsInside(false) }}>
                        <div className='modal-firsthalf'>
                            <label className='modal-title'>{lesson_name}</label>
                            <div className='modal-li-box'>
                                {subjects.map((element, key) => {
                                    return <li key={key} className='modal-li'><a href={element[1]} target='_blank'>{element[0]}</a></li>
                                })}
                                {localUploadedFiles.map((element, key) => {
                                    return <li key={key} className='modal-li'><a target='_blank'>{element}</a></li>
                                })}

                            </div>
                        </div>
                        <div className='modal-secondhalf'>

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


</button> */}