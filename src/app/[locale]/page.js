'use client'
import s from './page.module.css'

import { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import ImgLightBox from '@/components/ImgLightBox/ImgLightBox';
import Loading from './loading';
import useDataStore from '../../../store/dataSlice';



export default function Home() {
  const {fetchMainProducts} = useDataStore();
  const introRef = useRef(null);
  const [currentInd, setCurrentInd] = useState(null)
  const [isShow, SetIsShow] = useState(false);
  const [isLoad, SetIsLoad] = useState(false)
  const [closedModal, setClosedModal] = useState(false)



  const certImages = [
    '/assets/img/certificates/1.jpg',
    '/assets/img/certificates/2.jpg',
    '/assets/img/certificates/3.jpg',
    '/assets/img/certificates/4.jpg'
  ];

  useEffect(() => {
  setTimeout(() => {
      SetIsLoad(true);
    }, 2000);
  }, []);

  return (

    <>
      <Loading hide={isLoad} />

    
      <div className={s.intro} ref={introRef}>

        <div className={s.intro__container}>

          <h1 className={s.prod__name}>~BEST~  <span>SPIRITS</span></h1>
          <p>Продолжаем традиции с 2000 года</p>
        </div>
      </div>

      <section className={s.new__prod}>
        <div className='container'>
          <div className={s.prod__info}>
            <h2>Водка "Золотой Урожай"</h2>
            <p>Водка 'Золотой Урожай' — это чистый, мягкий вкус, созданный из натуральных ингредиентов, дарованных северной природой. Сочетание кристально чистой воды и отборных злаков придает напитку характерную свежесть и легкость.</p>
          </div>

          <div className={s.prod__img}>
            <img src="/assets/img/vodkaBootles/slider6.png" alt="" />
          </div>


        </div>
      </section>

      <section className={`${s.our__prods}`}>
        <h2 className='container'>
          Наша продукция
        </h2>

        <Swiper
          spaceBetween={15}
          slidesPerView={1.1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          className='our_prod__slider'
          loop={true}
          breakpoints={{
            1100: {
              slidesPerView: 1.65,
              spaceBetween: 50

            }
          }}
        >
          <SwiperSlide>
            <div className={s.slider__item}>
              <div className={s.item__info}>
                <h4 className={s.prod__type}>
                  Водка
                </h4>
                <h3 className={s.prod__name}>
                 "New Brand"
                </h3>
                <p className={s.prod__desc}>
                  Состав водки "New Brand" включает чистейшую артезианскую воду, отборный спирт «Люкс» из зерновых культур, а также природные экстракты дубовой коры и лесных трав. Эти компоненты придают водке мягкость и уникальные древесные нотки.
                </p>
                <button>Подробнее</button>
              </div>

              <div className={s.item__img}>
                <img src="/assets/img/vodkaBootles/slider1.png" alt="" />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={s.slider__item}>
              <div className={s.item__info}>
                <h4 className={s.prod__type}>
                  Водка
                </h4>
                <h3 className={s.prod__name}>
                  "PALMIRA SILVER"
                </h3>
                <p className={s.prod__desc}>
                  Водка "PALMIRA SILVER" — это элитный напиток, созданный на основе высококачественного спирта «Люкс» и чистейшей природной воды. В её состав входят натуральные компоненты, которые придают водке мягкость и насыщенный вкус. Характерными чертами этой водки являются утончённые ароматы и лёгкие хлебные оттенки, что делает её отличным выбором для особых случаев.            </p>
                <button>Подробнее</button>
              </div>

              <div className={s.item__img}>
                <img src="/assets/img/vodkaBootles/slider2.png" alt="" />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={s.slider__item}>
              <div className={s.item__info}>
                <h4 className={s.prod__type}>
                  Водка
                </h4>
                <h3 className={s.prod__name}>
                  "PALMIRA GOLDEN"
                  </h3>

                <p className={s.prod__desc}>
                  Водка "PALMIRA GOLDEN" — это напиток, созданный с использованием лучших сортов зерна и чистейшей природной воды, что обеспечивает её исключительную мягкость и чистоту. Она проходит многократную фильтрацию через угольные и серебряные фильтры, что придаёт ей кристальную прозрачность и мягкий вкус. GRAF LEDOFF идеально подходит как для классического употребления, так и для коктейлей.
                </p>
                <button>Подробнее</button>
              </div>

              <div className={s.item__img}>
                <img src="/assets/img/vodkaBootles/slider3.png" alt="" />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={s.slider__item}>
              <div className={s.item__info}>
                <h4 className={s.prod__type}>
                  Водка
                </h4>
                <h3 className={s.prod__name}>
                  "Империя"
                  </h3>

                <p className={s.prod__desc}>
                  Водка "Империя" — это напиток, созданный с использованием лучших сортов зерна и чистейшей природной воды, что обеспечивает её исключительную мягкость и чистоту. Она проходит многократную фильтрацию через угольные и серебряные фильтры, что придаёт ей кристальную прозрачность и мягкий вкус. GRAF LEDOFF идеально подходит как для классического употребления, так и для коктейлей.
                </p>
                <button>Подробнее</button>
              </div>

              <div className={s.item__img}>
                <img src="/assets/img/vodkaBootles/slider4.png" alt="" />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={s.slider__item}>
              <div className={s.item__info}>
                <h4 className={s.prod__type}>
                  Водка
                </h4>
                <h3 className={s.prod__name}>
                  "Золотой Олень"
                  </h3>

                <p className={s.prod__desc}>
                  Водка "Золотой Олень" — это напиток, созданный с использованием лучших сортов зерна и чистейшей природной воды, что обеспечивает её исключительную мягкость и чистоту. Она проходит многократную фильтрацию через угольные и серебряные фильтры, что придаёт ей кристальную прозрачность и мягкий вкус. GRAF LEDOFF идеально подходит как для классического употребления, так и для коктейлей.
                </p>
                <button>Подробнее</button>
              </div>

              <div className={s.item__img}>
                <img src="/assets/img/vodkaBootles/slider5.png" alt="" />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={s.slider__item}>
              <div className={s.item__info}>
                <h4 className={s.prod__type}>
                  Водка
                </h4>
                <h3 className={s.prod__name}>
                  "Золотой Урожай"
                  </h3>

                <p className={s.prod__desc}>
                  Водка "Золотой Урожай" — это напиток, созданный с использованием лучших сортов зерна и чистейшей природной воды, что обеспечивает её исключительную мягкость и чистоту. Она проходит многократную фильтрацию через угольные и серебряные фильтры, что придаёт ей кристальную прозрачность и мягкий вкус. GRAF LEDOFF идеально подходит как для классического употребления, так и для коктейлей.
                </p>
                <button>Подробнее</button>
              </div>

              <div className={s.item__img}>
                <img src="/assets/img/vodkaBootles/slider6.png" alt="" />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={s.slider__item}>
              <div className={s.item__info}>
                <h4 className={s.prod__type}>
                  Водка
                </h4>
                <h3 className={s.prod__name}>
                  "Свойская"
                  </h3>

                <p className={s.prod__desc}>
                  Водка "Свойская" — это напиток, созданный с использованием лучших сортов зерна и чистейшей природной воды, что обеспечивает её исключительную мягкость и чистоту. Она проходит многократную фильтрацию через угольные и серебряные фильтры, что придаёт ей кристальную прозрачность и мягкий вкус. GRAF LEDOFF идеально подходит как для классического употребления, так и для коктейлей.
                </p>
                <button>Подробнее</button>
              </div>

              <div className={s.item__img}>
                <img src="/assets/img/vodkaBootles/slider7.png" alt="" />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={s.slider__item}>
              <div className={s.item__info}>
                <h4 className={s.prod__type}>
                  Водка
                </h4>
                <h3 className={s.prod__name}>
                  "Правда"
                  </h3>

                <p className={s.prod__desc}>
                  Водка "Правда" — это напиток, созданный с использованием лучших сортов зерна и чистейшей природной воды, что обеспечивает её исключительную мягкость и чистоту. Она проходит многократную фильтрацию через угольные и серебряные фильтры, что придаёт ей кристальную прозрачность и мягкий вкус. GRAF LEDOFF идеально подходит как для классического употребления, так и для коктейлей.
                </p>
                <button>Подробнее</button>
              </div>

              <div className={s.item__img}>
                <img src="/assets/img/vodkaBootles/slider8.png" alt="" />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={s.slider__item}>
              <div className={s.item__info}>
                <h4 className={s.prod__type}>
                  Водка
                </h4>
                <h3 className={s.prod__name}>
                  "Rusoff"
                  </h3>

                <p className={s.prod__desc}>
                  Водка "Rusoff" — это напиток, созданный с использованием лучших сортов зерна и чистейшей природной воды, что обеспечивает её исключительную мягкость и чистоту. Она проходит многократную фильтрацию через угольные и серебряные фильтры, что придаёт ей кристальную прозрачность и мягкий вкус. GRAF LEDOFF идеально подходит как для классического употребления, так и для коктейлей.
                </p>
                <button>Подробнее</button>
              </div>

              <div className={s.item__img}>
                <img src="/assets/img/vodkaBootles/slider9.png" alt="" />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={s.slider__item}>
              <div className={s.item__info}>
                <h4 className={s.prod__type}>
                  Водка
                </h4>
                <h3 className={s.prod__name}>
                  "Alpha"
                  </h3>

                <p className={s.prod__desc}>
                  Водка "Alpha" — это напиток, созданный с использованием лучших сортов зерна и чистейшей природной воды, что обеспечивает её исключительную мягкость и чистоту. Она проходит многократную фильтрацию через угольные и серебряные фильтры, что придаёт ей кристальную прозрачность и мягкий вкус. GRAF LEDOFF идеально подходит как для классического употребления, так и для коктейлей.
                </p>
                <button>Подробнее</button>
              </div>

              <div className={s.item__img}>
                <img src="/assets/img/vodkaBootles/slider10.png" alt="" />
              </div>
            </div>
          </SwiperSlide>

          
          <SwiperSlide>
            <div className={s.slider__item}>
              <div className={s.item__info}>
                <h4 className={s.prod__type}>
                  Водка
                </h4>
                <h3 className={s.prod__name}>
                  "Gold City"
                  </h3>

                <p className={s.prod__desc}>
                  Водка "Gold City" — это напиток, созданный с использованием лучших сортов зерна и чистейшей природной воды, что обеспечивает её исключительную мягкость и чистоту. Она проходит многократную фильтрацию через угольные и серебряные фильтры, что придаёт ей кристальную прозрачность и мягкий вкус. GRAF LEDOFF идеально подходит как для классического употребления, так и для коктейлей.
                </p>
                <button>Подробнее</button>
              </div>

              <div className={s.item__img}>
                <img src="/assets/img/vodkaBootles/slider11.png" alt="" />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={s.slider__item}>
              <div className={s.item__info}>
                <h4 className={s.prod__type}>
                  Водка
                </h4>
                <h3 className={s.prod__name}>
                  "KOD 555"
                  </h3>

                <p className={s.prod__desc}>
                  Водка "KOD 555" — это напиток, созданный с использованием лучших сортов зерна и чистейшей природной воды, что обеспечивает её исключительную мягкость и чистоту. Она проходит многократную фильтрацию через угольные и серебряные фильтры, что придаёт ей кристальную прозрачность и мягкий вкус. GRAF LEDOFF идеально подходит как для классического употребления, так и для коктейлей.
                </p>
                <button>Подробнее</button>
              </div>

              <div className={s.item__img}>
                <img src="/assets/img/vodkaBootles/slider12.png" alt="" />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={s.slider__item}>
              <div className={s.item__info}>
                <h4 className={s.prod__type}>
                  Водка
                </h4>
                <h3 className={s.prod__name}>
                  "Organic"
                  </h3>

                <p className={s.prod__desc}>
                  Водка "Organic" — это напиток, созданный с использованием лучших сортов зерна и чистейшей природной воды, что обеспечивает её исключительную мягкость и чистоту. Она проходит многократную фильтрацию через угольные и серебряные фильтры, что придаёт ей кристальную прозрачность и мягкий вкус. GRAF LEDOFF идеально подходит как для классического употребления, так и для коктейлей.
                </p>
                <button>Подробнее</button>
              </div>

              <div className={s.item__img}>
                <img src="/assets/img/vodkaBootles/slider13.png" alt="" />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={s.slider__item}>
              <div className={s.item__info}>
                <h4 className={s.prod__type}>
                  Водка
                </h4>
                <h3 className={s.prod__name}>
                  "FreshLeaf"
                  </h3>

                <p className={s.prod__desc}>
                  Водка "FreshLeaf" — это напиток, созданный с использованием лучших сортов зерна и чистейшей природной воды, что обеспечивает её исключительную мягкость и чистоту. Она проходит многократную фильтрацию через угольные и серебряные фильтры, что придаёт ей кристальную прозрачность и мягкий вкус. GRAF LEDOFF идеально подходит как для классического употребления, так и для коктейлей.
                </p>
                <button>Подробнее</button>
              </div>

              <div className={s.item__img}>
                <img src="/assets/img/vodkaBootles/slider14.png" alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={s.slider__item}>
              <div className={s.item__info}>
                <h4 className={s.prod__type}>
                  Водка
                </h4>
                <h3 className={s.prod__name}>
                  "Туз"
                  </h3>

                <p className={s.prod__desc}>
                  Водка "Туз" — это напиток, созданный с использованием лучших сортов зерна и чистейшей природной воды, что обеспечивает её исключительную мягкость и чистоту. Она проходит многократную фильтрацию через угольные и серебряные фильтры, что придаёт ей кристальную прозрачность и мягкий вкус. GRAF LEDOFF идеально подходит как для классического употребления, так и для коктейлей.
                </p>
                <button>Подробнее</button>
              </div>

              <div className={s.item__img}>
                <img src="/assets/img/vodkaBootles/slider15.png" alt="" />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={s.slider__item}>
              <div className={s.item__info}>
                <h4 className={s.prod__type}>
                  Водка
                </h4>
                <h3 className={s.prod__name}>
                  "Nemirovskaya  osobaya"
                  </h3>

                <p className={s.prod__desc}>
                  Водка "Nemirovskaya - osobaya" — это напиток, созданный с использованием лучших сортов зерна и чистейшей природной воды, что обеспечивает её исключительную мягкость и чистоту. Она проходит многократную фильтрацию через угольные и серебряные фильтры, что придаёт ей кристальную прозрачность и мягкий вкус. GRAF LEDOFF идеально подходит как для классического употребления, так и для коктейлей.
                </p>
                <button>Подробнее</button>
              </div>

              <div className={s.item__img}>
                <img src="/assets/img/vodkaBootles/slider16.png" alt="" />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={s.slider__item}>
              <div className={s.item__info}>
                <h4 className={s.prod__type}>
                  Водка
                </h4>
                <h3 className={s.prod__name}>
                  "Nemirovskaya"
                  </h3>

                <p className={s.prod__desc}>
                  Водка "Nemirovskaya" — это напиток, созданный с использованием лучших сортов зерна и чистейшей природной воды, что обеспечивает её исключительную мягкость и чистоту. Она проходит многократную фильтрацию через угольные и серебряные фильтры, что придаёт ей кристальную прозрачность и мягкий вкус. GRAF LEDOFF идеально подходит как для классического употребления, так и для коктейлей.
                </p>
                <button>Подробнее</button>
              </div>

              <div className={s.item__img}>
                <img src="/assets/img/vodkaBootles/slider17.png" alt="" />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={s.slider__item}>
              <div className={s.item__info}>
                <h4 className={s.prod__type}>
                  Водка
                </h4>
                <h3 className={s.prod__name}>
                  "Полёт"
                  </h3>

                <p className={s.prod__desc}>
                  Водка "Полёт" — это напиток, созданный с использованием лучших сортов зерна и чистейшей природной воды, что обеспечивает её исключительную мягкость и чистоту. Она проходит многократную фильтрацию через угольные и серебряные фильтры, что придаёт ей кристальную прозрачность и мягкий вкус. GRAF LEDOFF идеально подходит как для классического употребления, так и для коктейлей.
                </p>
                <button>Подробнее</button>
              </div>

              <div className={s.item__img}>
                <img src="/assets/img/vodkaBootles/slider18.png" alt="" />
              </div>
            </div>
          </SwiperSlide>

        </Swiper>
      </section>



      <section className={`${s.about__us} container`}>
        <div>
          <h2 className='container'>
            О нас
          </h2>
          <p>Компания "Best - fərdi shəxsi firması" занимается производством высококачественной водки, сочетая традиционные рецептуры с современными технологиями. Наш уникальный подход к отбору ингредиентов и тщательный процесс дистилляции обеспечивают чистый и насыщенный вкус каждой бутылки. Мы гордимся своим мастерством и стремимся предлагать продукцию, которая удовлетворит даже самых требовательных ценителей. Внимание к деталям и стремление к совершенству – главные принципы нашей работы.</p>
        </div>
        <h3>
          <span>20</span> Лет <br /> безупречной <br /> работы
        </h3>

      </section>

      <section className={`${s.equipment}`}>
        <h2 className={`container`}>
          Современное оборудование
        </h2>
        <div className={s.equipment__one}>
          <div className={`${s.equipment__info}`}>
            <h3>Cavagnino & Gatti</h3>
            <p>Серия CG A-B-C от Cavagnino & Gatti представляет собой высококачественные автоматические машины для нанесения этикеток, разработанные для удовлетворения потребностей самых требовательных производств. Эти модели отличаются надежностью, высокой точностью и производительностью, обеспечивая идеально точное позиционирование этикеток на бутылках и другой упаковке.</p>
          </div>
        </div>

      </section>

      <section className={`container ${s.our__production}`}>
        <h2>Наше Производство</h2>
        <p>Завод "BEST" имеет более чем двадцати летнюю историю. И все время следит за высоким качеством производимой водочной продукции. Меняется время, люди, технологии производства, но качество остается неизменным.</p>

        <div className={s.production__wrapper}>
          <div className={s.production__blog}
          onClick={() => setClosedModal(!closedModal)}>
            <img src="/assets/img/production1.png" alt="" />
            <h3>Подготовка питьевой воды</h3>
          </div>
          <div className={s.production__blog}
          onClick={() => setClosedModal(!closedModal)}>
            <img src="/assets/img/production2.png" alt="" />
            <h3>Используемый спирт</h3>
          </div>

          <div className={s.production__blog}
          onClick={() => setClosedModal(!closedModal)}>
            <img src="/assets/img/production3.png" alt="" />
            <h3>Технологический процесс приготовления водки</h3>
          </div>
          <div className={s.production__blog}
          onClick={() => setClosedModal(!closedModal)}>
            <img src="/assets/img/production4.png" alt="" />
            <h3>Розлив, укупорка, оформление продукции.</h3>
          </div>
          <div className={s.production__blog}
          onClick={() => setClosedModal(!closedModal)}>
            <img src="/assets/img/production5.png" alt="" />
            <h3>Хранение и поставка алкогольной продукции</h3>
          </div>
        </div>

      </section>
      <div className={`${s.production__modal} ${closedModal ? s.showModal : ''}`}>
      <button className={s.close__modal} onClick={() => setClosedModal(!closedModal)}>
          <svg width={35} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="#fff" stroke-width="1.5" stroke-linecap="round"></path> <path d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" stroke="#fff" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
          </button>
        <div className={s.production__modal__content}>
         
          <div>
            <img src="/assets/img/production1.png" alt="" />
          </div>
          <div className={s.production__modal__text}>
          <p>
            Производственный процесс изготовления водки начинается в очистном цехе. Спирт, поступающий из спиртохранилища по наружному спиртопроводу, доставляется на третий этаж цеха в сборные емкости – мерники. Оттуда он подается самотеком на второй этаж в сортировочные чаны, вместимость каждого из которых составляет 800 дал.
            <br /><br />
            После поступления спирта в сортировочные чаны из установленных на третьем этаже резервуаров подается очищенная вода. Количество спирта и воды отмеряется по мерным стеклам для точности пропорций. В случае, если на производство внутреннего рынка допускается использование исправимого брака, его предварительно отмеряют и добавляют в сортировочные чаны перед заливом воды.
            <br /><br />
            В сортировочных чанах с использованием механических устройств выполняется перемешивание спирта и воды для создания водно-спиртовой смеси (сортировки) с крепостью 40,25% ± 0,1. Затем смесь тщательно перемешивается повторно и проверяется на крепость.
            <br /> <br />
            Готовая сортировка перекачивается насосами на третий этаж очистного цеха в напорные чаны, объем которых составляет 800 и 1000 дал. Следующим этапом является фильтрация сортировки на угольно-очистительной батарее. Этот процесс осуществляется с помощью специальных угольных колонок, заполненных активированным углем, пропитанным серебром, и включает несколько этапов угольной и песочной фильтрации.
            <br /><br />
            Для обработки водно-спиртовых смесей применяются активные угли марок, таких как БАУ-А (ГОСТ 6217-74) и другие, разрешенные для использования в ликероводочной промышленности. Из напорных чанов сортировка самотеком направляется на двухпоточные песочные форфильтры для удаления механических примесей, а затем поступает в угольные колонки, откуда после очистки направляется на песочные фильтры. Песочные фильтры обеспечивают удаление мелкодисперсных частиц угля и придают водке кристальную прозрачность. Скорость фильтрации активированным углем регулируется для достижения наилучших вкусовых и дегустационных характеристик.
            <br /><br />
            Очищенная водка самотеком спускается на первый этаж цеха в сборные емкости, где осуществляется финальная подготовка согласно рецептурам и технологическим инструкциям. Затем купаж готовится в купажных чанах, и специалист лаборатории берет пробы для анализа.
            <br /><br />
            После завершения всех этапов водка подается насосом по трубопроводу в напорное отделение цеха розлива, где она проходит последние этапы перед розливом и упаковкой, готовая к отправке потребителям.
          </p>
          </div>

        </div>
      </div>

      <section className={`${s.certificates} container`}>
        <h2>Сертификаты & Договора</h2>
        <div className={s.certificate__slider}>
          <ImgLightBox images={certImages} currentInd={currentInd} isShow={isShow} SetIsShow={SetIsShow} />


          <Swiper
            spaceBetween={10}
            slidesPerView={1.1}
            className='certificate__slider'
            onClick={(swiper) => {
              setCurrentInd(swiper.clickedIndex);
              SetIsShow(true);
            }}

            breakpoints={{
              800: {
                slidesPerView: 2.5,
                spaceBetween: 20
              }
            }}
          >
            <SwiperSlide >
              <div className={s.item}>
                <div className={s.cert__img} >
                  <img src="/assets/img/certificates/1.jpg" alt="" />
                </div>
                <h4 className={s.cert__info}>
                  Декларация о соответствии от 24.05.2023
                </h4>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={s.item} >
                <div className={s.cert__img}>
                  <img src="/assets/img/certificates/2.jpg" alt="" />
                </div>              <h4 className={s.cert__info}>
                  Декларация о соответствии от 24.05.2023
                </h4>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={s.item} >
                <div className={s.cert__img}>
                  <img src="/assets/img/certificates/3.jpg" alt="" />
                </div>              <h4 className={s.cert__info}>
                  Декларация о соответствии от 24.05.2023
                </h4>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={s.item} >
                <div className={s.cert__img}>
                  <img src="/assets/img/certificates/4.jpg" alt="" />
                </div>              <h4 className={s.cert__info}>
                  Декларация о соответствии от 24.05.2023
                </h4>
              </div>
            </SwiperSlide>
          </Swiper>

        </div>
      </section>
     

    </>

  );
}
