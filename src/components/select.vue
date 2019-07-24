<template>
  <div class='n1-select' :class='{ expanded: isExpanded }'>
    <button class='label' @click='toggle'>
      {{ options[value] }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'N1Select',
  props: {
    name: { type: String, required: true },
    options: { type: Object, required: true },
    value: { type: String, required: false, default: undefined }
  },
  data: () => ({
    isExpanded: false
  }),
  methods: {
    toggle() {
      this.isExpanded = !this.isExpanded;
    }
  }
};
</script>

<style lang='sass'>
.n1-select
  background: #fff
  position: relative

  &:first-child .label
    border-top-left-radius: 4px
    border-bottom-left-radius: 4px

  &:last-child .label
    border-top-right-radius: 4px
    border-bottom-right-radius: 4px

  &.expanded .label:before
    transform: translateY(-50%) rotate(180deg)

  .label
    border: 1px solid #d9d9d9
    box-sizing: border-box
    display: block
    cursor: pointer
    font-size: 17px
    line-height: 36px
    padding: 0 12px
    position: relative
    padding-right: 36px

    &:before
      background-image: url('../assets/select/arrow.svg')
      background-position: center
      background-repeat: no-repeat
      content: ''
      height: 20px
      position: absolute
      right: 8px
      transform: translateY(-50%)
      transition: transform 0.25s ease
      top: 50%
      width: 20px

.n1-select + .n1-select
  border-left: none
</style>
