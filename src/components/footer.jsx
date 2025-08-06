
const footer = () => {
  return (
    <div className="footer bg-zinc-800 text-white p-10 flex flex-col items-center gap-6">
        <h1 className="text-3xl font-bold">
            Gibran's React
            Portfolio
        </h1>
        <div className="links flex flex-col sm:flex-row gap-4">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
        </div>
        <div className="social-icons flex gap-4">
            <a href="https://github.com/ZenGBRN">
                <i className="ri-github-fill ri-2x"></i>
            </a>
            <a href="https://www.linkedin.com/in/gibran-muhammad-2285ab279">
                <i className="ri-linkedin-box-fill ri-2x"></i>
            </a>
            <a href="https://www.instagram.com/dzehbran/">
                <i className="ri-instagram-fill ri-2x"></i>
            </a>
        </div>

        <div>
            <p className="text-sm opacity-70">© 2025 Gibran. Informatics, Telkom University.</p> 
            <p className="text-sm opacity-90"><span>contact person </span><span className="text-blue-500"><a href="https://wa.me/6282161863544">+62 821-6186-3544</a></span></p>
        </div>

    </div>
  )
}

export default footer