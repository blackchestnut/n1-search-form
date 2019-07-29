<template>
  <ExpandableContainer
    label='Площадь'
    :value='containerValue'
  >
    component
  </ExpandableContainer>
</template>

<script>
import ExpandableContainer from '@/components/expandable_container';

export default {
  name: 'FieldArea',
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
