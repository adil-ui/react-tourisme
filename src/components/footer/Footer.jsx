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
						<p className="mt-4 pe-3 ">Explore the wonders of Morocco with our tour guide. From imperial cities to spectacular deserts, immerse yourself in the cultural richness and natural beauty of this enchanting country.</p>
						<div>
							<h6 className='text-red fw-semibold fontSize18'>Follow us on : </h6>
							<Link to='/'><i class="bi bi-facebook text fs-4 me-3"></i></Link>
							<Link to='/'><i class="bi bi-instagram text fs-4 me-3"></i></Link>
							<Link to='/'><i class="bi bi-linkedin text fs-4"></i></Link>
						</div>
					</div>
					<div className="col-md-6 col-lg-3 mb-4 mb-md-0">
						<h4 className="text-red mb-4 fw-semibold">Our Categories</h4>
						<p><Link to='/hotels' className="py-1 fontSize17 d-block text">Hotels</Link></p>
						<p><Link to='/agencies' className="py-1 fontSize17 d-block text">Car rental agencies</Link></p>
						<p><Link to='/guides' className="py-1 fontSize17 d-block text">Tourist guides</Link></p>
						<p><Link to='/practical-info' className="py-1 fontSize17 d-block text">Practical infos</Link></p>
					</div>
					<div className="col-md-6 col-lg-3 pl-lg-5 mb-4 mb-md-0">
						<h4 className="text-red mb-4 fw-semibold">Quick links</h4>
						<p><Link to='/' className="py-1 fontSize17 d-block text">Home</Link></p>
						<p><Link to='/login' className="py-1 fontSize17 d-block text">Sign in</Link></p>
						<p><Link to='/sign-up' className="py-1 fontSize17 d-block text">	Sign up</Link></p>
					</div>
					<div className="col-md-6 col-lg-3 mb-4 mb-md-0">
						<h4 className="text-red fw-semibold">Do you have any questions?</h4>
						<div className="my-4">
							<p className="fontSize17"><i class="bi bi-telephone-fill text-red align-middle fontSize17 me-1"></i><span className="text">+212 625 856 345</span></p>
							<p className="fontSize17"><i class="bi bi-envelope-fill text-red align-middle fontSize17 me-1"></i><span className="text">guidemorrocco@gmail.com</span></p>

						</div>
					</div>
				</div>
				<div className="mt-5">
					<div className="text-center">
						<p>Copyright &copy; 2023 GUIDEMORROCCO. All rights reserved Developed By <Link to='https://adil-ui.github.io/Portfolio/' target='_blank' className="text-red fw-semibold text-decoration-none">Adil Boussalem</Link> </p>
					</div>
				</div>
			</section>
		</footer>
	)
}

export default Footer