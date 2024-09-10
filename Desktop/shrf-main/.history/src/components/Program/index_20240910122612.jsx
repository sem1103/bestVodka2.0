import { useEffect, useState } from 'react';
import s from './style.module.css';
import program from "../../assets/img/program.png"

export default function Program() {
    const baseUrl = import.meta.env.VITE_API_BASE_URL

    const [contact, setContact] = useState([])
    useEffect(() => {
        fetch(`${baseUrl}/api/contact-info/`)
            .then(response => response.json())
            .then(data => setContact(data))
            .catch(err => console.log("error", err))
    }, [])



    return (
        <section className={`${s.program} container`} id='program'>
            <h2 className='section__title'>
                Proqram
            </h2>

            <div className={s.program__road}>
                <div className={s.date}>
                    <p>
                        <svg width={22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20 10V7C20 5.89543 19.1046 5 18 5H6C4.89543 5 4 5.89543 4 7V10M20 10V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V10M20 10H4M8 3V7M16 3V7" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"></path> <rect x="6" y="12" width="3" height="3" rx="0.5" fill="#ffffff"></rect> <rect x="10.5" y="12" width="3" height="3" rx="0.5" fill="#ffffff"></rect> <rect x="15" y="12" width="3" height="3" rx="0.5" fill="#ffffff"></rect> </g></svg>
                        4 oktyabr</p>

                    <img src={program} alt="err" />
                </div>
            </div>

            <div className={s.contact__us} id='contact'>
                <div className={s.left__content}>
                    <h2 className='section__title'>
                        Əlaqə
                    </h2>
                    {contact.map((item, index) => {
                        return (
                            < >
                                <p key={index}>
                                    <svg width="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16.5562 12.9062L16.1007 13.359C16.1007 13.359 15.0181 14.4355 12.0631 11.4972C9.10812 8.55901 10.1907 7.48257 10.1907 7.48257L10.4775 7.19738C11.1841 6.49484 11.2507 5.36691 10.6342 4.54348L9.37326 2.85908C8.61028 1.83992 7.13596 1.70529 6.26145 2.57483L4.69185 4.13552C4.25823 4.56668 3.96765 5.12559 4.00289 5.74561C4.09304 7.33182 4.81071 10.7447 8.81536 14.7266C13.0621 18.9492 17.0468 19.117 18.6763 18.9651C19.1917 18.9171 19.6399 18.6546 20.0011 18.2954L21.4217 16.883C22.3806 15.9295 22.1102 14.2949 20.8833 13.628L18.9728 12.5894C18.1672 12.1515 17.1858 12.2801 16.5562 12.9062Z" fill="var(--globalPrimary)"></path> </g></svg>
                                    <a href={`tel:${item.phone_number}`}>
                                        {item.phone_number}
                                    </a>
                                </p>

                                <p>
                                    <svg width="20" viewBox="0 -4 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>mail</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" sketch:type="MSPage"> <g id="Icon-Set" sketch:type="MSLayerGroup" transform="translate(-412.000000, -259.000000)" fill="var(--globalPrimary)"> <path d="M442,279 C442,279.203 441.961,279.395 441.905,279.578 L433,270 L442,263 L442,279 L442,279 Z M415.556,280.946 L424.58,271.33 L428,273.915 L431.272,271.314 L440.444,280.946 C440.301,280.979 415.699,280.979 415.556,280.946 L415.556,280.946 Z M414,279 L414,263 L423,270 L414.095,279.578 C414.039,279.395 414,279.203 414,279 L414,279 Z M441,261 L428,271 L415,261 L441,261 L441,261 Z M440,259 L416,259 C413.791,259 412,260.791 412,263 L412,279 C412,281.209 413.791,283 416,283 L440,283 C442.209,283 444,281.209 444,279 L444,263 C444,260.791 442.209,259 440,259 L440,259 Z" id="mail" sketch:type="MSShapeGroup"> </path> </g> </g> </g></svg>
                                    <a href={`mailto:${item.email}`}>
                                        {item.email}
                                    </a>
                                </p>
                                <p>
                                    <svg width={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="var(--globalPrimary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                                    <a href={item.location_url} target='_blank'>{item.location_name}
                                    </a>
                                </p>
                            </>
                        )
                    })}


                    <button className='buy__button'>
                        <svg width={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 16H12.01M12 12H12.01M12 8H12.01M21 14V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V14C4.10457 14 5 13.1046 5 12C5 10.8954 4.10457 10 3 10V7C3 5.89543 3.89543 5 5 5H19C20.1046 5 21 5.89543 21 7V10C19.8954 10 19 10.8954 19 12C19 13.1046 19.8954 14 21 14Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                        Bilet al
                    </button>
                </div>

                <div className={s.right__content}>
                    {/* <img src="./public/assets/img/elaqe.webp" alt="" /> */}
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3040.1922523459452!2d49.826169099999994!3d40.360261300000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x403a7d8139ede473%3A0x2424959edacdfc05!2z0KTRjdC50YDQvNC-0L3RgiDQkdCw0LrRgw!5e0!3m2!1sru!2saz!4v1723838401781!5m2!1sru!2saz" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </section>
    )
}