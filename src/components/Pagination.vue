<template>
  <div class="pagination">
    <button
      @click="$emit('previousClick')"
      :class="[currentPage === 1 ? 'disable-btn' : '']"
      :disabled="currentPage === 1"
    >
      &laquo;
    </button>
    <span>{{ currentPage }} / {{ totalPages }} </span>
    <button
      @click="$emit('nextClick')"
      :class="[currentPage === totalPages ? 'disable-btn' : '']"
      :disabled="currentPage === totalPages"
    >
      &raquo;
    </button>
  </div>
</template>
<script>
export default {
  name: "Pagination",
  props: {
    currentPage: {
      type: Number,
      required: true,
    },
    totalPages: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style>
.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.pagination button {
  padding: 5px 10px;
  margin: 0 5px;
  border: 1px solid #2e87c3;
  background-color: #2e87c3;
  cursor: pointer;
  color: azure;
}
.disable-btn {
  cursor: none !important;
}
</style>
