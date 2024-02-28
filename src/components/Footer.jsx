import React from 'react'
import logo from '../assets/images/Logo2 (2).jpeg'

function Footer() {
  return (
    <div className='footerSection'>
      <div class="container">
  <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top ">
    <div class="col-md-4 d-flex align-items-center">
      <a href="/" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
       <img className='logotop' src={logo} alt="" />
      </a>
      <span class="mb-3 mb-md-0 text-body-primary">© 2023 Seraph, Inc (Thomas Jefferson)</span>
    </div>

    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li class="ms-3"><a class="text-body-secondary" href="#"></a></li>
      <li class="ms-3"><a class="text-body-secondary" href="#"></a></li>
      <li class="ms-3"><a class="text-body-secondary" href="#"></a></li>
    </ul>
  </footer>
</div>
    </div>
  )
}

export default Footer
