'use client'

import { useEffect, useState } from 'react';
import useDataStore from '../../../../store/dataSlice'
import s from './Partners.module.css'
import { useLocale, useTranslations } from 'next-intl';
import { Swiper, SwiperSlide } from 'swiper/react';
import ImgLightBox from '@/components/ImgLightBox/ImgLightBox';
import 'swiper/css';



export default function Partners() {
    const local = useLocale();
    const { partners, fetchPartners, certificatesAndAgree, fetchCertificateAndAgree } = useDataStore();
    const t = useTranslations();
    const [currentInd, setCurrentInd] = useState(null)
    const [isShow, SetIsShow] = useState(false);


    useEffect(() => {
        !partners.length && fetchPartners();
        if (!certificatesAndAgree.length) fetchCertificateAndAgree();

    }, []);
    const certImages = certificatesAndAgree.map(item => (item.img));


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

            <section className={`${s.certificates} container`}>
        <h2>
          {t('homeTitle5')}
        </h2>
        <div className={s.certificate__slider}>
          <ImgLightBox images={certImages} currentInd={currentInd} isShow={isShow} SetIsShow={SetIsShow} />


          <Swiper
            spaceBetween={10}
            slidesPerView={1.1}
            className='certificate__slider'
            

            breakpoints={{
              800: {
                slidesPerView: 2.5,
                spaceBetween: 20
              }
            }}
          >
            {
              certificatesAndAgree.map((item, index) => {
                return (
                  <SwiperSlide >
                    <div className={s.item}>
                      <div className={s.cert__img} 
                      onClick={() => {
                        setCurrentInd(index);
                        SetIsShow(true);
                      }}>
                        <img src={item.img} alt="" />
                      </div>
                      <h4 className={s.cert__info}>
                        {
                          item[local].name
                        }

<a href={item.pdf} target='_blank'>
<svg width={50} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5 10.5H15V8H9V10.5H8.5C7.67 10.5 7 11.17 7 12V15H9V17H15V15H17V12C17 11.17 16.33 10.5 15.5 10.5ZM10 9H14V10.5H10V9ZM14 16V14H10V16H14ZM15 14V13H9.00001V14H8.00001V12C8.00001 11.725 8.22501 11.5 8.50001 11.5H15.5C15.775 11.5 16 11.725 16 12V14H15ZM14.5 12.25C14.5 11.9739 14.7239 11.75 15 11.75C15.2761 11.75 15.5 11.9739 15.5 12.25C15.5 12.5261 15.2761 12.75 15 12.75C14.7239 12.75 14.5 12.5261 14.5 12.25Z" fill="#000000"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z" fill="#000000"></path> </g></svg>
</a>
                      </h4>
                    </div>
                  </SwiperSlide>
                )
              })
            }


          </Swiper>

        </div>
      </section>
        </main>
    )
}