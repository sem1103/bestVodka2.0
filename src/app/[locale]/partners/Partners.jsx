'use client'

import { useEffect } from 'react';
import useDataStore from '../../../../store/dataSlice'
import s from './Partners.module.css'
import Item from 'antd/es/list/Item';
import { useTranslations } from 'next-intl';

export default function Partners() {
    const { partners, fetchPartners } = useDataStore();
    const t = useTranslations();

    useEffect(() => {
        !partners.length && fetchPartners();
    }, []);

    console.log(partners);

    return (
        <main>
            <div className='container'>
                <h2>
                    {t('header.partnersPage')}
                </h2>
                <div className={s.photo__wrapper}>
                    {
                        partners.map(item => {
                            return (
                                <div className={s.photo__item}>
                                    <div className={s.partner__img}>
                                    <img src={item.img} alt="" />
                                    </div>
                                    <h3>{item.partner_name}</h3>
                                    <a href={item.partner_link} target='_blank'></a>
                                </div>
                            )
                        })
                    }


                </div>
            </div>
        </main>
    )
}