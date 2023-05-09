import { FeedbackOverview } from "./types";

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
      name: "Arena Latihan",
      icon: "/image-assets/fire.svg",
      path: "/dashboard/latihan",
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
