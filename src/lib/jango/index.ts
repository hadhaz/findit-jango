import { FeedbackOverview, Forum, Quest } from "./types";

export async function getMenu() {
  return [
    {
      name: "Fitur",
      path: "/fitur",
    },
    {
      name: "Harga",
      path: "/harga",
    },
    {
      name: "Hubungi Kami",
      path: "/kontak",
    },
  ];
}

export async function getUserMenu() {
  return [
    {
      name: "Beranda",
      icon: "/image-assets/home.svg",
      path: "/dashboard",
    },
    {
      name: "Jango AI",
      icon: "/image-assets/jangoai.svg",
      path: "/dashboard/latihan",
    },
    {
      name: "Arena Latihan",
      icon: "/image-assets/fire.svg",
      path: "/dashboard/quest",
    },
    {
      name: "Forum",
      icon: "/image-assets/people.svg",
      path: "/dashboard/forum",
    },
    {
      name: "Profil",
      icon: "/image-assets/user.svg",
      path: "/dashboard/profil",
    },
    {
      name: "Keluar",
      icon: "/image-assets/exit.svg",
      path: "/",
    },
  ];
}

export const chartSchema = [
  {
    name: "Time",
    type: "date",
    format: "%-m/%-d/%Y",
  },
  {
    name: "Value",
    type: "number",
  },
];

export function getDataSchema() {
  const labels = ["Week 1", "Week 2", "Week 3", "Week 4"];
  return {
    labels,
    datasets: [
      {
        data: [65, 59, 80, 81],
        borderColor: "#FF9D42",
        backgroundColor: "#BF5F06",
      },
    ],
  };
}

export function getFeedbackData() {
  return [
    {
      name: "Pendalaman Materi",
      img: "/image-assets/pendalaman-materi.svg",
      score: 4.5,
    },
    {
      name: "Struktur Presentasi",
      img: "/image-assets/struktur-presentasi.svg",
      score: 6.5,
    },
    {
      name: "Kelancaran",
      img: "/image-assets/kelancaran.svg",
      score: 9.2,
    },
  ];
}

export function getArticles() {
  return [
    {
      title: "Mengatasi Kecemasan Berbicara di Depan Umum",
      timeRead: 3,
      detail: "Berbicara di depan umum bisa menjadi hal yang...",
    },
    {
      title: "Pentingnya Kontak Mata saat Berbicara",
      timeRead: 5,
      detail: "Kontak mata dapat membantu Anda terhubung...",
    },
    {
      title: "Kekuatan Bercerita dalam Berbicara",
      timeRead: 3,
      detail:
        "Bercerita adalah salah satu cara terbaik untuk menarik audiens...",
    },
  ];
}

export function getTestimony() {
  return [
    {
      name: "Jessica Bintang",
      img: "/image-assets/jessica.png",
      job: "Mahasiswa Universitas Gadjah Mada",
      testimony:
        "Fitur-fitur yang disediakan, seperti analisis suara dan feedback dari AI, memungkinkan saya untuk mendapatkan umpan balik tentang cara saya berbicara dan bagaimana saya bisa meningkatkannya.",
    },
    {
      name: "Andi Budiman",
      img: "/image-assets/andi.png",
      job: "Sales Manager at GoTo Indonesia",
      testimony:
        "Meskipun saya bekerja di bidang pemasaran dan sering harus berbicara di depan umum, saya masih merasa gugup dan terkadang kesulitan dalam mengkomunikasikan ide-ide saya dengan jelas. Namun, dengan aplikasi ini, saya merasa lebih percaya diri dan siap untuk berbicara di depan umum.",
    },
  ];
}

export function getFeedbackOverview(): FeedbackOverview[] {
  return [
    {
      name: "Rata-rata kecepatan bicara",
      value: 162,
      color: "#E0F0FF",
      unit: "WPM",
      icon: "/image-assets/pace.svg",
      suggestion: "Cobalah untuk berbicara lebih lambat",
      slug: "pace",
    },
    {
      name: "Struktur presentasi",
      value: "9/10",
      color: "#93F29D",
      unit: "/10",
      icon: "/image-assets/structure.svg",
      suggestion: null,
      slug: "structure",
    },
    {
      name: "Kelancaran",
      value: "8/10",
      color: "#93F29D",
      unit: "/10",
      icon: "/image-assets/depth.svg",
      suggestion: null,
      slug: "smoothness",
    },
  ];
}

export const level = ["Pemula", "Menengah", "Mahir", "Pakar"];

