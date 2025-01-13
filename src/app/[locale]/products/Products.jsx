'use client'

import { useEffect, useState } from 'react'
import s from './Products.module.css'
import { Modal } from "antd";
import useDataStore from '../../../../store/dataSlice';
import { useLocale, useTranslations } from 'next-intl';
import Loader from '@/components/loader/loader';


export default function Products() {
    const [sliderModal, setSliderModal] = useState(false);
    const {allProducts, fetchAllProducts} = useDataStore();
    const local = useLocale();
    const t = useTranslations();
    const [selectedProduct, setSelectedProduct] = useState({})

    useEffect(() => {
      !allProducts.length && fetchAllProducts();
    }, []);

    

    return (
        <main>
            <div className='container'>
                <h2>
                    {t('header.productsPage')}
                </h2>

                <div className={s.products__wrapper}>
               

                    {
                        allProducts.length ? 
                        
                        allProducts.map(item => {
                            return(
                                <div className={s.products__item} onClick={() => {
                                    setSelectedProduct(item);
                                    setSliderModal(!sliderModal);
                                }}>
                                <div className={s.img}>
                                <img src={item.product_img} alt="" />
                                </div>
                                <h3>
                                    
                                    {
                                        `${t('productsSlider.productType')} ${item[local].product_name} ` 
                                    }
                                </h3>
                            </div>
                            )
                        })
                        :
                        <Loader /> 
                    }

                 
                </div>

            </div>

            <Modal open={sliderModal}  onCancel={() => {
                setSliderModal(!sliderModal)
            }} footer={null}>
                <div className='product__modal'>
                <div className='product__img'>
                    <img src={selectedProduct?.product_img} alt="" />
                </div>
                <div className='product__info'>
                    <h4>
                    {selectedProduct[local]?.product_name}
                    </h4>
                    <div dangerouslySetInnerHTML={{__html: selectedProduct[local]?.product_desc}} />
                   
                </div>
                </div>
            </Modal>
        </main>
    )
}