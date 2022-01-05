import React from 'react'
import CatBox from './CatBox'
import { useState } from 'react'
import BigBox from './BigBox'
import $ from 'jquery';


function FindMatch(props) {
    const [showBox, setshowBox] = useState(false)

    const hideHandler = async () => {
        $("#catBoxDiv").fadeToggle(1000)
        setTimeout(() => {
            setshowBox(true)
        }, 1200);

    }
    return (
        <div className='m-auto '>
            <div id='catBoxDiv' className='pt-20 grid grid-cols-5 gap-5  justify-center align-middle overflow-auto h-[46.5rem]'>
                <CatBox hideHandler={hideHandler} />
                <CatBox hideHandler={hideHandler} />
                <CatBox hideHandler={hideHandler} />
                <CatBox hideHandler={hideHandler} />
                <CatBox hideHandler={hideHandler} />
                <CatBox hideHandler={hideHandler} />
                <CatBox hideHandler={hideHandler} />
                <CatBox hideHandler={hideHandler} />
                <CatBox hideHandler={hideHandler} />
                <CatBox hideHandler={hideHandler} />
            </div>
            {showBox && <BigBox showBox={showBox} setshowBox={setshowBox} />}
        </div>
    )
}
export default FindMatch

