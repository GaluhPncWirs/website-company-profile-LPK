export default function Footer() {
  return (
    <footer>
      <div className="bg-gradient-to-t from-[#124255] to-[#549DBB] max-[640px]:pt-20">
        <div className="container w-[95%] mx-auto">
          <FooterContent />
          <hr className="mx-5 max-[768px]:mt-5" />
          <CopyRight />
        </div>
      </div>
    </footer>
  );
}

function FooterContent() {
  return (
    <div className="flex justify-around items-center flex-wrap min-h-[500px] gap-10 text-slate-300">
      <Services />
      <WorkHours />
      <Location />
      <FollowUsIcon />
    </div>
  );
}

function Services() {
  return (
    <div className="relative">
      <h2 className="font-bold text-2xl xl:text-3xl">
        <span className="material-symbols-outlined absolute -top-5 left-20">
          support_agent
        </span>
        Layanan Kami
      </h2>
      <ul className="mt-3 text-base">
        <li>
          <a href="#" className="hover:underline">
            Kursus Bahasa Jepang
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Rental Mobil
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Recuitment
          </a>
        </li>
      </ul>
    </div>
  );
}

function WorkHours() {
  return (
    <div>
      <h2 className="font-bold text-2xl xl:text-3xl">
        <span className="material-symbols-outlined mr-2">work_history</span>
        Jam Kerja
      </h2>
      <ul className="mt-3 text-base">
        <li>Senin - Jumat : 9 Pagi s.d 5 Sore </li>
        <li>Minggu : Tutup</li>
        <li>Help Desk : Buka 24/7</li>
        <li>
          <a
            href="mailto:candraputralestari@gmail.com"
            className="hover:underline"
          >
            candraputralestari@gmail.com
          </a>
        </li>
      </ul>
    </div>
  );
}

function Location() {
  return (
    <>
      <div className="max-w-[14rem] pl-4">
        <h2 className="font-bold text-2xl xl:text-3xl">
          <span className="material-symbols-outlined mr-1">location_on</span>
          Alamat
        </h2>
        <p className="mt-3 text-base">
          Perumahan Bumi Cikarang Asri No. 10 Ciantra Cikarang Selatan Bekasi,
          Jawa Barat 17530
        </p>
      </div>
      {/* <div>
         <h2 className="font-bold text-2xl xl:text-3xl mb-4">
           Our Location
         </h2>
         <iframe
           id="immi"
           src="https://maps.google.com/maps?&q=LPK ohayo nippon&z=15&t=q&output=embed"
           className="w-10/12 h-3/4"
         ></iframe>
       </div> */}
    </>
  );
}

function FollowUsIcon() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 xl:text-3xl">
        <span className="material-symbols-outlined mr-2">group_add</span>
        Follow Us
      </h2>
      <div className="flex">
        <a href="https://twitter.com/" target="_blank" className="atur-url">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 50 50"
            fill="currentColor"
            className="atur-svg text-gray-400 hover:grayscale-0 hover:text-black"
          >
            <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"></path>
          </svg>
        </a>
        <a
          href="https://web.facebook.com/"
          target="_blank"
          className="atur-url"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 48 48"
            className="atur-svg hover:grayscale-0"
          >
            <linearGradient
              id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1"
              x1="9.993"
              x2="40.615"
              y1="9.993"
              y2="40.615"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#2aa4f4"></stop>
              <stop offset="1" stopColor="#007ad9"></stop>
            </linearGradient>
            <path
              fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)"
              d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"
            ></path>
            <path
              fill="#fff"
              d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"
            ></path>
          </svg>
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          className="atur-url"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 48 48"
            className="atur-svg hover:grayscale-0"
          >
            <radialGradient
              id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1"
              cx="19.38"
              cy="42.035"
              r="44.899"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#fd5"></stop>
              <stop offset=".328" stopColor="#ff543f"></stop>
              <stop offset=".348" stopColor="#fc5245"></stop>
              <stop offset=".504" stopColor="#e64771"></stop>
              <stop offset=".643" stopColor="#d53e91"></stop>
              <stop offset=".761" stopColor="#cc39a4"></stop>
              <stop offset=".841" stopColor="#c837ab"></stop>
            </radialGradient>
            <path
              fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)"
              d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
            ></path>
            <radialGradient
              id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2"
              cx="11.786"
              cy="5.54"
              r="29.813"
              gradientTransform="matrix(1 0 0 .6663 0 1.849)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#4168c9"></stop>
              <stop offset=".999" stopColor="#4168c9" stopOpacity="0"></stop>
            </radialGradient>
            <path
              fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)"
              d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
            ></path>
            <path
              fill="#fff"
              d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
            ></path>
            <circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle>
            <path
              fill="#fff"
              d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"
            ></path>
          </svg>
        </a>
        <a href="https://www.youtube.com/" target="_blank" className="atur-url">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 48 48"
            className="atur-svg hover:grayscale-0"
          >
            <path
              fill="#FF3D00"
              d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"
            ></path>
            <path fill="#FFF" d="M20 31L20 17 32 24z"></path>
          </svg>
        </a>
        <a href="https://www.tiktok.com/" target="_blank" className="atur-url">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 50 50"
            fill="currentColor"
            className="atur-svg text-gray-400 hover:grayscale-0 hover:text-black"
          >
            <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z"></path>
          </svg>
        </a>
      </div>
    </div>
  );
}

function CopyRight() {
  return (
    <div className="py-4 text-[#7C93C3] text-sm flex justify-start items-center max-w-[90%] mx-auto gap-3">
      <h3>
        Created By{" "}
        <span className="font-semibold text-slate-200">LPK Ohayo Nippon</span>{" "}
        Framework Used{" "}
        <span className="text-blue-400 font-semibold">Tailwind CSS</span>&reg;
      </h3>
    </div>
  );
}
