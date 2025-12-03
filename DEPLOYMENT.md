# 🚀 Hướng dẫn Deploy Wedding Website

## Deploy lên Vercel (Khuyên dùng - Miễn phí)

### Bước 1: Chuẩn bị

1. Tạo tài khoản tại [Vercel](https://vercel.com)
2. Cài Vercel CLI (tùy chọn):
```bash
npm install -g vercel
```

### Bước 2: Deploy

#### Cách 1: Deploy qua Git (Khuyên dùng)

1. Push code lên GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

2. Vào [Vercel Dashboard](https://vercel.com/dashboard)
3. Click "Add New Project"
4. Import repository từ GitHub
5. Vercel sẽ tự động detect Vite và deploy

#### Cách 2: Deploy qua CLI

```bash
# Build project
npm run build

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Cấu hình môi trường

Nếu có biến môi trường, thêm vào Vercel Dashboard:
- Settings → Environment Variables

---

## Deploy lên Netlify (Miễn phí)

### Bước 1: Build project

```bash
npm run build
```

### Bước 2: Deploy

#### Cách 1: Drag & Drop

1. Vào [Netlify Drop](https://app.netlify.com/drop)
2. Kéo thả folder `dist` vào

#### Cách 2: Netlify CLI

```bash
# Cài Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy

# Deploy to production
netlify deploy --prod
```

#### Cách 3: Connect Git

1. Push code lên GitHub
2. Vào [Netlify](https://app.netlify.com)
3. New site from Git
4. Connect repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

---

## Deploy lên GitHub Pages

### Bước 1: Cấu hình vite.config.js

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/wedding/' // Thay 'wedding' bằng tên repo của bạn
})
```

### Bước 2: Cài đặt gh-pages

```bash
npm install --save-dev gh-pages
```

### Bước 3: Thêm scripts vào package.json

```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

### Bước 4: Deploy

```bash
npm run deploy
```

### Bước 5: Cấu hình GitHub

1. Vào Settings → Pages
2. Source: gh-pages branch
3. Website sẽ có tại: `https://username.github.io/wedding/`

---

## Deploy lên Firebase Hosting

### Bước 1: Cài đặt Firebase CLI

```bash
npm install -g firebase-tools
```

### Bước 2: Login và init

```bash
firebase login
firebase init hosting
```

Chọn:
- Public directory: `dist`
- Single-page app: `Yes`
- Automatic builds: `No`

### Bước 3: Build và deploy

```bash
npm run build
firebase deploy
```

---

## Custom Domain

### Với Vercel:
1. Domains → Add domain
2. Cấu hình DNS records theo hướng dẫn

### Với Netlify:
1. Domain settings → Add custom domain
2. Cấu hình DNS

### DNS Records (Ví dụ):
```
Type  Name    Value
A     @       76.76.21.21
CNAME www     your-site.vercel.app
```

---

## 🔧 Troubleshooting

### Lỗi build
```bash
# Xóa node_modules và cài lại
rm -rf node_modules package-lock.json
npm install
npm run build
```

### 404 errors trên routes
Thêm file `_redirects` vào `public/`:
```
/*    /index.html   200
```

### Environment variables
Prefix với `VITE_`:
```
VITE_API_URL=https://api.example.com
```

Sử dụng:
```javascript
const apiUrl = import.meta.env.VITE_API_URL
```

---

## 📊 Performance Tips

1. **Optimize images**:
   - Sử dụng WebP format
   - Lazy load images
   - Compress trước khi upload

2. **Enable caching**:
   - Vercel/Netlify tự động enable

3. **Analyze bundle**:
```bash
npm run build -- --report
```

4. **CDN**:
   - Vercel/Netlify có CDN tích hợp sẵn

---

## 🎯 Checklist trước khi deploy

- [ ] Cập nhật thông tin cặp đôi
- [ ] Thay ảnh placeholder bằng ảnh thật
- [ ] Kiểm tra responsive trên mobile
- [ ] Test form RSVP
- [ ] Cập nhật địa chỉ Google Maps
- [ ] Kiểm tra links social media
- [ ] Test trên nhiều browsers
- [ ] Optimize images
- [ ] Update meta tags SEO
- [ ] Test performance với Lighthouse

---

**Chúc deploy thành công! 🎉**
