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
        <div className=' m-auto w-max h-max'>
            <div id='catBoxDiv' className='pt-20 grid grid-cols-2 gap-5  justify-center align-middle m-auto'>
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

