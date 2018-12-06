import styled from 'styled-components';

const StyleWrapper = styled.div`
  width: 100%;

  .ant-card-cover {
    min-height: 300px;
    max-height: 300px;
    overflow: hidden;
    position: relative;
    background-color: #000e;

    img {
      position: absolute;
      top: 0;
      bottom: 0;
      margin: auto;
    }
  }
`;

export default StyleWrapper;
