<template>
  <ExpandableContainer
    :label='label'
    :value='containerValue'
  >
    component
  </ExpandableContainer>
</template>

<script>
import ExpandableContainer from '@/components/expandable_container';

export default {
  name: 'Price',
  components: {
    ExpandableContainer
  },
  props: {
    label: { type: String, required: true }
  },
  computed: {
    containerValue() {
      return null;
    }
  }
};
</script>

<style scoped lang='sass'>
</style>
