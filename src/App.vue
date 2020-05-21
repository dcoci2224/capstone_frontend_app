<template>
  <!-- <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="/">2019 RWC</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="">
              Home
              <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/countries">Teams</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/">Pools</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/">Match Results</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/carted_products">Shopping cart</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Login
            </a>
            <div class="dropdown-menu" aria-labelledby="Login">
              <a class="dropdown-item" href="/login">Login</a>
              <a class="dropdown-item" href="/logout">Logout</a>
              <a class="dropdown-item" href="/signup">Signup</a>
            </div>
          </li>
        </ul>
      </div>
    </nav> -->

  <!-- <div id="nav"> -->

  <!-- Wrapper -->
  <div id="wrapper">
    <!-- Header -->
    <header id="header">
      <div class="inner">
        <!-- Nav -->

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a href="/" class="logo">
            <span class="symbol">
              <img src="https://www.fijitimes.com/wp-content/uploads/2018/12/Rugby-World-Cup-2019.png" alt="" />
            </span>
            <span class="title">2019 RWC</span>
          </a>

          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="/countries">
                  Home
                  <span class="sr-only">(current)</span>
                </a>

                <!-- <li class="nav-item">
                <router-link class="nav-link" to="/countries">Teams</router-link>
              </li> -->
              </li>

              <li class="nav-item">
                <a class="nav-link" href="/countries">Teams</a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="/match_results">Match Results</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/timelines">RWC History</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/next_rwcs">2023 RWC</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/carted_products">Shopping cart</a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Login
                </a>
                <div class="dropdown-menu" aria-labelledby="Login">
                  <a class="dropdown-item" href="/login">Login</a>
                  <a class="dropdown-item" href="/logout">Logout</a>
                  <a class="dropdown-item" href="/signup">Signup</a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>

    <!-- Main -->
    <div id="main">
      <div class="inner">
        <header>
          <!-- <h1>
            <span class="image">
              <img
                src="https://www.daimani.com/dvh-media/190828-20-Copyright-STH-Japan-Stade1-1920x1080-desktop-003-DAIMANI.jpg?context=bWFzdGVyfGltYWdlc3wzOTM5NDh8aW1hZ2UvanBlZ3xoY2EvaDEzLzg4MjgyMDk2MjcxNjYvMTkwODI4XzIwX0NvcHlyaWdodF9TVEhfSmFwYW5fU3RhZGUxXzE5MjB4MTA4MF9kZXNrdG9wXzAwM19EQUlNQU5JLmpwZ3xiYzBiOTk3ZDE5NThmNjRjYmNkZTEyN2YzZjQzMjViZDIzYTVjYTY3Y2JkMmNlMjgxOThjODFlOWVjMmZjMTBl"
                alt=""
                height="300"
                width="1900"
                class="center"
              />
            </span>
          </h1> -->
        </header>
      </div>
    </div>

    <!-- <div class="container"> -->
    <router-view />

    <!-- Footer -->
    <footer id="footer">
      <div class="inner">
        <section>
          <h2>Subscribe</h2>
          <form method="post" action="#">
            <div class="fields">
              <div class="field half">
                <input type="text" name="name" id="name" placeholder="Name" />
              </div>
              <div class="field half">
                <input type="email" name="email" id="email" placeholder="Email" />
              </div>
              <!-- <div class="field">
                <textarea name="message" id="message" placeholder="Message"></textarea>
              </div> -->
            </div>
            <ul class="actions">
              <li><input type="submit" value="Send" class="primary" /></li>
            </ul>
          </form>
        </section>
        <section>
          <h2>Follow</h2>
          <ul class="icons">
            <li>
              <a href="#" class="icon brands style2 fa-twitter"><span class="label">Twitter</span></a>
            </li>
            <li>
              <a href="/login" class="icon brands style2 fa-facebook-f"><span class="label">Facebook</span></a>
            </li>
            <li>
              <a href="#" class="icon brands style2 fa-instagram"><span class="label">Instagram</span></a>
            </li>
            <li>
              <a href="#" class="icon brands style2 fa-github"><span class="label">GitHub</span></a>
            </li>
            <li>
              <a href="#" class="icon solid style2 fa-envelope"><span class="label">Email</span></a>
            </li>
          </ul>
        </section>
        <ul class="copyright">
          <li>&copy; Untitled. All rights reserved</li>
          <li>
            Design:
            <a href="http://html5up.net">HTML5 UP</a>
          </li>
        </ul>
      </div>
    </footer>
    <!-- </div> -->
  </div>
</template>

<style>
img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
}
/* h1 {
  border: 10px solid transparent;
  padding: 65px;
  border-image: url(https://www.clipartkey.com/mpngs/m/164-1643101_trophy-clipart-rugby-world-cup-webb-ellis-trophy.png)
    30 round;
  font-family: Arial, Helvetica, sans-serif;
} */
body {
  background-image: url("https://i.pinimg.com/originals/3e/4c/28/3e4c28c78ad8a85a98721bb0bae8cd23.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
}
footer {
  background-image: url("https://www.rugbyworldcup.com/resources/prod/v1.22.0/i/bg-elements/footer-image-desktop@x2.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  color: white;
  font-weight: 900;
}
</style>

<script>
export default {
  data: function() {
    return {
      jwt: null,
    };
  },
  created: function() {
    this.setJwt();
  },
  methods: {
    setJwt: function() {
      this.jwt = localStorage.jwt;
    },
  },
};
</script>
