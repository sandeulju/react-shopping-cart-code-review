import "../../assets/css/custom.css";

const CardPurchase = () => {
  return (
    <>
      <div className="container">
        <header className="purchase_header">
          <h2 className="purchase_header_title">
            <span className="next_logo">NEXT</span> Pay{" "}
            <span className="next_logo nav_bar">&nbsp;</span> 결제
          </h2>
        </header>
        <section className="purchase_empty_card_slide">
          <h3 className="purchase_section_title short_underbar">보유카드</h3>
          <div className="card_slide_wrap">
            <span className="card_arrow">&lt;</span>
            <div className="card_area">
              <button className="add_card">+</button>
            </div>
            <span className="card_arrow">&gt;</span>
          </div>
          <p className="account_change_text">
            계좌정보 변경은&nbsp;<span>설정&gt;계좌정보</span>&nbsp;에서 하실 수
            있습니다.
          </p>
        </section>
        <section className="purchase_notice_area">
          <h3 className="purchase_section_title long_underbar">결제금액</h3>
          <div className="purchase_text_wrap">
            <span className="purchase_result_text">총 결제금액</span>
            <span className="purchase_result_text">325,600원</span>
          </div>
        </section>
        <section className="purchase_notice_area">
          <h3 className="purchase_section_title long_underbar">
            약관 이용 및 동의
          </h3>
          <div className="purchase_terms_text_wrap">
            <p className="purchase_terms_text">
              거래정보 제공 동의 | NEXT STEP{" "}
              <span>
                <a>상세보기</a>
              </span>
            </p>
            <p className="purchase_terms_text text_space_between">
              주문 내용을 확인하였으며, 정보 제공 등에 동의합니다.{" "}
              <input className="purchase_agree_radio" type="radio"></input>{" "}
            </p>
          </div>
        </section>
        <section className="purchase_button_area">
          <button className="purchase_button">결제하기</button>
          <button className="purchase_button">취소하기</button>
        </section>
      </div>
    </>
  );
};

export default CardPurchase;
