
// Hiển thị giao diện ban đầu
const initialState = {
  mangXucXac: [
    { maXX: 1, soCham: 1 },
    { maXX: 2, soCham: 1 },
    { maXX: 3, soCham: 1 },
  ],
  banChon: "tai",
  soBanThang: 0,
  soBanChoi: 0,
};
//Object doituong.thuoctinh Mang -> index 0- length-1

//Khoi tao reducer
//Chức năng chính của reducer là xử lý action ( Lệnh yêu cầu ) từ giao diện người dùng gửi lên.

const BaiTapXucXacReducer = (state= initialState, action) => {
    switch(action.type){

        case 'PLAY_GAME':{
            const {data} = action
           
            return {...state}
        };break;
        case 'CHON_TAI_XIU':{
            state.banChon = action.data
            return {...state}
        };break;
        case 'RANDOM':{
            //Clone ra 1 mảng mới khi mảng bị thay đổi
            let mangXucXacUpdate =[...state.mangXucXac];

            mangXucXacUpdate.forEach((item)=>{
              // 1-6
              item.soCham = Math.floor(Math.random()*6)+1 ; 
            })
            state.mangXucXac = mangXucXacUpdate
            // Cập nhật số lần chơi
            state.soBanChoi +=1;
            return{...state};
        };break;
        case 'END_GAME':{
            let ketQua =  state.mangXucXac.reduce((tinhTong, item) => {
              return (tinhTong += item.soCham);
            }, 0);
            console.log(ketQua,action.data)
              if(ketQua % 2 === 0){
                if("tai" === action.data){
                  state.soBanThang += 1;
                  alert("Chúc mừng bạn đã chọn đúng!")
                }else{
                  alert("Chúc bạn may mắn!")
                }
               
              }else{
                if("xiu" === action.data){
                  state.soBanThang += 1;
                  alert("Chúc mừng bạn đã chọn đúng!")
                }else{
                  alert("Chúc bạn may mắn!")
                }
              }
            return {...state}
        };break;
        default: 
            return {...state};
    }

}
export default  BaiTapXucXacReducer