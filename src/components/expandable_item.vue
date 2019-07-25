<template>
  <button class='expandable-item' @mouseover='focus' @blur='blur'>
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
    },
    blur() {
      this.$root.$emit('expandable:blur');
    }
  }
};
</script>

<style scoped lang='sass'>
.expandable-item
  display: block
  line-height: 36px
  padding: 0 18px 0 12px
  white-space: nowrap
  width: 100%

  &:focus
    background: #f2f2f2
</style>
