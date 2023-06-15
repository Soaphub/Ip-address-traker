import React from 'react';

const Content = ({data}) => {

    // Converting the Time zone as per Utc offset
    const timeZone=()=>{
        const time= data.time_zone.offset;
        const digit= Math.trunc(time);
        const convert = time.toFixed(2);

        if(convert > 0){
            if(digit.toString.length <= 1){
                return "+ 0"+convert;
            }else{
                return "+ "+convert;
            }
        }else{
            if(digit.toString.length <= 3){ 
                return "- 0"+convert.slice(1, convert.length);
            }else{
                return "- "+convert.slice(1, convert.length);
            }
        }
    }


    return (
        <div className='content-container absolute left-1/2 top-36 -translate-x-1/2 sm:top-48 lg:top-44'>

            <div className="pb-2 sm:p-4 lg:py-0">
                <h1 className='content-heading'>IP Address</h1>
                <h2 className='content-detail'>{data.ip}</h2>
            </div>

            <div className="content-div py-2">
                <h1 className='content-heading'>Location</h1>
                <h2 className='content-detail'>{data.city}, {data.state_code} &nbsp; {data.zipcode}</h2>
            </div>

            <div className="content-div py-2">
                <h1 className='content-heading'>TimeZone</h1>
                <h2 className='content-detail'>UTC {timeZone()}</h2>
            </div>

            <div className="content-div pt-2">
                <h1 className='content-heading'>I S P</h1>
                <h2 className='content-detail'>{data.isp}</h2>
            </div>
            
        </div>
    );
}

export default Content;
