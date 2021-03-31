import React, {useEffect, useState} from 'react';

export const Time = () => {

    const [time, setTime] = useState([])


    useEffect(()=>  {
        fetch('/api/time')
        .then(responce => setTime(responce))
        }, [])

        return (

            <div>

            {time.map}

            </div> )

}