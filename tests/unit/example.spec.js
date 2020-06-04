import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';
import MeasureMeet from '@/components/MeasureMeet.vue';

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
      prompsdata: {},
    });

    expect(wrapper.text()).to.include('MeasureMeet');
    expect(wrapper.text()).to.include('Measure meeting time so you won\'t waste it');
  });
});
