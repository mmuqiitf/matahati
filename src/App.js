import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState, useCallback } from "react";
import collections from "./data/collections.json";
import logo from "./images/logo.png";
import header from "./images/header.png";
import furniture from "./images/furniture.png";
import personJahit from "./images/person-jahit.png";
import "./App.css";
import HeroHome from "./HeroHome";

function App() {
  const tahun = new Date().getFullYear();
  // console.log(collections.find((collection) => collection.id === 2));
  let [isOpen, setIsOpen] = useState(false);
  let [modalContent, setModalContent] = useState({});
  let content = {};
  function closeModal() {
    setIsOpen(false);
    // console.log(Object.keys(modalContent.dimensi).length === 0);
  }

  function openModal(id) {
    content = collections.find((collection) => collection.id === id);
    setModalContent(content);
    setIsOpen(true);
  }

  return (
    <div className="App">
      <div
        className="leading-normal tracking-normal text-indigo-400 p-6 bg-cover bg-fixed"
        style={{ backgroundImage: `url(${header})` }}
      >
        <div className="h-full">
          <div className="w-full container mx-auto">
            <div className="w-full flex items-center justify-between">
              <a
                className="flex items-center text-indigo-400 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
                href="#"
              >
                <img src={logo} className="max-w-lg max-h-10" />
              </a>

              <div className="flex w-1/2 justify-end content-center">
                <a
                  className="inline-block text-blue-300 no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out"
                  href="https://twitter.com/intent/tweet?url=#"
                >
                  <svg
                    className="fill-current h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                  >
                    <path d="M30.063 7.313c-.813 1.125-1.75 2.125-2.875 2.938v.75c0 1.563-.188 3.125-.688 4.625a15.088 15.088 0 0 1-2.063 4.438c-.875 1.438-2 2.688-3.25 3.813a15.015 15.015 0 0 1-4.625 2.563c-1.813.688-3.75 1-5.75 1-3.25 0-6.188-.875-8.875-2.625.438.063.875.125 1.375.125 2.688 0 5.063-.875 7.188-2.5-1.25 0-2.375-.375-3.375-1.125s-1.688-1.688-2.063-2.875c.438.063.813.125 1.125.125.5 0 1-.063 1.5-.25-1.313-.25-2.438-.938-3.313-1.938a5.673 5.673 0 0 1-1.313-3.688v-.063c.813.438 1.688.688 2.625.688a5.228 5.228 0 0 1-1.875-2c-.5-.875-.688-1.813-.688-2.75 0-1.063.25-2.063.75-2.938 1.438 1.75 3.188 3.188 5.25 4.25s4.313 1.688 6.688 1.813a5.579 5.579 0 0 1 1.5-5.438c1.125-1.125 2.5-1.688 4.125-1.688s3.063.625 4.188 1.813a11.48 11.48 0 0 0 3.688-1.375c-.438 1.375-1.313 2.438-2.563 3.188 1.125-.125 2.188-.438 3.313-.875z"></path>
                  </svg>
                </a>
                <a
                  className="inline-block text-blue-300 no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out"
                  href="https://www.facebook.com/sharer/sharer.php?u=#"
                >
                  <svg
                    className="fill-current h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                  >
                    <path d="M19 6h5V0h-5c-3.86 0-7 3.14-7 7v3H8v6h4v16h6V16h5l1-6h-6V7c0-.542.458-1 1-1z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="container pt-12 pb-20 md:pt-24 mx-auto flex flex-wrap flex-col md:flex-row items-center">
            <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
              <div className="pl-3">
                <h1 className="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500">
                    Matahati
                  </span>
                </h1>
                <p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left">
                  adalah brand yang dipakai untuk produk-produk yang dihasilkan
                  oleh <span className="text-orange-500">Craftindo Kreasi</span>
                  .
                </p>
                <button
                  className="bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-3 px-6 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                  type="button"
                >
                  Pelajari
                </button>
              </div>
            </div>

            <div className="w-full xl:w-3/5 p-12 overflow-hidden">
              <img
                className="mx-auto w-full md:w-4/5 transform -rotate-6 transition hover:scale-105 duration-700 ease-in-out hover:rotate-6"
                src={furniture}
              />
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="bg-gray-900 opacity-75 w-full shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <p className="leading-8 text-lg block text-blue-300 py-2 tracking-wider font-bold mb-2">
                  Selain sebagai industri, Craftindo Kreasi adalah laboratorium
                  kreatifitas yang memfasilitasi kegiatan akademis seperti
                  magang dan pelatihan bagi siapapun yang berminat untuk
                  mengembangkan kreatifitas dalam memanfaatkan bonggol jagung
                  menjadi sebuah produk yang memiliki nilai lebih dari sekedar
                  bahan sisa, termasuk mahasiswa dari semua perguruan tinggi
                  maupun masyarakat umum yang memiliki minat untuk mengembangkan
                  kreatifitas.
                </p>
              </div>
            </div>
            <div className="justify-center content-center">
              <img src={logo} className="max-w-sm max-h-40 mx-auto" />
              <img
                className="mx-auto w-full md:w-4/5 transform"
                src={personJahit}
              />
            </div>
          </div>
          <HeroHome></HeroHome>
          <div className="max-w-full">
            <div className="bg-gray-900 opacity-75 w-full shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
              <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
                <h2 className="text-2xl font-extrabold text-white">Koleksi</h2>
                <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-x-6 lg:gap-y-10">
                  {collections.map((collection, index) => (
                    <div
                      className="group relative"
                      onClick={(e) => {
                        e.preventDefault();
                        openModal(collection.id);
                      }}
                      key={collection.id}
                    >
                      <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                        <img
                          src={`/furnitur/${collection.gambar[0]}`}
                          alt={`${collection.nama}`}
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <h3 className="mt-6 text-sm text-white">
                        <a href="#">
                          <span className="absolute inset-0"></span>
                          {collection.nama}
                        </a>
                      </h3>
                      <p className="text-base font-semibold text-white">
                        {`Artikel ${collection.id}`}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {Object.keys(modalContent).length !== 0 &&
            modalContent.constructor === Object && (
              <Transition appear show={isOpen} as={Fragment}>
                <Dialog
                  as="div"
                  className="fixed inset-0 z-10 overflow-y-auto"
                  onClose={closeModal}
                >
                  <div className="min-h-screen px-4 text-center">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Dialog.Overlay className="fixed inset-0" />
                    </Transition.Child>

                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span
                      className="inline-block h-screen align-middle"
                      aria-hidden="true"
                    >
                      &#8203;
                    </span>
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <div className="inline-block w-full max-w-xl md:max-w-2xl lg:max-w-7xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                        <Dialog.Title
                          as="h3"
                          className="text-lg font-medium leading-6 text-gray-900"
                        >
                          Detail Koleksi
                        </Dialog.Title>
                        <div className="mt-2">
                          <h2 className="text-4xl font-extrabold text-gray-900 my-3 text-center">
                            {modalContent.nama}
                          </h2>
                          <p className="text-lg text-gray-500">
                            Berikut ini adalah deskripsi produk dari{" "}
                            {modalContent.nama}
                          </p>
                          <div className="my-10 grid grid-cols-1 gap-6">
                            <div className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50 hover:cursor-pointer">
                              <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white sm:h-12 sm:w-12">
                                <svg
                                  width="48"
                                  height="48"
                                  viewBox="0 0 48 48"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    width="48"
                                    height="48"
                                    rx="8"
                                    fill="#FFEDD5"
                                  />
                                  <path
                                    d="M24 11L35.2583 17.5V30.5L24 37L12.7417 30.5V17.5L24 11Z"
                                    stroke="#FB923C"
                                    strokeWidth="2"
                                  />
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M16.7417 19.8094V28.1906L24 32.3812L31.2584 28.1906V19.8094L24 15.6188L16.7417 19.8094Z"
                                    stroke="#FDBA74"
                                    strokeWidth="2"
                                  />
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M20.7417 22.1196V25.882L24 27.7632L27.2584 25.882V22.1196L24 20.2384L20.7417 22.1196Z"
                                    stroke="#FDBA74"
                                    strokeWidth="2"
                                  />
                                </svg>
                              </div>
                              <div className="ml-4">
                                <p className="text-sm font-medium text-gray-900">
                                  Dimensi
                                </p>
                                <p className="text-sm text-gray-500">
                                  {Object.keys(modalContent.dimensi).length ===
                                  0
                                    ? `Tidak ada keterangan`
                                    : `${modalContent.dimensi.tinggi}cm x ${modalContent.dimensi.panjang}cm x ${modalContent.dimensi.lebar}cm `}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50 hover:cursor-pointer">
                              <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white sm:h-12 sm:w-12">
                                <svg
                                  width="48"
                                  height="48"
                                  viewBox="0 0 48 48"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    width="48"
                                    height="48"
                                    rx="8"
                                    fill="#FFEDD5"
                                  />
                                  <path
                                    d="M28.0413 20L23.9998 13L19.9585 20M32.0828 27.0001L36.1242 34H28.0415M19.9585 34H11.8755L15.9171 27"
                                    stroke="#FB923C"
                                    strokeWidth="2"
                                  />
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M18.804 30H29.1963L24.0001 21L18.804 30Z"
                                    stroke="#FDBA74"
                                    strokeWidth="2"
                                  />
                                </svg>
                              </div>
                              <div className="ml-4">
                                <p className="text-sm font-medium text-gray-900">
                                  Material
                                </p>
                                <p className="text-sm text-gray-500">
                                  {modalContent.material === null
                                    ? `Tidak ada keterangan`
                                    : modalContent.material}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50 hover:cursor-pointer">
                              <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white sm:h-12 sm:w-12">
                                <svg
                                  width="48"
                                  height="48"
                                  viewBox="0 0 48 48"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    width="48"
                                    height="48"
                                    rx="8"
                                    fill="#FFEDD5"
                                  />
                                  <rect
                                    x="13"
                                    y="32"
                                    width="2"
                                    height="4"
                                    fill="#FDBA74"
                                  />
                                  <rect
                                    x="17"
                                    y="28"
                                    width="2"
                                    height="8"
                                    fill="#FDBA74"
                                  />
                                  <rect
                                    x="21"
                                    y="24"
                                    width="2"
                                    height="12"
                                    fill="#FDBA74"
                                  />
                                  <rect
                                    x="25"
                                    y="20"
                                    width="2"
                                    height="16"
                                    fill="#FDBA74"
                                  />
                                  <rect
                                    x="29"
                                    y="16"
                                    width="2"
                                    height="20"
                                    fill="#FB923C"
                                  />
                                  <rect
                                    x="33"
                                    y="12"
                                    width="2"
                                    height="24"
                                    fill="#FB923C"
                                  />
                                </svg>
                              </div>
                              <div className="ml-4">
                                <p className="text-sm font-medium text-gray-900">
                                  Harga
                                </p>
                                <p className="text-sm text-gray-500">
                                  {Object.keys(modalContent.harga).length ===
                                  0 ? (
                                    `Rp${modalContent.harga}`
                                  ) : (
                                    <ul>
                                      <li>
                                        Atas : Rp{modalContent.harga.atas}
                                      </li>
                                      <li>
                                        Bawah : Rp{modalContent.harga.bawah}
                                      </li>
                                    </ul>
                                  )}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mt-6 flex justify-center gap-3 md:gap-5">
                          {modalContent.gambar.map((g, i) => (
                            <div
                              className="w-60 max-h-60 bg-gray-200 rounded-md overflow-hidden group-hover:opacity-75 lg:w-96 lg:max-h-96"
                              key={i}
                            >
                              <img
                                src={`/furnitur/${g}`}
                                alt={g}
                                className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                              />
                            </div>
                          ))}
                        </div>

                        <div className="mt-4">
                          <button
                            type="button"
                            className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                            onClick={closeModal}
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </Transition.Child>
                  </div>
                </Dialog>
              </Transition>
            )}

          <div className="w-full pt-16 pb-6 text-sm text-center md:text-left fade-in">
            &copy; Matahati {tahun}{" "}
            <a
              className="no-underline hover:no-underline"
              href="https://github.com/mmuqiitf"
              target="_blank"
              rel="noreferrer"
            >
              - Design by Muqiit
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
