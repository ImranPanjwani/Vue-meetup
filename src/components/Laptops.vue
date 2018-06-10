<template>
  <div class="hello">
    <h2>Laptops</h2>
    <div v-for="(laptop,index) of getAllLaptops" :key="index">
        {{laptop.name}}
    </div>
    <button @click="addLaptopAction({name: 'hp'})">Add laptop</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Laptops',
  data () {
    return {}
  },
  computed : {
    ...mapGetters(['getAllLaptops'])
  },
  methods: {
    ...mapActions(['addLaptopAction'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
