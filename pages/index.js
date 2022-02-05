import { useState } from "react";
import Clock from "react-live-clock";

export default function Home() {
  const [randomNumber, setrandomNumber] = useState(0);
  const [count, setcount] = useState(0);
  const number = 0;
  const d = new Date(); // today, now
  const getRandomInt = () => {
    const randomNumber = Math.floor(Math.random() * 10);
    number = number + 1;
    setcount(number);
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
          className='w-full m-auto p-3'
          style={{
            height: "auto",
            borderRadius: "12px",
            backgroundColor: "#A52A2A",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                borderRadius: "50%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
              className='bg-[#FFD700] h-48 w-48 text-red-500 text-3xl font-bold'
            >
              <Clock format={"HH:mm:ss"} ticking={true} timezone={"ICT"} />
              <p> {d.toLocaleDateString("pt-PT")}</p>
            </div>
          </div>

          <p className='text-white text-center text-base pt-3'>
            {randomNumber === 0 ? <p>Chúc Mừng Năm mới 2022</p> : ""}
            {randomNumber === 1 ? (
              <div>
                <p>
                  Happy New Year! Năm 2022 - Chúc bạn có 1 bầu trời sức khỏe, 1
                  biển cả tình thương, 1 đại dương tình bạn, 1 điệp khúc tình
                  yêu, 1 người yêu chung thủy, 1 sự nghiệp sáng ngời, 1 gia đình
                  thịnh vượng. Chúc cả gia đình bạn vạn sự như ý, tỉ sự như mơ,
                  triệu triệu bất ngờ, không chờ cũng đến!
                </p>
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
                <p>
                  Tôi ước năm mới sẽ mang đến tất cả những gì mà các bạn mong
                  muốn, mọi sự đều thuận lợi. Chúc mừng năm mới, an khang thịnh
                  vượng!
                </p>{" "}
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
                <p>
                  Năm 2022, chúc bạn: 1 năm mới, 1 tuổi mới, nhiều bạn mới,
                  nhiều hiểu biết mới, mãi mãi hạnh phúc bên gia đình và những
                  người thân yêu nhất nhé.
                </p>{" "}
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
                <p>
                  Mong rằng năm mới dịch bệnh sẽ biến mất, thế giới trở lại bình
                  thường và công ty chúng ta phục hồi, phát triển nhanh chóng!
                  Chúng ta đã cùng nhau vượt qua khó khăn và sẽ tiếp tục đồng
                  hành bên nhau trong năm mới các bạn nhé! Chúc bạn và gia đình
                  năm mới an khang - thịnh vượng!
                </p>
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
                <p>
                  “Chào mừng năm mới 2022, chúc bạn có sức khỏe vô biên và làm
                  ăn phát đạt, kiếm được nhiều tiền. Gia đình luôn mãi hạnh
                  phúc, an khang và thịnh vượng. Chúc mọi điều tốt
                </p>
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
                <p>
                  “Kính chúc mọi người một năm mới 2022 tràn đầy niềm vui và
                  hạnh phúc: Vui trong sức khỏe, trẻ trong tâm hồn, khôn trong
                  lý tưởng và sẽ trưởng thành mọi lĩnh vực.”
                </p>
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
                <p>
                  Mùa xuân xin chúc – Khúc ca an bình – Năm mới phát tài – Vạn
                  sự như ý – Già trẻ lớn bé – Đầy ắp tiếng cười – Trên mặt ngời
                  ngời – Tràn đầy hạnh phúc – Xuân đến hy vọng – Ấm no mọi nhà –
                  Kính chúc ông bà – Sống lâu trăm tuổi – Kính chúc ba mẹ – Sức
                  khoẻ dồi dào – Đôi lứa yêu nhau – Càng thêm nồng ấm – Các em
                  bé nhỏ – Học giỏi chăm ngoan – Chúc Tết mọi người – Năm mới
                  hoan hỉ – Gặp nhiều niềm vui.
                </p>
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
                <p>
                  Tôi mong bạn năm mới sẽ có nhiều hạnh phúc mới, mục tiêu,
                  thành tựu mới và có nhiều cảm hứng về cuộc sống. Chúc bạn luôn
                  ngập tràn niềm vui và phát lộc phát tài.
                </p>
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
                <p>
                  Chúc Tết bạn hiền của tôi: Một rỗ tiếng cười, niềm vui và lời
                  chúc ấm áp của tôi từ ngàn dặm xa xôi gửi tặng cho bà, bạn tốt
                  của tôi. Chúc bà năm mới hạnh phúc, gặp nhiều may mắn và thành
                  công!
                </p>
              </div>
            ) : (
              ""
            )}
          </p>
        </div>
        <div
          onClick={getRandomInt}
          style={{ maxWidth: "260px" }}
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
