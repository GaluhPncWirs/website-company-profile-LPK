import { useState } from "react";

const Programlpk = [
  {
    id: 10,
    ImgProgram: "url('https://source.unsplash.com/350x350/?intern')",
    onclick: "intern",
    nameProgram: "Ginou Jisshusei (Magang)",
  },
  {
    id: 11,
    ImgProgram: "url('https://source.unsplash.com/350x350/?worker')",
    onclick: "tokutei",
    nameProgram: "Tokutei Ginou / SSW (Visa Kerja)",
  },
  {
    id: 12,
    ImgProgram: "url('https://source.unsplash.com/350x350/?language')",
    onclick: "nihonggo",
    nameProgram: "Nihonggo Gakkou (Sekolah Bahasa jepang)",
  },
  {
    id: 13,
    ImgProgram: "url('https://source.unsplash.com/350x350/?recruiter')",
    onclick: "recruiter",
    nameProgram: "Recrutment",
  },
  {
    id: 14,
    ImgProgram: "url('https://source.unsplash.com/350x350/?automotive')",
    onclick: "automotive",
    nameProgram: "Rental",
  },
  {
    id: 15,
    ImgProgram: "url('https://source.unsplash.com/350x350/?interpreter')",
    onclick: "interpreter",
    nameProgram: "Interpreter",
  },
];

