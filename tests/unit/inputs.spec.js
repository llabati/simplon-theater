import { mount } from '@vue/test-utils'
import Inputs from '@/components/Inputs.vue'

describe('Inputs.vue', () => {
  it('emits a #row when clicked', async () => {
    
    const inputs = mount(Inputs)
    await inputs.vm.$emit('row-is-chosen', 5)

    console.log(inputs.emitted())
  
})
})
