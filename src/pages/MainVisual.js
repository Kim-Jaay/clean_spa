import React, { useState, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styled from 'styled-components';
import '../css/Main.scss'
import { Autoplay } from "swiper";
import { Link } from 'react-router-dom';


const MAINSLIDE = [
    { id: 1, tit: '아파트입주청소', con: '신축 아파트나 빌라 등 입주 전 상태에서의 실내 청소', des: '보양지 제거, 공사먼지 제거, 오염 제거, 시멘트가루 제거 등 구석구석 세밀하게 청소하는 서비스로 가족의 건강을 위해서 입주 전에 꼭 해야 하는 서비스입니다.' },
    { id: 2, tit: '이사/상가청소', con: '오랫동안 누적된 공간의 묵은 때, 찌든 때, 누적된 먼지와 세균들을 이사하기전에 청소', des: '신축 건물은 공사기간 중 쌓인 미세먼지/유해성분들이 곳곳에 산재해 있습니다. 입추청소를 맡기시면 유해성분 제거하고 청결한 환경을 만드실 수 있습니다.' },
    { id: 3, tit: '사무실청소', con: '쾌적한 업무 환경을 만들고, 능률적인 업무를 수행하기 위해 반드시 필요한 청소', des: '쾌적한 업무 환경을 만들고, 능률적인 업무를 수행하기 위해 반드시 필요한 청소 작업 입니다. 사무실청소에 있어서 가장 중요한 점은 빠른 시간 내에 완벽한 작업을 마무리 하는 것이 중요합니다.' },
]
const SlideItm = styled.div`
.tit{
    font-size:80px; 
    font-weight:800; 
    margin:0 0 20px 0; 
    text-shadow:1px 0 3px rgba(255,255,255,0.25); 
    background: linear-gradient(to right top, #0a96ba, #032777, #333333); 
    color: transparent; 
    -webkit-background-clip: text;}}
.con{
    font-size:20px; 
    font-weight:600; 
    margin:0 0 20px 0; 
    color:tomato;}
.des{
    font-size:15px; 
    word-break:keep-all; 
    line-height:1.45;}
`

const Dots = styled.ul`
    display:flex; 
    gap:10px; 
    position: absolute; 
    inset: 100px auto auto 50%; 
    margin: 0 0 0 -585px;
    li{
        width:20px; 
        height:20px; 
        background:#ddd;
        &.on{background:tomato;}
    }
`

const Arrows = styled.div`
    position: absolute; 
    inset: 100px auto auto 50%; 
    margin: 0 0 0 0;
    i{
        font-size:20px;
        color:white;
        background:rgba(0,0,0,0.25);
        padding:10px;
        border-radius:10px;
    }
`

const SlideNum = styled.div`
position: absolute;
bottom: 150px;
left: 50%;
margin: 0 0 0 -585px;
font-size: 30px;
font-weight: 700;
span {
    font-size: 15px;
}
`


const MainVisual = () => {
    const [idxn, setIdxn] = useState();
    const MS = useRef(null);
    const MAINLINK = [
        { tit: '깔끔이청소 소개', link: '/sub01' },
        { tit: '아파트 입주청소', link: '/sub02' },
        { tit: '이사/상가청소', link: '/sub03' },
        { tit: '청소갤러리', link: '/sub04' },
    ]



    return (
        <section className="MainVisual">
            <Swiper className='MainSlide'
                direction={"vertical"}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                onSlideChange={it => setIdxn(it.realIndex)}
                ref={MS}
            >
                {
                    MAINSLIDE.map((sl, idx) => {
                        return (
                            <SwiperSlide key={idx}>
                                <SlideItm>
                                    <div className='tit'>{sl.tit}</div>
                                    <div className='con'>{sl.con}</div>
                                    <div className='des'>{sl.des}</div>
                                </SlideItm>
                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>
            <div className="slider_etc">
                <Dots className="dots">
                    {
                        MAINSLIDE.map((dot, idx) => {
                            return (
                                <li className={idxn === idx && 'on'} onClick={() => { MS.current.swiper.slideTo(idx + 1) }} key={idx}></li>
                            )
                        })
                    }
                </Dots>
                <div className="boom">
                    <img src={process.env.PUBLIC_URL + '/assets/images/slogan.png'} alt="" />
                </div>
                <Arrows>
                    <i className="xi-angle-left-thin" onClick={() => { MS.current.swiper.slidePrev(); }}></i>
                    <i className="xi-angle-right-thin" onClick={() => { MS.current.swiper.slideNext(); }}></i>
                </Arrows>
                <SlideNum>
                    0{idxn + 1} / <span>0{MAINSLIDE.length}</span>
                </SlideNum>
            </div>
            <ul className="main_link inner">

                {
                    MAINLINK.map((lnk, idx) => {
                        return (
                            <li key={idx}>
                                <Link to='{lik.link}'>
                                    <div className="case">
                                        <span>{lnk.tit}</span>
                                    </div>
                                </Link>
                            </li>
                        )
                    })
                }

                <li>
                    <div className="customer">
                        <strong><a href="tel:010-7578-8546">010-7578-8546</a></strong>
                        <p>부산 김해 양산 기장 아파트입주청소 이사청소<br />
                            믿고 맡길 수 있는 청소 전문업체</p>
                        <i className="xi-user-plus-o"></i>
                    </div>
                </li>

            </ul>
        </section >
    )
}

export default MainVisual