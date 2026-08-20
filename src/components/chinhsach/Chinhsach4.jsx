import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Copy, Check, CreditCard, Banknote, CalendarCheck } from "lucide-react";
import qrImage from "/qr.png";

export default function PaymentMethodsPage() {
  const [copied, setCopied] = useState(false);
  const accountNumber = "101886741536";

  const handleCopy = () => {
    navigator.clipboard.writeText(accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 py-12 md:py-16 px-6 md:px-12 font-sans">
      <div className="max-w-6xl mx-auto space-y-12">
        
        <header className="space-y-3">
          <h1 className="text-2xl sm:text-4xl font-bold leading-tight text-[#ed792f]">
            PHƯƠNG THỨC THANH TOÁN
          </h1>
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-4xl">
            Khách hàng có thể lựa chọn các phương thức thanh toán sau khi sử dụng dịch vụ tại CMIC MEDIA:
          </p>
        </header>

        <main className="space-y-8">
          
          {/* PHƯƠNG THỨC 1 */}
          <div className="space-y-4">
            <h2 className="text-base sm:text-lg font-semibold text-slate-900 flex items-center gap-2">
              <CreditCard className="text-[#ed792f]" size={20} />
              <span>Phương thức 1: Chuyển khoản ngân hàng (Khuyên dùng)</span>
            </h2>

            {/* Box chứa thông tin STK và mã QR */}
            <div className="p-6 sm:p-8 rounded-2xl border-2 border-slate-800 bg-slate-800 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
              <div className="space-y-4 w-full">
                <div className="flex items-center justify-between border-b border-slate-700/80 pb-3">
                  <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                    Thông tin chuyển khoản
                  </span>
                  <span className="text-xs bg-[#ed792f] px-2.5 py-1 rounded text-white font-bold">
                    Vietinbank
                  </span>
                </div>

                <div className="space-y-2">
                  <p className="text-base sm:text-lg font-bold text-white uppercase">
                    HỘ KINH DOANH CMIC MEDIA SERVICE
                  </p>
                  
                  <div className="flex items-center gap-3">
                    <span className="text-2xl sm:text-3xl font-mono font-bold text-orange-400 tracking-wider">
                      {accountNumber}
                    </span>
                    <button
                      type="button"
                      onClick={handleCopy}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-xs transition-colors cursor-pointer text-white"
                    >
                      {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                      <span>{copied ? "Đã sao chép" : "Sao chép"}</span>
                    </button>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 font-normal">
                    Vietinbank CN THU THIEM-PGD VINHOMES TAN CANG
                  </p>
                </div>
              </div>

              {/* Khối hiển thị ảnh QR */}
              <div className="flex-shrink-0 flex flex-col items-center gap-2 p-3.5 rounded-xl bg-white text-slate-900 shadow-md">
                <img
                  src={qrImage}
                  alt="Mã QR thanh toán VietinBank"
                  className="w-32 h-32 sm:w-36 sm:h-36 object-contain rounded-md"
                />
                <span className="text-[11px] text-slate-500 font-medium tracking-tight">
                  Quét mã QR để chuyển khoản
                </span>
              </div>
            </div>

            <div className="p-4 rounded-xl border border-orange-200 bg-orange-50/50 text-sm text-slate-700">
              <strong>Nội dung chuyển khoản:</strong> [Mã hợp đồng] hoặc [Tên khách hàng - Tên dịch vụ]
            </div>
          </div>

          {/* PHƯƠNG THỨC 2 */}
          <div className="space-y-2">
            <h2 className="text-base sm:text-lg font-semibold text-slate-900 flex items-center gap-2">
              <Banknote className="text-[#ed792f]" size={20} />
              <span>Phương thức 2: Thanh toán tiền mặt trực tiếp</span>
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed font-normal pl-7">
              Thanh toán tại văn phòng làm việc của CMIC MEDIA theo địa chỉ đăng ký kinh doanh khi ký kết hợp đồng hoặc nghiệm thu từng giai đoạn.
            </p>
          </div>

          {/* LỘ TRÌNH THANH TOÁN */}
          <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/60 space-y-2">
            <h2 className="text-base font-semibold text-slate-900 flex items-center gap-2">
              <CalendarCheck className="text-[#ed792f]" size={20} />
              <span>Lộ trình thanh toán:</span>
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed font-normal pl-7">
              Chi tiết về tỷ lệ đặt cọc, thanh toán theo giai đoạn và quyết toán cuối cùng được quy định rõ trong từng Hợp đồng kinh tế.
            </p>
          </div>

        </main>

        <footer className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-slate-900 text-sm">Cần hỗ trợ thanh toán?</p>
            <p className="text-xs text-slate-500 font-normal">Liên hệ kế toán để xác nhận biên lai và chứng từ.</p>
          </div>
          <Link
            to="/lien-he"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#ed792f] hover:underline"
          >
            Hỗ trợ kế toán <ArrowRight size={16} />
          </Link>
        </footer>

      </div>
    </div>
  );
}