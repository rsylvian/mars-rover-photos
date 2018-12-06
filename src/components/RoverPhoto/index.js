import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, Icon } from 'antd';
import moment from 'moment';

import StyleWrapper from './style';

class RoverPhoto extends Component {
  handleClick() {
    const handler = this.props.onClick;
    if (handler) {
      this.props.onClick(this.props.photo);
    }
  }

  dateFormat() {
    return moment(this.props.photo.earth_date, 'YYYY-MM-DD').format(
      'MMM DD, YYYY'
    );
  }

  render() {
    return (
      <StyleWrapper>
        <Card
          onClick={() => {
            this.handleClick();
          }}
          hoverable
          cover={
            <img
              alt={'photo #' + this.props.photo.id}
              src={this.props.photo.img_src}
            />
          }
        >
          <Card.Meta
            title={
              <span>
                <Icon type="camera" />
                {this.props.photo.camera && this.props.photo.camera.full_name
                  ? this.props.photo.camera.full_name
                  : this.props.photo.camera.name}
              </span>
            }
            description={'Taken on ' + this.dateFormat()}
          />
        </Card>
      </StyleWrapper>
    );
  }
}

RoverPhoto.propTypes = {
  photo: PropTypes.object.isRequired,
  onClick: PropTypes.func
};

export { RoverPhoto };
