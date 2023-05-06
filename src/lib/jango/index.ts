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
      path: "/dashboard",
    },
    {
      name: "Forum",
      icon: "/image-assets/people.svg",
      path: "/dashboard",
    },
    {
      name: "Profil",
      icon: "/image-assets/user.svg",
      path: "/dashboard",
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
