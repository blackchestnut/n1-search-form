<template>
  <div class='search-form'>
    <div class='basic-fields'>
      <Select
        v-model='rubric'
        :options='{
          flats: "Квартиры",
          rooms: "Комнаты",
          cottage: "Коттеджи",
          commercial: "Коммерческая",
          dacha: "Дачи, садовые участки",
          land: "Земля",
          garages: "Гаражи, парковки"
        }'
      />
      <ComboBox
        v-if='rubric === "commercial"'
        v-model='rooms_type'
        :options='{
          office: "Офисное помещение",
          universal: "Универсальное помещение",
          shopping: "Торговые площади",
          storage: "Складское помещение",
          production: "Производственное помещение",
          detached: "Отдельностоящее здание",
          business: "Готовый бизнес"
        }'
      />
      <ComboBox
        v-else
        v-model='rooms_type'
        :options='{
          studio: "Студия",
          1: "1-комнатная",
          2: "2-комнатная",
          3: "3-комнатная",
          4: "4-комнатная",
          "5+": "5-комнатная и более",
          free: "Свободная планировка"
        }'
      />
    </div>
    <div class='controls'>
      <button class='submit' @click='search'>Показать</button>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';

import Select from '@/components/select/index';
import schema from '@/lib/schema';

export default {
  name: 'SearchForm',
  components: {
    Select
  },
  props: {
    params: { type: Object, required: true }
  },
  data() {
    return schema.cast(this.params);
  },
  watch: {
    params: function(value, _) {
      const newData = schema.cast(value);

      Object
        .keys(this.$data)
        .forEach(key => this.$data[key] = null);

      Object
        .entries(newData)
        .forEach(entry => Vue.set(this.$data, entry[0], entry[1]));
    }
  },
  methods: {
    search() {
      this.$emit('search', schema.cast(this.$data));
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
