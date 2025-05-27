import React from 'react';
import { Link } from 'react-router-dom';
import save from "../../assets/save.png";

const offers = [
    {
        id: 1,
        code: "WENEEDCG4",
        validTill: "30th September 2025",
    },
    {
        id: 2,
        code: "FIRSTBUS40",
        validTill: "30th June 2025",
    },
];

const Offer = () => {
    const [copiedId, setCopiedId] = React.useState(null);

    const handleCopy = (id, code) => {
        navigator.clipboard.writeText(code)
            .then(() => {
                setCopiedId(id);
                setTimeout(() => {
                    setCopiedId(null);
                }, 2000);
            })
            .catch((err) => {
                console.log("Failed to copy: ", err);
            });
    };

    return (
        <div className='w-full lg:px-28 md:px-16 sm:px-7 px-4 mb-[8ch]'>
            <div className="w-full flex flex-col sm:flex-row items-center justify-between mb-6 gap-2 sm:gap-0">
                <h1 className="text-2xl font-medium">Special Offer</h1>
                <Link to="/offer" className='text-violet-600 text-sm sm:text-base'>View All</Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
                {offers.map((offer) => (
                    <div key={offer.id} className="w-full h-auto rounded-xl bg-zinc-200/30 dark:bg-zinc-800/20 p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-4 sm:gap-x-6 shadow-md">
                        <img
                            src={save}
                            alt="save img"
                            className="w-full sm:w-40 md:w-52 aspect-[2/1] object-contain object-center"
                        />
                        <div className="flex flex-1 flex-col space-y-4 text-center sm:text-left">
                            <h1 className="text-lg md:text-xl font-semibold text-neutral-800 dark:text-neutral-50">
                                Get 40% off on your first booking with code:
                            </h1>

                            <p className="text-sm text-neutral-400 dark:text-neutral-600 font-normal">
                                Valid till:{" "}
                                <span className="text-sm font-medium">{offer.validTill}</span>
                            </p>

                            <button
                                onClick={() => handleCopy(offer.id, offer.code)}
                                className="py-2 px-4 bg-violet-600 text-white rounded-md w-fit mx-auto sm:mx-0"
                            >
                                {copiedId === offer.id ? "Code Copied!" : "Copy Code"}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Offer;
