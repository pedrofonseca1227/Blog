<script setup>
import { onMounted, reactive, ref } from 'vue'
import PostDataService from '../services/PostDataService'

let posts = reactive(ref())

onMounted(() => {
  PostDataService.getAll()
  .then(response => response.json())
  .then(response => {
    console.log(response.data)
  })
})

</script>

<template>
<div class="list row">
  <div class="col-md-8">
    <h4>Todos os Posts</h4>
    <ul class="list-group">
      <li class="list-group-item">Teste</li>
      <li class="list-group-item">Teste 1</li>
    </ul>
  </div>
</div>
</template>
