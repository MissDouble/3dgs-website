<template>
  <div class="container py-4">

    <!-- Hero 區 -->
    <section class="text-center my-5 position-relative mx-auto rounded overflow-hidden" style="max-width: 1200px; height: 400px;">
      <div id="heroCarousel" class="carousel slide h-100 position-relative">
        <div class="carousel-inner position-relative h-100">
          <div
            v-for="(photo, index) in coverPhotos"
            :key="photo.id"
            class="carousel-item position-absolute top-0 start-0 w-100 h-100"
            :class="{ active: index === activeIndex }"
            style="transition: opacity 0.6s ease;"
          >
            <img
              :src="photo.img"
              :alt="photo.alt"
              class="d-block w-100 h-100 object-fit-cover"
            />
          </div>
        </div>

        <button
          class="carousel-control-prev position-absolute top-50 start-0 translate-middle-y rounded-circle bg-white bg-opacity-50 border border-light shadow"
          type="button"
          @click.prevent="prevSlide"
          aria-label="Previous"
          style="width: 50px; height: 50px;"
        >
          <span class="carousel-control-prev-icon"></span>
        </button>

        <button
          class="carousel-control-next position-absolute top-50 end-0 translate-middle-y rounded-circle bg-white bg-opacity-50 border border-light shadow"
          type="button"
          @click.prevent="nextSlide"
          aria-label="Next"
          style="width: 50px; height: 50px;"
        >
          <span class="carousel-control-next-icon"></span>
        </button>

        <!-- 疊加文字容器，淡入滑動 -->
        <transition name="fade-slide-up" appear>
          <div
            key="hero-text"
            class="hero-overlay d-flex flex-column justify-content-center align-items-center text-white px-3"
            style="
              position: absolute;
              top: 0; left: 0; width: 100%; height: 100%;
              background: linear-gradient(to bottom, rgba(0,0,0,0.45), rgba(0,0,0,0.65));
              text-shadow: 0 0 10px rgba(0,0,0,0.85);
              z-index: 10;
            "
          >
            <h1 class="display-4 fw-bold mb-4 text-center" style="max-width: 90%;">
              輸入照片或影片，即可生成高精度 3D 模型
            </h1>
            <div class="d-inline-flex gap-3" style="min-width: 320px; justify-content: center;">
            <a href="/login" class="btn btn-primary btn-lg shadow" style="min-width: 160px;">
                建立模型
            </a>
            <a href="/download" class="btn btn-success btn-lg shadow" style="min-width: 160px;">
                下載 App
            </a>
            </div>
          </div>
        </transition>
      </div>
    </section>

    <!-- 技術介紹 -->
    <section class="my-5">
  <h2 class="mb-4 text-center fw-bold">3DGS 是什麼？</h2>
  <p class="fs-5 text-center px-3 px-md-0" style="max-width: 800px; margin: 0 auto;">
    3DGS 利用多張物體的照片或影片建立 3D 模型的 AI 技術，能快速、準確還原物體外型。
  </p>
  <div class="ratio ratio-16x9 mt-4 mx-auto" style="max-width: 800px;">
    <iframe
      src="https://www.youtube.com/embed/UxP1ruyFOAQ"
      title="介紹影片"
      allowfullscreen
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    ></iframe>
  </div>
