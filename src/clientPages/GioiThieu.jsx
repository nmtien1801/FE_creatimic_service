import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const fadeInUp = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-[#faf8f6] text-slate-800 font-sans selection:bg-[#ed792f] selection:text-white antialiased">

            {/* 1. CÂU CHUYỆN THƯƠNG HIỆU */}
            <section className="py-20 px-4 max-w-5xl mx-auto">
                <motion.div
                    initial="hidden" animate="visible" variants={fadeInUp}
                    className="space-y-6"
                >
                    <span className="text-3xs font-semibold text-[#ed792f] uppercase tracking-wider block">
                        Câu chuyện thương hiệu
                    </span>
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                        Kiến Tạo Tài Sản Số – Tối Ưu Hiệu Quả Kinh Doanh
                    </h1>

                    <div className="text-sm sm:text-base text-slate-600 space-y-5 leading-relaxed text-justify">
                        <p>
                            Hành trình khởi nghiệp của các SME và cá nhân kinh doanh tại Việt Nam chưa bao giờ là dễ dàng. Giữa làn sóng chuyển đổi số bùng nổ, nhiều doanh nghiệp lúng túng rơi vào cái bẫy mang tên "Marketing ngắn hạn": đốt quá nhiều chi phí cho quảng cáo nhưng không đọng lại giá trị cốt lõi, hay vận hành một bộ máy cồng kềnh nhưng thiếu hiệu quả thực tế.
                        </p>
                        <p>
                            Thấu hiểu sâu sắc nỗi đau đó, <span className="font-semibold text-slate-900">CMIC MEDIA</span> ra đời. Chúng tôi chọn đồng hành cùng các Startup & SME với một tư duy khác biệt: Marketing không phải là một khoản chi phí xa xỉ, mà là quá trình xây dựng Tài sản số bền vững. Chúng tôi không hứa hẹn những con số ảo hay vẽ ra những hạng mục "đủ bộ" nhưng vô thưởng vô phạt.
                        </p>
                        <p>
                            Tại CMIC MEDIA, mọi giải pháp – từ xây dựng website tối ưu, vận hành hệ sinh thái nội dung đa kênh, đến thiết kế các phễu chuyển đổi – đều được thiết kế theo triết lý Tinh gọn, Hệ thống hóa và Tập trung vào hiệu quả thực tế. Chúng tôi không chỉ làm dịch vụ, chúng tôi hòa mình làm một phần đội ngũ nội bộ của khách hàng, cùng trăn trước, cùng tối ưu và cùng tăng trưởng.
                        </p>
                        <p>
                            Không dừng lại ở một Marketing Agency, tầm nhìn của CMIC MEDIA là một hành trình dài hạn. Từ việc tối ưu hóa vận hành hiện tại, chúng tôi đang từng bước hướng tới việc phát triển nền tảng học tập SaaS và các công cụ công nghệ (Tech dev) tự động hóa trong tương lai, nhằm giải phóng nguồn lực và nâng cao năng suất cho doanh nghiệp.
                        </p>
                        <p className="font-medium text-slate-900 border-l-2 border-[#ed792f] pl-4 italic">
                            CMIC MEDIA ở đây để chứng minh rằng: Ngay cả với một ngân sách tối ưu và một đội ngũ tinh gọn, doanh nghiệp của bạn vẫn hoàn toàn có thể sở hữu một bệ phóng bài bản và vững chắc trên không gian số.
                        </p>
                    </div>
                </motion.div>
            </section>

            {/* 2. TẦM NHÌN & SỨ MỆNH (BỐ CỤC SONG SONG CÂN BẰNG) */}
            <section className="py-20 px-4 bg-white border-y border-slate-200/60">
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">

                        {/* Khối Tầm Nhìn */}
                        <motion.div
                            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                            className="space-y-4 flex flex-col justify-between"
                        >
                            <div className="space-y-3">
                                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 uppercase">Tầm Nhìn</h2>
                                <p className="text-sm text-slate-600 leading-relaxed text-justify">
                                    Trở thành đối tác marketing đáng tin cậy cho SME và Cá nhân kinh doanh tại Việt Nam, giúp họ xây dựng hệ thống tài sản số bài bản, bền vững và tạo ra kết quả kinh doanh thực tế mà không cần tốn quá nhiều chi phí vận hành.
                                </p>
                            </div>
                            <div className="w-12 h-0.5 bg-slate-200 mt-6"></div>
                        </motion.div>

                        {/* Khối Sứ Mệnh */}
                        <motion.div
                            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                            className="space-y-4 flex flex-col justify-between border-t md:border-t-0 md:border-l border-slate-200/60 pt-8 md:pt-0 md:pl-12"
                        >
                            <div className="space-y-3">
                                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 uppercase">Sứ Mệnh</h2>
                                <p className="text-sm text-slate-600 leading-relaxed text-justify">
                                    Chúng tôi tồn tại để đồng hành cùng SME và Cá nhân kinh doanh trong việc xây dựng hệ thống online marketing rõ ràng, dễ vận hành và phục vụ trực tiếp cho mục tiêu kinh doanh. Thông qua việc phát triển các tài sản số cốt lõi, chúng tôi giúp khách hàng triển khai marketing một cách bài bản, linh hoạt và tiết kiệm chi phí, đồng thời từng bước hình thành nền tảng tăng trưởng bền vững thay vì phụ thuộc vào những giải pháp ngắn hạn hoặc tốn nhiều nguồn lực nhưng không tạo ra giá trị bền vững.
                                </p>
                            </div>
                            <div className="w-12 h-0.5 bg-slate-200 mt-6"></div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* 3. GIÁ TRỊ CỐT LÕI (BỐ CỤC LƯỚI ĐỐI XỨNG TINH GỌN) */}
            <section className="py-20 px-4 max-w-5xl mx-auto">
                <div className="mb-12">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#ed792f] tracking-tight">
                        Giá trị cốt lõi
                    </h2>
                </div>

                <motion.div
                    variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-8"
                >
                    {/* Giá trị 1 */}
                    <motion.div variants={fadeInUp} className="space-y-2 border-b border-slate-200/60 pb-6">
                        <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#ed792f]"></span>
                            Hiệu quả
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-3 text-justify">
                            Chúng tôi tập trung giải quyết đúng vấn đề kinh doanh của khách hàng, không hứa hẹn quá đà và không triển khai những hạng mục chỉ để “đủ bộ” nhưng không mang lại giá trị thực.
                        </p>
                    </motion.div>

                    {/* Giá trị 2 */}
                    <motion.div variants={fadeInUp} className="space-y-2 border-b border-slate-200/60 pb-6">
                        <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#ed792f]"></span>
                            Hệ thống hoá
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-3 text-justify">
                            Mọi hoạt động marketing đều được triển khai theo các bước rõ ràng, có quy trình cụ thể và tập trung xây dựng những nền tảng online có thể sử dụng lâu dài, giúp khách hàng tiết kiệm công sức và chi phí về sau.
                        </p>
                    </motion.div>

                    {/* Giá trị 3 */}
                    <motion.div variants={fadeInUp} className="space-y-2 border-b border-slate-200/60 pb-6 sm:border-b-0 sm:pb-0">
                        <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#ed792f]"></span>
                            Đồng hành lâu dài
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-3 text-justify">
                            Chúng tôi làm việc như một phần của đội ngũ nội bộ, cùng khách hàng hiểu vấn đề, điều chỉnh chiến lược và tối ưu liên tục trong quá trình vận hành.
                        </p>
                    </motion.div>

                    {/* Giá trị 4 */}
                    <motion.div variants={fadeInUp} className="space-y-2 pb-0">
                        <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#ed792f]"></span>
                            Tinh gọn & linh hoạt
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-3 text-justify">
                            Đội ngũ được tổ chức nhỏ gọn, làm việc online và linh hoạt theo từng giai đoạn phát triển của doanh nghiệp, nhằm tối ưu chi phí, thời gian và hiệu quả cho cả hai phía.
                        </p>
                    </motion.div>
                </motion.div>
            </section>

            {/* 4. LIÊN KẾT HÀNH ĐỘNG HỢP TÁC (CTA) */}
            <section className="py-16 px-4 bg-gradient-to-br from-slate-900 to-slate-950 text-white text-center">
                <div className="max-w-3xl mx-auto space-y-6">
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                        Đồng hành cùng CMIC MEDIA để tối ưu bệ phóng doanh nghiệp số
                    </h3>
                    <div className="flex justify-center pt-2">
                        <a href="/#register" className="bg-[#ed792f] hover:bg-[#d66520] text-white font-bold text-sm px-6 py-3 rounded-xl shadow-md shadow-[#ed792f]/10 transition flex items-center gap-2 group">
                            Liên hệ hợp tác thực chiến
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </div>
            </section>

        </div>
    );
}