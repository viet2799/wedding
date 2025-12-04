# 💒 Wedding Website - Việt & Hương

Website đám cưới tuyệt đẹp được xây dựng với React, Tailwind CSS và các thư viện hiện đại.

> 📑 **MỚI BẮT ĐẦU?** Đọc [INDEX.md](INDEX.md) để biết nên đọc file nào trước!  
> ⚡ **MUỐN BẮT ĐẦU NHANH?** Xem [QUICK_START.md](QUICK_START.md)

## ✨ Tính năng

- 💝 **Hero Section** - Trang chủ với countdown timer đếm ngược đến ngày cưới
- 💑 **Love Story Timeline** - Kể câu chuyện tình yêu qua các mốc thời gian
- 📸 **Photo Gallery** - Bộ sưu tập ảnh với lightbox xem ảnh full size
- ✉️ **RSVP Form** - Form xác nhận tham dự với validation
- 📍 **Location Info** - Thông tin địa điểm và bản đồ Google Maps
- 🎨 **Beautiful Animations** - Hiệu ứng mượt mà với Framer Motion
- 📱 **Fully Responsive** - Tối ưu cho mọi thiết bị

## 🛠️ Công nghệ sử dụng

- **React** - Framework UI
- **Vite** - Build tool nhanh
- **Tailwind CSS** - Styling framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **AOS** - Animate On Scroll
- **React CountUp** - Animated counter
- **React Intersection Observer** - Scroll detection

## 🚀 Hướng dẫn chạy

### Cài đặt dependencies

```bash
npm install
```

### Chạy development server

```bash
npm run dev
```

Website sẽ chạy tại `http://localhost:5173`

### Build cho production

```bash
npm run build
```

## 📝 Tùy chỉnh

### Thay đổi thông tin cặp đôi

Mở file `src/components/Hero.jsx` và thay đổi:
- Tên cặp đôi
- Ngày cưới (dòng 16)

### Thay đổi câu chuyện tình yêu

Mở file `src/components/Story.jsx` và cập nhật mảng `timeline` với câu chuyện của bạn.

### Thêm ảnh của bạn

Mở file `src/components/Gallery.jsx` và thay thế các URL ảnh trong mảng `photos`.

### Cập nhật địa điểm

Mở file `src/components/Location.jsx` và cập nhật thông tin trong mảng `events`.

## 🎨 Màu sắc chủ đạo

Chỉnh sửa trong `tailwind.config.js`:
- **Primary**: Hồng (#ec4899) - Tình yêu
- **Gold**: Vàng (#f59e0b) - Sang trọng

## 📦 Cấu trúc

```
src/
├── components/
│   ├── Hero.jsx      # Hero với countdown
│   ├── Story.jsx     # Timeline tình yêu
│   ├── Gallery.jsx   # Gallery ảnh
│   ├── RSVP.jsx      # Form xác nhận
│   ├── Location.jsx  # Địa điểm
│   └── Footer.jsx    # Footer
├── App.jsx
└── index.css
```

---

**Made with ❤️ for your special day**


The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
