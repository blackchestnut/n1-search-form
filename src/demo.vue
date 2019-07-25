<template>
  <div id='app'>
    <div class='header'>
      <div class='container'>
        <SearchForm
          :params='params'
          @search='search'
        />
      </div>
    </div>
    <div class='container'>
      <b>JSON</b>
      <textarea v-model.lazy='jsonParams' rows='20' />
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
    params: {}
  }),
  computed: {
    jsonParams: {
      get() {
        return JSON.stringify(this.params);
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
  padding: 210px 60px 12px
  margin-bottom: 60px

.container
  max-width: 906px
  margin: 0 auto

textarea
  width: 100%
</style>
