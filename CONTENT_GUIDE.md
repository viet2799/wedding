# 📸 Hướng dẫn thêm ảnh và nội dung

## 🖼️ Cách thêm ảnh của bạn

### Option 1: Sử dụng Unsplash (Hiện tại - Ảnh mẫu)

Website đang dùng ảnh từ Unsplash (miễn phí). Để thay bằng ảnh của bạn:

### Option 2: Upload lên Image Hosting (Khuyên dùng)

#### Imgur (Miễn phí, dễ dùng)
1. Truy cập https://imgur.com
2. Tạo tài khoản (hoặc không cần)
3. Upload ảnh
4. Click chuột phải → "Copy image address"
5. Paste URL vào code

#### Cloudinary (Pro, có free tier)
1. Đăng ký tại https://cloudinary.com
2. Upload ảnh vào Media Library
3. Click ảnh → Copy URL
4. Paste vào code

#### Google Drive (Free)
1. Upload ảnh lên Google Drive
2. Right click → Get link → Anyone with link
3. Sửa URL format:
```
https://drive.google.com/file/d/FILE_ID/view
→
https://drive.google.com/uc?export=view&id=FILE_ID
```

### Option 3: Đặt trong Public Folder (Tốt nhất cho production)

1. Đặt ảnh vào folder `public/images/`
```
public/
  images/
    hero-bg.jpg
    story-1.jpg
    story-2.jpg
    gallery-1.jpg
    ...
```

2. Sử dụng trong code:
```javascript
const photos = [
  { url: '/images/gallery-1.jpg', title: 'Ảnh 1' },
  { url: '/images/gallery-2.jpg', title: 'Ảnh 2' }
];
```

---

## 📝 Thay đổi nội dung

### 1. Hero Section - Trang chủ

📁 **File**: `src/components/Hero.jsx`

```javascript
// Thay tên cặp đôi (dòng ~95)
<h1 className="font-script text-6xl...">
  Minh & Hương  {/* ← Thay tên ở đây */}
</h1>

// Thay ngày cưới (dòng ~16)
const weddingDate = new Date('2025-12-31T14:00:00');
//                             ↑ YYYY-MM-DDTHH:mm:ss

// Ví dụ: 15/06/2026 lúc 14:00
const weddingDate = new Date('2026-06-15T14:00:00');
```

---

### 2. Love Story Timeline

📁 **File**: `src/components/Story.jsx`

```javascript
// Tìm mảng timeline (dòng ~10)
const timeline = [
  {
    icon: FaHeart,
    title: 'Lần Đầu Gặp Gỡ',        // ← Tiêu đề
    date: 'Mùa Xuân 2020',           // ← Ngày tháng
    description: 'Chúng tôi gặp...', // ← Câu chuyện
    image: 'URL_ẢNH_CỦA_BẠN',        // ← Link ảnh
    color: 'from-primary-400 to-primary-600'
  },
  // Thêm nhiều mốc khác...
];
```

**Thêm mốc mới:**
```javascript
{
  icon: FaStar,  // Chọn icon từ react-icons
  title: 'Ngày Kỷ Niệm',
  date: 'Mùa Thu 2023',
  description: 'Mô tả sự kiện...',
  image: '/images/your-photo.jpg',
  color: 'from-pink-400 to-purple-600'
}
```

---

### 3. Photo Gallery

📁 **File**: `src/components/Gallery.jsx`

```javascript
// Tìm mảng photos (dòng ~15)
const photos = [
  {
    url: '/images/wedding-1.jpg',  // ← Link ảnh
    title: 'Ảnh cưới lãng mạn'    // ← Tiêu đề
  },
  {
    url: '/images/wedding-2.jpg',
    title: 'Khoảnh khắc hạnh phúc'
  },
  // Thêm nhiều ảnh...
];
```

**Tips:**
- Dùng 6-12 ảnh là đẹp
- Kích thước khuyên dùng: 800x600px hoặc 1200x900px
- Format: JPG (đã compress)

