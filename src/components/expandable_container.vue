<template>
  <div class='expandable-container' :class='{ expanded: isExpanded }'>
    <button
      class='label-container'
      :class='{ focused: isExpanded || isFocused }'
      @click='toggle'
      @focus='focus'
      @blur='blur'
    >
      <span v-if='isFocused || isExpanded' class='outline' />
      <span class='label'>
        {{ label }}
      </span>
    </button>
    <div v-if='isExpanded' class='content'>
      <slot />
    </div>
  </div>
</template>

<script>

export default {
  name: 'ExpandableContainer',
  components: {
  },
  props: {
    label: { type: String, required: true }
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

<style scoped lang='sass'>
.expandable-container
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

.expandable-container + .expandable-container .label
  border-left: none

.label-container
  cursor: pointer
  outline: none
  position: relative

  &.focused
    .label
      z-index: 3

    .outline
      background: #b3ddff
      border-color: #b3ddff
      border: 3px solid transparent
      height: calc(100% + 6px)
      left: -3px
      position: absolute
      top: -3px
      width: calc(100% + 6px)
      z-index: 2

.label
  background: #fff
  border: 1px solid #d9d9d9
  box-sizing: border-box
  display: block
  font-size: 17px
  line-height: 36px
  padding: 0 36px 0 12px
  position: relative

.content
  background: #fff
  border-radius: 4px
  border: 1px solid #d9d9d9
  position: absolute
  padding: 5px 0
</style>
