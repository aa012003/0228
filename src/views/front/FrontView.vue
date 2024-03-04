<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <RouterLink to="/" class="navbar-brand">Logo</RouterLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link" aria-current="page">首頁</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/about" class="nav-link ">常見問題</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/products" class="nav-link">所有商品</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/cart" class="nav-link">購物車</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/login" class="nav-link">後台登入</RouterLink>
          </li>
        </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  <RouterView> </RouterView>
</template>
