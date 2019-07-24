<template>
  <button class='select-item' @mouseover='focus'>
    {{ label }}
  </button>
</template>

<script>
export default {
  name: 'SelectItem',
  props: {
    label: { type: String, required: true }
  },
  methods: {
    focus() {
      this.$el.focus();
    }
  }
};
</script>

<style scoped lang='sass'>
.select-item
  display: block
  line-height: 36px
  padding: 0 18px 0 12px
  white-space: nowrap
  width: 100%

  &:focus
    background: #f2f2f2
</style>
