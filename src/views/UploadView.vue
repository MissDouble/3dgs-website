<template>
  <div class="container py-5 min-vh-100">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h2>您的建模記錄</h2>
      <button class="btn">➕ 建立新模型</button>
    </div>

    <input
      type="text"
      class="form-control mb-4"
      placeholder="搜尋建模記錄..."
      v-model="search"
    />

    <div class="row">
      <div
        class="col-md-3 mb-4"
        v-for="capture in filteredCaptures"
        :key="capture.id"
      >
        <div class="card h-100">
          <!-- 失敗提示取代圖片 -->
          <div
            v-if="capture.failed"
            class="bg-dark text-warning d-flex justify-content-center align-items-center"
            style="height: 200px; border-radius: .25rem;"
          >
            <p class="m-0 small text-center px-2">
              ❗建模失敗：光線或角度不佳
            </p>
          </div>

          <!-- 成功顯示圖片 -->
          <img
            v-else
            :src="capture.thumbnail"
            class="card-img-top"
            :alt="capture.title"
            style="height: 200px; object-fit: cover;"
          />

          <div class="card-body d-flex flex-column justify-content-between">
            <h5 class="card-title">{{ capture.title }}</h5>

            <div class="mt-auto d-flex justify-content-between">
              <small class="text-muted">{{ capture.date }}</small>
              <button class="btn btn-sm btn-outline-light">⋮</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { captures as captureData } from '../data/contentData.js'  // 引入假資料

const search = ref('')
const captures = ref(captureData)

const filteredCaptures = computed(() => {
  return captures.value.filter(c =>
    c.title.toLowerCase().includes(search.value.toLowerCase())
  )
})
</script>