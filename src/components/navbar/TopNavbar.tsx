import React from "react";

type Iprops = {
    show: boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
};

function TopNavbar({ show, setShow }: Iprops) {
    return (
        <>
            <div
                className={`flex justify-start pt-3 absolute top-0 right-0 z-[1035] h-20 ${show?'w-10/12':'w-full'} overflow-hidden bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] transition-all duration-300 `}
            >
                <button
                    className="bg-violet-900 rounded-md px-4 py-3 text-white mx-3 my-3"
                    onClick={() => setShow(!show)}
                >
                    Toggle sidebar
                </button>
            </div>
        </>
    );
}

export default TopNavbar;
