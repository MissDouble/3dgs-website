<template>
  <div class="container py-5" v-if="post">
        <!-- Breadcrumb -->
    <nav aria-label="breadcrumb" class="mb-4">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link to="/blog">回部落格文章列表</router-link>
        </li>
      </ol>
    </nav>
    <h2>{{ post.title }}</h2>
    <small class="text-muted">{{ post.date }}</small>
    <hr />
    <p class="mt-4">{{ post.content }}</p>
  </div>
  <div v-else class="container py-5">
    <p class="text-muted">找不到該文章</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { newsList } from '../data/news'

const route = useRoute()
const post = ref(null)

onMounted(() => {
  const id = Number(route.params.id)
  post.value = newsList.find(item => item.id === id) || null
})
</script>