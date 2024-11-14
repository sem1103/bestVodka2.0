'use client'

import { useState } from 'react'
import s from './Products.module.css'
import { Modal } from "antd";


export default function Products() {
    const [isModalOpen, setIsModalOpen] = useState(false);


    const showModal = () => {
        setIsModalOpen(true);
      };
    
      const handleCancel = () => {
        setIsModalOpen(false);
      };
    return (
        <main>
            <div className='container'>
                <h2>Продукция</h2>

                <div className={s.products__wrapper}>
                    <div className={s.products__item} onClick={() => setIsModalOpen(!isModalOpen)}>
                        <img src="/assets/img/products/1.jpg" alt="" />
                        <h3>Водка "Особый прием"</h3>
                    </div>

                    <div className={s.products__item} onClick={() => setIsModalOpen(!isModalOpen)}>
                        <img src="/assets/img/products/2.jpg" alt="" />
                        <h3>Водка "Особый прием"</h3>
                    </div>

                    <div className={s.products__item} onClick={() => setIsModalOpen(!isModalOpen)}>
                        <img src="/assets/img/products/3.jpg" alt="" />
                        <h3>Водка "Особый прием"</h3>
                    </div>

                    <div className={s.products__item} onClick={() => setIsModalOpen(!isModalOpen)}>
                        <img src="/assets/img/products/4.jpg" alt="" />
                        <h3>Водка "Особый прием"</h3>
                    </div>

                    <div className={s.products__item} onClick={() => setIsModalOpen(!isModalOpen)}>
                        <img src="/assets/img/products/6.jpg" alt="" />
                        <h3>Водка "Особый прием"</h3>
                    </div>
                </div>
            </div>

            <Modal className={s.modal__wrapper} open={isModalOpen} onCancel={handleCancel}>
            <div className={s.modal__content}>
                    <button className={s.close__modal} onClick={() => setIsModalOpen(!isModalOpen)}>
                        <svg width={35} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="#d32b2b" stroke-width="1.5" stroke-linecap="round"></path> <path d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" stroke="#d32b2b" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
                    </button>
                    <img src="/assets/img/products/6.jpg" alt="" />

                    <div className={s.prod__info}>
                        <h1>Водка "Особый прием"</h1>
                        <p>
                            "Особый Прием" — это уникальная водка, созданная для ценителей чистоты вкуса и высокого качества. Изготовленная по особой рецептуре, она проходит несколько этапов фильтрации, в том числе с использованием активированного угля и серебряных фильтров. Этот процесс обеспечивает исключительную мягкость и чистоту напитка, придавая ему кристальную прозрачность и насыщенный, но одновременно гладкий вкус. "Особый Прием" идеально подходит как для употребления в чистом виде, так и для создания коктейлей, подчеркивая и обогащая вкус каждого ингредиента.
                        </p>
                    </div>
                </div>
            </Modal>

            {/* <div className={`${s.modal__wrapper} ${isModalOpen ? s.show : ''}`}>
              
            </div> */}
        </main>
    )
}