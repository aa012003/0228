<template>
  <div class="container">
    <h2 class="mt-5 text-center">後台登入頁面</h2>
    <div class="row justify-content-center">
      <div class="col-8">
      <h1 class="h3 mt-5 mb-3 font-weight-normal">請先登入</h1>
        <form id="form" class="form-signin" @submit.prevent="login">
          <div class="form-floating mb-3">
            <input
              type="email"
              class="form-control"
              id="username"
              v-model="user.username"
              placeholder="name@example.com"
              required
              autofocus
            />
            <label for="username">Email address</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="password"
              v-model="user.password"
              placeholder="Password"
              required
            />
            <label for="password">Password</label>
          </div>
          <button class="btn btn-lg btn-primary w-100 mt-3" type="submit">登入</button>
        </form>
      </div>
    </div>
    <p class="mt-5 mb-3 text-center">&copy; 2021~∞ - 六角學院</p>
  </div>
</template>

<script>
import axios from 'axios';

const { VITE_URL } = import.meta.env;

export default {
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    login() {
      axios
        .post(`${VITE_URL}/admin/signin`, this.user)

        .then((res) => {
          const { token, expired } = res.data;
          document.cookie = `joyToken=${token}; expires=${new Date(expired)}; path=/`;
          this.$router.push('admin/product');
        })
        .catch((err) => {
          console.log(err);
          alert(err.response.data.message);
        });
    },
  },
};
</script>