export default function HomePage() {
  return (
    <>
      <section>
        <div className="pt-20">
          <div
            style={{
              backgroundImage: "url('/img/megaHeaderJapan.jpg')",
            }}
            className="bg-cover bg-center min-h-screen flex items-center"
          >
            <div className="max-w-3xl text-white max-[768px]:max-w-lg max-[768px]:ml-6 md:max-w-xl md:ml-8 lg:ml-10 xl:ml-12 xl:max-w-3xl">
              <h1 className="mb-4 font-bold text-4xl max-[640px]:text-3xl sm:text-3xl lg:text-4xl">
                Selamat Datang di Website Official LPK Ohayo Nippon
              </h1>
              <h3 className="text-xl font-medium max-[768px]:text-base md:text-lg">
                Dapatkan kesempatan terbaik, untuk magang dan bekerja Ke jepang.
                Pelajari Bahasa, Culture serta pengetahuan lain seputar Negeri
                Jepang
              </h3>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="bg-slate-300 bg-gradient-to-t from-[#549DBB] to-slate-400">
          <div className="mx-auto w-[95%]">
            <div>
              <h1 className="font-bold text-center pt-16 max-[640px]:text-3xl sm:text-3xl xl:text-4xl">
                一緒に日本に行こう
                <br />
                Ayo Ke Jepang Bersama Kami
              </h1>
              <Description />
              <hr className="my-14 border" />
              <VisiMisi />
            </div>
            <div className="mt-20">
              <h1 className="text-center font-semibold relative max-[640px]:text-3xl sm:text-3xl lg:text-4xl xl:before:garis-kiri xl:after:garis-kanan">
                Program Unggulan Kami
              </h1>
              <ImgProgram />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Description() {
  return (
    <div
      id="introduction"
      className="flex items-center gap-7 my-14 justify-center max-[640px]:flex-col sm:flex-col lg:flex-row"
    >
      <img
        id="imgsiapakami"
        src="/img/fotbar.jpg"
        alt="foto bareng"
        className="rounded-2xl block bg-center bg-cover shadow-lg shadow-slate-500 basis-2/5 max-[768px]:w-5/6 md:w-11/12 lg:w-[45%]"
      />
      <div className="basis-3/5 max-w-xl max-[768px]:w-full md:max-w-2xl">
        <h2 className="mb-5 font-semibold text-3xl text-center">
          Siapa kami ?
        </h2>
        <p className="text-lg text-justify">
          LPK Candra Putra Lestari melalui Melalui Sekolah Bahasa Jepang "Ohayo
          Nippon" adalah sebuah lembaga pendidikan bahasa jepang yang berlokasi
          di Cikarang Selatan, Bekasi. Berdiri sejak tahun 2022, dengan
          instruktur yang profesional dan berpengalaman, LPK Candra Putra
          Lestari melalui Melalui Sekolah Bahasa Jepang "Ohayo Nippon" sebagai
          salah satu Lembaga Pengirim atau yang sudah mendapat kan ijin sebagai
          Sending Organization (SO) memberi peluang bagi pemuda(i) Indonesia
          untuk ditempatkan pada perusahaan-perusahaan di Jepang untuk mengikuti
          program pemagangan dalam rangka meningkatkan kualitas dan kompetensi
          diri. LPK Candra Putra Lestari melalui Melalui Sekolah Bahasa Jepang
          "Ohayo Nippon" juga telah berhasil membantu peserta didik untuk
          mewujudkan impian mereka melalui berbagai program ke Jepang.
        </p>
      </div>
    </div>
  );
}

function VisiMisi() {
  return (
    <div className="flex flex-wrap mx-auto justify-center gap-16 text-center">
      <div className="max-w-lg">
        <h1 className="font-semibold text-2xl mb-4">Visi</h1>
        <p className="text-lg">
          Sekolah Bahasa Jepang "Ohayo Nippon" sebagai tempat untuk
          mengembangkan tenaga kerja yang handal, terampil, semangat tinggi dan
          berkembang sesuai dengan tuntutan zaman, serta menanamkan disiplin,
          etos kerja dan sikap sebagai bangsa Indonesia
        </p>
      </div>
      <div className="max-w-lg">
        <h1 className="font-semibold text-2xl mb-4">Misi</h1>
        <p className="text-lg">
          Sekolah Bahasa Jepang "Ohayo Nippon" menyelenggarakan Kursus bahasa
          jepang dan pelatihan sikap mental disiplin untuk calon peserta,
          sehingga mereka siap untuk tinggal di Jepang sambil tetap memiliki
          rasa nasionalisme dan cinta tanah air.
        </p>
      </div>
    </div>
  );
}

function ImgProgram() {
  const [isProgram, setIsProgram] = useState(null);
  function handleClickProg(program) {
    setIsProgram(program);
  }
  return (
    <>
      <div className="grid md:grid-cols-3 md:grid-rows-2 gap-4 text-white mt-20 sm:grid-cols-2 max-[640px]:grid-cols-1">
        {Programlpk.map((program) => (
          <div
            style={{
              backgroundImage: program.ImgProgram,
            }}
            key={program.id}
            className="img-grid"
            onClick={() => handleClickProg(program.onclick)}
          >
            <a className="text-mid" role="button">
              {program.nameProgram}
            </a>
          </div>
        ))}
      </div>
      <DescriptionProgram isProgram={isProgram} />
    </>
  );
}

function DescriptionProgram({ isProgram }) {
  return (
    <div className="mt-20 flex flex-col gap-10 relative sm:gap-20">
      {isProgram === "intern" ? (
        <Intership />
      ) : isProgram === "tokutei" ? (
        <TokuteiGinou />
      ) : isProgram === "nihonggo" ? (
        <NihonggoGakko />
      ) : null}
    </div>
  );
}

function Intership() {
  return (
    <div className="relative">
      <div
        style={{
          backgroundImage: "url('/img/magang.jpg')",
        }}
        className="bg-bottom bg-cover min-h-80 flex items-center mb-5 shadow-xl shadow-slate-600 max-[640px]:max-w-full sm:max-w-full max-[640px]:rounded-2xl sm:rounded-2xl lg:max-w-[50%] lg:rounded-r-full"
      ></div>
      <div className="max-[640px]:static sm:static sm:flex max-[640px]:flex sm:flex-col max-[640px]:flex-col sm:items-center max-[640px]:items-center sm:mt-8 max-[640px]:mt-8 lg:absolute lg:right-1 lg:top-2 xl:right-14">
        <h2 className="my-5 text-center font-semibold text-2xl">
          Ginou Jisshusei (Magang)
        </h2>
        <p className="text-justify max-w-md md:text-lg">
          Sangat disarankan bagi mereka yang ingin memulai bekerja di Jepang.
          Program ini telah bekerja sama dengan perusahaan perusahaan di Jepang,
          Proses yang mudah dan cepat
        </p>
      </div>
    </div>
  );
}

function TokuteiGinou() {
  return (
    <div className="flex relative max-[640px]:flex-col sm:flex-col lg:flex-row-reverse">
      <div
        style={{
          backgroundImage: "url('/img/visa.jpg')",
        }}
        className="min-w-[50%] bg-center bg-cover min-h-80 rounded-l-full flex items-center mb-5 shadow-xl shadow-slate-600 max-[640px]:max-w-full sm:max-w-full max-[640px]:rounded-2xl sm:rounded-2xl lg:max-w-[50%] lg:rounded-l-full"
      ></div>
      <div className="left-20 top-16 max-[640px]:static sm:static sm:flex max-[640px]:flex sm:flex-col max-[640px]:flex-col sm:items-center max-[640px]:items-center sm:mt-8 max-[640px]:mt-8 lg:absolute lg:left-1 lg:top-2 xl:left-14">
        <h2 className="my-5 text-center font-semibold text-2xl">
          Tokutei Ginou / SSW (Visa Kerja)
        </h2>
        <p className="text-justify max-w-md md:text-lg">
          Program Tenaga Ahli dengan Keahlian Khusus yang Murah Persyaratan
          termasuk penguasaan dasar bahasa Jepang dan lulus ujian ketrampilan
          yang diselenggarakan oleh pemerintah Jepang.
        </p>
      </div>
    </div>
  );
}

function NihonggoGakko() {
  return (
    <div className="relative">
      <div
        style={{
          backgroundImage: "url('/img/pelajar.jpg')",
        }}
        className="max-w-[50%] bg-top bg-cover min-h-80 rounded-r-full flex items-center shadow-xl shadow-slate-600 max-[640px]:max-w-full sm:max-w-full max-[640px]:rounded-2xl sm:rounded-2xl lg:max-w-[50%] lg:rounded-r-full xl:right-14"
      ></div>
      <div className="right-20 top-16 max-[640px]:static sm:static sm:flex max-[640px]:flex sm:flex-col max-[640px]:flex-col sm:items-center max-[640px]:items-center sm:mt-8 max-[640px]:mt-8 lg:absolute lg:-right-2 lg:top-2 xl:right-10 xl:top-10">
        <h2 className="my-5 text-center font-semibold text-2xl">
          Nihonggo Gakkou (Sekolah Bahasa jepang)
        </h2>
        <p className="text-justify max-w-md md:text-lg">
          Program belajar bahasa jepang di negara Jepang. Ditujukan bagi yang
          ingin melanjutkan karir bekerja di Jepang maupun kuliah di Jepang.
        </p>
      </div>
    </div>
  );
}
