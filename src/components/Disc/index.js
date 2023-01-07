import React from "react";

const Disc = ({
    option = 'paper',
    onClick,
    disabled = false,
    type = 'standard',
    winner = false,
    size = "md",
    total,
    index=1,
    ...props
}) => {
    return (
        <div className={`z-10 ${total ? `disc-${index}of${total}` : 'relative'}`}>
            <div className={`absolute z-10 left-1/2 top-1/2 bg-back-end -translate-y-1/2 -translate-x-1/2 rounded-full w-33 h-32 p-4 ${type == 'standard' && 'md:w-49 md:h-48 md:p-6'} ${size === 'lg' && type == 'standard' ? 'lg:w-74 lg:h-72' : ''} flex items-stretch justify-self-stretch transition-all`}></div>
        
            {
                option != null && <div className="relative z-20 animate-disc-in transition-all active:scale-95 active:translate-y-4">
                    <div className={`rounded-full ${winner && 'animate-disc-winner-sm md:animate-disc-winner-lg'}`}>
                        <button disabled={disabled} onClick={() => onClick(option)} title={`Play ${option}`} className={`relative z-10 bg-${option}-light rounded-full w-33 h-32 p-4 ${type == 'standard' && 'md:w-49 md:h-48 md:p-6'} ${size === 'lg' && type == 'standard' ? 'lg:w-74 lg:h-72 lg:p-8' : ''} flex items-stretch justify-self-stretch shadow-disc-${option}-sm md:shadow-disc-#{option}-md transition-all hover:rotate-12 hover:scale-110`}>
                            <div className={`bg-white w-full h-full flex items-center justify-center rounded-full p-7 ${type == 'standard' && 'md:p-11'} ${size === "lg" && type == 'standard' ? ' lg:p-16' : ''} shadow-disc-inset-sm md:shadow-disc-inset-md`}>
                                <img src={`/images/icon-${option}.svg`} alt={`Play ${option}`} className="w-full h-auto" />
                            </div>
                            <span className="sr-only">Play {option}</span>
                        </button>
                    </div>
                </div>
            }
        </div>
    )
}
export default Disc;