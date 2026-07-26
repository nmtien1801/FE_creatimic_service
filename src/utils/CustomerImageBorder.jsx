import React, { useId } from 'react';

export default function CustomImage({ src, alt = "CMIC Media Image" }) {
    const clipId = useId();

    return (
        <div className="relative w-full max-w-[340px] aspect-[16/11] group/item overflow-visible">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 400" preserveAspectRatio="none">
                <defs>
                    <clipPath id={clipId} clipPathUnits="objectBoundingBox">
                        {/* 
                          Sửa tọa độ gối đầu lên nhau (overlap):
                          Khối 1 rộng đến 0.35, Khối 2 bắt đầu từ 0.33 -> Chồng nhau 0.02 để xóa sọc trắng
                        */}
                        {/* Bậc 1: Dưới cùng lề trái */}
                        <rect x="0.016" y="0.25" width="0.34" height="0.725" rx="0.02" />
                        
                        {/* Bậc 2: Khối giữa cao hơn */}
                        <rect x="0.33" y="0.125" width="0.26" height="0.85" rx="0.02" />
                        
                        {/* Bậc 3: Trên cùng lề phải */}
                        <rect x="0.56" y="0.025" width="0.424" height="0.75" rx="0.02" />
                        
                        {/* Các khối cầu nối liền mạch đè khít hoàn toàn */}
                        <rect x="0.30" y="0.25" width="0.06" height="0.725" />
                        <rect x="0.54" y="0.125" width="0.06" height="0.65" />
                    </clipPath>
                </defs>

                {/* Ảnh hiển thị đã được ép khít mặt nạ cắt */}
                <image
                    href={src}
                    x="0" y="0" width="600" height="400"
                    preserveAspectRatio="xMidYMid slice"
                    clipPath={`url(#${clipId})`}
                    className="transition-all duration-700 ease-out group-hover/item:scale-110"
                    style={{ transformOrigin: 'center' }}
                />

                {/* Khung viền cam ôm chuẩn theo cấu trúc */}
                <path
                    d="M 10,116 
                     A 16,16 0 0 1 26,100 
                     L 190,100 
                     A 16,16 0 0 0 206,84 
                     L 206,66 
                     A 16,16 0 0 1 222,50 
                     L 334,50 
                     A 16,16 0 0 0 350,34 
                     L 350,26 
                     A 16,16 0 0 1 366,10 
                     L 574,10 
                     A 16,16 0 0 1 590,26 
                     L 590,294 
                     A 16,16 0 0 1 574,310 
                     L 366,310 
                     A 16,16 0 0 0 350,326 
                     L 350,374 
                     A 16,16 0 0 1 334,390 
                     L 26,390 
                     A 16,16 0 0 1 10,374 
                     Z"
                    className="stroke-slate-300 stroke-[6px] fill-none transition-all duration-500 group-hover/item:stroke-orange-500/60"
                />
            </svg>
        </div>
    );
}