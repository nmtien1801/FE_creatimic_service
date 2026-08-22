import React from 'react';

const HoSoNangLuc = () => {
    const iframeUrl = "https://online.fliphtml5.com/cmicgroup/CMIC-MEDIA-profile";

    return (
        <div className="w-full">
            {/* Desktop View (Màn hình >= 768px) */}
            <div className="hidden md:block relative w-full h-[600px]">
                <iframe
                    src={iframeUrl}
                    className="w-full h-full border-0"
                    seamless="seamless"
                    scrolling="no"
                    allowFullScreen
                />
            </div>

            {/* Mobile View (Màn hình < 768px): Hiển thị thẳng, không xoay */}
            <div className="md:hidden relative w-full h-[300px]">
                <iframe
                    src={iframeUrl}
                    className="w-full h-full border-0"
                    seamless="seamless"
                    scrolling="no"
                    allowFullScreen
                />
            </div>
        </div>
    );
};

export default HoSoNangLuc;