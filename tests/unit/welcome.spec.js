import { shallowMount } from '@vue/test-utils'
import Welcome from '@/components/Welcome.vue'

describe('Welcome.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(Welcome, {
      props: { msg }
    })
    //console.log(wrapper.html())
    expect(wrapper.text()).toMatch(msg)
  })

  it('renders some text', () => {
    
    const page = shallowMount(Welcome)
    
    expect(page.text()).toContain("Pour réserver vos places,")
  })
})


