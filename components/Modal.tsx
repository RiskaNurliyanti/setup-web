"use client";
import React from "react";
import Script from 'next/script';
import { useEffect } from 'react';



type Props = {
    isVisible: boolean;
    onCloseModal?: () => void;
    title: React.ReactNode;
    content: React.ReactNode;
};

export default function Modal(props: Props) {
    const {isVisible, onCloseModal, title, content } = props;

    const handleCloseModal = () => {
        if (onCloseModal) {
            onCloseModal();
        }
        
    }

    useEffect(() => {
            if ((window as any).FontAwesome) {
                (window as any).FontAwesome.dom.i2svg();
            }
        }, []);
    

    const handleClickInsideModal = (e: React.MouseEvent) => {
        // Stop event bubbling
        e.stopPropagation;
        // alert("stopped!!")

    }

    if (!isVisible) {
        return null;
    } else {
        return (
            <>
            <Script
                src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/js/all.min.js"
                strategy="beforeInteractive"
            />

            <div className="cover" onClick={handleCloseModal}>
                <div className="modal" onClick={handleClickInsideModal}>
                    <div className="closeRow">
                    <i onClick={handleCloseModal} className="fa-solid fa-xmark pointer"></i>
                    </div>
                    <div className="modalContent">{title}</div>
                    <div className="modalContent">{content}</div>
                </div>
            </div>

            <style jsx>{`
                .cover {
                     background-color: #000000cc;
                     position: fixed;
                     top: 0;
                     left: 0;
                     right: 0;
                     bottom: 0;
                     cursor: pointer;
                }

                .modal {
                    background-color: white;
                    max-width: 400px;
                    width: 60%;
                    margin-left: auto;
                    margin-right: auto;
                    margin-top: 28px;
                    padding: 28px 28px; 
                    border-radius: 8px;
                    cursor: initial;
                }
                
                .pointer {
                    cursor: pointer;
                }
                
                .modalContent {
                    margin-top: 12px;
                }

                .closeRow {
                    text-align: right;
                    font-size: 24px;
                }
            `}</style>
            </>
        );
    }
}