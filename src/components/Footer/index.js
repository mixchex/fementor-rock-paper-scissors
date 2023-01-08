import React from "react";

const Footer = ({
    onShowRules,
    onReset
}) => {
    return (
        <div className="flex flex-col items-center justify-center space-y-2 py-6 md:py-0">
            <button onClick={onReset} className="md:fixed md:bottom-8 md:left-8 uppercase text-white border border-white rounded-lg h-11 inline-block px-9 hover:bg-white hover:text-dark">Reset</button>
            <div><a href="https://twitter.com/mixchex?ref_src=twsrc%5Etfw" className="inline-block font-sans uppercase md:pb-2 text-white hover:text-rock-light twitter-follow-button" data-show-count="false">Follow @mixchex</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></div>
            <button onClick={onShowRules} className="md:fixed md:bottom-8 md:right-8 uppercase text-white border border-white rounded-lg h-11 inline-block px-9 hover:bg-white hover:text-dark">Rules</button>
        </div>
    )
}
export default Footer;