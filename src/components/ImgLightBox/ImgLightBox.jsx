'use client'
import s from './ImgLightBox.module.css'
import {
    TransformWrapper,
    TransformComponent,
    useControls
} from "react-zoom-pan-pinch";

function Controls({SetIsShow}) {
    const {resetTransform} = useControls();

    return(
        <button className={s.close} onClick={() => {
            SetIsShow(false);
            resetTransform()
            
       }}>
       <svg width={35} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="#ff6666" stroke-width="1.5" stroke-linecap="round"></path> <path d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" stroke="#ff6666" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
       </button>
    )
}


export default function ImgLightBox({images, currentInd, isShow, SetIsShow}) {

    return (
        <div className={`${s.wrapper} ${isShow ? s.show : ''}`}>
           
            <TransformWrapper
                  initialScale={1}

            >
                <Controls SetIsShow={SetIsShow}/>
                <TransformComponent>
                    <img src={images[currentInd]} alt="test" />
                </TransformComponent>
            </TransformWrapper>
        </div>
    )
}