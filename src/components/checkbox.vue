<template>
  <label class='checkbox'>
    <input type='checkbox' :checked='isChecked'>
    <span class='mark' />
    <span v-if='label' class='label'>{{ label }}</span>
  </label>
</template>

<script>
export default {
  name: 'Checkbox',
  props: {
    isChecked: { type: Boolean, required: true },
    label: { type: String, required: false, default: undefined }
  }
};
</script>

<style scoped lang='sass'>
label
  display: flex
  align-items: center

input
  display: none

input:checked + .mark
  background: #0168bb
  border-color: #0168bb

  &:before
    background-image: url('../assets/checkmark.svg')
    background-position: center
    background-repeat: no-repeat
    content: ''
    height: 9px
    left: 50%
    position: absolute
    top: 50%
    transform: translateX(-50%) translateY(-50%)
    width: 9px

.mark
  background: #fff
  border-radius: 4px
  border: 1px solid #d9d9d9
  display: inline-block
  flex-shrink: 0
  height: 18px
  position: relative
  width: 18px

.label
  margin-left: 6px
  color: #000
  font-size: 17px
  line-height: 21px
</style>
