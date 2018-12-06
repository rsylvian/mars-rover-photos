import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import moment from 'moment';

import { Row, Col, Modal, DatePicker } from 'antd';
import StyleWrapper from './style';

import photosActions from '../../redux/photos/actions';

import { RoversType } from '../../services/MarsPhotosAPI/';
import { RoverPhoto } from '../../components/RoverPhoto';

class Home extends React.Component {
  state = {
    roverType: this.props.match.params.rover,
    selectedDate: moment(),
    modalShow: false
  };

  runQuery() {
    const rover = this.state.roverType;

    //check that the roverType is a type supported by NASA API
    if (Object.values(RoversType).indexOf(rover) >= 0) {
      // format date to NASA API expectation
      const date = this.state.selectedDate.format('YYYY-MM-DD');

      // run async API query
      this.props.getPhotosByRover(rover, date);
    } else {
      console.log('nope!');
    }
  }

  componentDidMount() {
    this.runQuery();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.match.params.rover !== this.state.roverType) {
      this.setState(
        {
          roverType: nextProps.match.params.rover,
          modalShow: false
        },
        () => {
          this.runQuery();
        }
      );
    }
  }

  requestModalOpen(photo) {
    this.setState({
      modalPhoto: photo,
      modalShow: true
    });
  }

  requestModalClose() {
    this.setState({
      modalShow: false
    });
  }

  onDateChange(date) {
    if (date) {
      this.setState({ selectedDate: date }, () => {
        this.runQuery();
      });
    }
  }

  render() {
    // select the corresponding photos array in the state (if exists)
    const photos = this.props.photos[
      this.state.roverType + '-' + this.state.selectedDate.format('YYYY-MM-DD')
    ];

    return (
      <StyleWrapper>
        <DatePicker
          format="MM/DD/YYYY"
          placeholder="Select Date"
          showToday={true}
          defaultValue={this.state.selectedDate}
          disabledDate={current => {
            return current && current > moment().endOf('day');
          }}
          onChange={this.onDateChange.bind(this)}
        />

        {photos && photos.length ? (
          <Row>
            {photos.map(photo => {
              return (
                <Col xs={24} md={6} className="ant-col" key={photo.id}>
                  <RoverPhoto
                    photo={photo}
                    onClick={this.requestModalOpen.bind(this)}
                  />
                </Col>
              );
            })}
          </Row>
        ) : (
          <div />
        )}

        {/* Modal for photo */}
        {this.state.modalPhoto ? (
          <Modal
            title={'Detail - #' + this.state.modalPhoto.id}
            width={650}
            footer={null}
            visible={this.state.modalShow}
            onOk={this.requestModalClose.bind(this)}
            onCancel={this.requestModalClose.bind(this)}
          >
            <img
              width="100%"
              src={this.state.modalPhoto.img_src}
              alt={this.state.modalPhoto.id}
            />
          </Modal>
        ) : (
          <div />
        )}
      </StyleWrapper>
    );
  }
}

const mapStateToProps = ({ photos }) => ({
  photos: photos.list
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getPhotosByRover: photosActions.getPhotosByRover
      //changePage: () => push('/about-us')
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
