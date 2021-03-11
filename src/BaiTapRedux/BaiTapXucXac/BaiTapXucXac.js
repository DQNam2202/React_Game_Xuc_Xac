import React, { Component } from "react";
import "./BaiTapGameXucXac.css";
import ThongTinTroChoi from "./ThongTinTroChoi";
import XucXac from "./XucXac";

import {connect} from 'react-redux'
 class BaiTapXucXac extends Component {
  render() {
    
    let {banChon} = this.props;

    return (
      <div className="bg-game">
        <div className="title-game text-center mt-3 display-4">
          Game Xúc Xắc
        </div>
        <div className="row text-center mt-3">
          <div className="col-5">
            <button className={`btnGame ${banChon === "tai" ? "selected" : ""}`} onClick={() =>{
              this.props.chonTaiXiu("tai")
             }}>Tài</button>
          </div>
          <div className="col-2">
            <XucXac />
          </div>
          <div className="col-5">
            <button className={`btnGame ${banChon === "xiu" ? "selected" : ""}`} onClick={() =>{ 
              this.props.chonTaiXiu("xiu");
            }} >Xỉu</button>
          </div>
        </div>
        <div className='text-center'>
          <ThongTinTroChoi />
          <button className='btn btn-success m-2' onClick={() =>{ 
            this.props.choiGame(banChon)
            this.props.ranDomXX()
            this.props.endGame(banChon)
          }} >Play game</button>
        </div>
      </div>
    );
  }
}




const mapStateToProps = (state) =>{
  return {
    banChon: state.BaiTapXucXacReducer.banChon
  };
}

// Phân biệt mapDispatchToProps
// Nhiệm vụ chính là giao tiếp , yêu cầu Store làm theo ( Sửa dữ liệu trên Store, Thêm ,Xóa ,Sửa ,...)
// Trả về các hàm tùy chỉnh và biến thành props

const mapDispatchToProps = (dispatch) =>{ 
  return{
    choiGame : (banChon)=>{
      dispatch({type:"PLAY_GAME",data : banChon})
    },
    chonTaiXiu: (giaTri)=>{
      dispatch({type:'CHON_TAI_XIU',data:giaTri})
    },
    ranDomXX:() =>{
      dispatch({type:"RANDOM"})
     },
    endGame:(giaTri) =>{
      dispatch({ type: "END_GAME", data: giaTri });
     }
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(BaiTapXucXac)



