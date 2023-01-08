import React from "react";

const Footer = ({
    onShowRules,
    onReset,
    onGameChange,
    type
}) => {
    return (
        <div className="flex flex-col items-center justify-center space-y-2 py-6 md:py-0">
            <button onClick={onReset} className="md:fixed md:bottom-8 md:left-8 uppercase text-white border border-white rounded-lg h-11 inline-block px-9 hover:bg-white hover:text-dark">Reset</button>
            <button onClick={() => type == 'standard' ? onGameChange('advanced') : onGameChange('standard')} className="uppercase text-white rounded-lg h-11 inline-block px-9 hover:text-lizard-light">Play {type == 'standard' ? 'Lizard Spock' : 'Rock Paper Scissors'}</button>
            <button onClick={onShowRules} className="md:fixed md:bottom-8 md:right-8 uppercase text-white border border-white rounded-lg h-11 inline-block px-9 hover:bg-white hover:text-dark">Rules</button>
        </div>
    )
}
export default Footer;