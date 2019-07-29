<template>
  <div
    class='expandable-container'
    :class='{ expanded: isExpanded }'
  >
    <button
      class='label-container'
      :class='{ focused: isExpanded || isFocused }'
      @click='toggle'
      @focus='focus'
      @blur='blur'
    >
      <span v-if='isFocused || isExpanded' class='outline' />
      <span class='label' :class='{ value: !!value }'>
        {{ value || label }}
      </span>
    </button>
    <div v-if='isExpanded' class='content'>
      <slot />
    </div>
  </div>
</template>

<script>
import delay from 'delay';

// TODO: blur on esc keypress
export default {
  name: 'ExpandableContainer',
  components: {
  },
  props: {
    value: { type: String, required: false, default: undefined },
    label: { type: String, required: false, default: undefined }
  },
  data: () => ({
    isExpanded: false,
    isFocused: false
  }),
  created() {
    this.$root.$on('expandable:blur', this.expandableBlur);
  },
  beforeDestroy() {
    this.$root.$off('expandable:blur', this.expandableBlur);
  },
  methods: {
    toggle() {
      this.isExpanded = !this.isExpanded;
    },
    focus() {
      this.isFocused = true;
    },
    blur() {
      this.isFocused = false;
      this.$root.$emit('expandable:blur');
    },
    async expandableBlur() {
      if (!this.isExpanded && !this.isFocused) { return; }

      await delay();

      if (!this.$el.contains(document.activeElement)) {
        this.isFocused = false;
        this.isExpanded = false;
      }
    }
  }
};
</script>

<style scoped lang='sass'>
.expandable-container
  position: relative
  flex-grow: 1
  min-width: 0

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
  width: 100%

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
  color: #808080
  background: #fff
  border: 1px solid #d9d9d9
  box-sizing: border-box
  display: block
  font-size: 17px
  line-height: 36px
  padding: 0 36px 0 12px
  position: relative

  overflow: hidden
  text-overflow: ellipsis
  white-space: nowrap


  &.value
    color: #000

  &:before
    background-image: url('../assets/expandable_arrow.svg')
    background-position: center
    background-repeat: no-repeat
    content: ''
    height: 20px
    position: absolute
    right: 8px
    top: 50%
    transform: translateY(-50%)
    transition: transform 0.25s ease
    width: 20px

.content
  background: #fff
  border-radius: 4px
  border: 1px solid #d9d9d9
  margin-top: 6px
  padding: 5px 0
  position: absolute
  z-index: 1
</style>
