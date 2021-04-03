
class Seat {
    constructor(row, position, available){
        this.row = row
        this.position = position
        this.available = available
    }
    isAvailable(){
        if (this.available) return true
        return false
    }
}

export default Seat