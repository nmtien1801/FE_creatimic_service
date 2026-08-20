import React, { useState } from "react";
import { RefreshCw } from "lucide-react";

export default function ProfilePage() {
    const [isLoading, setIsLoading] = useState(true);
    const iframeUrl = "https://online.fliphtml5.com/cmicgroup/CMIC-MEDIA-profile";

    return (
        <main className="min-h-screen bg-[#F7F8FC] flex flex-col justify-center transition-all duration-300
            /* Hạ thấp py cả 2 chế độ dọc & ngang */
            portrait:py-2 portrait:px-2 sm:portrait:py-4 sm:portrait:px-4
            landscape:py-1 landscape:px-2 md:landscape:py-3 md:landscape:px-6"
        >
            <div className="w-full max-w-7xl mx-auto flex-1 flex flex-col justify-center">
                
                {/* Khung iframe mở rộng chiều cao */}
                <div className="relative w-full rounded-lg sm:rounded-xl overflow-hidden border border-slate-200/80 shadow-sm bg-white transition-all
                    portrait:h-[88dvh] portrait:min-h-[500px]
                    landscape:h-[94dvh] landscape:min-h-[300px] md:landscape:h-[88dvh]"
                >
                    {/* Loading Spinner */}
                    {isLoading && (
                        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-slate-50 gap-2">
                            <RefreshCw className="w-6 h-6 sm:w-7 sm:h-7 text-[#F2680C] animate-spin" />
                            <p className="text-xs font-medium text-slate-500">Đang tải hồ sơ năng lực...</p>
                        </div>
                    )}

                    <iframe
                        src={iframeUrl}
                        title="CMIC MEDIA Profile"
                        className="w-full h-full border-0 block"
                        allow="clipboard-read; clipboard-write; autoplay; fullscreen"
                        allowFullScreen={true}
                        onLoad={() => setIsLoading(false)}
                    />
                </div>

            </div>
        </main>
    );
}