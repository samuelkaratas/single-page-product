import React, { useState, useRef } from "react";

import productImage1 from "./assets/fixo1.jpg";
import productImage2 from "./assets/fixo2.jpg";
import productImage3 from "./assets/fixo3.jpg";
import productImage4 from "./assets/fixo4.jpg";
import productImage6 from "./assets/fixo6.jpg";
import productImage7 from "./assets/fixo7.jpg";
import productImage8 from "./assets/fixo8.jpg";
import productImage9 from "./assets/fixo9.jpg";

import footerImage from "./assets/footer.png";

import "./App.css";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import Modal from "react-bootstrap/Modal";

import { Badge } from "react-bootstrap";

import { CheckCircle } from "react-feather";

function App() {
  const myRef = useRef(null);

  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [adress, setAdress] = useState("");

  let price = 0;

  const [radioValue, setRadioValue] = useState("1");

  const radios = [
    { name: "First", value: "1" },
    { name: "Second", value: "2" },
    { name: "Third", value: "3" },
  ];

  const [radioValue2, setRadioValue2] = useState("1");

  const radios2 = [
    { name: "Kredi", value: "1" },
    { name: "Nakit", value: "2" },
  ];

  const handleSubmit = () => {
    console.log(name);
    console.log(phoneNumber);
    console.log(adress);
    console.log(radioValue);
    console.log(radioValue2);

    if (name.length && phoneNumber.length && adress.length) {
      if (radioValue === "1") {
        price = 99;
      } else if (radioValue === "2") {
        price = 159;
      } else {
        price = 199;
      }
      const paying = radioValue2 === "1" ? "Kredi Karti" : "Nakit";
      const message1 = `Name = ${name}, Phone Number = ${phoneNumber}, Adress = ${adress}, ${radioValue} Adet, ${paying}, Total = ${price} TL`;
      window.emailjs
        .send("service_m175qxh", "template_27d228d", {
          from_name: name,
          message: message1,
        })
        .then((res) => {
          alert(
            "Siparişiniz alındı. Siparişiniz en kısa sürede kargolanacaktır. Teşekkür ederiz."
          );
        })
        .catch((err) =>
          alert(
            "Siparişinizi oluştururken hata oluştu. Lütfen tekrar deneyiniz."
          )
        );
    } else {
      alert("Lütfen tüm bilgileri doldurduğunuzdan emin olun.");
    }
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const [show3, setShow3] = useState(false);
  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

  const executeScroll = () => myRef.current.scrollIntoView();

  return (
    <div className="Container">
      <div className="App">
        <img src={productImage1} className="App-logo" alt="product" />

        <Button
          style={{ marginTop: "5px", marginBottom: "5px" }}
          variant="success"
          onClick={executeScroll}
        >
          Sipariş Ver
        </Button>

        <img src={productImage2} className="App-logo" alt="product" />
        <img src={productImage3} className="App-logo" alt="product" />

        <Button
          style={{ marginTop: "5px", marginBottom: "5px" }}
          variant="success"
          onClick={executeScroll}
        >
          Sipariş Ver
        </Button>

        <img src={productImage4} className="App-logo" alt="product" />
        <img src={productImage6} className="App-logo" alt="product" />
        <img src={productImage7} className="App-logo" alt="product" />

        <Button
          style={{ marginTop: "5px", marginBottom: "5px" }}
          variant="success"
          onClick={executeScroll}
        >
          Sipariş Ver
        </Button>

        <img src={productImage8} className="App-logo" alt="product" />
        <img src={productImage9} className="App-logo" alt="product" />

        <div ref={myRef} className="title">
          <h1 style={{ color: "white" }}>Sipariş Formu</h1>
        </div>

        <div className="subtitle">
          <h3>Lütfen Ürün Seçiminizi Yapınız</h3>
        </div>

        <div key={"radio"} className="mb-3">
          <ButtonGroup
            toggle
            style={{ display: "flex", flexDirection: "column" }}
          >
            {radios.map((radio, idx) => (
              <ToggleButton
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginBottom: "5px",
                  alignItems: "center",
                }}
                key={idx}
                type="radio"
                variant={radioValue === radio.value ? "success" : "secondary"}
                name="radio"
                value={radio.value}
                checked={radioValue === radio.value}
                onChange={(e) => setRadioValue(e.currentTarget.value)}
              >
                {radioValue === radio.value ? (
                  <CheckCircle style={{ marginRight: "5px" }} />
                ) : null}
                <img
                  src={productImage3}
                  className="Radio-Button-Image"
                  alt="product"
                />
                <div className="radioTextContainer">
                  {radio.name === "First" ? (
                    <div className="radioButtonText">
                      <p>1 Adet Fixo</p>
                      <p>Su Geçirmez Sprey</p>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                        }}
                      >
                        <p className="oldPrize">139 TL</p>
                        <p className="newPrize">99 TL</p>
                      </div>
                      <p style={{ color: "orangered", fontWeight: "bold" }}>
                        +10 TL Kargo Ücreti
                      </p>
                    </div>
                  ) : null}
                  {radio.name === "Second" ? (
                    <div className="radioButtonText">
                      <p>2 Adet Fixo</p>
                      <p>Su Geçirmez Sprey</p>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                        }}
                      >
                        <p className="oldPrize">199 TL</p>
                        <p className="newPrize">159 TL</p>
                      </div>
                      <p>
                        <Badge variant="info">Ücretsiz Kargo</Badge>
                      </p>
                    </div>
                  ) : null}
                  {radio.name === "Third" ? (
                    <div className="radioButtonText">
                      <p>3 Adet Fixo</p>
                      <p>Su Geçirmez Sprey</p>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                        }}
                      >
                        <p className="oldPrize">299 TL</p>
                        <p className="newPrize">199 TL</p>
                      </div>
                      <p>
                        <Badge variant="info">Ücretsiz Kargo</Badge>
                      </p>
                    </div>
                  ) : null}
                </div>
              </ToggleButton>
            ))}
          </ButtonGroup>
        </div>

        <div className="subtitle">
          <h3>Teslimat ve Fatura Bilgileri</h3>
        </div>

        <Form>
          <Form.Group controlId="formGroupName">
            <Form.Label>Adınız Soyadınız</Form.Label>
            <Form.Control
              type="text"
              placeholder="Adınız soyadınız..."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formGroupPhoneNumber">
            <Form.Label>Cep Telefonu Numaranız</Form.Label>
            <Form.Control
              type="text"
              placeholder="Telefon numaranız..."
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Teslimat ve Fatura Adresiniz</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Adresinizi giriniz..."
              value={adress}
              onChange={(e) => setAdress(e.target.value)}
            />
          </Form.Group>
        </Form>

        <div className="subtitle">
          <h3>Ödeme Seçenekleri</h3>
        </div>

        <ButtonGroup toggle style={{ display: "flex", marginBottom: "10px" }}>
          {radios2.map((radio, idx) => (
            <ToggleButton
              key={idx}
              type="radio"
              variant={radioValue2 === radio.value ? "success" : "secondary"}
              style={{ margin: "5px" }}
              name="radio"
              value={radio.value}
              checked={radioValue2 === radio.value}
              onChange={(e) => setRadioValue2(e.currentTarget.value)}
            >
              {radio.name === "Kredi" ? (
                <p>Kapıda Kredi Kartı</p>
              ) : (
                <p>Kapıda Nakit</p>
              )}
            </ToggleButton>
          ))}
        </ButtonGroup>

        <Button
          style={{ width: "100%", height: "50px", marginBottom: "10px" }}
          variant="success"
          onClick={handleSubmit}
        >
          Siparişi Tamamla
        </Button>

        <div className="info">
          <p>**MESAİ SAATİ İÇİNDE VERİLEN SİPARİŞLER AYNI GÜN KARGOLANIR.</p>
        </div>
        <div className="info">
          <p>**KAPIDA NAKİT YA DA KREDİ KARTI İLE ÖDEME YAPABİLİRSİNİZ.</p>
        </div>

        <img src={footerImage} className="App-logo" alt="product" />
        <ButtonGroup aria-label="Basic example">
          <Button
            style={{ marginRight: "2px" }}
            variant="secondary"
            onClick={handleShow}
          >
            Gizlilik Sözleşmesi
          </Button>
          <Button variant="secondary" onClick={handleShow2}>
            Sıkça Sorulan Sorular
          </Button>
          <Button
            style={{ marginLeft: "1px" }}
            variant="secondary"
            onClick={handleShow3}
          >
            İletişim
          </Button>
        </ButtonGroup>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Gizlilik Sözleşmesi</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Kapat
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal show={show2} onHide={handleClose2}>
          <Modal.Header closeButton>
            <Modal.Title>Sıkça Sorulan Sorular</Modal.Title>
          </Modal.Header>
          <Modal.Body>Sorular</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose2}>
              Kapat
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal show={show3} onHide={handleClose3}>
          <Modal.Header closeButton>
            <Modal.Title>İletişim</Modal.Title>
          </Modal.Header>
          <Modal.Body>İletişim Bilgileri</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose3}>
              Kapat
            </Button>
          </Modal.Footer>
        </Modal>

        <div className="footer">
          <p>Blah Copyright © 2021</p>
        </div>
      </div>
    </div>
  );
}

export default App;
