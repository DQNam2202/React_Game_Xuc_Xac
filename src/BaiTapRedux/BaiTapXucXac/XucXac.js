import React, { Component } from "react";

import { connect } from "react-redux";

class XucXac extends Component {
  render() {
    // Props cuả nó là mảng chứa 3 con xúc xắc [{},{},{}]
    const { mangXX } = this.props;
    return (
      <div>
        {mangXX.map((item, index) => {
          return (
            <img
              key={index}
              className="mx-1"
              width="45px"
              height="45px"
              src={`./img/gameXucXac/${item.soCham}.png`}
            ></img>
          );
        })}
      </div>
    );
  }
}

// phân biệt mapStateToProps
// mapStateToProps:
// Sử dụng ở bất cứ Component nào cũng được, Nhiệm vụ chính của nó
// là lấy dữ liệu trên Store về và chuyển thành Props cho chính Component sử dụng nó.
// luôn luôn có giá trị trả về

const mapStateToProps = (state) => {
  return { mangXX: state.BaiTapXucXacReducer.mangXucXac };
};



export default connect(mapStateToProps, null)(XucXac);
