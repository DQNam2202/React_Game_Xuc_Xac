import React, { Component } from 'react'

import {connect} from 'react-redux'

 class ThongTinTroChoi extends Component {
    render() {
      let {banChon, soBanThang, soBanChoi} = this.props;
        return (
          <div>
            <div style={{ fontSize: "40px" }}>
              Bạn chọn: <span className="text-danger">{banChon === "xiu" ? "Xỉu" : "Tài"}</span>
            </div>
            <div style={{ fontSize: "40px" }}>
              Số bàn thắng: <span className="text-warning">{soBanThang}</span>
            </div>
            <div style={{ fontSize: "40px" }}>
              Số bàn chơi: <span className="text-primary">{soBanChoi}</span>
            </div>
          </div>
        );
    }
}

const mapStateToProps = (state) =>{ 
  return{
    banChon: state.BaiTapXucXacReducer.banChon,
    soBanThang: state.BaiTapXucXacReducer.soBanThang,
    soBanChoi: state.BaiTapXucXacReducer.soBanChoi
  }
}



export default connect(mapStateToProps)(ThongTinTroChoi)
