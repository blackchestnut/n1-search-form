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
      <!--
        Глеб: У нас нас суммарно более 50 фильтров,
        когда мы добавим их все сюда получится очень жирный компонент,
        как мы будем с этим справляться?
      -->
      <FieldRubric
        v-if='isAllowed("rubric")'
        v-model='rubric'
      />
      <FieldType
        v-if='isAllowed("type")'
        v-model='type'
      />
      <FieldRoomsType
        v-if='isAllowed("rooms_type")'
        v-model='rooms_type'
      />
      <FieldPrice v-if='isAllowed("price")' />
      <FieldArea v-if='isAllowed("area")' />
      <FieldAddress v-if='isAllowed("metro")' class='metro' />
    </div>
    <div class='controls'>
      <button class='submit' @click='search'>Показать</button>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';

import FieldAddress from '@/components/fields/address';
import FieldArea from '@/components/fields/area';
import FieldRoomsType from '@/components/fields/rooms_type';
import FieldRubric from '@/components/fields/rubric';
import FieldPrice from '@/components/fields/price';
import FieldType from '@/components/fields/type';
import Select from '@/components/select';

import { isAllowed } from '@/form.config';
import { cast } from '@/lib/schema';

export default {
  name: 'SearchForm',
  components: {
    FieldAddress,
    FieldArea,
    FieldPrice,
    FieldRoomsType,
    FieldRubric,
    FieldType,
    Select
  },
  props: {
    params: { type: Object, required: true }
  },
  data() {
    // NOTE: think about puttig params into vuex
    return this.params;
  },
  computed: {
    // NOTE: there will be a lot of such logic for other fields
    // probably need to add vuex store into project
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
    isAllowed(field) {
      return isAllowed(field, this.deal_type, this.rubric);
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
