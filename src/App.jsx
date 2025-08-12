import DataIMage, { listProyek } from "./data";
import {listTools} from "./data";

function App() {

  return (
    <>
    {/* hero */}
        <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1" id="home">
          <div className="animate__animated animate__fadeInUp animate__delay-2s">
            <div className="flex items-center gap-3 mb-6 bg-zinc-800 p-4 rounded-2xl">
              <img src={DataIMage.HeroImage} alt="Hero Image" className="w-10 rounded-md" loading="lazy"/>
              <q>Kreatifitas tanpa batas 💪🧠</q>
            </div>
            <h1 className="text-5xl/tight font-bold mb-6">Halo, Saya Gibran Muhammad Niswar Said</h1>
            <p className="text-base/loose mb-6 opacity-50"> Saya adalah Mahasiswa Undergraduate di Universitas Telkom, S1 Teknik Informatika. Mempunyai kemampuan dalam pengembangan web dan mendesain antarmuka pengguna dalam aplikasi atau website yang responsif. Memiliki kemampuan dalam mendesain, menganalisis masalah, dan mampu bekerja dalam tim. Memanfaatkan AI Tools untuk membantu pengembangan dan debugging pada web dan software.</p>
            <div className="flex items-center sm:gap-4 gap-2">
              <a href="https://drive.google.com/file/d/1uzqNqY3Ef3PHxnEu1NamSR88ROHlXTVr/view?usp=sharing" className="bg-blue-500 text-white p-4 rounded-2xl hover:bg-blue-600 transition duration-300">View CV <i class="ri-file-text-line"></i></a>
              <a href="#projects" className="bg-green-500 text-white p-4 rounded-2xl hover:bg-green-600 transition duration-300">Projects <i className="ri-arrow-down-line ri-lg"></i></a>
            </div>
          </div>
          <img src={DataIMage.HeroImage} alt="Hero Image" className="rounded-4xl w-[500px] md:ml-auto animate__animated animate__fadeInUp animate__delay-3s" loading="lazy"/>
        </div>
        {/* hero */}

        {/* about */}
        <div className="tentang mt-32 py-10" id="about">
          <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg" data-aos="fade-up" data-aos-duration="1000">
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
        </div>
          {/* tentang */}
          
        {/* skills */}
        <div className="skills mt-32 flex flex-col items-center" id="skills">
          <h1 className="text-3xl/snug font-bold mb-10" data-aos="fade-up" data-aos-duration="1000">Skills</h1>
          <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50 text-center" data-aos="fade-up" data-aos-duration="1000" aos-data-delay="300">
            Berikut ini beberapa skills yang biasa saya pakai untuk pembuatan Website ataupun Design
          </p>
          <div className="skills-box mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
            {/* Skill 1 */}
            <div
              className="bg-zinc-800 p-7 rounded-3xl shadow-lg flex flex-col items-center gap-4 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:bg-zinc-700 hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-duration="1000"
              aos-data-delay="100"
            >
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-16 mb-2" loading="lazy" />
              <h2 className="text-xl font-semibold text-center">React JS</h2>
              <p className="text-sm opacity-70 text-center">Library JavaScript untuk membangun antarmuka pengguna interaktif.</p>
            </div>
            {/* Skill 2 */}
            <div
              className="bg-zinc-800 p-7 rounded-3xl shadow-lg flex flex-col items-center gap-4 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:bg-zinc-700 hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-duration="1000"
              aos-data-delay="200"
            >
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-16 mb-2" loading="lazy" />
              <h2 className="text-xl font-semibold text-center">JavaScript</h2>
              <p className="text-sm opacity-70 text-center">Bahasa pemrograman utama untuk pengembangan web interaktif.</p>
            </div>
            {/* Skill 3 */}
            <div
              className="bg-zinc-800 p-7 rounded-3xl shadow-lg flex flex-col items-center gap-4 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:bg-zinc-700 hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-duration="1000"
              aos-data-delay="300"
            >
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" className="w-16 mb-2" loading="lazy" />
              <h2 className="text-xl font-semibold text-center">HTML5</h2>
              <p className="text-sm opacity-70 text-center">Struktur dasar halaman web modern dan responsif.</p>
            </div>
            {/* Skill 4 */}
            <div
              className="bg-zinc-800 p-7 rounded-3xl shadow-lg flex flex-col items-center gap-4 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:bg-zinc-700 hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-duration="1000"
              aos-data-delay="400"
            >
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" className="w-16 mb-2" loading="lazy" />
              <h2 className="text-xl font-semibold text-center">CSS3</h2>
              <p className="text-sm opacity-70 text-center">Mengatur tampilan dan desain halaman web.</p>
            </div>
            {/* Skill 5 */}
            <div
              className="bg-zinc-800 p-7 rounded-3xl shadow-lg flex flex-col items-center gap-4 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:bg-zinc-700 hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-duration="1000"
              aos-data-delay="500"
            >
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" className="w-16 mb-2" loading="lazy" />
              <h2 className="text-xl font-semibold text-center">Figma</h2>
              <p className="text-sm opacity-70 text-center">Tools untuk desain UI/UX dan prototyping aplikasi/web.</p>
            </div>
            {/* Skill 6 */}
            <div
              className="bg-zinc-800 p-7 rounded-3xl shadow-lg flex flex-col items-center gap-4 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:bg-zinc-700 hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-duration="1000"
              aos-data-delay="600"
            >
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" className="w-16 mb-2" loading="lazy" />
              <h2 className="text-xl font-semibold text-center">Tailwind CSS</h2>
              <p className="text-sm opacity-70 text-center">Framework CSS untuk desain responsif dan kustomisasi cepat.</p>
            </div>
          </div>
        </div>
        {/* skills */}
   

         {/* tools */}
          <div className="tools mt-32">
            <h1 className="text-3xl/snug font-bold mb-10" data-aos="fade-up" data-aos-duration="1000">Tools & Technologies</h1>
            <p className="xl:w-2/5 1g:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50" data-aos="fade-up" data-aos-duration="1000" aos-data-delay="300">Berikut ini beberapa tools yang biasa saya pakai untuk pembuatan Website ataupun Design</p>
            <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
              {listTools.map((tool) => (
                <div key={tool.id} className="bg-zinc-800 p-6 rounded-lg flex items-center gap-4" data-aos="flip-left" data-aos-duration="1000" aos-data-delay={tool.dad}>
                  <img src={tool.gambar} alt={tool.nama} className="w-12" />
                  <div>
                    <h2 className="text-xl font-semibold">{tool.nama}</h2>
                    <p className="text-sm opacity-70">{tool.ket}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        {/* tools */}

        {/* projects */}
        <div className="project mt-32 py-10" id="projects">
          <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000">Projects</h1>
          <p className="text-base/loose text-center opacity-50" data-aos="fade-up" data-aos-duration="1000" aos-data-delay="300">Berikut adalah beberapa proyek yang telah saya kerjakan:</p>
          <div className="project-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 gap-4">
            {listProyek.map((project) => (
              <div key={project.id} className="p-4 bg-zinc-800 rounded-md" data-aos="zoom-in" data-aos-duration="1000" aos-data-delay={project.dad}>
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
                    <a href="#" className="bg-blue-500 p-3 rounded-lg block border border-zinc-600 hover:bg-blue-600 text-white transition duration-300">View Project on CV</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* projects */}

        {/* contact */}
        <div className="contact mt-32 p-10" id="contact">
          <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000">Contact Me</h1>
          <p className="text-base/loose text-center mb-10 opacity-50" data-aos="fade-up" data-aos-duration="1000" aos-data-delay="300">Terhubung bersama dengan kirim pesan melalui Email</p>
          <form action="https://formsubmit.co/gibranmunisa@gmail.com" method="POST"  className="w-fit mx-auto bg-zinc-800 p-10 rounded-md" autoComplete="off" data-aos="fade-up" data-aos-duration="1000" aos-data-delay="500">
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
        {/* contact */}
    </>

  );
};

export default App;
