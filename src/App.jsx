import DataIMage from "./data";
import {listTools} from "./data";

function App() {

  return (
    <>
        <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
          <div>
            <div className="flex items-center gap-3 mb-6 bg-zinc-800 p-4 rounded-2xl">
              <img src={DataIMage.HeroImage} alt="Hero Image" className="w-10 rounded-md" />
              <q>Great Power Comes with Great Responsibility 💪🧠</q>
            </div>
            <h1 className="text-5xl/tight font-bold mb-6">Halo, Saya Gibran Muhammad Niswar Said</h1>
            <p className="text-base/loose mb-6 opacity-50"> Saya adalah Mahasiswa Undergraduate di Universitas Telkom, S1 Teknik Informatika. Mempunyai kemampuan dalam pengembangan web dan mendesain antarmuka pengguna dalam aplikasi atau website. Memiliki kemampuan dalam mendesain, menganalisis masalah, dan mampu bekerja dalam tim.</p>
            <div className="flex items-center sm:gap-4 gap-2">
              <a href="#" className="bg-blue-500 text-white p-4 rounded-2xl hover:bg-blue-600 transition duration-300">Download CV <i className="ri-download-line ri-lg"></i></a>
              <a href="#" className="bg-green-500 text-white p-4 rounded-2xl hover:bg-green-600 transition duration-300">Projects <i className="ri-arrow-down-line ri-lg"></i></a>
            </div>
          </div>
          <img src={DataIMage.HeroImage} alt="Hero Image" className="w-[500px] md:ml-auto" />
        </div>

        {/* tentang */}
        <div className="tentang mt-32 py-10">
          <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg">
            <img src={DataIMage.HeroImage} alt="Image" className="w-12 rounded-mb mb-10 sm:hidden" />
            <p className="text-base/loose mb-10">Saya adalah seorang pengembang web yang berdedikasi dengan pengalaman dalam membangun aplikasi web yang responsif dan ramah pengguna. Saya memiliki latar belakang yang kuat dalam desain antarmuka pengguna dan pengembangan front-end.</p>
            <div className="flex items-center justify-between">
              <img src={DataIMage.HeroImage} alt="Image" className="w-12 rounded-md sm:block hidden" />
              <div className="flex item-center gap-6">
                <div>
                <h1 className="text-4xl mb-1">
                  2
                  <span className="text-blue-600">+</span>
                </h1>
                <p>Proyek Selesai</p>
                </div>
              </div>
            </div>
          </div>

          <div className="tools mt-32">
            <h1 className="text-3xl font-bold mb-10">Tools & Technologies</h1>
            <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6">
              {listTools.map((tool) => (
                <div key={tool.id} className="bg-zinc-800 p-6 rounded-lg flex items-center gap-4">
                  <img src={tool.gambar} alt={tool.nama} className="w-12" />
                  <div>
                    <h2 className="text-xl font-semibold">{tool.nama}</h2>
                    <p className="text-sm opacity-70">{tool.ket}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
    </>

  );
}

export default App;
