"use client";

export default function Page(){
    return (
        <>
        <main>
           {/* Simple list */}
           <p>Top <i>Trading Card Games</i></p>
           <ol>
                <li>Magic the Gathering</li>
                <li>Pokemon</li>
                <li>Yu-gi-Oh!</li>
                <li>Cardfight!! Vanguards</li>
                <li>Weiss Schwarz</li>
           </ol>

           {/* Nested List */}
           <p>Perlengkapan <i>Camping</i></p>
           <ul>
                <li>Perlengkapan Mandi</li>
                    <ul>
                        <li>Sabun</li>
                        <li>Sampo</li>
                        <li>Pasta dan Sikat Gigi</li>
                    </ul>
                <li>Perlengkapan Tidur</li>
                    <ul>
                        <li>Bantal</li>
                        <li>Guling (Opsional)</li>
                    </ul>
                
                <li></li>
                <li></li>
           </ul>
        </main>

        <style jsx>{`
           main {
                margin: 10px;
            }
            
            ol {
                list-style: decimal;
                padding: 20px;
            }

            ul {
                list-style: disc;
                padding: 20px;
            }
            
            ul ul {
                    list-style: circle; /* atau tetap disc juga boleh */
                    padding-left: 20px;
}

        `}
        </style>
        </>
    );
}