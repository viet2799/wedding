// Tùy chỉnh thông tin cặp đôi và sự kiện

export const weddingInfo = {
  // Thông tin cặp đôi
  couple: {
    groom: 'Minh',
    bride: 'Hương',
    groomFull: 'Nguyễn Văn Minh',
    brideFull: 'Trần Thị Hương'
  },

  // Ngày cưới
  weddingDate: '2025-12-31T14:00:00',

  // Các sự kiện
  events: [
    {
      type: 'ceremony',
      title: 'Lễ Thành Hôn',
      time: '14:00',
      date: '31/12/2025',
      location: 'Nhà Thờ Lớn Hà Nội',
      address: '40 Nhà Chung, Hoàn Kiếm, Hà Nội',
      mapUrl: 'https://www.google.com/maps/search/Nhà+Thờ+Lớn+Hà+Nội'
    },
    {
      type: 'reception',
      title: 'Tiệc Cưới',
      time: '18:00',
      date: '31/12/2025',
      location: 'Trung Tâm Tiệc Cưới Paradise',
      address: '123 Đường ABC, Quận XYZ, Hà Nội',
      mapUrl: 'https://www.google.com/maps'
    }
  ],

  // Timeline câu chuyện tình yêu
  loveStory: [
    {
      title: 'Lần Đầu Gặp Gỡ',
      date: 'Mùa Xuân 2020',
      description: 'Chúng tôi gặp nhau trong một buổi chiều nắng đẹp tại quán cà phê yêu thích. Ánh mắt đầu tiên đã khiến trái tim chúng tôi rung động.',
      image: '/B0P_5047.JPG'
    },
    {
      title: 'Kỷ Niệm Đáng Nhớ',
      date: 'Mùa Hè 2021',
      description: 'Chuyến đi biển đầu tiên cùng nhau, nơi chúng tôi trao nhau lời hứa sẽ luôn bên nhau dù bất cứ điều gì xảy ra.',
      image: '/B0P_5488.JPG'
    },
    {
      title: 'Ngày Cầu Hôn',
      date: 'Mùa Đông 2024',
      description: 'Dưới bầu trời đầy sao, anh đã quỳ gối và hỏi em câu hỏi quan trọng nhất. Em đã nói "Có" với đôi mắt đẫm nước mắt hạnh phúc.',
      image: '/B0P_6101.JPG'
    }
  ],

  // Gallery photos
  gallery: [
    {
      url: '/B0P_6101.JPG',
      title: 'Khoảnh khắc lễ đường'
    },
    {
      url: '/B0P_5889.JPG',
      title: 'Nụ cười hạnh phúc'
    },
    {
      url: '/B0P_5488.JPG',
      title: 'Cùng nhau tiến bước'
    },
    {
      url: '/B0P_5047.JPG',
      title: 'Trao yêu thương'
    },
    {
      url: '/z7290025715685_36070677006bd847b57ce1122583da13.jpg',
      title: 'Những bước chân đầu tiên'
    },
    {
      url: '/z7290029229710_eb4ef6dc67df1bbb54b59047a717291e.jpg',
      title: 'Nắm tay thật chặt'
    }
  ],

  // Social links
  social: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    email: 'wedding@example.com'
  }
};
