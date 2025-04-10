"use client";

export default function Page(){
    return (
        <>
        <main>
            {/* Tanpa Fragment */}
            <p> Klik di sini untuk ke <a href="https://www.google.com" target="_self">Google.com</a></p>

            {/* Dengan Fragment */}
            <p>
                <a href="https://pelicin.netlify.app/web/css/animation/animation#animation-duration">https://pelicin.netlify.app/web/css/animation/animation#animation-duration</a>
            </p>
        </main>

        <style jsx>{`
           main {
                margin: 10px;
            }
            a {
                color:  #10b981;
                text-decoration: underline;
                } 

        `}
        </style>
        </>
    );
}