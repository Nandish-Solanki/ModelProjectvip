import React from 'react'
import { Link } from 'react-router-dom'

function Appsidebar() {
  return (
    <div class="flex-shrink-0 p-3">
      <Link to="/" class="d-flex align-items-center pb-3 mb-3 link-body-emphasis text-decoration-none border-bottom">
        <span class="fs-5 fw-semibold">Sidebar</span>
      </Link>
      <ul class="list-unstyled ps-0">
        <li class="mb-1">
          <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="false">
            Home
          </button>
          <div class="collapse" id="home-collapse">
            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li><Link to="/dashboard" class="link-body-emphasis d-inline-flex text-decoration-none rounded">main</Link></li>
              <li><Link to="dashboard" class="link-body-emphasis d-inline-flex text-decoration-none rounded">dashboard</Link></li>
              <li><Link to="employee" class="link-body-emphasis d-inline-flex text-decoration-none rounded">Employee</Link></li>
            </ul>
          </div>
        </li>
        </ul>
        </div>
        
       
  )
}

export default Appsidebar