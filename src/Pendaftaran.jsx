import { useState } from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

export default function FormPendaftaran() {
  return (
    <>
      <Header />
      <WelcomePendaftaran />
      <Footer />
    </>
  );
}

function WelcomePendaftaran() {
  const [isHandleNext, setIsHandleNext] = useState(null);
  function handleClickNext(click) {
    setIsHandleNext(click);
  }

  return (
    <section>
      <div className="bg-gradient-to-t from-[#549DBB] to-sky-200 pt-32">
        <div className="w-[95%] mx-auto">
          <h1 className="text-2xl font-semibold text-center max-[640px]:text-xl sm:text-2xl">
            Selamat Datang Di Form Pendaftaran Online LPK Candra Putra Lestari
          </h1>
          <div className="mt-7">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              reprehenderit totam soluta neque ab rem aliquam eum quia dicta
              voluptatum illum laboriosam, vel a. Iusto iste incidunt similique
              labore magnam.
            </p>
            <div>
              {isHandleNext === "datadiri" ? (
                <DataDiri handleClickNext={handleClickNext} />
              ) : isHandleNext === "uploadBerkas" ? (
                <UploadBerkas handleClickNext={handleClickNext} />
              ) : (
                <DownloadBerkas handleClickNext={handleClickNext} />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// download berkas
function DownloadBerkas({ handleClickNext }) {
  return (
    <>
      <NavbarDownloadBerkas />
      <div className="mt-10">
        <div>
          <h3 className="text-center my-8 font-semibold text-xl max-[640px]:text-lg">
            Mohon Untuk Download Berkas Berkas Ini Terlebih Dahulu{" "}
          </h3>
          <Downloads />
        </div>
        <ButtonNext handleClickNext={handleClickNext} />
      </div>
    </>
  );
}

function NavbarDownloadBerkas() {
  return (
    <ul className="flex mt-5 bg-stone-200 text-lg font-semibold">
      <li className="basis-1/3 text-center pt-8 pb-4 bg-sky-300 relative max-[640px]:px-2 max-[640px]:pb-2">
        <span className="material-symbols-outlined absolute top-2 left-0 right-0">
          file_save
        </span>
        <p className="max-[640px]:text-base">Download Berkas</p>
      </li>
      <li className="basis-1/3 text-center pt-8 pb-4 relative max-[640px]:px-2 max-[640px]:pb-2">
        <span className="material-symbols-outlined absolute top-2 left-0 right-0">
          data_loss_prevention
        </span>
        <p className="max-[640px]:text-base">Masukkan Data Diri</p>
      </li>
      <li className="basis-1/3 text-center pt-8 pb-4 relative max-[640px]:px-2 max-[640px]:pb-2">
        <span className="material-symbols-outlined absolute top-2 left-0 right-0">
          upload_file
        </span>
        <p className="max-[640px]:text-base">Upload Berkas</p>
      </li>
    </ul>
  );
}

function Downloads() {
  return (
    <div>
      <div>
        <div className="text-lg font-medium mb-5 max-[640px]:text-base">
          {" "}
          Surat Izin Orang Tua{" "}
        </div>
        <a
          href="/public/download_berkas/2._surat-izin-orang-tua.pdf"
          download
          className="bg-blue-700 border-none text-white cursor-pointer pl-9 pr-6 py-2 rounded-lg relative"
        >
          <span className="material-symbols-outlined absolute top-1 left-2">
            download
          </span>
          Download Di Sini
        </a>
      </div>
      <div>
        <div className="text-lg font-medium my-5 max-[640px]:text-base">
          Surat Pernyataan Belum Pernah Mengikuti Program Magang Ke Jepang{" "}
        </div>
        <a
          href="/public/download_berkas/3._surat-pernyataan-belum-pernah-mengikuti-program-magang-ke-jepang.pdf"
          download
          className="bg-blue-700 border-none text-white cursor-pointer pl-9 pr-6 py-2 rounded-lg relative"
        >
          <span className="material-symbols-outlined absolute top-1 left-2">
            download
          </span>
          Download Di Sini
        </a>
      </div>
      <div>
        <div className="text-lg font-medium my-5 max-[640px]:text-base">
          Surat Persetujuan Mengikuti Pelatihan Bahasa Dan Budaya Jepang Di LPK
          Candra Putra Lestari{" "}
        </div>

        <a
          href="/public/download_berkas/Perjanjian_persetujuan_mengikuti_Pelatihan.pdf"
          download
          className="bg-blue-700 border-none text-white cursor-pointer pl-9 pr-6 py-2 rounded-lg relative"
        >
          <span className="material-symbols-outlined absolute top-1 left-2">
            download
          </span>
          Download Di Sini
        </a>
      </div>
    </div>
  );
}

function ButtonNext({ handleClickNext }) {
  return (
    <div className="flex justify-between items-end flex-row-reverse mt-10">
      <button
        className="bg-slate-300 py-0.5 px-3 rounded-lg cursor-pointer transition-all hover:bg-slate-400"
        onClick={() => handleClickNext("datadiri")}
      >
        Lanjut
      </button>
    </div>
  );
}
// download berkas end

// data diri
function DataDiri({ handleClickNext }) {
  let form = {
    // siswa
    nik: "",
    nama: "",
    namaPanggilan: "",
    tglLahir: "",
    jumlahSaudara: "",
    asalSekolah: "",
    tinggalBersama: "",
    alamat: "",
    tinggiBdn: "",
    beratBdn: "",
    penyakit: "",
    hobby: "",
    sifat: "",
    noHp: "",
    email: "",
    // ayah
    namaAyah: "",
    tglLahirAyah: "",
    daerahAyah: "",
    pendidikanAyah: "",
    pekerjaanAyah: "",
    almtPekerjaanAyah: "",
    almtRumahAyah: "",
    noHpAyah: "",
    penghasilanAyah: "",
    // ibu
    namaIbu: "",
    tglLahirIbu: "",
    daerahIbu: "",
    pendidikanIbu: "",
    pekerjaanIbu: "",
    almtPekerjaanIbu: "",
    almtRumahIbu: "",
    noHpIbu: "",
    penghasilanIbu: "",
  };
  const [formData, setFormData] = useState(form);
  function handleInputChange(e) {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  }

  function isFormFilled() {
    const objValues = Object.values(formData).every((value) => value !== "");
    if (!objValues) {
      return false;
    } else {
      return true;
    }
  }

  return (
    <>
      <NavbarDatadiri />
      <form action="post">
        <div className="mt-10 formRegister">
          <FormSiswa handleInputChange={handleInputChange} />
          <div>
            <h1 className="font-semibold text-xl">B. Data Orang Tua/Wali</h1>
            <FormAyah handleInputChange={handleInputChange} />
            <FormIbu handleInputChange={handleInputChange} />
          </div>
        </div>
      </form>
      <ButtonSubmit
        handleClickNext={handleClickNext}
        isFormFilled={isFormFilled}
      />
    </>
  );
}

function NavbarDatadiri() {
  return (
    <ul className="flex mt-5 bg-stone-200 text-lg font-semibold">
      <li className="basis-1/3 text-center pt-8 pb-4 relative max-[640px]:px-2 max-[640px]:pb-2">
        <span className="material-symbols-outlined absolute top-2 left-0 right-0">
          file_save
        </span>
        <p className="max-[640px]:text-base">Download Berkas</p>
      </li>
      <li className="basis-1/3 text-center pt-8 pb-4 bg-sky-300 relative max-[640px]:px-2 max-[640px]:pb-2">
        <span className="material-symbols-outlined absolute top-2 left-0 right-0">
          data_loss_prevention
        </span>
        <p className="max-[640px]:text-base">Masukkan Data Diri</p>
      </li>
      <li className="basis-1/3 text-center pt-8 pb-4 relative max-[640px]:px-2 max-[640px]:pb-2">
        <span className="material-symbols-outlined absolute top-2 left-0 right-0">
          upload_file
        </span>
        <p className="max-[640px]:text-base">Upload Berkas</p>
      </li>
    </ul>
  );
}

function FormSiswa({ handleInputChange }) {
  return (
    <div>
      <h1 className="font-semibold text-xl mb-5">A. Data Siswa</h1>
      <div className="flex flex-wrap gap-7 items-center max-[640px]:justify-center">
        <div>
          <label htmlFor="nik">NIK :</label>
          <input type="number" id="nik" onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="nama">Nama Lengkap :</label>
          <input type="text" id="nama" onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="namaPanggilan">Nama Panggilan :</label>
          <input type="text" id="namaPanggilan" onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="tglLahir">Tempat Tanggal Lahir :</label>
          <input type="text" id="tglLahir" onChange={handleInputChange} />
        </div>
        <div>
          <label>Jenis Kelamin :</label>
          Laki-Laki{" "}
          <input
            type="radio"
            name="kelamin"
            value="Laki-Laki"
            className="mr-4"
          />
          Perempuan <input type="radio" name="kelamin" value="Perempuan" />
        </div>
        <div>
          <label htmlFor="statusAnak">Status Anak :</label>
          <select name="" id="statusAnak">
            <option value=""></option>
            <option value="">Kandung</option>
            <option value="">Tiri</option>
            <option value="">Angkat</option>
          </select>
        </div>
        <div>
          <label htmlFor="anakKe">Anak Ke :</label>
          <input type="number" name="" id="anakKe" min="1" max="70" />
        </div>
        <div>
          <label htmlFor="jumlahSaudara">Jumlah Saudara :</label>
          <input type="text" id="jumlahSaudara" onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="asalSekolah">Asal Sekolah :</label>
          <input type="text" id="asalSekolah" onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="tinggalBersama">Tinggal Bersama :</label>
          <input type="text" id="tinggalBersama" onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="alamat">Alamat Tempat Tinggal :</label>
          <input type="text" id="alamat" onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="tinggiBdn">Tinggi Badan :</label>
          <input type="text" id="tinggiBdn" onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="beratBdn">Berat Badan :</label>
          <input type="text" id="beratBdn" onChange={handleInputChange} />
        </div>
        <div>
          <label>Golongan Darah :</label>A{" "}
          <input type="radio" name="golDarah" value="A" className="mr-4" />B{" "}
          <input type="radio" name="golDarah" value="B" className="mr-4" />
          AB <input type="radio" name="golDarah" value="AB" className="mr-4" />
          O <input type="radio" name="golDarah" value="O" />
          <p className="text-sm mt-1">*Jika Belum Di Tes darah Abaikan</p>
        </div>
        <div>
          <label htmlFor="penyakit">Penyakit Berat Yang Pernah :</label>
          <input type="text" id="penyakit" onChange={handleInputChange} />
        </div>
        <div>
          <label>Ada Tatoo & Tindik :</label>
          Ya <input type="radio" name="tatoo" id="tatoYes" className="mr-4" />
          Tidak <input type="radio" name="tatoo" id="tatoNo" />
        </div>
        <div>
          <label>Kondisi Mata :</label>
          Minus <input
            type="radio"
            name="mata"
            id="minus"
            className="mr-3"
          />{" "}
          Buta Warna Parsial{" "}
          <input type="radio" name="mata" id="parsial" className="mr-4" />
          Buta warna Total <input type="radio" name="mata" id="total" />
          <p className="text-sm mt-1">*Jika Kondisi Mata Sehat Abaikan</p>
        </div>
        <div>
          <label htmlFor="hobby">Hobby :</label>
          <input type="text" id="hobby" onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="sifat">Sifat Dominan :</label>
          <input type="text" id="sifat" onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="noHp">No Hp :</label>
          <input type="number" id="noHp" onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="email">Email :</label>
          <input type="email" id="email" onChange={handleInputChange} />
        </div>
      </div>
    </div>
  );
}

function FormAyah({ handleInputChange }) {
  return (
    <div>
      <h3 className="text-lg mt-5 mb-2 font-semibold max-[640px]:text-center">
        1. Ayah
      </h3>
      <div className="flex flex-wrap gap-5 items-center max-[640px]:justify-center">
        <div>
          <label htmlFor="namaAyah">Nama :</label>
          <input type="text" id="namaAyah" onChange={handleInputChange} />
        </div>

        <div>
          <label htmlFor="tglLahirAyah">Tempat Tanggal Lahir :</label>
          <input type="text" id="tglLahirAyah" onChange={handleInputChange} />
        </div>

        <div>
          <label htmlFor="daerahAyah">Asal Daerah/ Suku :</label>
          <input type="text" id="daerahAyah" onChange={handleInputChange} />
        </div>

        <div>
          <label htmlFor="pendidikanAyah">Pendidikan terakhir :</label>
          <input type="text" id="pendidikanAyah" onChange={handleInputChange} />
        </div>

        <div>
          <label htmlFor="pekerjaanAyah">Pekerjaan :</label>
          <input type="text" id="pekerjaanAyah" onChange={handleInputChange} />
        </div>

        <div>
          <label htmlFor="almtPekerjaanAyah">Alamat Pekerjaan :</label>
          <input
            type="text"
            id="almtPekerjaanAyah"
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="almtRumahAyah">Alamat Rumah :</label>
          <input type="text" id="almtRumahAyah" onChange={handleInputChange} />
        </div>

        <div>
          <label htmlFor="noHpAyah">No Hp :</label>
          <input type="number" id="noHpAyah" onChange={handleInputChange} />
        </div>

        <div>
          <label htmlFor="penghasilanAyah">Penghasilan :</label>
          <input
            type="text"
            id="penghasilanAyah"
            onChange={handleInputChange}
          />
        </div>
      </div>
    </div>
  );
}

function FormIbu({ handleInputChange }) {
  return (
    <div>
      <h3 className="text-lg my-2 font-semibold max-[640px]:text-center">
        2. Ibu
      </h3>
      <div className="flex flex-wrap gap-5 items-center max-[640px]:justify-center">
        <div>
          <label htmlFor="namaIbu">Nama :</label>
          <input type="text" id="namaIbu" onChange={handleInputChange} />
        </div>

        <div>
          <label htmlFor="tglLahirIbu">Tempat Tanggal Lahir :</label>
          <input type="text" id="tglLahirIbu" onChange={handleInputChange} />
        </div>

        <div>
          <label htmlFor="daerahIbu">Asal Daerah/ Suku :</label>
          <input type="text" id="daerahIbu" onChange={handleInputChange} />
        </div>

        <div>
          <label htmlFor="pendidikanIbu">Pendidikan terakhir :</label>
          <input type="text" id="pendidikanIbu" onChange={handleInputChange} />
        </div>

        <div>
          <label htmlFor="pekerjaanIbu">Pekerjaan :</label>
          <input type="text" id="pekerjaanIbu" onChange={handleInputChange} />
        </div>

        <div>
          <label htmlFor="almtPekerjaanIbu">Alamat Pekerjaan :</label>
          <input
            type="text"
            id="almtPekerjaanIbu"
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="almtRumahIbu">Alamat Rumah :</label>
          <input type="text" id="almtRumahIbu" onChange={handleInputChange} />
        </div>

        <div>
          <label htmlFor="noHpIbu">No Hp :</label>
          <input type="number" id="noHpIbu" onChange={handleInputChange} />
        </div>

        <div>
          <label htmlFor="penghasilanIbu">Penghasilan :</label>
          <input type="text" id="penghasilanIbu" onChange={handleInputChange} />
        </div>
      </div>
    </div>
  );
}

function ButtonSubmit({ handleClickNext, isFormFilled }) {
  return (
    <div className="flex justify-between items-end flex-row-reverse mt-10">
      <button
        className="bg-slate-300 py-0.5 px-3 rounded-lg disabled:cursor-not-allowed cursor-pointer transition-all hover:bg-slate-400"
        onClick={() => handleClickNext("uploadBerkas")}
        type="submit"
        disabled={!isFormFilled()}
      >
        Lanjut
      </button>
      <button
        className="bg-slate-300 py-0.5 px-3 rounded-lg cursor-pointer transition-all hover:bg-slate-400"
        onClick={() => handleClickNext("downloadBerkas")}
      >
        kembali
      </button>
    </div>
  );
}
// data diri end

// upload berkas
function UploadBerkas({ handleClickNext }) {
  return (
    <>
      <NavbarUploadBerkas />
      <div className="mt-10">
        <FormUpload />
      </div>
      <ButtonAllBerkas handleClickNext={handleClickNext} />
    </>
  );
}

function NavbarUploadBerkas() {
  return (
    <ul className="flex mt-5 bg-stone-200 text-lg font-semibold">
      <li className="basis-1/3 text-center pt-8 pb-4 relative max-[640px]:px-2 max-[640px]:pb-2">
        <span className="material-symbols-outlined absolute top-2 left-0 right-0">
          file_save
        </span>
        <p className="max-[640px]:text-base">Download Berkas</p>
      </li>
      <li className="basis-1/3 text-center pt-8 pb-4 relative max-[640px]:px-2 max-[640px]:pb-2">
        <span className="material-symbols-outlined absolute top-2 left-0 right-0">
          data_loss_prevention
        </span>
        <p className="max-[640px]:text-base">Masukkan Data Diri</p>
      </li>
      <li className="basis-1/3 text-center pt-8 pb-4 bg-sky-300 relative max-[640px]:px-2 max-[640px]:pb-2">
        <span className="material-symbols-outlined absolute top-2 left-0 right-0">
          upload_file
        </span>
        <p className="max-[640px]:text-base">Upload Berkas</p>
      </li>
    </ul>
  );
}

function FormUpload() {
  return (
    <form action="post">
      <div>
        <label htmlFor="pasFoto">Pas Foto 3 x 4 </label>
        <input type="file" name="foto" id="pasFoto" accept="image/*" />
      </div>
      <div className="my-5">
        <label htmlFor="suratIzinOrangtua">Surat Izin Orang Tua</label>
        <input
          type="file"
          name="suratIzin"
          id="suratIzinOrangtua"
          accept=".doc,.docx,.xml,.pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        />
      </div>
      <div>
        <label htmlFor="belumKejepang">
          Surat Pernyataan Belum Pernah Mengikuti Program Magang Ke Jepang
        </label>
        <input
          type="file"
          name="belumKejepang"
          id="belumKejepang"
          accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        />
      </div>
      <div className="mt-5">
        <label htmlFor="suratPersetujuan">
          Surat Persetujuan Mengikuti Pelatihan Bahasa Dan Budaya Jepang Di LPK
          Candra Putra Lestari
        </label>
        <input
          type="file"
          name="suratPersetujuan"
          id="suratPersetujuan"
          accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        />
      </div>
    </form>
  );
}

function ButtonAllBerkas({ handleClickNext }) {
  return (
    <div className="flex justify-between items-end flex-row-reverse mt-10">
      <button className="bg-slate-300 py-0.5 px-3 rounded-lg cursor-pointer transition-all hover:bg-slate-400">
        Kirim
      </button>
      <button
        className="bg-slate-300 py-0.5 px-3 rounded-lg cursor-pointer transition-all hover:bg-slate-400"
        onClick={() => handleClickNext("datadiri")}
      >
        kembali
      </button>
    </div>
  );
}
// upload berkas end
