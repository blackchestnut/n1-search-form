<template>
  <div class='search-form'>
    <div class='basic-fields'>
      <Select
        v-model='deal_type'
        :options='[
          ["sell", "Продажа"],
          ["rent_out", "Аренда"]
        ]'
      />
    </div>
    <div class='basic-fields'>
      <component
        :is='fieldComponent(field)'
        v-for='field in fields'
        :key='field'
        :v-model='field'
        :value='_self[field]'
        @input='(value) => _self[field] = value'
      />
      <!--FieldRubric v-model='rubric' />
      <FieldType v-model='type' />
      <FieldRoomsType v-model='rooms_type' />
      <FieldPrice />
      <FieldArea /-->
      <FieldAddress class='metro' />
    </div>
    <div class='controls'>
      <button class='submit' @click='search'>Показать</button>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';

import Select from '@/components/select';
import * as fields from './fields';

import { cast } from '@/lib/schema';

export default {
  name: 'SearchForm',
  components: {
    ...fields,
    Select
  },
  props: {
    config: { type: Object, required: true },
    params: { type: Object, required: true }
  },
  data() {
    return this.params;
  },
  computed: {
    fields() {
      return this.config?.[this.deal_type]?.[this.rubric] ||
        this.config.defaults;
    },
    // NOTE: there will be a lot of such logic for other fields
    // probably will need to add vuex store into project
    // so this logic can be extracted into store
    rooms_type: {
      get() {
        return [
          ...this.type,
          ...this.rooms,
          ...this.layout_type
        ];
      },
      set(value) {
        this.changeParams({
          ...this.$data,
          type: value,
          rooms:  value,
          layout_type: value
        });
      }
    }
  },
  mounted() {
    // console.log('data', this.$data);
  },
  methods: {
    fieldComponent(field) {
      const componentName = 'Field' + field.replace(
        /(?:_|\b)[a-z]/g,
        match => match.replace('_', '').toUpperCase()
      );

      if (process.env.NODE_ENV === 'development' &&
          !this.$options.components[componentName]) {
        alert(`Component ${componentName} is not registered`);
      }

      return this.$options.components[componentName];
    },
    changeParams(value) {
      const newData = cast(value);

      Object
        .keys(this.$data)
        .forEach(key => this.$data[key] = null);

      Object
        .entries(newData)
        .forEach(entry => Vue.set(this.$data, entry[0], entry[1]));
    },
    search() {
      this.$emit('search', cast(this.$data));
    }
  }
};
</script>

<style scoped lang='sass'>
.search-form
  font-family: PT Sans

.basic-fields
  display: flex
  margin-bottom: 12px

  .expandable-container
    // it is impossible to have both flex-grow with fixed with and text with ellipsis
    // so I have to specify min-width in percents
    min-width: 17.33%

    &.metro
      flex-grow: 1.77
      min-width: 30.67%

.controls
  display: flex

  .submit
    background: #c03c40
    border-radius: 3px
    border: 1px solid #c03c40
    box-sizing: border-box
    color: #fff
    font-size: 17px
    line-height: 36px
    min-width: 159px
    padding: 0 18px
    text-align: center
    margin-left: auto

    &:hover
      background: #d94348

    &:active
      background: #c03c40

/deep/ button
  padding: 0
  appearance: button
  background: none
  border: 0
  cursor: pointer
  font-size: 100%
  font: inherit
  text-align: inherit
  user-select: none

  &:-moz-focusring
    outline: none

  &:focus
    outline: none
</style>
