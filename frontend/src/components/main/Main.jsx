import React, { useState } from 'react'
import Row from 'react-bootstrap/Row';
import { ProgressBar } from 'react-bootstrap';

const urlList = [
    "https://www.youtube.com/embed/xTLK0iHLxFs",
    "https://www.youtube.com/embed/RtN96mI6wt0",
    "https://www.youtube.com/embed/sUYdrlguIjc",
    "https://www.youtube.com/embed/QGK7aTGHeIQ",
    "https://www.youtube.com/embed/bO4LhiLaO-8"
]

const Main = () => {
    const [videoStatus, setVideoStatus] = useState(1);
    const handleNextVideo = () => {
        setVideoStatus(videoStatus + 1)
        console.log(urlList[videoStatus - 1])
    }
    return (
        <div style={{ height: "100vh", width: "100%", padding: "50px", marginLeft: "50px", }}>
            <Row>
                <div style={{ border: '4px solid black', width: "100%", textAlign: 'center', paddingTop: "10px", paddingBottom: "10px" }}><ProgressBar now={videoStatus * 20} /></div>
                <div style={{ border: '4px solid black', width: "100%", height: "50vh", }}>
                    <iframe width="100%" height="100%" src={urlList[videoStatus - 1]} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <button
                    onClick={handleNextVideo}
                    type="submit"
                    className="w-full text-center bg-green-500 py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
                >Next Video</button>
            </Row>
        </div>
    )
}

export default Main
