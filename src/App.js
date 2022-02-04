import logo from './images/logo.png';
import header from './images/header.png';
import furniture from './images/furnitur/furniture.png';
import personJahit from './images/person-jahit.png';
import './App.css';
import HeroHome from './HeroHome';

function App() {
  const tahun = new Date().getFullYear()

  return (
    <div className="App">
      <div className='leading-normal tracking-normal text-indigo-400 p-6 bg-cover bg-fixed' style={{ backgroundImage: `url(${header})` }}>
        <div className="h-full">
          <div className="w-full container mx-auto">
            <div className="w-full flex items-center justify-between">
              <a className="flex items-center text-indigo-400 no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="#">
                <img src={logo} className="max-w-lg max-h-10" />
              </a>

              <div className="flex w-1/2 justify-end content-center">
                <a className="inline-block text-blue-300 no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out" href="https://twitter.com/intent/tweet?url=#">
                  <svg className="fill-current h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                    <path
                      d="M30.063 7.313c-.813 1.125-1.75 2.125-2.875 2.938v.75c0 1.563-.188 3.125-.688 4.625a15.088 15.088 0 0 1-2.063 4.438c-.875 1.438-2 2.688-3.25 3.813a15.015 15.015 0 0 1-4.625 2.563c-1.813.688-3.75 1-5.75 1-3.25 0-6.188-.875-8.875-2.625.438.063.875.125 1.375.125 2.688 0 5.063-.875 7.188-2.5-1.25 0-2.375-.375-3.375-1.125s-1.688-1.688-2.063-2.875c.438.063.813.125 1.125.125.5 0 1-.063 1.5-.25-1.313-.25-2.438-.938-3.313-1.938a5.673 5.673 0 0 1-1.313-3.688v-.063c.813.438 1.688.688 2.625.688a5.228 5.228 0 0 1-1.875-2c-.5-.875-.688-1.813-.688-2.75 0-1.063.25-2.063.75-2.938 1.438 1.75 3.188 3.188 5.25 4.25s4.313 1.688 6.688 1.813a5.579 5.579 0 0 1 1.5-5.438c1.125-1.125 2.5-1.688 4.125-1.688s3.063.625 4.188 1.813a11.48 11.48 0 0 0 3.688-1.375c-.438 1.375-1.313 2.438-2.563 3.188 1.125-.125 2.188-.438 3.313-.875z"
                    ></path>
                  </svg>
                </a>
                <a
                  className="inline-block text-blue-300 no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out"
                  href="https://www.facebook.com/sharer/sharer.php?u=#"
                >
                  <svg className="fill-current h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                    <path d="M19 6h5V0h-5c-3.86 0-7 3.14-7 7v3H8v6h4v16h6V16h5l1-6h-6V7c0-.542.458-1 1-1z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="container pt-12 pb-20 md:pt-24 mx-auto flex flex-wrap flex-col md:flex-row items-center">
            <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
              <div className='pl-3'>
                <h1 className="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500">
                    Matahati
                  </span>

                </h1>
                <p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left">
                  adalah brand yang dipakai untuk produk-produk yang dihasilkan oleh <span className='text-orange-500'>Craftindo Kreasi</span>.
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
              <img className="mx-auto w-full md:w-4/5 transform -rotate-6 transition hover:scale-105 duration-700 ease-in-out hover:rotate-6" src={furniture} />
            </div>


          </div>
          <div className="grid grid-cols-2">
            <div class="bg-gray-900 opacity-75 w-full shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
              <div class="mb-4">
                <p class="leading-8 text-lg block text-blue-300 py-2 tracking-wider font-bold mb-2">
                  Selain sebagai industri, Craftindo Kreasi adalah
                  laboratorium kreatifitas yang memfasilitasi kegiatan
                  akademis seperti magang dan pelatihan bagi siapapun
                  yang berminat untuk mengembangkan kreatifitas
                  dalam memanfaatkan bonggol jagung menjadi sebuah
                  produk yang memiliki nilai lebih dari sekedar bahan
                  sisa, termasuk mahasiswa dari semua perguruan tinggi
                  maupun masyarakat umum yang memiliki minat untuk
                  mengembangkan kreatifitas.
                </p>
              </div>
            </div>
            <div className='justify-center content-center'>
              <img src={logo} className="max-w-sm max-h-40 mx-auto" />
              <img className="mx-auto w-full md:w-4/5 transform" src={personJahit} />
            </div>
          </div>
          <HeroHome></HeroHome>


          <div className="w-full pt-16 pb-6 text-sm text-center md:text-left fade-in">
            <a className="text-gray-500 no-underline hover:no-underline" href="#">&copy; Matahati {tahun} </a>
            - Design by Muqiit
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
