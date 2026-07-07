import React, { useState, useMemo, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Search } from 'lucide-react';
import { NavLink, useNavigate } from "react-router-dom";

// ─── DANH SÁCH GRUOP DỊCH VỤ (PHẦN MENU TRÊN) ───
const serviceGroups = [
    {
        title: "Website - Landing Page",
        path: "/dich-vu/website-landing-page/tron-goi",
        items: [
            { label: "Trọn gói thiết kế & xây dựng", path: "/dich-vu/website-landing-page/tron-goi" },
            { label: "Xây dựng Website - Landing Page", path: "/dich-vu/website-landing-page/xay-dung" },
            { label: "Thiết kế giao diện Website - Landing Page", path: "/dich-vu/website-landing-page/thiet-ke-giao-dien" },
            { label: "Chăm sóc website toàn diện", path: "/dich-vu/website-landing-page/cham-soc" },
        ],
    },
    {
        title: "Chăm sóc kênh social",
        path: "/dich-vu/cham-soc-kenh-social/tron-goi",
        items: [
            { label: "Trọn gói kênh social", path: "/dich-vu/cham-soc-kenh-social/tron-goi" },
            { label: "Chăm sóc Fanpage", path: "/dich-vu/cham-soc-kenh-social/fanpage" },
            { label: "Chăm sóc Instagram", path: "/dich-vu/cham-soc-kenh-social/instagram" },
            { label: "Chăm sóc YouTube", path: "/dich-vu/cham-soc-kenh-social/youtube" },
            { label: "Chăm sóc TikTok", path: "/dich-vu/cham-soc-kenh-social/tiktok" },
            { label: "Chăm sóc LinkedIn", path: "/dich-vu/cham-soc-kenh-social/linkedin" },
            { label: "Email Marketing", path: "/dich-vu/cham-soc-kenh-social/email-marketing" },
        ],
    },
    { title: "Hệ thống AI Agent (n8n)", path: "/dich-vu/he-thong-ai-agent", items: [] },
    { title: "Trọn gói Marketing", path: "/dich-vu/tron-goi-marketing", items: [] },
];

