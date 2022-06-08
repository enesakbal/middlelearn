import React, { useEffect, useState } from 'react';
import './custom_student_pop_up.css'

const CustomStudentPopup = ({ handleClose, show, data, children }) => {

    const { lesson_name, pic_url, subjects } = data;

    const [isInside, setIsInside] = useState(false);

    const clicksOutside = (e) => {
       
        return isInside ? null : handleClose();
    }

    return (
        show === true ?
            <div className=' student-modal student-display-block' onClick={clicksOutside}>
                <div className="student-modal-main">
                    <div className='student-modal-body' onPointerEnter={() => { setIsInside(true); }} onPointerLeave={() => { setIsInside(false) }}>
                        <label className='student-modal-title'>{lesson_name}</label>
                        <div className='student-modal-li-box'>
                            {subjects.map((element, key) => {
                                return <li key={key} className='student-modal-li'><a className='student-modal-li-a' href={element[1]} target='_blank'>{element[0]}</a></li>
                            })}
                            {subjects.map((element, key) => {
                                return <li key={key} className='student-modal-li'><a className='student-modal-li-a' href={element[1]} target='_blank'>{element[0]}</a></li>
                            })}  {subjects.map((element, key) => {
                                return <li key={key} className='student-modal-li'><a className='student-modal-li-a' href={element[1]} target='_blank'>{element[0]}</a></li>
                            })}

                        </div>
                    </div>
                </div>
            </div > : null


    );
};
export default CustomStudentPopup;

{/* <button onClick={handleClose}>




//TODO DRAG DROPUN YAZISINI DOSYA YÜKLENİNCE GÜNCELLE KOLAY İŞ
//TODO DOSYA EKLENDİĞİNDE LİSTEYE İSMİNİ YAZDIR YETERLİ

//TODO PROFİLE SAYFASINI UCUZ YAPABİLİRSİN
//TODO CARDLARIN BOYUTLARINI VH VW OLARAK VER KANSER EDİYOR
//TODO BU SANA BIRAKTIĞIM SON TODO OLACAK ONA GÖRE ÇALIŞ


//TODO YÜKLENEN DOSYALARA ÖZEL BOX COMPONENT
//TODO PROFİLE SAYFASI


</button> */}