<template>
  <div class='select' :class='{ expanded: isExpanded }'>
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
    <div v-if='isExpanded' class='options'>
      <SelectItem
        v-for='(optionValue, optionKey) in options'
        :key='optionKey'
        :label='optionValue'
      />
    </div>
  </div>
</template>

<script>
import SelectItem from './item';

export default {
  name: 'Select',
  components: {
    SelectItem
  },
  props: {
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

<style scoped lang='sass'>
.select
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

.select + .select .label
  border-left: none

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
    background-image: url('../../assets/select/arrow.svg')
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

.outline
  border: 3px solid transparent

  &.focused
    border-color: #b3ddff
    background: #b3ddff

.options
  background: #fff
  border-radius: 4px
  border: 1px solid #d9d9d9
  position: absolute
  padding: 5px 0
</style>
