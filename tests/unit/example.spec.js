import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';
import MeasureMeet from '@/components/MeasureMeet.vue';
import Calculator from '@/components/Calculator.vue';

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg },
    });
    expect(wrapper.text()).to.include(msg);
  });
});

describe('MeasureMeet.vue', () => {
  it('renders title', () => {
    const wrapper = shallowMount(MeasureMeet, {
      propsData: {},
    });

    expect(wrapper.text()).to.include('MeasureMeet');
    expect(wrapper.text()).to.include('Measure meeting time so you won\'t waste it');
    expect(wrapper.findComponent(Calculator).exists()).to.eq(true);
  });
});

describe('Calculator.vue', () => {
  it('renders calculator with increment/decrement people buttons', () => {
    const wrapper = shallowMount(Calculator, {
      propsData: {},
    });

    expect(wrapper.find('button.add').exists()).to.eq(true);
    expect(wrapper.find('button.remove').exists()).to.eq(true);
  });
});
