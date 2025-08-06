import DataIMage, { listProyek } from "./data";
import {listTools} from "./data";

function App() {

  return (
    <>
        <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
          <div>
            <div className="flex items-center gap-3 mb-6 bg-zinc-800 p-4 rounded-2xl">
              <img src={DataIMage.HeroImage} alt="Hero Image" className="w-10 rounded-md" loading="lazy"/>
              <q>Great Power Comes with Great Responsibility 💪🧠</q>
            </div>
            <h1 className="text-5xl/tight font-bold mb-6">Halo, Saya Gibran Muhammad Niswar Said</h1>
            <p className="text-base/loose mb-6 opacity-50"> Saya adalah Mahasiswa Undergraduate di Universitas Telkom, S1 Teknik Informatika. Mempunyai kemampuan dalam pengembangan web dan mendesain antarmuka pengguna dalam aplikasi atau website. Memiliki kemampuan dalam mendesain, menganalisis masalah, dan mampu bekerja dalam tim.</p>
            <div className="flex items-center sm:gap-4 gap-2">
              <a href="#" className="bg-blue-500 text-white p-4 rounded-2xl hover:bg-blue-600 transition duration-300">Download CV <i className="ri-download-line ri-lg"></i></a>
              <a href="#" className="bg-green-500 text-white p-4 rounded-2xl hover:bg-green-600 transition duration-300">Projects <i className="ri-arrow-down-line ri-lg"></i></a>
            </div>
          </div>
          <img src={DataIMage.HeroImage} alt="Hero Image" className="w-[500px] md:ml-auto" loading="lazy"/>
        </div>

        {/* tentang */}
        <div className="tentang mt-32 py-10">
          <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg">
            <img src={DataIMage.HeroImage} alt="Image" className="w-12 rounded-mb mb-10 sm:hidden" loading="lazy"/>
            <p className="text-base/loose mb-10">Mempunyai pengalaman dalam pengembangan web yang responsif dan ramah pengguna. Memiliki latar belakang dalam desain UI/UX dan pengembangan front-end.</p>
            <div className="flex items-center justify-between">
              <img src={DataIMage.HeroImage} alt="Image" className="w-12 rounded-md sm:block hidden" loading="lazy"/>
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
        {/* tentang */}

        {/* projects */}
        <div className="project mt-32 py-10">
          <h1 className="text-center text-4xl font-bold mb-2">Projects</h1>
          <p className="text-base/loose text-center opacity-50">Berikut adalah beberapa proyek yang telah saya kerjakan:</p>
          <div className="project-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 gap-4">
            {listProyek.map((project) => (
              <div key={project.id} className="p-4 bg-zinc-800 rounded-md">
                <img src={project.gambar} alt="Project Image" />
                <div>
                  <h1 className="text-2xl font-bold my-4">{project.nama}</h1>
                  <p className="text-base/loose mb-4">{project.desk}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, index) => (
                      <p className="py-1 px-3 border-zinc-500 bg-zinc-600 rounded-md font-semibold" key={index}> {tool}</p>
                    ))}
                  </div>
                  <div className="mt-4 text-center">
                    <a href="#" className="bg-blue-500 p-3 rounded-lg block border border-zinc-600 hover:bg-blue-600 text-white transition duration-300">View Project</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* contact */}
        <div className="contact mt-32 p-10">
          <h1 className="text-center text-4xl font-bold mb-2">Contact Me</h1>
          <p className="text-base/loose text-center mb-10 opacity-50">Jika Anda ingin menghubungi saya, silakan kirim pesan melalui Email</p>
          <form action="https://formsubmit.co/gibranmunisa@gmail.com" method="POST"  className="w-fit mx-auto bg-zinc-800 p-10 rounded-md" autoComplete="off">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-semibold">Nama</label>
                <input type="text" name="nama" placeholder="Nama lengkap..." required className="bg-zinc-700 border border-zinc-500 p-2 rounded-md" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-semibold">Email</label>
                <input type="text" name="email" placeholder="email@example.com" required className="bg-zinc-700 border border-zinc-500 p-2 rounded-md" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="pesan" className="font-semibold">Pesan</label>
                <textarea name="message" id="pesan" cols="45" rows="7" placeholder="Pesan anda.." required className="bg-zinc-700 border border-zinc-500 p-2 rounded-md"></textarea>
              </div>
              <div>
                <button type="submit" className="mt-2 bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 transition duration-300">Kirim Pesan</button>
              </div>
            </div>
          </form>
        </div>
    </>

  );
}

export default App;
