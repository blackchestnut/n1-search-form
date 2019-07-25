<template>
  <div id='app'>
    <div class='inner'>
      <SearchForm
        :params='params'
        @search='search'
      />
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
  methods: {
    search(params) {
      console.log('search', params);
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

#app
  background: #f1f1f1
  height: 360px
  padding: 264px 60px 12px

.inner
  max-width: 906px
  margin: 0 auto
</style>
