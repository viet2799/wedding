# 🔧 Hướng dẫn khắc phục lỗi Node.js

## ⚠️ Vấn đề

Vite 7.x yêu cầu Node.js phiên bản **20.19+** hoặc **22.12+**  
Hiện tại bạn đang dùng Node.js **20.5.1**

## ✅ Giải pháp

### Cách 1: Sử dụng NVM (Khuyên dùng)

```bash
# Cài đặt NVM nếu chưa có
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Reload shell
source ~/.zshrc

# Cài Node.js phiên bản mới nhất
nvm install 20.19.0

# Sử dụng phiên bản mới
nvm use 20.19.0

# Kiểm tra phiên bản
node --version

# Chạy lại project
npm run dev
```

### Cách 2: Cài đặt trực tiếp từ nodejs.org

1. Truy cập https://nodejs.org/
2. Tải Node.js LTS (phiên bản 20.19+)
3. Cài đặt và khởi động lại terminal
4. Chạy lại: `npm run dev`

### Cách 3: Downgrade Vite (Không khuyến khích)

Nếu không thể nâng cấp Node.js, bạn có thể downgrade Vite:

```bash
npm install vite@5.4.11 @vitejs/plugin-react@4.3.4 --save-dev
npm run dev
```

## 🚀 Sau khi nâng cấp

```bash
cd /Users/vietphenikaax/Documents/code/wedding
npm install
npm run dev
```

Website sẽ chạy tại: http://localhost:5173

## 💡 Tips

- Sử dụng NVM giúp quản lý nhiều phiên bản Node.js dễ dàng
- File `.nvmrc` đã được tạo để tự động chọn phiên bản Node.js phù hợp
