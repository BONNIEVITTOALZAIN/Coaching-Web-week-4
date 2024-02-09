import React from 'react';

const Footer = () => {
  return (
    <footer class="footer bg-light mt-5">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <h5 class ='fw-bold'>Tokopedia</h5>
            <ul class="list-unstyled">
              <li><a href="#">Beranda</a></li>
              <li><a href="#">Kategori</a></li>
              <li><a href="#">Produk</a></li>
            </ul>
          </div>
          <div class="col-md-4">
            <h5>Kontak</h5>
            <p>Alamat: Jl. Tokopedia, No. 123</p>
            <p>Email: info@tokopedia.com</p>
            <p>Telepon: 123-456-7890</p>
          </div>
          <div class="col-md-4">
            <h5>Ikuti Kami</h5>
            <ul class="list-inline">
              <li class="list-inline-item"><a href="https://www.facebook.com/tokopedia/"><i class="bi bi-facebook"></i></a></li>
              <li class="list-inline-item"><a href="https://twitter.com/tokopedia?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><i class="bi bi-twitter"></i></a></li>
              <li class="list-inline-item"><a href="https://www.instagram.com/tokopedia/?hl=id"><i class="bi bi-instagram"></i></a></li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-12 text-center">
            <p>&copy; 2024 Tokopedia. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
