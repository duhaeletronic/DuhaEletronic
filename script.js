function order(layanan){
  const nomor = "628XXXXXXXXXX"; // ganti nomor WA
  const pesan = `Halo DuhaElektronik, saya ingin order layanan ${layanan}`;
  const url = `https://wa.me/${nomor}?text=${encodeURIComponent(pesan)}`;
  window.open(url, "_blank");
}
