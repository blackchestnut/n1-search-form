<template>
  <div class='n1-select' :class='{ expanded: isExpanded }'>
    <div class='outline' :class='{ focused: isFocused || isExpanded }'>
      <button
        class='label'
        @click='toggle'
        @focus='focus'
        @blur='blur'
      >
        {{ options[value] }}
      </button>
    </div>
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
    isExpanded: false,
    isFocused: false
  }),
  methods: {
    toggle() {
      this.isExpanded = !this.isExpanded;
    },
    focus() {
      this.isFocused = true;
    },
    blur() {
      this.isFocused = false;
    }
  }
};
</script>

<style lang='sass'>
.n1-select
  position: relative

  &:first-child
    .outline
      border-top-left-radius: 5px
      border-bottom-left-radius: 5px

    .label
      border-top-left-radius: 4px
      border-bottom-left-radius: 4px

  &:last-child
    .outline
      border-top-right-radius: 5px
      border-bottom-right-radius: 5px

    .label
      border-top-right-radius: 4px
      border-bottom-right-radius: 4px

  &.expanded .label:before
    transform: translateY(-50%) rotate(180deg)

.outline
  border: 3px solid transparent

  &.focused
    border-color: #b3ddff
    background: #b3ddff

.label
  background: #fff
  border: 1px solid #d9d9d9
  box-sizing: border-box
  cursor: pointer
  display: block
  font-size: 17px
  line-height: 36px
  outline: none
  overflow: hidden
  padding: 0 36px 0 12px
  position: relative

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
