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
      path: "/dashboard/arena-latihan",
    },
    {
      name: "Forum",
      icon: "/image-assets/people.svg",
      path: "/dashboard/forum",
    },
    {
      name: "Keluar",
      icon: "/image-assets/exit.svg",
      path: "/",
    },
  ];
}
