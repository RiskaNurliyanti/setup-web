'use client';

import Script from 'next/script';
import Head from 'next/head';
import LongParagraphs from '../../../../components/longParagraphs';
import { useEffect } from 'react';

export default function Page() {
    // useEffect(() => {
    //     if ((window as any).FontAwesome) {
    //         (window as any).FontAwesome.dom.i2svg();
    //     }
    // }, []);

    return (
        <>
            <Script
                src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/js/all.min.js"
                strategy="afterInteractive"
                crossOrigin="anonymous"
            />


            {/* <nav>
                <a className="logo" href="/">Pizza</a>
                <a className="menu" href="/">Home</a>
                <span className="menu dropdownHead">Produk <i className="fa-solid fa-caret-down"></i>
                    <div className="dropdownMenu"> 
                        <a href="/">Pizza Sosis</a>
                        <a href="/">Pizza Jamur</a>
                        <a href="/">Pizza Keju</a>
                    </div></span>
                <span className="menu dropdownHead">Bantuan <i className="fa-solid fa-caret-down"></i>
                    <div className="dropdownMenu"> 
                        <a href="/">Hubungi Kami</a>
                        <a href="/">Hubungi Kurir</a>
                    </div>
                </span>

                <div className="floatRight"> 
                    <a className="login" href="/">Login</a>
                </div>
            </nav> */}

            <nav>
                <a className="logo" href="/">Pizza</a>
                <a className="menu" href="/">Home</a>
                <span className="menu dropdownHead"> 
                    <span> Produk <i className="fa-solid fa-caret-down"></i>
                    </span>
                </span>
                <span className="menu dropdownHead">
                    <span> Bantuan <i className="fa-solid fa-caret-down"></i>
                    </span>
                </span>
                <span className="spacer"></span>
                <span className="menu">
                    <a className="login" href="/">Login</a>
                </span>
                <span className="menu hamburger">
                    <i className="fa-solid fa-bars"></i>
                </span>
            </nav>

            <main>
                <LongParagraphs jumlah={3} />
            </main>

            <style jsx>{`
                :global(body) {
                    margin: 16px;
                    margin-top: 64px;
                }

                nav {
                    background-color: rgb(20, 47, 48);
                    color: rgb(216, 216, 216);
                    position: fixed;
                    top: 0;
                    bottom: 0;
                    height: 48px;
                    width: 100%;
                    padding-left: 18px;
                    padding-right: 18px;
                    box-shadow: 2px 2px 2px rgba(224, 125, 125, 0.67);
                    display: flex;
                    align-items: stretch;
                    
                }
                
                nav .spacer {
                    flex: 1;
                }

                nav .menu a {
                    color: white;
                    text-decoration: none;
                }

                nav .logo,
                nav .menu {
                    display: flex;
                    align-items: center;
                    color: rgb(216, 216, 216);
                    padding-left: 10px;
                    padding-right: 10px;
                }

                nav .logo {
                    font-size: 16px;
                    font-weight: bold;
                    color: #ff4800;
                }

                nav .menu:hover {
                    background-color: #ff4800;
                }

                nav .login {
                    background-color: #ff4800;
                    color: rgb(20, 47, 48);
                    padding: 4px 16px;
                    border-radius: 99px;
                }

                nav .menu.hamburger {
                    display: none;
                }

                @media (max-width: 520px) {
                    nav .menu.hamburger {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        padding: 0 10px;
                        font-size: 20px;
                        color: white;
                        cursor: pointer;
                        background: red;
                    }

                    nav .menu:not(.hamburger):not(.logo) {
                        display: none;
                    }
                }
                
            





                // Referensi-----------------------------------------------------------------------------------------------


                // nav .logo,
                // nav .menu {
                //     line-height: 48px;
                //     padding-left: 8px;
                //     padding-right: 8px;
                //     height: 100%;
                //     display: inline-block;
                //     vertical-align: middle;
                //     color: rgb(216, 216, 216);
                // }

                // nav .menu {
                //     transition: background-color 0.3s;
                // }

                // nav .logo {
                //     font-size: 16px;
                //     font-weight: bold;
                //     color: #ff4800;
                // }

                // nav .menu:hover {
                //     background-color: #ff4800;
                // }

                // nav .floatRight {
                //     float: right;
                //     line-height: 48px;
                //     padding-right: 20px;
                // }

                // nav .login {
                //     background-color: #ff4800;
                //     color: rgb(20, 47, 48);
                //     padding: 4px 16px;
                //     border-radius: 99px;
                // }

                // nav .dropdownHead {
                //     position: relative;
                // }
                

                // nav .dropdownMenu {
                //     display: none;
                //     background-color:white;
                //     color: #33145;
                //     position: absolute;
                //     left: 0;
                //     width: 150px;
                //     box-shadow: 0px 0px 16px #0000005;
                // }

                // nav .dropdownHead:hover .dropdownMenu {
                //     display: block;
                // }
                
                // nav .dropdownMenu a {
                //     display: block;
                //     line-height: initial;
                //     padding: 8px;
                // }
            `}</style>
        </>
    );
}
