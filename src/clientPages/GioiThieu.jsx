import React from "react";
import { Target, Lightbulb, ShieldCheck, Cpu, Handshake, Zap } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="font-sans bg-white min-h-screen pb-16">

            {/* ============================================================================================== */}
            {/* SECTION 1: CÂU CHUYỆN THƯƠNG HIỆU (image_75c086.png) */}
            {/* ============================================================================================== */}
            <section className="w-full">
                {/* Banner tiêu đề section */}
                <div className="bg-[#ed792f] text-white text-center py-2 text-sm font-black uppercase tracking-wider">
                    CÂU CHUYỆN THƯƠNG HIỆU
                </div>

                <div className="max-w-7xl mx-auto px-6 md:px-12 py-10">
                    {/* Tiêu đề chính */}
                    <div className="text-center mb-10">
                        <h1 className="text-2xl md:text-4xl font-black text-black uppercase tracking-tight">
                            KIẾN TẠO TÀI SẢN SỐ –
                        </h1>
                        <h2 className="text-2xl md:text-4xl font-black text-[#ed792f] uppercase tracking-tight mt-1">
                            TỐI ƯU HIỆU QUẢ KINH DOANH
                        </h2>
                    </div>

                    {/* Nội dung chia 2 cột */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        {/* Khối văn bản bên trái */}
                        <div className="lg:col-span-7 space-y-5 text-[15px] text-gray-800 leading-relaxed text-justify font-medium">
                            <p>
                                Hành trình khởi nghiệp của các SME và cá nhân kinh doanh tại Việt Nam chưa bao giờ là dễ dàng.
                                Giữa làn sóng chuyển đổi số bùng nổ, nhiều doanh nghiệp lúng túng rơi vào cái bẫy mang tên
                                "Marketing ngắn hạn": đốt quá nhiều chi phí cho quảng cáo nhưng không đọng lại giá trị cốt lõi,
                                hay vận hành một bộ máy cồng kềnh nhưng thiếu hiệu quả thực tế.
                            </p>
                            <p>
                                Thấu hiểu sâu sắc nỗi đau đó, <strong className="font-bold text-black">CMIC MEDIA</strong> ra đời.
                                Chúng tôi chọn đồng hành cùng các Startup & SME với một tư duy khác biệt: Marketing không phải
                                là một khoản chi phí xa xỉ, mà là quá trình xây dựng Tài sản số bền vững.
                            </p>
                            <p>
                                Chúng tôi không hứa hẹn những con số ảo hay vẽ ra những hạng mục "đủ bộ" nhưng vô thưởng vô phạt.
                                Tại <strong className="font-bold text-black">CMIC MEDIA</strong>, mọi giải pháp – từ xây dựng website tối ưu,
                                vận hành hệ sinh thái nội dung đa kênh, đến thiết kế các phễu chuyển đổi – đều được thiết kế theo
                                triết lý Tinh gọn, Hệ thống hóa và Tập trung vào hiệu quả thực tế. Chúng tôi không chỉ làm dịch vụ,
                                chúng tôi hòa mình làm một phần đội ngũ nội bộ của khách hàng, cùng trăn trở, cùng tối ưu và cùng tăng trưởng.
                            </p>
                            <p>
                                Không dừng lại ở một Marketing Agency, tầm nhìn của <strong className="font-bold text-black">CMIC MEDIA</strong> là
                                một hành trình dài hạn. Từ việc tối ưu hóa vận hành hiện tại, chúng tôi đang từng bước hướng tới việc phát triển
                                nền tảng học tập SaaS và các công cụ công nghệ (Tech dev) tự động hóa trong tương lai, nhằm giải phóng nguồn lực
                                và nâng cao năng suất cho doanh nghiệp.
                            </p>
                            <p>
                                <strong className="font-bold text-black">CMIC MEDIA</strong> ở đây để chứng minh rằng: Ngay cả với một ngân sách
                                tối ưu và một đội ngũ tinh gọn, doanh nghiệp của bạn vẫn hoàn toàn có thể sở hữu một bệ phóng bài bản và vững chắc
                                trên không gian số.
                            </p>
                        </div>

                        {/* Khối hình ảnh minh họa bên phải */}
                        <div className="lg:col-span-5 w-full aspect-[4/3] sm:aspect-video lg:aspect-[4/5] bg-sky-100 rounded-2xl relative overflow-hidden shadow-sm border border-gray-100">
                            {/* Giả lập cấu trúc ảnh placeholder như trong thiết kế */}
                            <div className="absolute inset-0 flex flex-col justify-between p-8 bg-gradient-to-b from-sky-200/50 to-lime-600/20">
                                <div className="w-24 h-12 bg-white rounded-full opacity-8xl ml-auto mt-4 blur-[1px]"></div>
                                <div className="w-36 h-10 bg-white rounded-full opacity-8xl ml-12 blur-[1px]"></div>
                                <div className="w-full h-32 bg-lime-600/70 rounded-t-[100px] absolute bottom-0 left-0 right-0 transform scale-x-125 translate-y-6"></div>
                                <div className="w-full h-24 bg-lime-500/80 rounded-t-[120px] absolute bottom-0 left-0 right-0 transform translate-y-8"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================================================================== */}
            {/* SECTION 2: TẦM NHÌN & SỨ MỆNH (image_75c0a6.png) */}
            {/* ============================================================================================== */}
            <section className="w-full mt-8">
                {/* Banner tiêu đề section */}
                <div className="bg-[#ed792f] text-white text-center py-2 text-sm font-black uppercase tracking-wider">
                    TẦM NHÌN & SỨ MỆNH
                </div>

                <div className="max-w-6xl mx-auto px-6 py-14">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">

                        {/* Khối TẦM NHÌN */}
                        <div className="relative pt-6">
                            {/* Nhãn tiêu đề trên đầu khối */}
                            <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-[85%] bg-[#ed792f] text-white text-center py-2.5 rounded-t-2xl font-black text-xl lg:text-2xl tracking-widest uppercase shadow-md">
                                TẦM NHÌN
                            </div>
                            {/* Nội dung hộp đen */}
                            <div className="bg-black text-white rounded-2xl px-6 lg:px-8 pt-16 pb-10 min-h-[260px] flex items-center justify-center text-center shadow-xl border border-zinc-800">
                                <p className="text-sm lg:text-base leading-relaxed font-medium">
                                    Trở thành đối tác marketing đáng tin cậy cho SME và Cá nhân kinh doanh tại Việt Nam,
                                    giúp họ xây dựng hệ thống tài sản số bài bản, bền vững và tạo ra kết quả kinh doanh
                                    thực tế mà không cần tốn quá nhiều chi phí vận hành.
                                </p>
                            </div>
                        </div>

                        {/* Khối SỨ MỆNH */}
                        <div className="relative pt-6">
                            {/* Nhãn tiêu đề trên đầu khối */}
                            <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-[85%] bg-[#ed792f] text-white text-center py-2.5 rounded-t-2xl font-black text-xl lg:text-2xl tracking-widest uppercase shadow-md">
                                SỨ MỆNH
                            </div>
                            {/* Nội dung hộp đen */}
                            <div className="bg-black text-white rounded-2xl px-6 lg:px-8 pt-16 pb-10 min-h-[260px] flex items-center justify-center text-center shadow-xl border border-zinc-800">
                                <p className="text-sm lg:text-base leading-relaxed text-justify font-medium">
                                    Chúng tôi tồn tại để đồng hành cùng SME và Cá nhân kinh doanh trong việc xây dựng hệ thống
                                    online marketing rõ ràng, dễ vận hành và phục vụ trực tiếp cho mục tiêu kinh doanh. Thông qua
                                    việc phát triển các tài sản số cốt lõi, chúng tôi giúp khách hàng triển khai marketing một cách
                                    bài bản, linh hoạt và tiết kiệm chi phí, đồng thời từng bước hình thành nền tảng tăng trưởng bền vững
                                    thay vì phụ thuộc vào những giải pháp ngắn hạn hoặc tốn nhiều nguồn lực nhưng không tạo ra giá trị bền vững.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ============================================================================================== */}
            {/* SECTION 3: GIÁ TRỊ CỐT LÕI (image_75c0c4.png) */}
            {/* ============================================================================================== */}
            <section className="w-full mt-8">
                {/* Banner tiêu đề section */}
                <div className="bg-[#ed792f] text-white text-center py-2 text-sm font-black uppercase tracking-wider">
                    GIÁ TRỊ CỐT LÕI
                </div>

                <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-14">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                        {/* Thẻ 1: HIỆU QUẢ */}
                        <div className="bg-white border-[2.5px] border-black rounded-2xl p-6 flex flex-col items-center text-center shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="w-16 h-16 flex items-center justify-center mb-4 text-[#ed792f]">
                                <ShieldCheck className="w-12 h-12 stroke-[1.5]" />
                            </div>
                            <h3 className="text-xl font-black uppercase tracking-wide text-black mb-4">
                                HIỆU QUẢ
                            </h3>
                            <div className="w-full border-t border-gray-100 my-2"></div>
                            <p className="text-sm text-gray-800 font-medium leading-relaxed text-justify pt-2">
                                Chúng tôi tập trung giải quyết đúng vấn đề kinh doanh của khách hàng, không hứa hẹn quá đà và không
                                triển khai những hạng mục chỉ để “đủ bộ” nhưng không mang lại giá trị thực.
                            </p>
                        </div>

                        {/* Thẻ 2: HỆ THỐNG HOÁ */}
                        <div className="bg-white border-[2.5px] border-black rounded-2xl p-6 flex flex-col items-center text-center shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="w-16 h-16 flex items-center justify-center mb-4 text-[#ed792f]">
                                <Cpu className="w-12 h-12 stroke-[1.5]" />
                            </div>
                            <h3 className="text-xl font-black uppercase tracking-wide text-black mb-4">
                                HỆ THỐNG HOÁ
                            </h3>
                            <div className="w-full border-t border-gray-100 my-2"></div>
                            <p className="text-sm text-gray-800 font-medium leading-relaxed text-justify pt-2">
                                Mọi hoạt động marketing đều được triển khai theo các bước rõ ràng, có quy trình cụ thể và tập trung
                                xây dựng những nền tảng online có thể sử dụng lâu dài, giúp khách hàng tiết kiệm công sức và chi phí về sau.
                            </p>
                        </div>

                        {/* Thẻ 3: ĐỒNG HÀNH LÂU DÀI */}
                        <div className="bg-white border-[2.5px] border-black rounded-2xl p-6 flex flex-col items-center text-center shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="w-16 h-16 flex items-center justify-center mb-4 text-[#ed792f]">
                                <Handshake className="w-12 h-12 stroke-[1.5]" />
                            </div>
                            <h3 className="text-xl font-black uppercase tracking-wide text-black mb-4">
                                ĐỒNG HÀNH<br />LÂU DÀI
                            </h3>
                            <div className="w-full border-t border-gray-100 my-2"></div>
                            <p className="text-sm text-gray-800 font-medium leading-relaxed text-justify pt-2">
                                Chúng tôi làm việc như một phần của đội ngũ nội bộ, cùng khách hàng hiểu vấn đề, điều chỉnh chiến lược
                                và tối ưu liên tục trong quá trình vận hành.
                            </p>
                        </div>

                        {/* Thẻ 4: TINH GỌN & LINH HOẠT */}
                        <div className="bg-white border-[2.5px] border-black rounded-2xl p-6 flex flex-col items-center text-center shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="w-16 h-16 flex items-center justify-center mb-4 text-[#ed792f]">
                                <Zap className="w-12 h-12 stroke-[1.5]" />
                            </div>
                            <h3 className="text-xl font-black uppercase tracking-wide text-black mb-4">
                                TINH GỌN &<br />LINH HOẠT
                            </h3>
                            <div className="w-full border-t border-gray-100 my-2"></div>
                            <p className="text-sm text-gray-800 font-medium leading-relaxed text-justify pt-2">
                                Đội ngũ được tổ chức nhỏ gọn, làm việc online và linh hoạt theo từng giai đoạn phát triển của doanh nghiệp,
                                nhằm tối ưu chi phí, thời gian và hiệu quả cho cả hai phía.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
}