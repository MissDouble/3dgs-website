<template>
  <div class="container py-5" style="max-width: 400px;">
    <h2 class="mb-4 text-center">登入</h2>
    <form @submit.prevent="handleLogin">
      <div class="mb-3">
        <label for="email" class="form-label">電子郵件</label>
        <input v-model="email" type="email" class="form-control" id="email" required />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">密碼</label>
        <input v-model="password" type="password" class="form-control" id="password" required />
      </div>
      <button type="submit" class="btn btn-primary w-100">登入</button>
    </form>
    <p class="mt-3 text-center text-muted">
      尚未有帳號？ <router-link to="/register">註冊</router-link>
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
// 你可以用 Pinia 或 Vuex 來管理登入狀態
const email = ref('')
const password = ref('')
const router = useRouter()

function handleLogin() {
  // 這裡應該要呼叫 API 驗證帳密
  // 成功後設定登入狀態（例如 Pinia）並導向我的模型頁面
  if (email.value && password.value) {
    // 模擬登入成功
    localStorage.setItem('token', 'fake-jwt-token')
    router.push('/upload')
  } else {
    alert('請輸入帳號密碼')
  }
}
</script>