---

### 4. RSVP Form

📁 **File**: `src/components/RSVP.jsx`

Form này đã sẵn sàng! Nhưng hiện tại chỉ log ra console.

**Để lưu RSVP responses, bạn cần:**

#### Option 1: Formspree (Dễ nhất)
```javascript
<form 
  action="https://formspree.io/f/YOUR_FORM_ID" 
  method="POST"
>
```

#### Option 2: Google Sheets
Dùng Google Apps Script hoặc service như SheetDB

#### Option 3: Backend API
Tạo API với Node.js/Express hoặc Firebase

---

### 5. Location & Events

📁 **File**: `src/components/Location.jsx`

```javascript
// Tìm mảng events (dòng ~11)
const events = [
  {
    icon: FaChurch,
    title: 'Lễ Thành Hôn',
    time: '14:00',                        // ← Giờ
    date: '31/12/2025',                   // ← Ngày
    location: 'Nhà Thờ Lớn Hà Nội',      // ← Tên địa điểm
    address: '40 Nhà Chung, Hoàn Kiếm',  // ← Địa chỉ
    mapUrl: 'GOOGLE_MAPS_EMBED_URL'       // ← Link maps
  },
  // Sự kiện thứ 2...
];
```

**Lấy Google Maps Embed URL:**
1. Vào Google Maps
2. Tìm địa điểm
3. Click "Share" → "Embed a map"
4. Copy iframe src URL

---

### 6. Footer & Social Links

📁 **File**: `src/components/Footer.jsx`

```javascript
// Tìm phần social links (dòng ~45)
const socials = [
  { 
    icon: FaFacebook, 
    href: 'https://facebook.com/yourpage',  // ← Link FB
    label: 'Facebook' 
  },
  { 
    icon: FaInstagram, 
    href: 'https://instagram.com/yourhandle', // ← Link IG
    label: 'Instagram' 
  },
  { 
    icon: FaEnvelope, 
    href: 'mailto:your@email.com',  // ← Email
    label: 'Email' 
  }
];
```

---

## 🎨 Thay đổi màu sắc

📁 **File**: `tailwind.config.js`

```javascript
colors: {
  primary: {
    // Thay các màu này
    500: '#ec4899',  // Màu chính
    600: '#db2777',
    // ...
  },
  gold: {
    500: '#f59e0b',  // Màu phụ
    600: '#d97706',
    // ...
  }
}
```

**Công cụ chọn màu:**
- https://coolors.co - Palette generator
- https://tailwindcolor.com - Tailwind color picker

---

## 📦 Optimize ảnh trước khi upload

### Online Tools (Free)
- **TinyPNG**: https://tinypng.com
- **Squoosh**: https://squoosh.app
- **Compressor.io**: https://compressor.io

### Recommended Settings
- Format: JPG cho ảnh, PNG cho logo
- Quality: 75-85%
- Max width: 1920px (fullscreen), 800px (gallery)

---

## ✅ Checklist cập nhật nội dung

- [ ] Thay tên cặp đôi trong Hero
- [ ] Cập nhật ngày cưới + countdown
- [ ] Viết lại câu chuyện tình yêu (3-5 mốc)
- [ ] Thêm 6-12 ảnh vào Gallery
- [ ] Cập nhật địa điểm 2 sự kiện
- [ ] Thêm Google Maps embed
- [ ] Cập nhật social media links
- [ ] Thay email contact
- [ ] Test RSVP form
- [ ] Kiểm tra tất cả links
- [ ] Optimize tất cả ảnh
- [ ] Test responsive trên mobile

---

## 🎯 Tips

1. **Ảnh chất lượng tốt** = Website đẹp hơn
2. **Compress ảnh** = Load nhanh hơn
3. **Backup ảnh** = An toàn hơn
4. **Test kỹ** = Tránh lỗi ngày quan trọng

---

**Chúc bạn thành công! 💖**
