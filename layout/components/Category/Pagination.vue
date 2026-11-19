<template>
  <ul class="pagination">
    <li
      v-for="pageNumber in totalPages"
      :key="pageNumber"
    >
      <button
        :key="pageNumber"
        class="pagibation-btn"
        :class="{
          current: currentPage === pageNumber,
        }"
        @click="$emit('callback', setPage(pageNumber))"
      >
        {{ pageNumber }}
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Pagination',
  props: ['totalPages'],

  data() {
    return {
      currentPage: 1,
    };
  },
  methods: {
    setPage(pageNumber) {
      this.currentPage = pageNumber;
      return this.currentPage;
    },
  },
};
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 0;

  li {
    margin: 0 5px;
  }
}

.pagibation-btn {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #ffffff;
  color: #0e0523;
  font-size: 14px;
  font-weight: 500;
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:not(.current):hover {
    background-color: #9a9aab;
    color: #ffffff;
  }
}

.current {
  background-color: #f4503e;
  color: #ffffff;
}
</style>
