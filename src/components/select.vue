<template>
  <ExpandableContainer :value='currentOption[1]'>
    <ExpandableItem
      v-for='option in options'
      :key='option[0]'
      is-blur-on-click
      @click='() => select(option[0])'
    >
      {{ option[1] }}
    </ExpandableItem>
  </ExpandableContainer>
</template>

<script>
import ExpandableContainer from '@/components/expandable_container';
import ExpandableItem from '@/components/expandable_item';

export default {
  name: 'Select',
  components: {
    ExpandableContainer,
    ExpandableItem
  },
  props: {
    options: { type: Array, required: true },
    value: { type: String, required: false, default: undefined }
  },
  computed: {
    currentOption() {
      return this.options.find(v => v[0] == this.value);
    }
  },
  methods: {
    select(value) {
      this.$emit('input', value);
    }
  }
};
</script>

<style scoped lang='sass'>
</style>
