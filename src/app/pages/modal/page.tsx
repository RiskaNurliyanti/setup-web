"use client";
import Head from "next/head";
import Script from 'next/script';
import LongParagraphs from '../../../../components/longParagraphs';
import { useEffect } from 'react';
import { useState } from 'react';
import Modal from "../../../../components/Modal";

export default function Page () {
    useEffect(() => {
        if ((window as any).FontAwesome) {
            (window as any).FontAwesome.dom.i2svg();
        }
    }, []);

    const [isModal1Visible, setIsModal1Visible] = useState(false);
    const [isModal2Visible, setIsModal2Visible] = useState(true);

    const handleShowModal1 = () => {
        setIsModal1Visible(true);
    }
    const handleShowModal2 = () => {
        setIsModal2Visible(true);
    }
    const handleCloseModal1 = () => {
        setIsModal1Visible(false);
    }
    const handleCloseModal2 = () => {
        setIsModal2Visible(false);
    }


    return (
    <>
    
    <Head>
        <title>Pizza Page</title>
        <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"/>
    </Head>

        <main>
            <button onClick={handleShowModal1}> Show Modal 1</button>
            <button onClick={handleShowModal2}> Show Modal 2</button>
            <LongParagraphs jumlah={3} />
            <Modal isVisible={isModal1Visible} 
                title={<h1>Browser Kamu Lambat</h1>}
                onCloseModal={handleCloseModal1}
                content={
                <>
                
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Reiciendis odio quo omnis iure mollitia corrupti placeat necessitatibus deleniti optio? 
                            Culpa deserunt dolor architecto sapiente dolorem cumque sequi odit iure alias!</p>
                            
                </>    
                    }
                />
            
            <Modal isVisible={isModal2Visible} 
                title={<h1>Browser Kamu Usang</h1>}
                onCloseModal={handleCloseModal2}
                content={
                <>
                
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Reiciendis odio quo omnis iure mollitia corrupti placeat necessitatibus deleniti optio? 
                            Culpa deserunt dolor architecto sapiente dolorem cumque sequi odit iure alias!</p>
                            
                </>    
                    }
                />
        </main>

        <style jsx>{`
                :global(body) {
                    margin: 16px;
                    
                }

                button {
                    background-color: #007bff;
                    color: #fff;
                    padding: 8px 16px;
                    margin: 16px;
                    border: 2px;
                    border-radius: 10px;
                    // display: inline-block;
                    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.67);
                    transition: background-color 0.5s, transform 1s;

                }
                
                button:active{
                    transform: scale(0.97);   
                }
        `}
            </style>
    </>

    );
}
