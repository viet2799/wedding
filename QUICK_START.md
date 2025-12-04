# ⚡ QUICK START - BẮT ĐẦU NHANH

## 🚨 QUAN TRỌNG NHẤT

Bạn PHẢI nâng cấp Node.js trước khi làm bất cứ điều gì!

### Kiểm tra phiên bản Node.js hiện tại:
```bash
node --version
```

**Nếu < 20.19.0** → Xem hướng dẫn trong `SETUP.md`

---

## 🎯 3 BƯỚC ĐƠN GIẢN

### Bước 1: Nâng cấp Node.js (BẮT BUỘC)

```bash
# Cách nhanh nhất: Dùng NVM
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
source ~/.zshrc
nvm install 20.19.0
nvm use 20.19.0
```

### Bước 2: Cài đặt & Chạy

```bash
# Di chuyển vào thư mục project
cd /Users/vietphenikaax/Documents/code/wedding

# Cài dependencies
npm install

# Chạy development server
npm run dev
```

### Bước 3: Mở trình duyệt

Vào: **http://localhost:5173**

---

## 🎨 TÙY CHỈNH CƠ BẢN (5 PHÚT)

### 1. Thay tên cặp đôi
📁 `src/components/Hero.jsx` - Dòng 95
```javascript
Việt & Hương  →  TÊN CỦA BẠN
```

### 2. Thay ngày cưới
📁 `src/components/Hero.jsx` - Dòng 16
```javascript
new Date('2025-12-31T14:00:00')
         ↓
new Date('2026-06-15T14:00:00')  // Ngày của bạn
```

### 3. Thay ảnh
📁 `src/components/Gallery.jsx` - Dòng 15
```javascript
const photos = [
  { url: 'URL_ẢNH_1', title: 'Tiêu đề' },
  { url: 'URL_ẢNH_2', title: 'Tiêu đề' },
  // ...
];
```

---

## 📚 TÀI LIỆU CHI TIẾT

| File | Mục đích |
|------|----------|
| `PROJECT_SUMMARY.md` | Tổng quan toàn bộ project |
| `README.md` | Hướng dẫn đầy đủ |
| `SETUP.md` | Fix lỗi Node.js |
| `CONTENT_GUIDE.md` | Hướng dẫn thêm nội dung |
| `DEPLOYMENT.md` | Hướng dẫn deploy |
| `CHECKLIST.md` | Checklist hoàn chỉnh |
| `TODO.md` | Tính năng tương lai |

---

## 🎯 ROADMAP

### ✅ Bây giờ (Setup)
1. Nâng cấp Node.js
2. Chạy project
3. Xem demo

### 📝 Tiếp theo (Customization)
1. Đọc `CONTENT_GUIDE.md`
2. Thay tên + ngày
3. Upload ảnh
4. Test trên mobile

### 🚀 Sau đó (Deploy)
1. Đọc `DEPLOYMENT.md`
2. Build project
3. Deploy lên Vercel
4. Share với mọi người!

---

## 💡 TIPS

- **Lưu thường xuyên**: Ctrl/Cmd + S
- **Test trên mobile**: Dùng Chrome DevTools
- **Backup code**: Push lên GitHub
- **Hỏi nếu cần**: Đọc docs trước!

---

## 🆘 GẶP VẤN ĐỀ?

### Lỗi "Node.js version"
→ Đọc `SETUP.md`

### Lỗi "npm install"
```bash
rm -rf node_modules package-lock.json
npm install
```

### Lỗi "Cannot find module"
```bash
npm install
```

### Ảnh không hiển thị
- Check URL ảnh
- Dùng ảnh trong `public/images/`
- Upload lên Imgur

---

## 📞 CẦN TRỢ GIÚP?

1. Đọc file .md liên quan
2. Google lỗi cụ thể
3. Check Stack Overflow
4. Hỏi trong group React

---

## ⚡ COMMANDS HAY DÙNG

```bash
# Chạy dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Kiểm tra lỗi
npm run lint
```

---

**LET'S BUILD YOUR DREAM WEDDING WEBSITE! 💒**

Bắt đầu ngay: `npm install && npm run dev`
