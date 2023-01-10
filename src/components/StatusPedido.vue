<script setup lang="ts"></script>

<template>
  <div class="row">
    <div v-for="i in [1,2,3 ]" class="col" style="height: 300px">
      <div
        class="box d-flex px-3 py-2 flex-column align-items-center border"
        style="overflow: scroll; height: 100%"
      >
        <div
          v-for="i in [1,1,1,1,1]"
          class="card text-bg-light mb-3"
          
        >
          <div class="card-header">Header</div>
          <div class="card-body">
            <h5 class="card-title">Light card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.box {
  border-radius: 10px;
  background-color: rgba(181, 181, 255, 0.575);
}
.draggable-item-list-move {
  transition: transform 0.5s;
}
</style>
