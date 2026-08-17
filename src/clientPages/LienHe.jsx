import React from 'react';
import { Home, Phone, Mail } from 'lucide-react';
import ContactForm from '../components/FormContact';

const ContactPage = () => {
    return (
        <div className="min-h-screen bg-white">
            <main className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 py-16">

                {/* Tiêu đề trang */}
                <h1 className="text-4xl font-bold text-gray-900 mb-10">Liên Hệ Với Chúng Tôi</h1>

                {/* Grid chính: items-stretch giúp 2 cột luôn bằng chiều cao nhau */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">

                    {/* Column 1 (Bên Trái): Map & Contact Info */}
                    <div className="flex flex-col space-y-6 h-full">

                        {/* 1. Contact Information */}
                        <div className="space-y-4 text-gray-800">
                            {/* Địa chỉ */}
                            <div className="flex items-start gap-4">
                                <Home className="w-6 h-6 mt-1 shrink-0" />
                                <div>
                                    <p className="font-semibold">252/21/18 Phạm Văn Chiêu, Khu phố 30, Phường Thông Tây Hội, TP.HCM</p>
                                </div>
                            </div>

                            {/* Hotline tư vấn */}
                            <div className="flex items-center gap-4">
                                <Phone className="w-6 h-6 shrink-0" />
                                <p>Hotline tư vấn: 034. 7577. 034</p>
                            </div>

                            {/* Email */}
                            <div className="flex items-center gap-4">
                                <Mail className="w-6 h-6 shrink-0" />
                                <p>contact@cmicagency.vn</p>
                            </div>
                        </div>

                        {/* 2. Google Map (Co giãn tự động flex-1 để lấp đầy chiều cao còn lại) */}
                        <div className="flex-1 w-full min-h-[350px] rounded-xl overflow-hidden shadow-lg border border-gray-200">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d979.6282912292106!2d106.64989492846674!3d10.848519316465875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDUwJzU0LjciTiAxMDbCsDM5JzAxLjkiRQ!5e0!3m2!1svi!2sus!4v1777905703551!5m2!1svi!2sus"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full h-full border-0"
                            ></iframe>
                        </div>

                    </div>

                    {/* Column 2 (Bên Phải): Contact Form */}
                    <div className="h-full flex flex-col justify-between">
                        <ContactForm />
                    </div>

                </div>
            </main>
        </div>
    );
};

export default ContactPage;