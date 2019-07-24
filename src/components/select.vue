<template>
  <div class='n1-select'>
    {{ name }}
  </div>
</template>

<script>
export default {
  name: 'N1Select',
  props: {
    name: { type: String, required: true },
    options: { type: Object, required: true }
  }
};
</script>

<style lang='sass'>
.n1-select
  background: #fff
  border: 1px solid #d9d9d9
  box-sizing: border-box
  font-size: 17px
  line-height: 36px
  padding: 0 12px

  &:first-child
    border-top-left-radius: 4px
    border-bottom-left-radius: 4px

  &:last-child
    border-top-right-radius: 4px
    border-bottom-right-radius: 4px

.n1-select + .n1-select
  border-left: none
</style>
