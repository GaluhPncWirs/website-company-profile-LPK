import Footer from "./layout/Footer";
import Header from "./layout/Header";

export default function AboutUs() {
  return (
    <>
      <Header />
      <OwnerLpk />
      <LegalitasLpk />
      <Footer />
    </>
  );
}

function OwnerLpk() {
  return (
    <section>
      <div className="pt-20 bg-gradient-to-t from-gray-300 to-[#549DBB]">
        <div className="w-[95%] mx-auto">
          <div className="pt-12">
            <h1 className="text-center font-bold md:text-4xl lg:text-4xl xl:text-4xl mb-20 max-[640px]:mb-14 sm:mb-16 text-3xl">
              About Us
            </h1>
            <Dirut />
            <Direktur />
          </div>
          <div className="pt-20">
            <h1 className="text-center font-semibold text-2xl ">
              Mengapa Harus Memilih Kami ?
            </h1>
            <WhoWeUs />
            <div className="w-[90%] mx-auto pt-10">
              <h3 className="font-semibold text-center text-xl">
                LPK OHAYO NIPPON Indonesia meyakini bahwa Program Pengembangan
                Usaha Mandiri melalui Pemagangan ke Jepang dapat memberi
                manfaat, di antara lain.
              </h3>
              <Benefit />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Dirut() {
  return (
    <div className="flex max-[640px]:flex-col sm:flex-col md:flex-row">
      <div className="basis-2/5 flex justify-center items-center">
        <img
          src="/img/pak_eki.jpg"
          alt="foto_pemilik_lembaga"
          className="md:w-[90%] rounded-2xl max-[640px]:w-2/3 sm:w-3/4"
        />
      </div>
      <div className="basis-3/5">
        <div className="my-5 font-medium before:garis-bawah relative">
          <h3>Eki Candra</h3>
          <h2 className="text-lg mb-3">DIREKTUR UTAMA</h2>
        </div>
        <div className="text-base mt-7 text-justify">
          <ul>
            <li>
              <span className="font-semibold block text-lg">Kompetensi</span>
              N2
            </li>
            <li>
              <span className="font-semibold block text-lg">Karir</span>
              Magang Di jepang Selama 3 tahun{" "}
              <span className="block">
                Manager di perusahaan Jepang yang ada di Indonesia 13 tahun
              </span>
            </li>
            <li>
              <span className="font-semibold block text-lg">
                Alasan Mendirikan LPK
              </span>
              memberikan kesempatan kepada generasi muda yang ada di Indonesia,
              untuk bisa menimbah ilmu sebanyak banyak nya di Negara Maju
              sekaligus memperbaiki perekonomian keluarga dengan bekerja di
              Jepang.
            </li>
            <li>
              <span className="font-semibold block text-lg">Motto hidup</span>
              Setiap Kesulitan pasti ada kemudahan, Setiap masalah pasti ada
              solusi
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function Direktur() {
  return (
    <div className="flex max-[640px]:flex-col sm:flex-col md:flex-row-reverse mt-20">
      <div className="basis-2/5 flex justify-center items-center">
        <img
          src="/img/pak_eki.jpg"
          alt="foto_pemilik_lembaga"
          className="md:w-[90%] rounded-2xl max-[640px]:w-2/3 sm:w-3/4"
        />
      </div>
      <div className="basis-3/5">
        <div className="my-5 font-medium before:garis-bawah relative">
          <h3>Eis Saputra</h3>
          <h2 className="text-lg mb-3">DIREKTUR</h2>
        </div>
        <div className="text-base mt-7 text-justify">
          <ul>
            <li>
              <span className="font-semibold block text-lg">Kompetensi</span>
              N1
            </li>
            <li>
              <span className="font-semibold block text-lg">Karir</span>
              Penerjemah di beberapa perusahaan yang ada Jepang{" "}
              <span className="block">
                Bekerja di perusahaan jepang 5 tahun
              </span>
            </li>
            <li>
              <span className="font-semibold block text-lg">
                Alasan Mendirikan LPK
              </span>
              memberikan kesempatan kepada generasi muda yang ada di Indonesia,
              untuk bisa menimbah ilmu sebanyak banyak nya di Negara Maju
              sekaligus memperbaiki perekonomian keluarga dengan bekerja di
              Jepang.{" "}
            </li>
            <li>
              <span className="font-semibold block text-lg">Motto hidup</span>
              Setiap Kesulitan pasti ada kemudahan, Setiap masalah pasti ada
              solusi
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function LegalitasLpk() {
  return (
    <section>
      <div className="bg-gradient-to-t from-[#549DBB] to-gray-300 pt-20">
        <div className="w-[95%] mx-auto">
          <h1 className="pb-16 text-center text-3xl font-semibold">
            Legalitas Perusahaan
          </h1>
          <div className="flex justify-center gap-14 flex-wrap">
            <img
              src="/img/legalitas_perusahaan_ke1.png"
              alt="legalitas perusahaan"
              className="block w-2/5 shadow-xl shadow-slate-600"
            />
            <img
              src="/img/legalitas_usaha2.jpg"
              alt="legalitas perusahaan 2"
              className="block w-2/5 shadow-xl shadow-slate-600"
            />
            <img
              src="/img/legalitas_usaha3.jpg"
              alt="legalitas perusahaan 3"
              className="block w-1/2 shadow-xl shadow-slate-600"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function WhoWeUs() {
  return (
    <div className="pt-10 max-w-6xl mx-auto">
      <p className="text-justify">
        Karena LPK OHAYO NIPPON melakukan proses rekrutmen calon peserta sampai
        pelaksanaan pendidikan dan pelatihan pra-penempatan peserta di Jepang
        yang telah teruji sesuai dengan kebutuhan yang diperlukan oleh
        perusahaan-perusahaan di Jepang yang meliputi :
      </p>
      <ul className="list-disc ml-5 mt-4">
        <li>Bahasa dan Budaya Jepang</li>
        <li>Fisik</li>
        <li>Mental</li>
        <li>Disiplin</li>
        <li>Pembentukan Karakter (Character Building)</li>
        <li>Pendidikan Kerohanian</li>
        <li>Kewirausahaan</li>
        <li>Pelatihan teknis menyesuaikan bidang pemagangan</li>
      </ul>
      <br />
      <p className="text-justify">
        Selain itu, LPK OHAYO NIPPON juga mempersiapkan dan manfasilitasi
        program pasca magang bagi mereka yang telah menyelesaikan program
        pemagangan di Jepang. Diharapkan progam ini dapat mendorong para alumni
        peserta untuk memiliki usaha mandiri baik secara individual atau
        kelompok sesuai dengan pengalaman yang telah didapatkan di Jepang. Untuk
        mewujudkan tujuan tersebut, LPK OHAYO NIPPON telah bekerja sama dengan
        Pemerintah Daerah, Kementerian Terkait, Balai-Balai Penelitian atau
        Riset, Perusahaan lokal maupun internasional.
      </p>
    </div>
  );
}

function Benefit() {
  return (
    <ul className="flex mt-10 justify-center gap-5 font-semibold capitalize flex-col text-base items-center lg:text-lg lg:flex-row lg:gap-3 xl:gap-5">
      <li className="flex items-center text-center bg-stone-300 rounded-3xl relative min-h-[100px] max-w-[70%] pt-4 px-2 md:max-w-[50%] lg:px-1 lg:py-5 lg:pt-10 xl:max-w-[30%] xl:py-11 shadow-xl shadow-slate-500">
        <span className="material-symbols-outlined absolute top-2 left-0 right-0">
          how_to_reg
        </span>
        Melahirkan Pengusaha muda yang mandiri, kreatif dan berdaya Saing
      </li>
      <li className="flex items-center text-center relative bg-sky-400 rounded-3xl min-h-[100px] max-w-[70%] py-7 px-5 pt-9 md:max-w-[50%] lg:px-1 lg:py-5 lg:pt-10 xl:max-w-[30%] shadow-xl shadow-slate-500">
        <span className="material-symbols-outlined absolute top-2 left-0 right-0">
          work_alert
        </span>
        Mendorong pertumbuhan ekonomi daerah yang dapat berkontribusi mengurangi
        angka pengangguran nasional
      </li>
      <li className="flex items-center text-center bg-indigo-400 rounded-3xl relative min-h-[100px] max-w-[70%] pt-4 px-2 md:max-w-[50%] lg:px-1 lg:py-5 lg:pt-10 xl:max-w-[30%] xl:py-11 shadow-xl shadow-slate-500">
        <span className="material-symbols-outlined absolute top-2 left-0 right-0">
          monitoring
        </span>
        Meningkatkan daya saing produk nasional pada pasar Internasional
      </li>
    </ul>
  );
}
