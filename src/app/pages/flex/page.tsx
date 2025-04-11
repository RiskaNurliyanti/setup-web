"use client";

export default function Page(){
    return (
        <>
        <main>
           <div className="flexContainer">
                <div className="flexItem">1</div>
                <div className="flexItem">2</div>
                <div className="flexItem">3</div>
                <div className="flexItem">Yang Ini Teks Panjang</div>
           </div>
        </main>

        <style jsx>{`
           main {
                margin: 10px;
            }
            
            .flexContainer {
                display: flex;
                flex-direction: row;
                border: 1px solid #64748b;
                padding: 5px;
                margin-bottom: 10px;
            }

            .flexItem {
                background-color: #dbeafe;
                border: 1px solid #93c5fd;
                padding: 10px;
                flex-grow: 0;
                flex-shrink: 0;
            }

        `}
        </style>
        </>
    );
}