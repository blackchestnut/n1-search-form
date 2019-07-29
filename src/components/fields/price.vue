<template>
  <ExpandableContainer
    label='Цена'
    :value='containerValue'
  >
    component
  </ExpandableContainer>
</template>

<script>
import ExpandableContainer from '@/components/expandable_container';

export default {
  name: 'FieldPrice',
  components: {
    ExpandableContainer
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
