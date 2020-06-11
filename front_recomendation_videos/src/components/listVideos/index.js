import React, { useEffect, useState } from 'react'
import Videos from '../Videos'

function ListVideos() {
    const [videos, setVideos] = useState([])

    useEffect(() => {
        fetch('/videos').then(response =>
            response.json().then(data =>{
                setVideos(data.videos)
            }))
    },[])
    //console.log(videos)
    return (
        <Videos videos={videos}/>
    )
}

export default ListVideos;