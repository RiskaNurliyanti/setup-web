"use client";

export default function Page(){
    return (
        <>
        <main>
            <img
        src="../../../../canva-background-virtual-idulfitri-ornamental-hijau-emas-RfUsa0JFstQ.jpg" 
        alt="Desain Ornamental Hijau Emas Idulfitri"
        height="200" 
        width="400"
        ></img>

        <audio src="../../../../sound.mp3" controls ></audio>

        <video src="../../../../video.mp4" controls 
        width="400"></video>

        <iframe width="560" height="315" 
        src="https://www.youtube.com/embed/m1KlMecTFuw?si=5utE0dt1-1nHjfGh" title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen></iframe>

        </main>

        <style jsx>{`
           main {
                margin: 10px;
            } 

        `}
        </style>
        </>
    );
}