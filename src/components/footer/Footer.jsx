import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footerColor'>
			<section className="container">
				<div className="row mt-5">
					<div className="col-md-6 col-lg-3 mb-4 mb-md-0 ">
						<Link to="/" ><img src="/assets/logo.png" alt="logo" width="200px" /></Link>
						<p className="mt-4 pe-3 ">Explorez les merveilles du Maroc avec notre guide touristique. Des villes impériales aux déserts spectaculaires, plongez dans la richesse culturelle et la beauté naturelle de ce pays enchanteur.</p>
						<div>
							<h6 className='text-red fw-semibold fontSize18'>Retrouvez-nous sur : </h6>
							<Link to='/'><i class="bi bi-facebook text fs-4 me-3"></i></Link>
							<Link to='/'><i class="bi bi-instagram text fs-4 me-3"></i></Link>
							<Link to='/'><i class="bi bi-linkedin text fs-4"></i></Link>
						</div>
					</div>
					<div className="col-md-6 col-lg-3 mb-4 mb-md-0">
						<h4 className="text-red mb-4 fw-semibold">Nos Categories</h4>
						<p><Link to='/' className="py-1 fontSize17 d-block text">Hôtels</Link></p>
						<p><Link to='/' className="py-1 fontSize17 d-block text">Agences de locations</Link></p>
						<p><Link to='/' className="py-1 fontSize17 d-block text">Guides</Link></p>
						<p><Link to='/' className="py-1 fontSize17 d-block text">Infos pratiques</Link></p>
					</div>
					<div className="col-md-6 col-lg-3 pl-lg-5 mb-4 mb-md-0">
						<h4 className="text-red mb-4 fw-semibold">Liens directs</h4>
						<p><Link to='/' className="py-1 fontSize17 d-block text">Accueil</Link></p>
						<p><Link to='/contact' className="py-1 fontSize17 d-block text">Contact</Link></p>
						<p><Link to='/dashboard' className="py-1 fontSize17 d-block text">Mon Compte</Link></p>
					</div>
					<div className="col-md-6 col-lg-3 mb-4 mb-md-0">
						<h4 className="text-red fw-semibold">Vous avez des questions ?</h4>
						<div className="my-4">
							<p className="fontSize17"><i class="bi bi-telephone-fill text-red align-middle fontSize17 me-1"></i><span className="text">+212 625 856 345</span></p>
							<p className="fontSize17"><i class="bi bi-envelope-fill text-red align-middle fontSize17 me-1"></i><span className="text">guidemorrocco@gmail.com</span></p>
							
						</div>
					</div>
				</div>
				<div className="mt-5">
					<div className="text-center">
						<p>Copyright &copy; 2023 GUIDEMORROCCO. All rights reserved Developed By <Link to='https://adil-ui.github.io/Portfolio/' target='_blank'  className="text-red fw-semibold text-decoration-none">Adil Boussalem</Link> </p>
					</div>
				</div>
			</section>
		</footer>
  )
}

export default Footer