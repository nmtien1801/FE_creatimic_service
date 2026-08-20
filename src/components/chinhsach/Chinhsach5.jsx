import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, ShieldCheck } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800 py-12 md:py-16 px-6 md:px-12 font-sans">
      <div className="max-w-6xl mx-auto space-y-12">
        
        <header className="space-y-3">
          <h1 className="text-2xl sm:text-4xl font-bold text-[#ed792f] leading-tight">
            CHÍNH SÁCH BẢO MẬT THÔNG TIN
          </h1>
        </header>

        <main className="space-y-8">
          <section className="space-y-2">
            <h2 className="text-base font-semibold text-slate-900">Mục đích thu thập:</h2>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              CMIC MEDIA thu thập thông tin khách hàng (Họ tên, Số điện thoại, Email, Tên doanh nghiệp) để phục vụ việc tư vấn, báo giá, ký kết hợp đồng, hỗ trợ kỹ thuật và chăm sóc khách hàng.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-slate-900">Phạm vi sử dụng:</h2>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              Thông tin chỉ được sử dụng nội bộ để thực hiện dịch vụ cho chính khách hàng đó. CMIC MEDIA cam kết không bán, chia sẻ hay trao đổi thông tin cá nhân của khách hàng cho bất kỳ bên thứ ba nào khi chưa được sự đồng ý.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-slate-900">Thời gian lưu trữ:</h2>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              Thông tin khách hàng và dữ liệu dự án được lưu trữ an toàn trên hệ thống nội bộ của CMIC MEDIA trong suốt quá trình hợp tác và tối thiểu 01 năm sau khi thanh lý hợp đồng phục vụ công tác bảo hành, hỗ trợ.
            </p>
          </section>

          <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/60 space-y-3">
            <div className="flex items-center gap-2 text-slate-900 font-semibold text-base">
              <Building2 className="text-[#ed792f]" size={20} />
              <span>Địa chỉ đơn vị thu thập và quản lý:</span>
            </div>
            <div className="text-sm text-slate-700 leading-relaxed space-y-1 font-normal pl-7">
              <p className="font-semibold text-slate-900 uppercase">HO KINH DOANH CMIC MEDIA SERVICES</p>
              <p>Địa chỉ: 252/21/18 Phạm Văn Chiêu, Khu phố 30, Phường Thông Tây Hội, TP.HCM</p>
              <p>Hotline: 034.7577.034</p>
            </div>
          </div>

          <div className="p-5 rounded-xl border border-emerald-200 bg-emerald-50/40 space-y-2">
            <div className="flex items-center gap-2 text-emerald-900 font-semibold text-sm">
              <ShieldCheck size={18} className="text-emerald-600" />
              <span>Cam kết bảo mật:</span>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed font-normal">
              CMIC MEDIA áp dụng các biện pháp mã hóa và bảo mật dữ liệu nghiêm ngặt để bảo vệ thông tin khách hàng khỏi việc truy cập, thay đổi hoặc phát tán trái phép.
            </p>
          </div>
        </main>

        <footer className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-slate-900 text-sm">Cần hỗ trợ về dữ liệu?</p>
            <p className="text-xs text-slate-500 font-normal">Liên hệ trực tiếp qua Hotline hoặc Email để được giải đáp.</p>
          </div>
          <Link
            to="/lien-he"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#ed792f] hover:underline"
          >
            Liên hệ hỗ trợ <ArrowRight size={16} />
          </Link>
        </footer>

      </div>
    </div>
  );
}