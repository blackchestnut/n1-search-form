<template>
  <button
    class='expandable-item'
    @click='click'
    @mouseover='focus'
    @blur='blur'
  >
    <slot />
  </button>
</template>

<script>
// TODO: select next/prev ExpandableItem on up/down keypress
export default {
  name: 'SelectItem',
  props: {
    isBlurOnClick: { type: Boolean, required: false, default: false }
  },
  methods: {
    click() {
      this.$emit('click');
      if (this.isBlurOnClick) {
        this.$el.blur();
      }
    },
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
