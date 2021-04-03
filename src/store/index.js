import { createStore } from 'vuex'
//import Seat from '../models/Seat'

export const store = createStore({
  state: {
    seats: []
    
    
  },
  actions: {
      setSeats( {commit} ){
        console.log('ACTION')
        commit('SET_SEATS')
      }
  },
  mutations: {
    SET_SEATS(state){
        console.log('MUAION')
        let available = true
        let row = 1
        while ( row < 9 ) {
            let position = 1
            while (position < 10){
                let a = { row, position, available }
                state.seats.push(a)
                //let seat = new Seat(row, position, available)
                //state.seats.push(seat)
                position ++
            }
            row ++
        }
        
        return state.seats
    },
  }
})