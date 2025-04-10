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

            <p> <a id="animationKey" href="#">Animaton @keyframes</a></p>
        </main>

        <style jsx>{`
            @keyframes wobble {
                0% {
                    transform: rotate(0deg);
                    color: blue;

                }
                50% {
                    transform: rotate(-10deg);
                
                }
                100% {
                    transform: rotate(10deg);
                    color: red;               
                }
            }
            
             @keyframes zoom {
                0% {
                    font-size: inherit;

                }
                100% {
                    font-size: 20pt;
                
                }
            }   


           main {
                margin: 10px;
            }
            a {
                color:  #10b981;
                transition: color 0.5s, transform 0.5s;
                display: inline-block
                
                }
            a:hover {
                color: #1037b9;
                text-decoration: underline;
                transform: skewX(-10deg);
                }

            #animationKey {
                display: inline-block;
                }
                
            #animationKey:hover {
                animation: wobble 1s ease-in infinite alternate, 
                zoom 1.5s ease-in infinite alternate;
            }

        `}
        </style>
        </>
    );
}