<template>
  <div id='app'>
    <div class='container'>
      <b>Config</b>
      <textarea v-model.lazy='jsonFormConfig' rows='20' />
    </div>
    <div class='header'>
      <div class='container'>
        <SearchForm
          :params='params'
          :config='formConfig'
          @search='search'
        />
      </div>
    </div>
    <div class='container'>
      <b>JSON</b>
      <textarea v-model.lazy='jsonParams' readonly rows='20' />
    </div>
  </div>
</template>

<script>
import SearchForm from './search_form';

export default {
  name: 'Demo',
  components: {
    SearchForm
  },
  data: () => ({
    formConfig: {
      // двухуровневый хеш, где перечислены все возможные варианты полей:
      //   на первом уровне deal_type, на втором rubric,
      //   в качестве значений - список полей массивом строк.
      //   если понадобится кастомизация того, в каком месте должно отображаться
      //   поле, то строки можно заменить на хеши, где будут лежать настройки
      //   кастомизации
      //   {
      //     sell: {
      //       flats: ['rubric', 'rooms_type']
      //       commercial: ['rubric', 'type']
      //     },
      //     defaults: ['rubric', 'type']
      //   }
      //  в финальном варианте, двухуровневый хеш я заменю на одноуровневый,
      //    где в качестве ключа будет выступать хеш со списком полей
      //  {
      //    [{ rubric: 'commercial', deal_type: 'sell' }]: ['rubric', 'type'],
      //    defaults: ['rubric', 'rooms_type']
      //  }
      //  это даст больше возможностей для кастомизации, но для текущей демки
      //    это вариант не удобен, т.к. хеш в качестве ключа в хеше не
      //    сериализуются в json, что мешает использовать форму настроек
      //    на этой странице
      sell: {
        commercial: ['rubric', 'type']
      },
      defaults: ['rubric', 'rooms_type']
    },
    params: {
      deal_type: 'sell',
      rubric: 'flats',
      type: [],
      rooms: [],
      layout_type: []
    }
  }),
  computed: {
    jsonFormConfig: {
      get() {
        return JSON.stringify(this.formConfig, undefined, 2);
      },
      set(value) {
        this.formConfig = JSON.parse(value);
      }
    },
    jsonParams: {
      get() {
        return JSON.stringify(this.params, undefined, 2);
      },
      set(value) {
        this.params = JSON.parse(value);
      }
    }
  },
  methods: {
    search(params) {
      this.params = params;
    }
  }
};
</script>

<style lang='sass'>
@import 'node_modules/reset-css/reset';

*,
*:before,
*:after
  box-sizing: inherit

html
  box-sizing: border-box
  font-size: 16px

body
  min-height: 100vh

.header
  background: #f1f1f1
  padding: 60px 60px 12px
  margin-bottom: 60px

.container
  max-width: 906px
  margin: 0 auto

textarea
  width: 100%

  &[readonly]
    background: #f5f5f5
    outline: none
</style>