// --- Component hiển thị Menu các nhóm Dịch vụ ---
function DichVuMenu() {
    return (
        <div className="mb-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {serviceGroups.map((g) => (
                    <div key={g.title} className="bg-white border border-gray-200 rounded-xl p-5 shadow-xs hover:shadow-md transition">
                        <NavLink to={g.path} className="text-base font-bold text-[#ed792f] inline-block mb-3 hover:underline">
                            {g.title}
                        </NavLink>

                        {g.items && g.items.length > 0 ? (
                            <ul className="space-y-2">
                                {g.items.map((it) => (
                                    <li key={it.path}>
                                        <NavLink to={it.path} className="text-xs font-medium text-gray-600 hover:text-[#ed792f] transition-colors">
                                            • {it.label}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-xs text-gray-400 italic">Chi tiết sắp cập nhật.</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

// ─── DANH SÁCH BÀI VIẾT DỊCH VỤ CỐ ĐỊNH ───
const HARDCODED_POSTS = [
    {
        id: 1,
        title: "Dịch vụ SETUP PHÒNG HÁT LIVESTREAM",
        description: "Dịch vụ setup phòng hát livestream chuyên nghiệp, tối ưu không gian và âm thanh cho trải nghiệm hát livestream đỉnh cao.",
        image: "/dichvu1.png",
        url: "/dich-vu/set-up-phong-livestream"
    },
    {
        id: 2,
        title: "Dịch vụ PHẦN MỀM AUTO TONE CHUYÊN NGHIỆP",
        description: "Nâng tầm giọng hát của bạn với Cubase & AutoTune. Dịch vụ tận tâm, hỗ trợ mọi lúc mọi nơi.",
        image: "/dichvu3.jpg",
        url: "/dich-vu/phan-mem-auto-tone"
    }
];

// --- Component Thẻ Bài viết Dịch vụ ---
const NewsCard = ({ news }) => (
    <NavLink to={news.url} className="block h-full">
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 h-full flex flex-col cursor-pointer group">
            <div className="w-full h-40 bg-gray-100 overflow-hidden relative">
                <img src={news.image} alt={news.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
            </div>
            <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-sm font-bold text-gray-800 line-clamp-2 group-hover:text-orange-600 transition mb-2">
                    {news.title}
                </h3>
                <p className="text-xs text-gray-500 line-clamp-3 flex-grow leading-relaxed">
                    {news.description}
                </p>
            </div>
        </div>
    </NavLink>
);

// --- Component Phân trang ---
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const maxPagesToShow = 5;
    let startPage, endPage;

    if (totalPages <= maxPagesToShow) {
        startPage = 1;
        endPage = totalPages;
    } else {
        if (currentPage <= 3) {
            startPage = 1;
            endPage = maxPagesToShow;
        } else if (currentPage + 1 >= totalPages) {
            startPage = totalPages - maxPagesToShow + 1;
            endPage = totalPages;
        } else {
            startPage = currentPage - 2;
            endPage = currentPage + 2;
        }
    }

    const pages = Array.from({ length: (endPage - startPage) + 1 }, (_, i) => startPage + i);

    return (
        <div className="flex flex-col gap-6 mt-10">
            <div className="flex items-center justify-center gap-2 flex-wrap">
                <button
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="p-2 border border-gray-300 rounded-lg hover:bg-orange-50 hover:border-orange-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                    title="Trang trước"
                >
                    <ChevronLeft className="w-5 h-5 text-gray-700" />
                </button>

                {startPage > 1 && <span className="px-2 text-gray-400">...</span>}

                {pages.map((page) => (
                    <button
                        key={page}
                        onClick={() => onPageChange(page)}
                        className={`min-w-10 h-10 border rounded-lg transition-all duration-200 text-sm font-medium
                            ${currentPage === page
                                ? 'bg-orange-600 text-white border-orange-600 shadow-md'
                                : 'border-gray-300 text-gray-700 hover:bg-orange-50 hover:border-orange-400'
                            }
                        `}
                    >
                        {page}
                    </button>
                ))}

                {endPage < totalPages && <span className="px-2 text-gray-400">...</span>}

                <button
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="p-2 border border-gray-300 rounded-lg hover:bg-orange-50 hover:border-orange-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                    title="Trang tiếp theo"
                >
                    <ChevronRight className="w-5 h-5 text-gray-700" />
                </button>
            </div>
        </div>
    );
};

// --- Component Thanh tìm kiếm ---
const SearchBar = ({ search, setSearch, className = '' }) => (
    <div className={`bg-white p-4 rounded-xl border border-gray-200 shadow-xs ${className}`}>
        <h2 className="text-sm font-bold mb-3 text-gray-800">Tìm kiếm dịch vụ</h2>
        <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
                type="text"
                placeholder="Tìm kiếm tiêu đề..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-xs focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
            />
        </div>
    </div>
);

// ─── COMPONENT CHÍNH EXPORT DEFAULT ───
export default function DichVu() {
    const navigate = useNavigate();
    const [search, setSearch] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    const limit = 20;

    const filteredNews = useMemo(() => {
        if (!search) return HARDCODED_POSTS;
        const lower = search.toLowerCase();
        return HARDCODED_POSTS.filter(news =>
            news.title?.toLowerCase().includes(lower)
        );
    }, [search]);

    const totalPages = Math.ceil(filteredNews.length / limit) || 1;

    useEffect(() => {
        setCurrentPage(1);
    }, [search]);

    // Tự động điều hướng nếu kết quả tìm kiếm lọc ra chỉ duy nhất có 1 dịch vụ
    useEffect(() => {
        if (filteredNews.length === 1 && currentPage === 1 && search !== '') {
            navigate(filteredNews[0].url, { replace: true });
        }
    }, [filteredNews, currentPage, navigate, search]);

    return (
        <div className="min-h-screen bg-gray-50">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                {/* Tiêu đề chính */}
                <h1 className="text-3xl md:text-4xl font-black mb-8 bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                    Danh Mục Dịch Vụ
                </h1>

                {/* Phần 1: Khối nhóm danh mục dịch vụ menu */}
                <DichVuMenu />

                <h2 className="text-xl font-bold text-gray-800 mb-6">Bài viết dịch vụ nổi bật</h2>

                {/* Phần 2: Layout nội dung chính kèm Sidebar */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Danh sách các thẻ dịch vụ */}
                    <div className="lg:col-span-3">
                        {filteredNews.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {filteredNews.map((news) => (
                                    <NewsCard key={news.id} news={news} />
                                ))}
                            </div>
                        ) : (
                            <div className="py-12 text-center text-sm text-gray-400 italic bg-white rounded-xl border">
                                Không tìm thấy dịch vụ nào phù hợp với từ khóa.
                            </div>
                        )}

                        {totalPages > 1 && (
                            <Pagination
                                currentPage={currentPage}
                                totalPages={totalPages}
                                onPageChange={setCurrentPage}
                            />
                        )}
                    </div>

                    {/* Sidebar tìm kiếm & Banner */}
                    <div className="lg:col-span-1 space-y-6">
                        <SearchBar search={search} setSearch={setSearch} />

                        {/* Banner Dọc */}
                        <div className="w-full aspect-[3/4] rounded-2xl shadow-md relative overflow-hidden group cursor-pointer">
                            <img
                                src="/BannerBộLivestream.png"
                                alt="Combo livestream"
                                className="absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:scale-105"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all"></div>
                            <div className="absolute inset-0 flex items-center justify-center text-center text-white p-6 z-10">
                                <div>
                                    <div className="text-xl font-black mb-2 leading-tight">
                                        Combo Livestream Chất Lượng Cao
                                    </div>
                                    <div className="text-xs opacity-90 mb-4">
                                        Khuyến mãi đặc biệt dành riêng hôm nay
                                    </div>
                                    <button 
                                        type="button"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            navigate('/combo-livestream-thu-am/1/all');
                                        }}
                                        className="inline-flex items-center gap-2 text-xs font-bold bg-white text-gray-900 px-4 py-2 rounded-full hover:bg-orange-500 hover:text-white transition-all shadow-sm"
                                    >
                                        Xem ngay →
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}