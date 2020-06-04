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
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Calculator, {
      propsData: {},
    });
  });

  it('renders calculator with add/remove people buttons', () => {
    expect(wrapper.find('button.add').exists()).to.eq(true);
    expect(wrapper.find('button.remove').exists()).to.eq(true);
  });

  it('renders people count and reacts to add/remove buttons', async () => {
    expect(wrapper.find('.people-count').text()).to.include('2');
    expect(wrapper.vm.peopleCount).to.eq(2);

    await expect(wrapper.find('button.add').trigger('click'));

    expect(wrapper.find('.people-count').text()).to.include('3');
    expect(wrapper.vm.peopleCount).to.eq(3);

    await expect(wrapper.find('button.remove').trigger('click'));

    expect(wrapper.find('.people-count').text()).to.include('2');
    expect(wrapper.vm.peopleCount).to.eq(2);

    await expect(wrapper.find('button.remove').trigger('click'));

    expect(wrapper.find('.people-count').text()).to.include('2');
    expect(wrapper.vm.peopleCount).to.eq(2);
  });

  it('renders meeting duration in minutes with add/remove buttons', async () => {
    expect(wrapper.vm.meetingDuration).to.eq(0);
    expect(wrapper.find('.meeting-duration').text()).to.include('0');

    await expect(wrapper.find('button.add-duration').trigger('click'));

    expect(wrapper.vm.meetingDuration).to.eq(5);
    expect(wrapper.find('.meeting-duration').text()).to.include('5');

    await expect(wrapper.find('button.add-duration').trigger('click'));

    expect(wrapper.vm.meetingDuration).to.eq(10);
    expect(wrapper.find('.meeting-duration').text()).to.include('10');

    await expect(wrapper.find('button.remove-duration').trigger('click'));

    expect(wrapper.vm.meetingDuration).to.eq(5);
    expect(wrapper.find('.meeting-duration').text()).to.include('5');

    // Set duration directly, then use nextTick()
    wrapper.vm.meetingDuration = 30;
    await wrapper.vm.$nextTick();
    expect(wrapper.find('.meeting-duration').text()).to.include('30');
  });
});