</section>

    <!-- 技術優勢 -->
    <section class="my-5">
      <h2 class="mb-5 text-center fw-bold">技術優勢</h2>
      <div
        v-for="(item, index) in techAdvantages"
        :key="item.id"
        class="row align-items-center mb-5"
        :class="index % 2 === 1 ? 'flex-row-reverse' : 'flex-row'"
      >
        <div
          class="col-md-6 d-flex justify-content-center"
          v-intersect.once="() => fadeIn('img' + index)"
          :class="{ 'fade-slide-in': fadeStates['img' + index] }"
          style="transition-delay: 0.15s"
        >
          <img
            :src="item.img"
            :alt="item.title"
            class="img-fluid rounded-circle shadow-sm"
            style="width: 400px; height: 400px; object-fit: cover;"
          />
        </div>
        <div
          class="col-md-6 d-flex flex-column justify-content-center px-4 px-md-5"
          v-intersect.once="() => fadeIn('text' + index)"
          :class="{ 'fade-slide-in': fadeStates['text' + index] }"
          style="transition-delay: 0.3s"
        >
          <h4 class="fw-semibold mb-3">{{ item.title }}</h4>
          <p class="fs-5 text-secondary">{{ item.description }}</p>
        </div>
      </div>
    </section>

    <!-- 應用案例 -->
    <section class="my-5">
      <h2 class="mb-5 text-center fw-bold">應用案例</h2>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div
          v-for="caseItem in caseStudies"
          :key="caseItem.id"
          class="col"
        >
          <div
            class="card h-100 shadow-sm rounded-4 application-card"
            style="overflow: hidden; transition: transform 0.3s ease;"
          >
            <img
              :src="caseItem.img"
              class="card-img-top"
              :alt="caseItem.title"
              style="height: 180px; object-fit: cover;"
            />
            <div class="card-body d-flex flex-column">
              <h5 class="card-title fw-semibold">{{ caseItem.title }}</h5>
              <p class="card-text flex-grow-1 fs-6 text-secondary">{{ caseItem.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 最新消息 -->
    <section
      class="my-5"
      v-intersect.once="() => fadeIn('news')"
      :class="{ 'fade-slide-in': fadeStates['news'] }"
    >
      <h2 class="mb-5 text-center fw-bold">最新消息</h2>
      <div v-if="newsList.length > 0" class="list-group shadow-sm rounded">
        <router-link
          v-for="news in newsList"
          :key="news.id"
          :to="`/blog/${news.id}`"
          class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
          active-class="active"
        >
          <span>{{ news.title }}</span>
          <small class="text-muted">{{ news.date }}</small>
        </router-link>
      </div>
      <p v-else class="text-muted text-center fs-5 mt-4">目前尚無最新消息</p>
    </section>

  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, getCurrentInstance } from 'vue'
import { newsList } from '../data/news'
import { coverPhotos, techAdvantages, caseStudies } from '../data/contentData.js'

const activeIndex = ref(0)
let intervalId = null

function prevSlide() {
  activeIndex.value = (activeIndex.value + coverPhotos.length - 1) % coverPhotos.length
}

function nextSlide() {
  activeIndex.value = (activeIndex.value + 1) % coverPhotos.length
}

onMounted(() => {
  intervalId = setInterval(() => {
    nextSlide()
  }, 3000)
})

onBeforeUnmount(() => {
  clearInterval(intervalId)
})

// 動畫狀態控制
const fadeStates = ref({})

function fadeIn(key) {
  fadeStates.value[key] = true
}

// 自訂指令 v-intersect，用 IntersectionObserver 觸發動畫
const vIntersect = {
  mounted(el, binding) {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          binding.value()
          observer.unobserve(el)
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
  },
}

// 在 script setup 內註冊全局指令
const instance = getCurrentInstance()
if (instance) {
  instance.appContext.app.directive('intersect', vIntersect)
}
</script>

<style scoped>
.carousel-item {
  transition: opacity 0.6s ease;
  opacity: 0;
  z-index: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.carousel-item.active {
  opacity: 1;
  z-index: 1;
  position: relative;
}

/* Hero 文字疊加 */
.hero-overlay {
  color: white;
  padding: 1rem;
  text-shadow: 0 0 10px rgba(0,0,0,0.85);
}

/* 淡入上升動畫 */
.fade-slide-up-enter-active,
.fade-slide-up-leave-active {
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.fade-slide-up-enter-from,
.fade-slide-up-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.fade-slide-up-enter-to,
.fade-slide-up-leave-from {
  opacity: 1;
  transform: translateY(0);
}

/* 滑入淡入效果 */
.fade-slide-in {
  opacity: 1 !important;
  transform: translateX(0) !important;
  transition: opacity 0.8s ease, transform 0.8s ease;
}
.fade-slide-in:not(.fade-slide-in) {
  opacity: 0;
  transform: translateX(50px);
}

/* 應用案例卡片懸浮 */
.application-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.application-card:hover {
  transform: scale(1.05);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
}
</style>