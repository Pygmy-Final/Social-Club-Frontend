
import logo from './images/logo.png'
import Image from 'next/image'

export default function Header() {
    let currentDate = new Date();

    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    const getDayName=(dateStr, locale)=> {
        let date = new Date(dateStr);
        return date.toLocaleDateString(locale, { weekday: 'long' });
    }
    // setInterval(() =>{
    //     let cDay = currentDate.getDate()
    //     let cMonth = currentDate.getMonth()
    //     let cYear = currentDate.getFullYear()
    //     let dateStr = `${cMonth+1}/${cDay}/${cYear}`;
    //     let day = getDayName(dateStr,"us-en")
    //     let time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
    //     let fullDate = `${time}   ${day},${cDay} ${monthNames[cMonth]}, ${cYear}`
    // } , 1000);
    
    
   
    
    return (

        <div >

            <header className='flex justify-between py-4 bg'>
                <div className='ml-4 ' >
                    <Image src={logo} alt="logo picture"
                        width={51}
                        height={45.15} />
                    <h1 className='relative bottom-5 inline-block align-middle ...'>Social Club</h1>
                   {currentDate.getMonth()+1}
                </div>


            </header>

        </div>

    )
}

