import React from "react";

const Modal = ({
    visible = true,
    title = 'Title',
    onClose,
    children
}) => {
    return visible &&
        <>
            <div className="flex flex-col justify-around items-center sm:justify-start sm:items-start fixed z-40 top-0 left-0 w-screen h-screen sm:shadow-lg sm:h-auto sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 bg-white sm:rounded-lg p-6 sm:py-8 sm:px-9 sm:max-w-400">
                <h2 className="uppercase text-dark text-xl sm:mb-8">{title}</h2>
                {children}
                <div className="flex items-center">
                    <button onClick={onClose} title="Close" className="sm:absolute sm:top-9 sm:right-9 transition-all hover:scale-125">
                        <img src="/images/icon-close.svg" alt="" />
                        <span className="sr-only">Close</span>
                    </button>
                </div>
            </div>
            <div onClick={onClose} className="hidden sm:block w-screen h-screen bg-back-end opacity-80 fixed top-0 left-0 z-30"></div>
        </>
}
export default Modal;