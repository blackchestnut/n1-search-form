<template>
  <div class='n1-search-form'>
    <Select
      name='rubric'
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
    <!--Select
      name='rooms'
      :options='{
        studio: "Студия",
        1: "1-комнатная",
        2: "2-комнатная",
        3: "3-комнатная",
        4: "4-комнатная",
        "5+": "5-комнатная и более",
        free: "Свободная планировка"
      }'
    /-->
  </div>
</template>

<script>
import Vue from 'vue';

import Select from '@/components/select';
import schema from '@/lib/schema';

export default {
  name: 'N1SearchForm',
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

      console.log(this.rubric);
    }
  },
  mounted() {
    console.log(this.rubric);
  }
};
</script>

<style lang='sass'>
.n1-search-form
  font-family: PT Sans
  display: flex
</style>
