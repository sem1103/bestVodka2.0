'use client'
import s from './page.module.css'

import { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import ImgLightBox from '@/components/ImgLightBox/ImgLightBox';
import Loading from './loading';
import useDataStore from '../../../store/dataSlice';
import { useLocale, useTranslations } from 'next-intl';
import 'swiper/css';
import Modal from 'antd/es/modal/Modal';
import { Autoplay } from 'swiper/modules';


export default function Home() {
  const t = useTranslations()
  const introRef = useRef(null);
  const [currentInd, setCurrentInd] = useState(null)
  const [isShow, SetIsShow] = useState(false);
  const [isLoad, SetIsLoad] = useState(false)
  const [closedModal, setClosedModal] = useState(false)
  const [activeProduction, setActiveProduction] = useState(false);
  const [sliderModal, setSliderModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({})
  const swiperRef = useRef(null);
  const [newProdModal, setNewProdModal] = useState(false);


  const { fetchMainProducts, mainSlider, ourProductionsBlog, certificatesAndAgree, mainProduct, fetchOurProductionBlog, fetchCertificateAndAgree } = useDataStore();

  const local = useLocale()

  useEffect(() => {
    if (!Object.keys(mainProduct).length) fetchMainProducts();
    if (!Object.keys(ourProductionsBlog).length) fetchOurProductionBlog();
    if (!certificatesAndAgree.length) fetchCertificateAndAgree();

    setTimeout(() => {
      setNewProdModal(true)
    }, 4000);

  }, []);





  const certImages = certificatesAndAgree.map(item => (item.img));

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

          <h1 className={s.prod__name}>~BEST SPIRITS~</h1>
          <p>
            {t('introSubtitle')}
          </p>
        </div>
      </div>

     
      <button onClick={() => setNewProdModal(!newProdModal)} className={`${s.show__new__prod} ${newProdModal ? s.hide__btn : ''}`}>Новинка!</button>

      <Modal open={newProdModal} onCancel={() => setNewProdModal(!newProdModal)}  footer={false} className={`${s.new__prod__modal} new__prod__modal`}
      wrapClassName={s.ant__modal} 
      style={{ top: '20px', height: '80vh' }} 
      >
      <section className={s.new__prod}>
        <div className={s.box}>
        <h6>Новинка</h6>
        </div>
        <div className={s.bg}>
        <img src="/assets/img/bg.png" alt="" />
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
  <span className={s.numb}>20</span>
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

        </div>
      </Modal>

      

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


    </>

  );
}
