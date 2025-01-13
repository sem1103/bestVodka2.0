'use client'
import s from './page.module.css'

import { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Loading from './loading';
import useDataStore from '../../../store/dataSlice';
import { useLocale, useTranslations } from 'next-intl';
import 'swiper/css';
import Modal from 'antd/es/modal/Modal';
import { Autoplay } from 'swiper/modules';


export default function Home() {
  const t = useTranslations()
  const introRef = useRef(null);

  const [isLoad, SetIsLoad] = useState(false)
  const [closedModal, setClosedModal] = useState(false)
  const [activeProduction, setActiveProduction] = useState(false);
  const [sliderModal, setSliderModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({})
  const swiperRef = useRef(null);
  const [newProdModal, setNewProdModal] = useState(false);


  const { fetchMainProducts, mainSlider, ourProductionsBlog, mainProduct, fetchOurProductionBlog } = useDataStore();

  const local = useLocale()

  useEffect(() => {
    if (!Object.keys(mainProduct).length) fetchMainProducts();
    if (!Object.keys(ourProductionsBlog).length) fetchOurProductionBlog();

    setTimeout(() => {
      setNewProdModal(true)
    }, 4000);

  }, []);






  useEffect(() => {
    setTimeout(() => {
      SetIsLoad(true);
    }, 1000);
  }, []);

  return (

    <>
      <Loading hide={isLoad} />
      

      <div className={s.intro} ref={introRef}>

        <div className={s.intro__container}>

          <h1 className={s.prod__name}>{t('introTitle')}</h1>
          <p>
            {t('introSubtitle')}
          </p>
        </div>
      </div>

     
      

      <Modal open={newProdModal} onCancel={() => setNewProdModal(!newProdModal)}  footer={false} className={`${s.new__prod__modal} new__prod__modal`}
      wrapClassName={s.ant__modal} 
      style={{ top: '20px', height: '80vh' }} 
      >
      <section className={s.new__prod}>
        <div className={s.box}>
        <h6>{t('productPlate')}</h6>
        </div>
      
        <div className='container'>
          <div className={s.prod__info}>
            <h2>{
              local == 'az' ? mainProduct?.az?.product_name : local == 'ru' ? mainProduct?.ru?.product_name : mainProduct?.en?.product_name
            }</h2>
            <div dangerouslySetInnerHTML={{ __html: local == 'az' ? mainProduct?.az?.product_desc : local == 'ru' ? mainProduct?.ru?.product_desc : mainProduct?.en?.product_desc }} />

          </div>

          <div className={s.prod__img}>
            <img src={mainProduct.productImg} alt="" />
          </div>
        </div>
      </section>
      </Modal>

      <section className={`${s.our__prods}`}>
        <h2 className='container'>
          {t('homeTitle1')}
        </h2>

        <Swiper
          ref={swiperRef}
          spaceBetween={15}
          slidesPerView={1.1}
          className='our_prod__slider'
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          breakpoints={{
            1100: {
              slidesPerView: 1.9,
              spaceBetween: 50
            }
          }}
        >

          {
            mainSlider.map(item => {
              return (
                <SwiperSlide>
                  <div className={s.slider__item}>
                    <div className={s.item__info}>
                      <h4 className={s.prod__type}>
                        {t('productsSlider.productType')}
                      </h4>
                      <h3 className={s.prod__name}>
                        {
                          local == 'az' ? item?.az?.product_name : local == 'ru' ? item?.ru?.product_name : item?.en?.product_name
                        }
                      </h3>
                      <p className={s.prod__desc} dangerouslySetInnerHTML={{ __html: local == 'az' ? item?.az?.product_desc : local == 'ru' ? item?.ru?.product_desc : item?.en?.product_desc }} />
                      <button onClick={() => {
                        setSelectedProduct(item);
                        setSliderModal(true);
                        console.log(swiperRef);
                        
                        swiperRef.current && swiperRef.current.swiper.autoplay.stop();
                      }}>
                      {t('productsSlider.detailsBtn')}
                      </button>
                    </div>

                    <div className={s.item__img}>
                      <img src={item.product_img} alt="" />
                    </div>
                  </div>
                </SwiperSlide>
              )
            })
          }

        </Swiper>
      </section>

      <Modal open={sliderModal}  onCancel={() => {
        swiperRef.current && swiperRef.current.swiper.autoplay.start();
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

      <section className={`${s.about__us} container`}>
        <div>
          <h2 className='container'>
            {t('homeTitle2')}
          </h2>
          <p>
            {t('homeAbout.text')}
          </p>
        </div>
        <h3>
  <span className={s.numb}>{new Date().getFullYear() - 2006}</span>
  <span
    dangerouslySetInnerHTML={{
      __html: t('homeAbout.experience')
        .split(' ')
        .map(item => item + '<br>')
        .join(''),
    }}
  />
</h3>

      </section>

      <section className={`${s.equipment}`}>
        <h2 className={`container`}>
          {t('homeTitle3')}
        </h2>
        <div className={s.equipment__one}>
          <div className={`${s.equipment__info}`}>
            <h3>Cavagnino & Gatti</h3>
            <p>
              {t('equipmentText')}
            </p>
          </div>
        </div>

      </section>

      <section className={`container ${s.our__production}`}>
        <h2>
          {t('homeTitle4')}
        </h2>
        <div dangerouslySetInnerHTML={{ __html: local == 'az' ? ourProductionsBlog.azSubtitle : local == 'ru' ? ourProductionsBlog.ruSubtitle : ourProductionsBlog.enSubtitle }} />

        <div className={s.production__wrapper}>
          {
            ourProductionsBlog.productionBlogs?.map(item => {
              return (
                <div className={s.production__blog}
                  onClick={() => {
                    setActiveProduction(item);
                    setClosedModal(!closedModal)
                  }}>
                  <img src={item.background} alt="" />
                  <h3>
                    {
                      item[local].title
                    }
                  </h3>
                </div>
              )
            })
          }


        </div>

      </section>

      <Modal open={closedModal}  onCancel={() => {
        setClosedModal(!closedModal)
      }} footer={null}>
        <div className={s.production__modal__content}>
          <div>
            <img src={activeProduction.background} alt="" />
          </div>
          <div className={s.production__modal__text}>
            <div dangerouslySetInnerHTML={{ __html: activeProduction[local]?.text }} />
          </div>
{
  console.log(activeProduction[local]?.text )
  
}
        </div>
      </Modal>

      

   

      <button onClick={() => setNewProdModal(!newProdModal)} className={`${s.show__new__prod} ${newProdModal ? s.hide__btn : ''}`}>{t('productPlate')}!</button>
    </>

  );
}
