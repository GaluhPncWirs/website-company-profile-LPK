import { useEffect, useState } from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

export default function ProgramLpk() {
  return (
    <>
      <Header />
      <ProgramPage />
      <GetBenefit />
      <Footer />
    </>
  );
}

function ProgramPage() {
  const [isProgram, setIsProgram] = useState(null);
  function handleProgram(clickProgram) {
    setIsProgram(clickProgram);
  }

  useEffect(() => {
    const liAll = document.querySelectorAll(".under li");
    liAll.forEach((ele) => {
      ele.addEventListener("click", function () {
        liAll.forEach((num) =>
          num.classList.contains("before:underscore")
            ? num.classList.remove("before:underscore")
            : null
        );
        this.classList.add("before:underscore");
      });
    });
    return () => {
      liAll.forEach((cls) => cls.removeEventListener("click", () => {}));
    };
  }, []);

  return (
    <main>
      <div className="pt-32 bg-gradient-to-t from-indigo-300 to-slate-200">
        <div className="w-[95%] mx-auto">
          <div>
            <h1 className="text-center max-w-4xl mx-auto font-bold sm:text-xl lg:text-2xl max-[640px]:text-xl">
              Bangun pondasi karir yang kokoh dengan menggabungkan kekuatan
              teknis, keterampilan praktis, dan kemahiran bahasa Jepang
            </h1>
            <NavProgram handleProgram={handleProgram} />
          </div>
          <div>
            {isProgram === "tokuteiGinou" ? (
              <DescTokutei />
            ) : isProgram === "nihonggoGakko" ? (
              <DescNihinggo />
            ) : (
              <DescIntern />
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

function NavProgram({ handleProgram }) {
  return (
    <div className="mt-12 bg-slate-300 shadow-lg rounded-t-lg">
      <ul className="flex h-20 font-bold text-xl max-[640px]:text-base sm:text-lg xl:text-xl under">
        <li
          className="relative basis-1/3 text-center w-full h-full flex justify-center items-center before:underscore max-[640px]:pt-7 sm:pt-7"
          onClick={() => handleProgram("ginouJisshusei")}
        >
          <a className="hover:text-sky-500 transition ease-in-out duration-300 sm:text-lg xl:text-xl cursor-pointer">
            <span className="material-symbols-outlined absolute left-24 max-[640px]:left-0 max-[640px]:right-0 max-[640px]:top-2 sm:left-0 sm:right-0 sm:top-2">
              badge
            </span>{" "}
            Ginou Jisshusei
          </a>
        </li>
        <li
          className="relative basis-1/3 text-center w-full h-full flex justify-center items-center max-[640px]:pt-7 sm:pt-7"
          onClick={() => handleProgram("tokuteiGinou")}
        >
          <a className="hover:text-sky-500 transition ease-in-out duration-300 sm:text-lg xl:text-xl cursor-pointer">
            <span className="material-symbols-outlined absolute left-24 max-[640px]:left-0 max-[640px]:right-0 max-[640px]:top-2 sm:left-0 sm:right-0 sm:top-2">
              engineering
            </span>{" "}
            Tokutei Ginou
          </a>
        </li>
        <li
          className="relative basis-1/3 text-center w-full h-full flex justify-center items-center max-[640px]:pt-7 sm:pt-7"
          onClick={() => handleProgram("nihonggoGakko")}
        >
          <a className="hover:text-sky-500 transition ease-in-out duration-300 sm:text-lg xl:text-xl cursor-pointer">
            <span className="material-symbols-outlined absolute left-20 max-[640px]:left-0 max-[640px]:right-0 max-[640px]:top-2 sm:left-0 sm:right-0 sm:top-2">
              school
            </span>{" "}
            Nihonggo Gakko
          </a>
        </li>
      </ul>
    </div>
  );
}

function ImagesProgram() {
  const imagesProg = [
    {
      id: 50,
      img: "url('/img/magang.jpg')",
      title: "介護 業 (Keperawatan)",
    },
    {
      id: 51,
      img: "url('/img/magang.jpg')",
      title: "ビルクリーニング 業 (Pembersihan Gedung)",
    },
    {
      id: 52,
      img: "url('/img/magang.jpg')",
      title: "産業部門 (Sektor Industri)",
    },
    {
      id: 53,
      img: "url('/img/magang.jpg')",
      title: "建設業 (Konstruksi)",
    },
    {
      id: 54,
      img: "url('/img/magang.jpg')",
      title: "造船 (Pembuatan Kapal)",
    },
    {
      id: 55,
      img: "url('/img/magang.jpg')",
      title: "自動車整備業 (Perawatan Mobil)",
    },
    {
      id: 56,
      img: "url('/img/magang.jpg')",
      title: "航空業 (Penerbangan)",
    },
    {
      id: 57,
      img: "url('/img/magang.jpg')",
      title: "宿泊業 (Perhotelan)",
    },
    {
      id: 58,
      img: "url('/img/magang.jpg')",
      title: "農業 (Pertanian dan Peternakan)",
    },
    {
      id: 59,
      img: "url('/img/magang.jpg')",
      title: "漁業 (Perikanan)",
    },
    {
      id: 60,
      img: "url('/img/magang.jpg')",
      title: "食品・飲料業界 (Industri Makanan dan Minuman)",
    },
    {
      id: 61,
      img: "url('/img/magang.jpg')",
      title: "外食業 (Jasa Makanan)",
    },
  ];
  return (
    <div className="grid gap-3 max-[640px]:gap-2 max-[640px]:grid-cols-2 sm:grid-cols-3">
      {imagesProg.map((prog) => (
        <div
          style={{
            backgroundImage: prog.img,
          }}
          className="img-prog"
          key={prog.id}
        >
          <h1 className="text-mid-prog">{prog.title}</h1>
        </div>
      ))}
    </div>
  );
}

function DescIntern() {
  return (
    <>
      <div className="flex mt-10 gap-5 max-[640px]:flex-col sm:flex-col lg:flex-row">
        <div className="basis-2/5 flex flex-col items-center justify-center">
          <div className="sm:text-lg max-[640px]:text-base">
            <p>
              Magang Jepang adalah program yang dilakukan antara dua negara
              Jepang dan Indonesia. Tujuan magang adalah untuk memberi peserta
              magang kesempatan untuk belajar tentang industri Jepang dan bidang
              lain, dan menggunakan keterampilan yang mereka peroleh untuk
              mengembangkan industri mereka sendiri setelah kembali ke negara
              asal mereka.
            </p>
          </div>
        </div>
        <div className="basis-3/5">
          <ImagesProgram />
        </div>
      </div>

      <div>
        <h1 className="text-center font-semibold mt-10 max-[640px]:text-xl sm:text-2xl">
          Ada beberapa hal yang harus diperhatikan
        </h1>
        <div className="flex flex-wrap gap-10 mt-6 justify-center">
          <div className="max-w-64">
            <h3 className="mt-7 mb-3 font-semibold text-xl max-[640px]:text-lg sm:text-xl">
              Persyaratan Umum
            </h3>
            <ul className="list-inside list-decimal leading-relaxed font-light  max-[640px]:text-base sm:text-base">
              <li>Minimal lulusan SMA/SMK Sederajat</li>
              <li>Pria/Wanita</li>
              <li>Usia 18-26 tahun</li>
              <li>Dapat Ijin Dari Orang Tua Atau Wali</li>
              <li>belum pernah ke jepang dengan program apapun sebelumnya</li>
              <li>lulus seleksi fisik, mental dan disiplin di LPK</li>
              <li>mengikuti pelatihan bahasa jepang 3-6 bulan</li>
            </ul>
          </div>
          <div className="max-w-64">
            <h1 className="font-semibold text-xl mt-5 mb-3 max-[640px]:text-lg sm:text-xl">
              Jangka Waktu
            </h1>
            <h4 className="md:text-lg mb-1 max-[640px]:text-base">
              3 Sampai Dengan 5 tahun
            </h4>
            <ul className="font-light max-[640px]:text-base sm:text-base">
              <li>Technical intern training ke 1 = 1 tahun</li>
              <li>Technical intern training ke 2 = 2 tahun</li>
              <li>Technical intern training ke 3 = 3 tahun</li>
            </ul>
          </div>
          <div className="max-w-64">
            <h1 className="font-semibold text-xl mt-5 mb-3 max-[640px]:text-lg sm:text-xl">
              Biaya
            </h1>
            <ul className="font-light text-justify  max-[640px]:text-base sm:text-base">
              <li>Biaya Pendaftran : Rp 150.000</li>
              <li>
                Biaya Pelatihan tahap 1 selama kurang lebih 3 bulan dengan biaya
                Rp 3.500.000 (bisa di angsur 3 x)
              </li>
              <li>
                Biaya Asrama selama pelatihan 150.000/ bulan untuk yang menginap
              </li>
              <li>
                <h3>* OPSI MAGANG IMM</h3>
                <p>
                  Biaya pendaftran tergantung daerah daftar 400.000 ~ 500.000
                </p>
                <p>
                  Biaya pelatihan tahap II selama 3 bulan di tanggung pemerintah
                </p>
                <p>Biaya pemberangkatan di tanggung pemerintah</p>
                <p>
                  Jika gagal bisa melanjutkan pelatihan tahap II di LPK dengan
                  biaya 3.500.000 selama kurang lebih 3 bulan{" "}
                </p>
                <h3>* OPSI MAGANG LPK SWASTA REKANAN</h3>
                <p>Biaya Pendaftaran LPK rekanan 500.000 ~ 1.000.000</p>
                <p>Biaya Pelatihan tahap II pemantapan 3,500.000</p>
                <p>
                  Biaya pemberangkatan di LPK rekanan setelah di nyatakan lulus
                  interview berbeda antara 30.000.000 ~ 35.000.000 bisa di cicil
                  sampai hari keberangkatan
                </p>
              </li>
            </ul>
          </div>
          <div className="max-w-64">
            <h1 className="font-semibold text-xl mt-5 mb-3 max-[640px]:text-lg sm:text-xl">
              Keuntungan
            </h1>
            <ul className="font-light list-inside list-disc max-[640px]:text-base sm:text-base">
              <li>
                peserta yang belum dapat menyesuaikan pekerjaan di jepang akan
                mendapatkan pendampingan dari lembaga penerima ataupun pihak
                perusahaan
              </li>
              <li>tidak ada tuntunan level kemempuan bahasa jepang</li>
              <li>
                untuk magang technical intern training 3 bisa mendapatkan cuti
                setiap tahun
              </li>
              <li>asrama sudah disediakan oleh perusahaan</li>
              <li>
                dicarikan perusahaan bidang yang sama jika perusahaan tempat
                bekerja bangkrut
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

function DescTokutei() {
  return (
    <>
      <div className="flex mt-10 gap-5 max-[640px]:flex-col sm:flex-col lg:flex-row">
        <div className="basis-2/5 flex flex-col items-center justify-center">
          <h1 className="font-semibold mt-7 text-2xl mb-3">
            Apa sih tokutei ginou itu
          </h1>
          <div className="sm:text-lg max-[640px]:text-base">
            <p>
              Tokutei Ginou, juga dikenal sebagai Specified Skilled Workers
              (SSW), adalah status visa atau ijin tinggal bagi warga negara
              asing yang tinggal di Jepang. Mereka yang memiliki visa SSW dapat
              bekerja di perusahaan Jepang dengan hak dan kewajiban yang sama
              dengan pekerja Jepang.
            </p>
            <p>
              Pemerintah Jepang akhirnya memutuskan untuk memberikan jenis ijin
              tinggal terbaru ini karena beberapa alasan. Hal ini disebabkan
              oleh penurunan usia produktif populasi Jepang dan
              ketidakseimbangan antara usia produktif di tengah peningkatan
              permintaan pekerja Untuk memenuhi kebutuhan sumber daya manusia,
              pemerintah Jepang memberlakukan status ijin tinggal baru, Dengan
              kurangnya tenaga kerja di Jepang.
            </p>
          </div>
          <p className="font-extralight text-sm text-end mt-5 sm:text-sm">
            di kutip dari sumber{" "}
            <span className="font-semibold">
              Biro Imigrasi, Departemen Kehakiman
            </span>
          </p>
        </div>
        <div className="basis-3/5">
          <ImagesProgram />
        </div>
      </div>

      <div>
        <h1 className="text-center font-semibold text-2xl mt-10 max-[640px]:text-xl sm:text-2xl">
          Ada beberapa hal yang harus diperhatikan
        </h1>
        <div className="flex flex-wrap gap-10 mt-5 justify-center">
          <div className="max-w-64">
            <h1 className="font-semibold mt-5 mb-3  max-[640px]:text-lg sm:text-xl">
              Persyaratan Umum
            </h1>
            <ul className="font-light list-inside list-decimal max-[640px]:text-base sm:text-base">
              <li>alumni peserta magang (ginou jisshusei) min 3 tahun</li>
              <li>
                alumni magang yang ingin pindah bidang kerja wajib mengikuti
                ujian SSW bidang yang di pilih
              </li>
              <li>
                untuk pemula syaratnya : pendidikan min SMA/SMK sederajat,
                memiliki sertifikat bahasa jepang min N4, lulus ujian SSW sesuai
                dengan bidang kerja yang di pilih
              </li>
            </ul>
          </div>
          <div className="max-w-64">
            <h1 className="font-semibold mt-5 mb-3 sm:text-xl max-[640px]:text-lg">
              Jangka Waktu
            </h1>
            <h3 className="mb-1">5 Sampai Dengan 10 tahun</h3>
            <ul className="font-light md:text-base max-[640px]:text-base">
              <li>Tokutei ginou Ke 1 = 5 tahun</li>
              <li>Tokutei ginou Ke 2 = 5 tahun</li>
            </ul>
          </div>
          <div className="max-w-64">
            <h1 className="font-semibold mt-5 mb-3 sm:text-xl max-[640px]:text-lg">
              Biaya
            </h1>
            <div className="font-light text-justify sm:text-base max-[640px]:text-base">
              <h4 className="font-normal">Untuk pemula :</h4>
              <ul>
                <li>
                  biaya pelatihan bahasa jepang selama 3-6 bulan IDR 5.000.000
                </li>
                <li>biaya sertifikat SSW dan JLPT N4 : IDR 5.000.000</li>
                <li>biaya pemberangkatan melalui LPK : IDR 30.000.000</li>
              </ul>
              <h4 className="font-normal">Untuk alumni magang :</h4>
              <ul>
                <li>jasa mengenalkan : IDR 25.000.000</li>
              </ul>
            </div>
          </div>
          <div className="max-w-64">
            <h1 className="font-semibold text-xl mt-5 mb-3 sm:text-xl max-[640px]:text-lg">
              Keuntungan
            </h1>
            <ul className="list-inside list-disc font-light sm:text-base">
              <li>masa tinggal di jepang lebih lama</li>
              <li>mendapatkan hak cuti setiap tahun</li>
              <li>tokutei ginou 2 bisa membawa keluarga dari indonesia</li>
              <li>dapat menentukan asrama sendiri</li>
              <li>gaji yang diterima lebih besar</li>
              <li>bisa menggunakan pembuatan SIM jepang</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

function DescNihinggo() {
  return (
    <>
      <div className="flex mt-10 gap-5 max-[640px]:flex-col sm:flex-col lg:flex-row">
        <div className="basis-1/2 flex flex-col items-center justify-center">
          <div className="sm:text-lg max-[640px]:text-base">
            <p>
              Lembaga kami telah bekerja sama dengan beberapa Universitas di
              Jepang. Universitas ini juga mempunyai beberapa kejuruan,
              diantaranya Ilmu Sosial, Kesehatan dan Kesejahteraan Medis,
              Psikologi, Animasi, Pertanian, dan Bahasa Asing.
            </p>
          </div>
        </div>
        <div className="basis-1/2">
          <div className="flex flex-col justify-center items-center">
            <img
              src="/img/pelajar.jpg"
              alt=""
              className="bg-center bg-cover rounded-xl w-4/5 block"
            />
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-center font-semibold text-2xl mt-10 max-[640px]:text-xl sm:text-2xl">
          Ada beberapa hal yang harus diperhatikan
        </h1>
        <div className="flex flex-wrap gap-10 mt-5 justify-center">
          <div className="max-w-64">
            <h1 className="font-semibold text-xl mt-5 mb-3 max-[640px]:text-lg sm:text-xl">
              Persyaratan Umum
            </h1>
            <ul className="font-light list-inside list-decimal max-[640px]:text-base sm:text-base">
              <li>pendidikan min SMA/SMK sederajat</li>
              <li>
                memiliki penjamin dari orangtua atau keluarga terkait kemampuan
                membayar biaya pendidikan selama di jepang
              </li>
              <li>
                jika siswa adalah alumni magang wajib berada di indonesia min 1
                tahun terlebih dahulu
              </li>
            </ul>
          </div>
          <div className="max-w-64">
            <h1 className="font-semibold text-xl mt-5 mb-3 max-[640px]:text-lg sm:text-xl">
              Jangka Waktu
            </h1>
            <ul className="font-light list-inside list-disc max-[640px]:text-base sm:text-base">
              <li>masa pendidikan bahasa jepang 2 tahun</li>
              <li>
                selama siswa dapat memenuhi kewajiban biaya pendidikan di
                sekolah bahasa jepang{" "}
              </li>
              <li>
                setelah selesai pendidikan disekolah bahasa jepang dapat merubah
                visa menjadi visa tenaga profesional dan bekerja di perusahaan
                jepang
              </li>
            </ul>
          </div>
          <div className="max-w-64">
            <h1 className="font-semibold text-xl mt-5 mb-3 max-[640px]:text-lg sm:text-xl">
              Biaya
            </h1>
            <div className="text-justify max-[640px]:text-base sm:text-base">
              <h4>biaya 575.000 YEN ++ (60 Juta ++) rincian : </h4>
              <ul className="font-light">
                <li>
                  biaya pendaftaran dan dokumen : 50.000 YEN (5.200.000 Rp)
                </li>
                <li>
                  biaya pendidikan 2 semester : 525.000 YEN (54.880.000 Rp)
                </li>
                <li>biaya asrama 6 bulan : 205.000 YEN (21.400.000 Rp)</li>
              </ul>
            </div>
          </div>
          <div className="max-w-64">
            <h1 className="font-semibold text-xl mt-5 mb-3 max-[640px]:text-lg sm:text-xl">
              Keuntungan
            </h1>
            <ul className="font-light list-inside list-disc max-[640px]:text-base sm:text-base">
              <li>tidak ada seleksi proses masuk ke sekolah bahasa jepang</li>
              <li>
                kuota tidak terbatas dan masa penerimaan siswa setiap bulan
                april dan oktober
              </li>
              <li>
                dibolehkan part time sebanyak 28 jam / minggu untuk selesai
                sekolah bahasa jepang
              </li>
              <li>
                status visa telah mendapat pekerjaan di jepang adalah visa kerja
                yang levelnya sama dengan orang jepang
              </li>
              <li>bisa melanjutkan pendidikan ke universitas di jepang</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

function GetBenefit() {
  return (
    <div className="bg-gradient-to-t from-[#549DBB] to-indigo-300">
      <div className="w-[95%] mx-auto pt-20">
        <AlurPelatihanImg />
        <FasilitasLpk />
      </div>
    </div>
  );
}

function AlurPelatihanImg() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-center font-bold pb-10 max-[640px]:text-xl sm:text-2xl lg:text-3xl">
        Alur pelatihan dan pendidikan LPK OHAYO NIPPON
      </h1>
      <img
        src="/img/alur_magang_lpk.png"
        alt="alur pelatihan lpk"
        className="w-4/5 bg-cover bg-center brightness-105 contrast-125 block"
      />
    </div>
  );
}

function FasilitasLpk() {
  return (
    <div className="mt-12">
      <h1 className="text-center font-bold max-[640px]:text-2xl sm:text-2xl lg:text-3xl mb-16">
        Fasilitas Selama Pelatihan
      </h1>
      <div className="flex flex-wrap justify-center gap-7">
        <div className="max-w-sm">
          <img
            width="60"
            height="60"
            src="https://img.icons8.com/ios/100/kids-bedroom.png"
            alt="kids-bedroom"
            className="block relative left-40 bottom-1"
          />
          <h2 className="text-center font-medium text-lg mb-4">Asrama</h2>
          <p className="text-justify">
            Asrama kami berada di 1 lokasi dengan asrama bertingkat 2, untuk
            asrama putra di bawah dan putri di atas, jarak antara asrama dan LPK
            Ohayo Nippon tidak terlalu jauh sehingga dapat ditempuh dengan
            berjalan kaki.
          </p>
        </div>
        <div className="max-w-sm">
          <img
            width="64"
            height="64"
            src="https://img.icons8.com/external-itim2101-lineal-itim2101/64/external-book-back-to-school-itim2101-lineal-itim2101.png"
            alt="external-book-back-to-school-itim2101-lineal-itim2101"
            className="block relative left-40 bottom-1"
          />
          <h2 className="text-center font-medium text-lg mb-4">Perpustakaan</h2>
          <p className="text-justify">
            LPK Ohayo Nippon menyediakan fasilitas perpustakaan untuk menambah
            informasi dan wawasan tentang pengetahuan bahasa dan budaya Jepang.
          </p>
        </div>
        <div className="max-w-sm">
          <img
            width="64"
            height="64"
            src="https://img.icons8.com/external-others-cattaleeya-thongsriphong/64/external-classroom-back-to-school-outline-others-cattaleeya-thongsriphong-2.png"
            alt="external-classroom-back-to-school-outline-others-cattaleeya-thongsriphong-2"
            className="block relative left-40 bottom-1"
          />
          <h2 className="text-center font-medium text-lg mb-4">
            Ruang kelas yang kondusif
          </h2>
          <p className="text-justify">
            Kami menyediakan ruangan khusus untuk belajar dan berdiskusi, dan
            biasanya disini siswa dapat berdiskusi lebih lanjut tentang bahasa
            Jepang dan bahasa lainnya dengan staf pengajar.
          </p>
        </div>
      </div>
    </div>
  );
}
