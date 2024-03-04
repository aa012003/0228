<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <RouterLink to="/" class="navbar-brand">回到前台</RouterLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink to="/admin/product" class="nav-link active">商品列表</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/admin/order" class="nav-link">訂單列表</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="" class="nav-link">優惠卷</RouterLink>
          </li>
          <li class="nav-item">
            <a href="#" @click.prevent="signOut" class="nav-link">登出</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <RouterView> </RouterView>
</template>

<script>
import axios from 'axios';

const { VITE_URL } = import.meta.env;

export default {
  methods: {
    checkAdmin() {
      axios
        .post(`${VITE_URL}/api/user/check`)
        .then(() => {
          alert('登入成功');
        })
        .catch(() => {
          this.$router.push('/login');
        });
    },
    signOut() {
      const api = `${VITE_URL}/logout`;
      axios
        .post(api)
        .then(() => {
          alert('登出成功！');
          document.cookie = 'hexToken=; expires=; path=/';
          this.$router.push('/');
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
  },
  mounted() {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)joyToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    axios.defaults.headers.common.Authorization = token;

    this.checkAdmin();
  },
};
</script>
