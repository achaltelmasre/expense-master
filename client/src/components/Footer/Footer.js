import "./Footer.css";
import { Link } from "react-router-dom";
// import logo from "./../../views/Home/img/logo.png"

const Footer = () =>
{ 
  
  return (
    <>
              
<footer class="  text-lg-s bg-dark text-light  ">
  <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    
    <div class="me-5 d-none d-sm-block">
      <span>Get connected with Green Hub</span>
    </div>
  
    <div>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-twitter"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-google"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-instagram"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-linkedin"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-github"></i>
      </a>
    </div>

  </section>

  <section class="">
    <div class="container text-md-start mt-5 ">
 
      <div class="row mt-3">
       
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
     
          <h6 class="text-uppercase fw-bold mb-4">
               {/* <img src={logo} alt="logo" height="80px" /> */}
               <span className="text-green fs-2">Green</span>  <span className="text-red fs-2">Hub</span>
          </h6>
          <p>
          It's retail shop for daily needs , widely used by people living in and around
          </p>
        </div>
     

        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
      
          <h6 class="text-uppercase fw-bold mb-4">
            Products
          </h6>
          <p>
            <a href="./../" class="text-reset a">React</a>
          </p>
          <p>
            <a href="#!" class="text-reset a">HTML</a>
          </p>
          <p>
            <a href="#!" class="text-reset a">CSS</a>
          </p>
          <p>
            <a href="#!" class="text-reset a">Bootstrap</a>
          </p>
        </div>
  

        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 ms-5">
         
          <h6 class="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <Link  to="/" class="text-reset ">Home</Link>
          </p>
          <p>
            <Link  to="/about" class="text-reset a ">About</Link>
          </p>
          <p>
            <Link to="/order" class="text-reset">Orders</Link>
          </p>
          <p>
            <Link to="/Review" class="text-reset">Review</Link>
          </p>
          <p>
            <Link to="/contact" class="text-reset">Contact</Link>
          </p>
        </div>

     
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
         
          <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i class="fas fa-home me-3"></i> pune , 411001</p>
          <p>
            <i class="fas fa-envelope me-3"></i>
            greenhub@.com
          </p>
          <p><i class="fas fa-phone me-3"></i> + 01 234 567 88</p>
          <p><i class="fas fa-print me-3"></i> + 01 234 567 89</p>
        </div>
       
      </div>
      
    </div>
  </section>
  {/* style="background-color: rgba(0, 0, 0, 0.05);" */}
  <div class="text-center p-4" >
   made with ❤️
    <a class="text-reset fw-bold " href="https://mdbootstrap.com/">Green Hub ❤️</a>
  </div>
 
</footer>

    </>
  );
}
export default  Footer;