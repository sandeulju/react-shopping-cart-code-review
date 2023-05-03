// import React from "react";
// import { useState } from "react";
import "../../assets/css/default.css";

function ShoppingMall() {
  return (
    <>
      <div className="mall_container">
        <section className="mall_wrap">
          <header className="mall_header">
            <h1 className="nextStep_title">NEXTSTEP</h1>
            <ul className="mall_nav">
              <li className="nav_lists">장바구니</li>
              <li className="nav_lists">주문내역</li>
            </ul>
          </header>

          <section className="mall_payment_container">
            <article className="mall_paylist mall_payment_wrap">
              <h2 className="mall_paylist_title">주문 상품</h2>
              <ul className="mall_paylist_container">
                <li className="mall_paylist_list">
                  <img
                    className="mall_paylist_list_img"
                    src="/"
                    alt="상품 이미지"
                  />
                  <div className="mall_paylist_list_text">
                    친환경 살림용기 ECO
                    <span>수량 : 2개</span>
                  </div>
                </li>
              </ul>
            </article>
            <article className="mall_pay_price mall_payment_wrap">
              <h2 className="mall_pay_price_title">결제 금액</h2>
              <div className="mall_pay_price_text_wrap">
                <span className="mall_pay_price_content">결제금액</span>
                <span className="mall_pay_price_content">325,600원</span>
              </div>
              <button className="mall_pay_price_button">
                325,600원 결제하기
              </button>
            </article>
          </section>
        </section>
      </div>
    </>
  );
}

export default ShoppingMall;
