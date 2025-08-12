<template>
  <div class="container py-5">
    <h2>最新消息</h2>
    <ul class="list-group">
      <li v-for="news in newsList" :key="news.id" class="list-group-item">
        <router-link :to="`/blog/${news.id}`">
          {{ news.title }}
        </router-link>
        <br>
        <small class="text-muted">{{ news.date }}</small>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { newsList } from '../data/news'
</script>