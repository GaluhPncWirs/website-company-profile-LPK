import { useState } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

export default function GalleryPage() {
  const [isGallery, setIsGallery] = useState(null);
  function handleClickGallery(clicked) {
    setIsGallery(clicked);
  }
  return (
    <>
      <Header />
      <section>
        <div className="bg-gradient-to-t from-[#549DBB] to-emerald-200 pt-32">
          <div className="w-[95%] mx-auto">
            <h1 className="text-3xl font-semibold text-center mb-5 md:text-3xl lg:text-4xl xl:text-4xl">
              Gallery
            </h1>
            <p className="font-normal text-center mb-10 max-[640px]:text-base sm:text-base md:text-xl">
              Dokumentasi mencakup kegiatan, pemberangkatan, dan fasilitas dari
              LPK Candra Putra Lestari.
            </p>
            <br />
            <SwitchGallery onHandleClickGallery={handleClickGallery} />

            <div>
              {isGallery === "Pemberangkatan" ? (
                <ImagesPemberangkatan />
              ) : isGallery === "Fasilitas" ? (
                <ImagesFasilitas />
              ) : (
                <ImagesKegiatan />
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

function SwitchGallery({ onHandleClickGallery }) {
  const iconMap = [
    {
      id: 15,
      srcIcon: "/img/kegiatan lpk.png",
      title: "Kegiatan",
      click: "Kegiatan",
    },
    {
      id: 16,
      srcIcon: "/img/pemberangkatan.png",
      title: "Pemberangkatan",
      click: "Pemberangkatan",
    },
    {
      id: 17,
      srcIcon: "/img/fasilitaslpk.png",
      title: "Fasilitas",
      click: "Fasilitas",
    },
  ];
  return (
    <div className="flex justify-around">
      {iconMap.map((icon) => (
        <div
          className="transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110 hover:bg-yellow-200 duration-200 rounded-md basis-1/4"
          key={icon.id}
          onClick={() => onHandleClickGallery(icon.click)}
        >
          <div className="flex flex-col items-center font-semibold">
            <div className="size-16">
              <img src={icon.srcIcon} alt="" />
            </div>
            <div>{icon.title}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

function ImagesKegiatan() {
  const imgKegiatan = [
    {
      id: 100,
      sourceImg: "/img/kegiatan-belajar.jpg",
    },
    {
      id: 101,
      sourceImg: "/img/kegiatan-belajarmengajar.jpg",
    },
    {
      id: 102,
      sourceImg: "/img/kegiatan-olahraga.jpg",
    },
    {
      id: 103,
      sourceImg: "/img/kegiatan-belajarmengajar.jpg",
    },
    {
      id: 104,
      sourceImg: "/img/kegiatan-belajar.jpg",
    },
    {
      id: 105,
      sourceImg: "/img/kegiatan-olahraga.jpg",
    },
  ];

  return (
    <div className="mt-20">
      <h1 className="text-3xl font-semibold text-center">Kegiatan</h1>
      <div className="grid gap-2 px-10 mt-10 max-[640px]:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {imgKegiatan.map((imagesKeg) => (
          <img
            src={imagesKeg.sourceImg}
            alt="kegiatan-belajar"
            className="rounded-lg shadow-xl shadow-slate-500 hov-img"
            key={imagesKeg.id}
          />
        ))}
      </div>
    </div>
  );
}

function ImagesPemberangkatan() {
  const imgPemberangkatan = [
    {
      id: 200,
      sourceImg: "/img/kegiatan-belajar.jpg",
    },
    {
      id: 201,
      sourceImg: "/img/kegiatan-belajar.jpg",
    },
    {
      id: 202,
      sourceImg: "/img/kegiatan-belajar.jpg",
    },
    {
      id: 203,
      sourceImg: "/img/kegiatan-belajar.jpg",
    },
    {
      id: 204,
      sourceImg: "/img/kegiatan-belajar.jpg",
    },
    {
      id: 205,
      sourceImg: "/img/kegiatan-belajar.jpg",
    },
    {
      id: 206,
      sourceImg: "/img/kegiatan-belajar.jpg",
    },
    {
      id: 207,
      sourceImg: "/img/kegiatan-belajar.jpg",
    },
    {
      id: 208,
      sourceImg: "/img/kegiatan-belajar.jpg",
    },
    {
      id: 209,
      sourceImg: "/img/kegiatan-belajar.jpg",
    },
  ];
  return (
    <div className="mt-20">
      <h1 className="text-3xl font-semibold text-center">Pemberangkatan</h1>
      <div className="grid gap-2 px-10 mt-10 max-[640px]:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {imgPemberangkatan.map((imagesPem) => (
          <img
            src={imagesPem.sourceImg}
            alt="kegiatan-belajar"
            className="rounded-lg shadow-xl shadow-slate-500 hov-img"
            key={imagesPem.id}
          />
        ))}
      </div>
    </div>
  );
}

function ImagesFasilitas() {
  const imgFasilitas = [
    {
      id: 300,
      sourceImg: "/img/kegiatan-belajar.jpg",
    },
    {
      id: 301,
      sourceImg: "/img/kegiatan-belajar.jpg",
    },
    {
      id: 302,
      sourceImg: "/img/kegiatan-belajar.jpg",
    },
    {
      id: 303,
      sourceImg: "/img/kegiatan-belajar.jpg",
    },
    {
      id: 304,
      sourceImg: "/img/kegiatan-belajar.jpg",
    },
    {
      id: 305,
      sourceImg: "/img/kegiatan-belajar.jpg",
    },
    {
      id: 306,
      sourceImg: "/img/kegiatan-belajar.jpg",
    },
    {
      id: 307,
      sourceImg: "/img/kegiatan-belajar.jpg",
    },
    {
      id: 308,
      sourceImg: "/img/kegiatan-belajar.jpg",
    },
    {
      id: 309,
      sourceImg: "/img/kegiatan-belajar.jpg",
    },
    {
      id: 310,
      sourceImg: "/img/kegiatan-belajar.jpg",
    },
  ];
  return (
    <div className="mt-20">
      <h1 className="text-3xl font-semibold text-center">Fasilitas</h1>
      <div className="grid gap-2 px-10 mt-10 max-[640px]:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {imgFasilitas.map((imagesFas) => (
          <img
            src={imagesFas.sourceImg}
            alt="kegiatan-belajar"
            className="rounded-lg shadow-xl shadow-slate-500 img-kegiatan1 hov-img"
            key={imagesFas.id}
          />
        ))}
      </div>
    </div>
  );
}
