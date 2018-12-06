import React from 'react';
import { shallow } from 'enzyme';

import { Card } from 'antd';
import { RoverPhoto } from './';

const mockPhoto = {
  id: 1,
  img_src:
    'http://mars.nasa.gov/mer/gallery/all/2/p/1753/2P281987106ESFAZ18P2600R8M1-BR.JPG',
  earth_date: '2018-12-22',
  camera: {
    full_name: 'Test Camera'
  }
};

describe('RoverPhoto component', () => {
  test('renders', () => {
    const wrapper = shallow(<RoverPhoto photo={mockPhoto} />);
    expect(wrapper.exists()).toBe(true);
  });

  test('has a picture', () => {
    const wrapper = shallow(<RoverPhoto photo={mockPhoto} />);

    expect(wrapper.children(Card).prop('cover')).toEqual(
      <img alt={'photo #' + mockPhoto.id} src={mockPhoto.img_src} />
    );
  });

  test('has a correctly formated date', () => {
    const wrapper = shallow(<RoverPhoto photo={mockPhoto} />);

    expect(
      wrapper
        .children(Card)
        .children(Card.Meta)
        .prop('description')
    ).toEqual('Taken on Dec 22, 2018');
  });
});
