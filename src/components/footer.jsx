
const footer = () => {
  return (
    <div className="footer bg-zinc-800 text-white p-10 flex flex-col items-center gap-6">
        <h1 className="text-3xl font-bold">
            Gibran's
            portfolio
        </h1>
        <div className="links flex flex-col sm:flex-row gap-4">
            <a href="#">Beranda</a>
            <a href="#">About</a>
            <a href="#">Projects</a>
        </div>
        <div className="social-icons flex gap-4">
            <a href="#">
                <i className="ri-github-fill ri-2x"></i>
            </a>
            <a href="#">
                <i className="ri-linkedin-box-fill ri-2x"></i>
            </a>
            <a href="#">
                <i className="ri-instagram-fill ri-2x"></i>
            </a>
            <a href="#">
                <i className="ri-facebook-circle-fill ri-2x"></i>
            </a>
        </div>

    </div>
  )
}

export default footer