export function getQuestByLevel(level: string): Quest[] {
  switch (level) {
    case "Pemula":
      return [
        {
          questNumber: 1,
          title: "Memperkenalkan Diriku: Perjalanan 2 Menit Menuju Hidupku",
          description:
            "Tujuannya adalah untuk membantu peserta merasa nyaman berbicara di depan umum dan memperkenalkan diri mereka dengan lebih baik.",
          progress: 85,
          img: "/image-assets/quest-1.png",
          overlay: true,
        },
        {
          questNumber: 2,
          title:
            "Kenangan Yang Terakhir: Berbagi Pengalaman Hidup Anda yang Paling Berkesan",
          description:
            "Quest ini bertujuan untuk membantu peserta berlatih menyampaikan cerita dengan cara yang menarik dan penuh emosi.",
          progress: 0,
          img: "/image-assets/quest-2.png",
          overlay: true,
        },
        {
          questNumber: 3,
          title: "My Passion: Kisah Hobi Favorit Saya",
          description:
            "Quest ini bertujuan untuk membantu peserta berlatih berbicara dengan antusiasme dan membuat audiens tertarik dengan topik yang mereka sampaikan.",
          progress: 0,
          img: "/image-assets/quest-31.png",
          overlay: false,
        },
      ];
    case "Menengah":
      return [
        {
          questNumber: 1,
          title: "Menjelajahi Passion Saya: Menyajikan Topik yang Saya Suka",
          description:
            "Tujuannya adalah untuk membantu peserta berbicara dengan antusiasme tentang topik yang mereka sukai.",
          progress: 0,
          img: "/image-assets/quest-41.png",
          overlay: true,
        },
        {
          questNumber: 2,
          title: "Mengatasi Ketakutan dan Gagap Bicara",
          description:
            "Peserta akan mempelajari teknik-teknik pernapasan dan relaksasi, serta latihan-latihan bicara yang efektif untuk mengurangi ketegangan dan meningkatkan rasa percaya diri.",
          progress: 0,
          img: "/image-assets/quest-51.png",
          overlay: true,
        },
        {
          questNumber: 3,
          title:
            "Membawa Kita ke Masa Lalu: Presentasi Sebuah Kejadian Bersejarah",
          description:
            "Peserta diminta untuk memberikan presentasi tentang sebuah kejadian bersejarah dalam waktu 5-7 menit.",
          progress: 0,
          img: "/image-assets/quest-61.png",
          overlay: true,
        },
      ];
    case "Mahir":
      return [
        {
          questNumber: 1,
          title: "Membuka Pembahasan Kontroversial",
          description:
            "Tujuannya adalah untuk membantu peserta berlatih mengikuti tren terbaru di bidang bisnis dan memberikan wawasan yang bermanfaat bagi audiens.",
          progress: 0,
          img: "/image-assets/quest-41.png",
          overlay: true,
        },
        {
          questNumber: 2,
          title: "Menganalisis Kebijakan Publik",
          description:
            "Tujuannya adalah untuk membantu peserta berlatih merangkum informasi yang kompleks dan memberikan solusi atau pandangan yang bermanfaat bagi audiens.",
          progress: 0,
          img: "/image-assets/quest-41.png",
          overlay: true,
        },
        {
          questNumber: 3,
          title: "Inovasi Baru yang Kita Kerjakan",
          description:
            "Tujuannya adalah untuk membantu peserta berlatih menjelaskan proyek atau inovasi dengan jelas, termasuk manfaat dan dampaknya bagi masyarakat.",
          progress: 0,
          img: "/image-assets/quest-41.png",
          overlay: true,
        },
      ];
    case "Pakar":
      return [
        {
          questNumber: 1,
          title: "Mendalami Topik Teknis di Bidang Anda",
          description:
            "Tujuannya adalah untuk membantu peserta berlatih mengkomunikasikan topik teknis dengan jelas dan menarik bagi audiens.",
          progress: 0,
          img: "/image-assets/quest-41.png",
          overlay: true,
        },
        {
          questNumber: 2,
          title: "Mengembangkan Strategi Bisnis Inovatif",
          description:
            "Peserta diminta untuk memberikan presentasi tentang strategi bisnis inovatif dalam waktu 20-25 menit",
          progress: 0,
          img: "/image-assets/quest-41.png",
          overlay: true,
        },
        {
          questNumber: 3,
          title: "Menganalisis Kebijakan Publik di Tingkat Internasional",
          description:
            "Peserta diminta untuk memberikan presentasi tentang kebijakan publik di tingkat internasional dalam waktu 20-25 menit",
          progress: 0,
          img: "/image-assets/quest-41.png",
          overlay: true,
        },
      ];
    default:
      return [];
  }
}

export default function getForum(): Forum[] {
  return [
    {
      title: "Haruskah Public Speaking Diajarkan di Sekolah?",
      author: "nitikusmala12",
      topic: ["Public Speaking", "Pendidikan"],
      content: "",
      like: 213,
      dislike: 50,
      time: Date.now().toLocaleString(),
      img: "/image-assets/forum-1.png",
    },
    {
      title: "Menyeimbangkan Kebebasan Berbicara dan Tanggung Jawab",
      author: "jenniferlaw3",
      topic: ["Public Speaking", "Orasi"],
      content: "",
      like: 150,
      dislike: 21,
      time: Date.now().toLocaleString(),
      img: "/image-assets/forum-2.png",
    },
    {
      title:
        "Bagaimana Pemimpin Menggunakan Retorika untuk Mempengaruhi Opini Publik",
      author: "jamaludin22",
      topic: ["Politik"],
      content: "",
      like: 100,
      dislike: 10,
      time: Date.now().toLocaleString(),
      img: "/image-assets/forum-3.png",
    },
    {
      title:
        "Kekuatan Berbicara di Depan Umum dalam Industri Hiburan: Wawasan dari Para Pemimpin Industri",
      author: "ajinurzam",
      topic: ["Tips", "Public Speaking"],
      content: "",
      like: 190,
      dislike: 2,
      time: Date.now().toLocaleString(),
      img: "/image-assets/forum-4.png",
    },
  ];
}

export function getColor(topic: string) {
  switch (topic) {
    case "Public Speaking":
      return ["#FFB800", "#000"];
    case "Pendidikan":
      return ["#66075D", "#FFF"];
    case "Orasi":
      return ["#1860A1", "#FFF"];
    case "Politik":
      return ["#A30E0E", "#FFF"];
    case "Tips":
      return ["#0D7D18", "#FFF"];
    default:
      return ["#FFB800", "#000"];
  }
}
