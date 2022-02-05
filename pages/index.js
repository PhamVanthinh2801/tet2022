import { useState } from "react";

export default function Home() {
  const [randomNumber, setrandomNumber] = useState(0);
  const getRandomInt = () => {
    const randomNumber = Math.floor(Math.random() * 10);
    setrandomNumber(randomNumber);
  };

  return (
    <div
      style={{
        backgroundImage: `url(https://res.cloudinary.com/hiname/image/upload/v1644052041/tet/353039_xqxvsn.jpg)`,
        height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
      }}
    >
      <div>
        <img
          src='https://media.giphy.com/media/XyVTS9MZqJOKxqyJtM/giphy.gif'
          width={240}
          style={{
            borderRadius: "50%",
            padding: "12px",
          }}
        />
        <img
          src='https://media.giphy.com/media/7ILAGpJWoQYWA0j60C/giphy.gif'
          width={240}
          style={{
            borderRadius: "50%",
            padding: "12px",
          }}
        />
        <img
          src='https://media.giphy.com/media/DJj4Bag0l7E3ZAcHHp/giphy.gif'
          width={240}
          style={{
            borderRadius: "50%",
            padding: "12px",
          }}
        />
      </div>

      <div style={{ width: "640px", marginTop: "12px" }}>
        <div
          className='bg-white w-full m-auto '
          style={{
            height: "540px",
            borderRadius: "12px",
            backgroundColor: "#A52A2A",
          }}
        >
          <p className='text-white text-center text-3xl pt-2'>
            {randomNumber === 0 ? <h1>Chúc Mừng Năm mới 2022</h1> : ""}
            {randomNumber === 1 ? (
              <div>
                <h1>
                  – Vừa đủ HẠNH PHÚC để giữ tâm hồn bạn được ngọt ngào. – Vừa đủ
                  THỬ THÁCH để giữ bạn luôn kiên nhẫn. – Vừa đủ MUỘN PHIỀN để
                  giữ bạn thật sự tỉnh táo. – Vừa đủ HY VỌNG để cho bạn được
                  hạnh phúc. – Vừa đủ THẤT BẠI để bạn mãi khiêm nhường. – Vừa đủ
                  THÀNH CÔNG để giữ bạn mãi nhiệt tâm. – Vừa đủ BẠN BÈ để bạn
                  được an ủi. – Vừa đủ VẬT CHẤT để đáp ứng các nhu cầu vật chất
                  của bạn. – Vừa đủ NHIỆT TÌNH để bạn cho đời thêm hân hoan. –
                  Vừa đủ NIỀM TIN để xua tan những thất vọng.
                </h1>
                <img
                  src='https://res.cloudinary.com/hiname/image/upload/v1644052041/tet/353039_xqxvsn.jpg'
                  width={200}
                  style={{ margin: "auto", borderRadius: "12px" }}
                />
              </div>
            ) : (
              ""
            )}
            {randomNumber === 2 ? (
              <div>
                <h1>
                  Chúc mừng năm mới Nhâm Dần 2022. Chúc năm mới sức khỏe dẻo
                  dai, công việc thuận lợi thăng tiến dài dài, phi những nước
                  đại tiến tới thành công.
                </h1>{" "}
                <img
                  src='https://res.cloudinary.com/hiname/image/upload/v1644052041/tet/353039_xqxvsn.jpg'
                  width={200}
                  style={{ margin: "auto", borderRadius: "12px" }}
                />
              </div>
            ) : (
              ""
            )}
            {randomNumber === 3 ? (
              <div>
                <h1>
                  Xuân này hơn hẳn mấy xuân qua. Phúc lộc đưa nhau đến từng nhà.
                  Vài lời cung chúc tân niên mới. Vạn sự an khang vạn sự lành.
                </h1>{" "}
                <img
                  src='https://res.cloudinary.com/hiname/image/upload/v1644052041/tet/353039_xqxvsn.jpg'
                  width={200}
                  style={{ margin: "auto", borderRadius: "12px" }}
                />
              </div>
            ) : (
              ""
            )}
            {randomNumber === 4 ? (
              <div>
                <img
                  src='https://res.cloudinary.com/hiname/image/upload/v1644052041/tet/353039_xqxvsn.jpg'
                  width={200}
                  style={{ margin: "auto", borderRadius: "12px" }}
                />{" "}
                <h1>
                  Hoa đào nở, chim én về, mùa xuân lại đến. Chúc một năm mới:
                  nghìn sự như ý, vạn sự như mơ, triệu sự bất ngờ, tỷ lần hạnh
                  phúc.
                </h1>
              </div>
            ) : (
              ""
            )}
            {randomNumber === 5 ? (
              <div>
                <img
                  src='https://res.cloudinary.com/hiname/image/upload/v1644052041/tet/353039_xqxvsn.jpg'
                  width={200}
                  style={{ margin: "auto", borderRadius: "12px" }}
                />
                <h1>
                  Cung chúc tân xuân phước vĩnh cửu – Chúc trong gia quyến được
                  an khương – Tân niên lai đáo đa phú quý – Xuân đến an khương
                  vạn thọ tường. Đây là lời chúc mừng năm mới thể hiện chút hán
                  nôm mà các cụ hay dùng chúc nhau rất nho nhã.
                </h1>
              </div>
            ) : (
              ""
            )}
            {randomNumber === 6 ? (
              <div>
                <img
                  src='https://res.cloudinary.com/hiname/image/upload/v1644052041/tet/353039_xqxvsn.jpg'
                  width={200}
                  style={{ margin: "auto", borderRadius: "12px" }}
                />
                <h1>
                  Kính chúc mọi người một năm mới tràn đầy niềm vui và hạnh
                  phúc: Vui trong sức khoẻ, trẻ trong tâm hồn, khôn trong lý
                  tưởng và trưởng thành mọi lĩnh vực.
                </h1>
              </div>
            ) : (
              ""
            )}
            {randomNumber === 7 ? (
              <div>
                <img
                  src='https://res.cloudinary.com/hiname/image/upload/v1644052041/tet/353039_xqxvsn.jpg'
                  width={200}
                  style={{ margin: "auto", borderRadius: "12px" }}
                />
                <h1>
                  Mùa xuân xin chúc – Khúc ca an bình – Năm mới phát tài – Vạn
                  sự như ý – Già trẻ lớn bé – Đầy ắp tiếng cười – Trên mặt ngời
                  ngời – Tràn đầy hạnh phúc – Xuân đến hy vọng – Ấm no mọi nhà –
                  Kính chúc ông bà – Sống lâu trăm tuổi – Kính chúc ba mẹ – Sức
                  khoẻ dồi dào – Đôi lứa yêu nhau – Càng thêm nồng ấm – Các em
                  bé nhỏ – Học giỏi chăm ngoan – Chúc Tết mọi người – Năm mới
                  hoan hỉ – Gặp nhiều niềm vui.
                </h1>
              </div>
            ) : (
              ""
            )}
            {randomNumber === 8 ? (
              <div>
                <img
                  src='https://res.cloudinary.com/hiname/image/upload/v1644052041/tet/353039_xqxvsn.jpg'
                  width={200}
                  style={{ margin: "auto", borderRadius: "12px" }}
                />
                <h1>
                  Năm hết Tết đến – Chúc ông chúc bà – Chúc cha chúc mẹ – Chúc
                  cô chúc cậu – Chúc chú chúc dì – Chúc anh chúc chị – Chúc luôn
                  các em – Chúc cả các cháu – Dồi dào sức khoẻ – Có nhiều niềm
                  vui – Tiền xu nặng túi – Tiền giấy đầy bao – Đi ăn được khao –
                  Về nhà người rước – Tiền vô như nước – Tình vào đầy tim – Chăn
                  ấm nệm êm – Sung sướng ban đêm – Hạnh phúc ban ngày – Luôn
                  luôn gặp may – Tràn đầy hạnh phúc.
                </h1>
              </div>
            ) : (
              ""
            )}
            {randomNumber === 9 ? (
              <div>
                <img
                  src='https://res.cloudinary.com/hiname/image/upload/v1644052041/tet/353039_xqxvsn.jpg'
                  width={200}
                  style={{ margin: "auto", borderRadius: "12px" }}
                />
                <h1>
                  Năm mới Tết đến – Rước hên vào nhà – Quà cáp bao la – Mọi nhà
                  no đủ – Vàng bạc đầy tủ – Gia chủ phát tài – Già trẻ gái trai
                  – Sum vầy hạnh phúc – Cầu tài chúc phúc – Lộc đến quanh năm –
                  An khang thịnh vượng. Lời chúc năm mới qua điện thoại.
                </h1>
              </div>
            ) : (
              ""
            )}
          </p>
        </div>
        <div
          onClick={getRandomInt}
          className='flex justify-center p-2 rounded-md bg-[#FFD700] h-auto m-auto mt-10 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300'
        >
          <p className='text-3xl text-center text-red-600 font-sans font-bold'>
            Nhận lì xì !
          </p>
        </div>
      </div>
    </div>
  );
}
