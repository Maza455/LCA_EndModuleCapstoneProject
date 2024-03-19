<template>
  <div>
    <header>
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
            aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
            aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
            aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://i.postimg.cc/jdxw70B0/natural-science-books-500x286.webp" class="d-block w-100" alt="...">
            <div class="carousel-caption d-md-block">
              <h3>Find Best Deals</h3>
              <p>Eyyyyyyyy Maza</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://i.postimg.cc/c4Pv5grZ/fundamentals-of-chemistry.jpg" class="d-block w-100" alt="...">
            <div class="carousel-caption d-md-block">
              <h3>New User Offer</h3>
              <p>Hello world 60% @Zukisa!!!</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="../assets/imgs/s24-ultra-black.jpeg" class="d-block w-100" alt="..." style="width: 80px;">
            <div class="carousel-caption d-md-block">
              <h3>Think Less, Buy Now</h3>
              <p>Zukisa Maza</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </header>
    <section class="offer">
      <div class="text-center my-5">
        <h1 class="display-4">Offers</h1>
        <hr class="w-25 mx-auto">
      </div>
      <div class="container">
        <div class="row">
          <div style="width:50%!important" class="col-lg-6 col-md-6 col-12  col-xxl-6 grow">
            <figure>
              <img src="https://i.postimg.cc/y8zZ83Bj/1118475801.jpg" alt="offer 1" class="img-fluid content rounded">
            </figure>
          </div>
          <div style="width:50%!important" class="col-lg-6 col-md-6 col-12  col-xxl-6 grow">
            <figure>
              <img src="https://i.postimg.cc/KvGfvWN4/refurb-iphone-12-black-2020-AV1.jpg" alt="offer 1"
                class="img-fluid content rounded">
            </figure>
          </div>
          <div style="width:50%!important" class="col-lg-6 col-md-6 col-12  col-xxl-6 grow">
            <figure>
              <img src="https://i.postimg.cc/c4Pv5grZ/fundamentals-of-chemistry.jpg" alt="offer 1"
                class="img-fluid content rounded">
            </figure>
          </div>
          <div style="width:50%!important" class="col-lg-6 col-md-6 col-12  col-xxl-6 grow">
            <figure>
              <img src="https://i.postimg.cc/YSYYxN3J/44311441.jpg" alt="offer 1" class="img-fluid content rounded">
            </figure>
          </div>
        </div>
      </div>
    </section>
    <section class="offer">
      <div class="text-center my-5">
        <h1 class="display-4">Buy Now</h1>
        <hr class="w-25 mx-auto">
      </div>
      <div class="row py-3">
        <div class="col md-3">
          <div class="card mx-auto" style="width:18rem; margin-bottom: 5%;">
            <img src="https://i.postimg.cc/x8x6SGB6/main-qimg-7a97d8a3e8a9b6553b23f47a5c0c9461.webp" class="card-img"
              alt="mobile">
            <div class="card-body">
              <h5 class="card-title">Books</h5>
              <p class="card-text">Learn the basics of programming with no prior knowledge required. Ideal
                for anyone new to Programming.</p>
            </div>
          </div>
        </div>
        <div class="col md-3">
          <div class="card mx-auto" style="width:18rem; margin-bottom: 5%;">
            <img src="https://i.postimg.cc/y8zZ83Bj/1118475801.jpg" class="card-img" alt="mobile">
            <div class="card-body">
              <h5 class="card-title">Top Deals</h5>
              <p class="card-text">iCare Plus for iPhone extends your warranty coverage to two years.
                iCare Plus also offers a screen repair should your screen need to be replaced. The
                screen repair is subject to a service fee.</p>
            </div>
          </div>
        </div>
        <div class="col md-3">
          <div class="card mx-auto" style="width:18rem; margin-bottom: 5%;">
            <img src="https://i.postimg.cc/x8x6SGB6/main-qimg-7a97d8a3e8a9b6553b23f47a5c0c9461.webp" class="card-img"
              alt="mobile">
            <div class="card-body">
              <h5 class="card-title">Ethical Hacker</h5>
              <p class="card-text">Ethical hacking is discovering the weaknesses and vulnerabilities in a
                network and then using that knowledge to fix those faults.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import '../assets/Css/style.css'

export default {

}
</script>

<style>

</style>