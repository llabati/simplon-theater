<template>
  <div class="welcome">
    <h1>{{ msg }}</h1>
    <h2>Pour réserver vos places,</h2>
    <p class="intro">indiquez-nous la rangée de votre choix et le nombre de places souhaité.</p>
    <Inputs @row-is-chosen="saveRow" @number-of-places="saveSeatsQuantity" />
    <Rows v-if="available" />
    
  </div>
</template>

<script>
import Rows from './Rows.vue'
import Inputs from './Inputs.vue'
import { store } from '../store/index'

export default {
  name: 'Welcome',
  props: {
    msg: String,
  },
  store,
  data(){
    return {
      
    }
  },
  methods: {
    setSeats(){
      store.dispatch('setSeats')
      localStorage.setItem('seats', store.state.seats)
      console.log(localStorage.getItem('seats').length)
    },
    saveRow($event){
      console.log(store.state.seats)
      console.log('ROW', $event)
      console.log(localStorage.getItem('seats').length)
    },
    saveSeatsQuantity(val){
      console.log('SEATS:', val)
    }
  },
  components: {
    Inputs,
    Rows
  },
  mounted(){
    //if (!localStorage.getItem('seats')) this.setSeats()
    this.setSeats()
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
