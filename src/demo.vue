<template>
  <div id='app'>
    <div class='inner'>
      <SearchForm :params='params' />
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
  })
};
</script>

<style lang='sass'>
*,
*:before,
*:after
  box-sizing: inherit

html
  box-sizing: border-box
  font-size: 16px

#app
  background-image: url("https://novosibirsk.n1.ru/static/content/banners/1054/novosibirsk-02.jpg")
  background-position-x: 50%
  background-repeat: no-repeat
  background-size: cover
  height: 360px
  padding: 264px 60px 0

.inner
  max-width: 1256px
  margin: 0 auto
</style>
