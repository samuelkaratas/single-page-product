import React, { useState, useRef } from "react";

import axios from "axios";

import productImage2 from "./assets/fixo2.jpg";
import productImage3 from "./assets/fixo3.jpg";
import productImage4 from "./assets/fixo4.jpg";
import productImage5 from "./assets/fixo1.jpg";
import productImage7 from "./assets/fixo7.jpg";
import productImage8 from "./assets/fixo6.jpg";

import headerImage from "./assets/headerImage.jpg";
import headerImage2 from "./assets/headerImage2.jpg";

import adet1 from "./assets/adet1.jpeg";
import adet2 from "./assets/adet2.jpeg";
import adet3 from "./assets/adet3.jpeg";

import gif1 from "./assets/gif1.gif";
import gif2 from "./assets/gif2.gif";
import gif3 from "./assets/gif3.gif";
import gif4 from "./assets/gif4.gif";

import footerImage from "./assets/footer.png";

import "./App.css";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import Modal from "react-bootstrap/Modal";

import { Badge } from "react-bootstrap";

import { CheckCircle, Circle, ShoppingCart, Phone } from "react-feather";

function App() {
  const myRef = useRef(null);

  const [loading, setLoading] = useState(false);

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
    if (name.length && phoneNumber.length && adress.length) {
      setLoading(true);
      if (radioValue === "1") {
        price = 99;
      } else if (radioValue === "2") {
        price = 149;
      } else {
        price = 189;
      }
      const paying = radioValue2 === "1" ? "Kredi Karti" : "Nakit";
      //const message1 = `Name = ${name}, Phone Number = ${phoneNumber}, Adress = ${adress}, ${radioValue} Adet, ${paying}, Total = ${price} TL`;

      var today = new Date();
      const time = today.getHours() + ":" + today.getMinutes();
      const date =
        today.getDate() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getFullYear();

      const formData = {
        name,
        phoneNumber,
        adress,
        quantity: radioValue,
        payment: paying,
        price,
        time,
        date,
      };

      axios
        .post(
          "https://sheet.best/api/sheets/7b344b34-1757-49c5-8d1b-160cba05b870",
          formData
        )
        .then((response) => {
          if (response.status === 200) {
            alert(
              "Sipari??iniz al??nd??. Sipari??iniz en k??sa s??rede kargolanacakt??r. Te??ekk??r ederiz."
            );
          }
          setName("");
          setPhoneNumber("");
          setAdress("");
          setRadioValue("1");
          setRadioValue2("1");
          setLoading(false);
        })
        .catch((err) => {
          alert(
            "Sipari??inizi olu??tururken hata olu??tu. L??tfen tekrar deneyiniz."
          );
          setLoading(false);
        });

      /*window.emailjs
        .send("service_o8b9iqg", "template_u5t7ecl", {
          from_name: name,
          message: message1,
        })
        .then((res) => {
          alert(
            "Sipari??iniz al??nd??. Sipari??iniz en k??sa s??rede kargolanacakt??r. Te??ekk??r ederiz."
          );
          setName("");
          setPhoneNumber("");
          setAdress("");
          setRadioValue("1");
          setRadioValue2("1");
        })
        .catch((err) =>
          alert(
            "Sipari??inizi olu??tururken hata olu??tu. L??tfen tekrar deneyiniz."
          )
        );*/
    } else {
      alert("L??tfen t??m bilgileri doldurdu??unuzdan emin olun.");
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

  const [show4, setShow4] = useState(false);
  const handleClose4 = () => setShow4(false);
  const handleShow4 = () => setShow4(true);

  const executeScroll = () => myRef.current.scrollIntoView();

  return (
    <div className="Container">
      <div className="App">
        <div ref={myRef} className="header">
          <a
            style={{
              color: "white",
              marginLeft: "5px",
              textAlign: "center",
              alignSelf: "center",
              textDecoration: "none",
            }}
          >
            T??rkiye Resmi Sitesi
          </a>
          <div className="phone">
            <Phone style={{ marginRight: "10px", color: "white" }} size={20} />
            <a
              style={{
                color: "white",
                marginRight: "5px",
                textDecoration: "none",
              }}
              href="tel:+905301330110"
            >
              +90 530 133 01 10
            </a>
          </div>
        </div>

        <img src={headerImage} className="App-logo" alt="product" />

        <Button
          style={{ marginTop: "5px", marginBottom: "5px" }}
          variant="success"
          onClick={executeScroll}
        >
          Sipari?? Ver
        </Button>

        <img src={headerImage2} className="App-logo" alt="product" />

        <img src={gif1} className="App-logo" alt="product" />

        <img src={productImage2} className="App-logo" alt="product" />
        <img src={productImage3} className="App-logo" alt="product" />

        <img src={gif3} className="App-logo" alt="product" />

        <Button
          style={{ marginTop: "5px", marginBottom: "5px" }}
          variant="success"
          onClick={executeScroll}
        >
          Sipari?? Ver
        </Button>

        <img src={productImage4} className="App-logo" alt="product" />
        <img src={gif4} className="App-logo" alt="product" />
        <img src={productImage7} className="App-logo" alt="product" />

        <Button
          style={{ marginTop: "5px", marginBottom: "5px" }}
          variant="success"
          onClick={executeScroll}
        >
          Sipari?? Ver
        </Button>

        <img src={productImage8} className="App-logo" alt="product" />
        <img src={gif2} className="App-logo" alt="product" />
        <img src={productImage5} className="App-logo" alt="product" />

        <div ref={myRef} className="title">
          <ShoppingCart style={{ marginRight: "10px", color: "white" }} />
          <h1 style={{ color: "white" }}>Sipari?? Formu</h1>
        </div>

        <div className="subtitle">
          <h3>L??tfen ??r??n Se??iminizi Yap??n??z</h3>
        </div>

        <div key={"radio"} className="mb-3">
          <ButtonGroup
            toggle
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "5px",
              marginRight: "5px",
            }}
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
                variant={
                  radioValue === radio.value ? "success" : "outline-secondary"
                }
                name="radio"
                value={radio.value}
                checked={radioValue === radio.value}
                onChange={(e) => setRadioValue(e.currentTarget.value)}
              >
                {radioValue === radio.value ? (
                  <CheckCircle style={{ marginRight: "5px" }} />
                ) : (
                  <Circle style={{ marginRight: "5px" }} />
                )}
                {radio.name === "First" ? (
                  <img
                    src={adet1}
                    className="Radio-Button-Image"
                    alt="product"
                  />
                ) : null}
                {radio.name === "Second" ? (
                  <img
                    src={adet2}
                    className="Radio-Button-Image"
                    alt="product"
                  />
                ) : null}
                {radio.name === "Third" ? (
                  <img
                    src={adet3}
                    className="Radio-Button-Image"
                    alt="product"
                  />
                ) : null}
                <div className="radioTextContainer">
                  {radio.name === "First" ? (
                    <div className="radioButtonText">
                      <p>1 Adet Fixo</p>
                      <p>Su Ge??irmez Sprey</p>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                        }}
                      >
                        <p className="oldPrize">139 TL</p>
                        <p className="newPrize">89 TL</p>
                      </div>
                      <p style={{ color: "orangered", fontWeight: "bold" }}>
                        +10 TL Kargo ??creti
                      </p>
                    </div>
                  ) : null}
                  {radio.name === "Second" ? (
                    <div className="radioButtonText">
                      <p>2 Adet Fixo</p>
                      <p>Su Ge??irmez Sprey</p>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                        }}
                      >
                        <p className="oldPrize">199 TL</p>
                        <p className="newPrize">149 TL</p>
                      </div>
                      <p>
                        <Badge variant="info">??cretsiz Kargo</Badge>
                      </p>
                    </div>
                  ) : null}
                  {radio.name === "Third" ? (
                    <div className="radioButtonText">
                      <p>3 Adet Fixo</p>
                      <p>Su Ge??irmez Sprey</p>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                        }}
                      >
                        <p className="oldPrize">299 TL</p>
                        <p className="newPrize">189 TL</p>
                      </div>
                      <p>
                        <Badge variant="info">??cretsiz Kargo</Badge>
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

        <Form className="form">
          <Form.Group controlId="formGroupName">
            <Form.Label>Ad??n??z Soyad??n??z</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ad??n??z soyad??n??z..."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formGroupPhoneNumber">
            <Form.Label>Cep Telefonu Numaran??z</Form.Label>
            <Form.Control
              type="text"
              placeholder="Telefon numaran??z..."
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
          <h3>??deme Se??enekleri</h3>
        </div>

        <ButtonGroup toggle style={{ display: "flex", marginBottom: "10px" }}>
          {radios2.map((radio, idx) => (
            <ToggleButton
              key={idx}
              type="radio"
              variant={
                radioValue2 === radio.value ? "secondary" : "outline-secondary"
              }
              style={{ margin: "5px" }}
              name="radio"
              value={radio.value}
              checked={radioValue2 === radio.value}
              onChange={(e) => setRadioValue2(e.currentTarget.value)}
            >
              {radioValue2 === radio.value ? (
                <CheckCircle style={{ marginRight: "5px" }} />
              ) : (
                <Circle style={{ marginRight: "5px" }} />
              )}
              {radio.name === "Kredi" ? (
                <p>Kap??da Kredi Kart??</p>
              ) : (
                <p>Kap??da Nakit</p>
              )}
            </ToggleButton>
          ))}
        </ButtonGroup>

        <Button
          style={{
            width: "90%",
            height: "70px",
            marginBottom: "10px",
            alignSelf: "center",
          }}
          variant="success"
          onClick={handleSubmit}
          disabled={loading}
        >
          Sipari??i Tamamla
        </Button>

        <div className="info">
          <p>**MESA?? SAAT?? ??????NDE VER??LEN S??PAR????LER AYNI G??N KARGOLANIR.</p>
        </div>
        <div className="info">
          <p>**KAPIDA NAK??T YA DA KRED?? KARTI ??LE ??DEME YAPAB??L??RS??N??Z.</p>
        </div>

        <img src={footerImage} className="App-logo" alt="product" />

        <ButtonGroup aria-label="Basic example">
          <Button
            style={{ marginRight: "2px" }}
            variant="secondary"
            onClick={handleShow}
          >
            Gizlilik S??zle??mesi
          </Button>
          <Button variant="secondary" onClick={handleShow2}>
            S??k??a Sorulan Sorular
          </Button>
        </ButtonGroup>

        <ButtonGroup style={{ marginTop: "2px" }} aria-label="Basic example">
          <Button
            style={{ marginRight: "2px" }}
            variant="secondary"
            onClick={handleShow4}
          >
            ??deme ve Teslimat
          </Button>
          <Button variant="secondary" onClick={handleShow3}>
            ??leti??im
          </Button>
        </ButtonGroup>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Gizlilik S??zle??mesi</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h3>Kullan??m ve Gizlilik</h3>
          </Modal.Body>
          <Modal.Body>
            <p style={{ fontWeight: "bold" }}>
              Genel Kurallar ve Yasal Zorunluluklar
            </p>
            <p style={{ fontWeight: "bold" }}>
              L??tfen, web sitesini kullanmadan ??nce a??a????da yaz??l?? olanlar??
              dikkatli bir ??ekilde okuyunuz.
            </p>
          </Modal.Body>
          <Modal.Body>
            Verilen t??m servisler, "Orhanl?? Mah. Kavakl?? Sok. No:6
            Tuzla/??stanbul" , "Rudo H??rdavat Sanayi ve Ticaret A.??" firmam??za
            aittir ve firmam??z taraf??ndan i??letilir. E??er bu sayfada belirtilen
            ??artlar??n herhangi biri sizin i??in uygun de??ilse l??tfen siteyi
            kullanmay??n??z. Siteyi kullanman??z veya ki??isel bilgilerinizin yer
            alaca???? formlar?? doldurman??z bu sayfalarda yaz??l?? ??artlar?? pe??inen
            kabul etti??iniz anlam??na gelmektedir.
          </Modal.Body>
          <Modal.Body>
            Gizlilik ilkeleri, internet sitesinin gizlilik konusundaki
            sorumluluklar??n??n tespiti i??in haz??rlanm????t??r. A??a????daki maddeler,
            sitenin g??venlik politikas??n??, bilgi toplama ve da????t??m??
            i??lemlerinin kurallar??n?? i??ermektedir. Firmam??z, ??e??itli ama??larla
            ki??isel veriler toplayabilir. A??a????da, toplanan ki??isel verilerin
            nas??l ve ne ??ekilde topland??????, bu verilerin nas??l ve ne ??ekilde
            korundu??u ve i??lendi??i belirtilmi??tir.
          </Modal.Body>
          <Modal.Body>
            <h4>KISACA G??ZL??L??K BEYANIMIZ</h4>
            Web sitesi ??zerinde bulunan, ??yelik veya ba??vuru formlar??n??
            doldurdu??unuzda, sizden baz?? tan??mlay??c?? bilgileri vermenizi
            isteyecektir. Vermi?? oldu??unuz bilgileri i??lem s??resince, sonras??nda
            ve i??lem bitiminde ??zenle koruyacakt??r. Bu site adresi, hakk??n??zda
            ki??iyi tan??mlayan bilgiler toplamayacakt??r. (??rne??in isim, adres,
            telefon numaras??, yada e-posta adresi) ("ki??isel bilgi"). E??er
            ki??isel bilgi'lerinizi verirseniz bu bilgileri; sat???? bilgilerinin
            takibi ve size ula??mak gibi ama??larla kullanmak ??zere saklayacakt??r.
            E-posta ve di??er ki??isel bilgiler, hi??bir i?? orta????, ??irket, kurum
            ya da ba??ka bir kurulu??la kullan??c??n??n izni olmaks??z??n
            payla????lmayacakt??r.
          </Modal.Body>
          <Modal.Body>
            Bilgilerinizin sistemden tamamen silinmesi i??in fixomaster@gmail.com
            adresine mail atarak talepte bulunman??z gerekmektedir. Talebiniz
            do??rultusunda i??leminiz en ge?? ????(3) i?? g??n?? i??erisinde
            ger??ekle??ecektir.
          </Modal.Body>
          <Modal.Body>
            <h4>DETAYLI G??ZL??L??K BEYANIMIZ</h4>
          </Modal.Body>
          <Modal.Body>
            <h4>MADDE 1 - G??ZL??L??K BEYANI</h4>
            Kullan??c??lar??m??z??n ki??isel verilerinin korunmas?? ??irketimiz i??in en
            ??nemli ve hassas bir konudur. Bu gizlilik beyan??, ziyaret
            etti??inizde hakk??n??zda toplanan ki??isel verilerin nas??l ve ne
            ??ekilde topland??????, bu verilerin nas??l ve ne ??ekilde korundu??u ve
            i??lendi??i ile ilgili beyanlar?? i??ermektedir. payla????lmayacakt??r.
          </Modal.Body>
          <Modal.Body>
            <h4>MADDE 2 - K??????SEL VER??LER??N TOPLANMASI VE ????LENMES??</h4>
            Ki??isel bilgiler, ad soyad??, adresi, telefon numaras??, e-posta
            adresi gibi kullan??c??y?? tan??mlamaya y??nelik her t??rl?? di??er bilgiyi
            i??ermekte olup k??saca Gizli Bilgiler olarak an??lacakt??r. Siz, ??zel
            olarak ki??isel bilgilerinizi vermedik??e (??rne??in ba??vuru formlar??,
            ileti??im veya e-posta ??yeli??i ba??vurusu gibi durumlarda), bu site
            sizden ki??isel bilgi toplayamaz. Ki??isel bilgileri kendi b??nyesinde,
            m????teri profili belirlemek ve istatistiksel ??al????malar yapmak
            amac??yla kullanabilecektir.
          </Modal.Body>
          <Modal.Body>
            Bilgilerinizin izin verilmeyen kullan??m??n?? ve izinsiz
            de??i??tirilmesini engellemek i??in firmam??zca uygulanan ??zel bir
            g??venlik ??nlemi bulunmaktad??r. Bu g??venlik ??nlemi; Sisteme
            girdi??iniz t??m ki??isel ve destek bilgileriniz sistem taraf??ndan
            otomatik olarak (SSL) ??ifrelenmektedir. Bu sayede bilgileriniz
            g??venli ??ekilde korunabilmektedir.
          </Modal.Body>
          <Modal.Body>
            <h4>MADDE 3 - K??????SEL B??LG??LER??N KULLANIMI VE YAYILMASI</h4>
            Ki??isel bilgilerinizi sadece internet sitesi y??netimi gereklilikleri
            do??rultusunda, sizin ??zel bilgilere ula??abilmeniz i??in veya sizinle
            genel ileti??im i??in kullanacakt??r. Ki??isel bilgilerinizi ??????nc??
            ??ah??slara vermeyecek veya hi??bir yerde yay??nlamayacakt??r. Bu Site,
            ki??isel bilgileri kesinlikle ??zel ve gizli tutmay??, bunu bir s??r
            saklama y??k??ml??l?????? olarak addetmeyi, gizlili??in sa??lanmas?? ve
            s??rd??r??lmesi, gizli bilginin tamam??n??n veya herhangi bir k??sm??n??n
            kamu alan??na girmesini veya yetkisiz kullan??m??n?? veya ??????nc?? bir
            ki??iye if??as??n?? ??nlemek i??in gerekli tedbirleri almay?? ve gerekli
            ??zeni g??stermeyi taahh??t etmektedir. T??ketici, ????bu protokol ile
            Ticari Elektronik ??letiler'in bu madde de yaz??l?? ama??lar
            do??rultusuna g??nderilebilece??ine onay vermi??tir.
          </Modal.Body>
          <Modal.Body>
            A??a????da belirtilen s??n??rl?? durumlarda i??bu Gizlilik Politikas??
            h??k??mleri d??????nda kullan??c??lar??m??z??n ileti??im bilgilerini, ??????nc??
            ??ah??slara a????klayabilir. Bu durumlar s??n??rl?? say??da olmak ??zere;
          </Modal.Body>
          <Modal.Body>
            - Kanun, Kanun H??km??nde Kararname, Y??netmelik v.b. yetkili hukuki
            otorite taraf??ndan ????kar??lan ve y??r??rl??l??kte olan hukuk kurallar??n??n
            getirdi??i zorunluluklara uymak;
          </Modal.Body>
          <Modal.Body>
            - Siztemizin kullan??c??larla akdetti??i Kullan??m ??artlar??'n??n ve di??er
            s??zle??melerin gereklerini yerine getirmek ve bunlar?? uygulamaya
            koymak amac??yla;
          </Modal.Body>
          <Modal.Body>
            - Yetkili idari ve adli otorite taraf??ndan usul??ne g??re y??r??t??len
            bir ara??t??rma veya soru??turman??n y??r??t??m?? amac??yla kullan??c??larla
            ilgili bilgi talep edilmesi;
          </Modal.Body>
          <Modal.Body>
            <h4>
              MADDE 4 - K??????SEL B??LG??LER?? DE??????T??RME VEYA S??LD??RME TALEB?? VE
              TAL??MATLARI
            </h4>
            Kullan??c??, ki??isel bilgilerinde de??i??iklik yapmak veya sistemden
            tamamen sildirmekte ??zg??rd??r. Bunun i??in fixomaster@gmail.com
            ileti??im adresini kullanacakt??r. Tan??mlay??c?? bilgileri onaylad??ktan
            sonra, kendisi ile ilgili i??lemleri kolayca ger??ekle??tirecektir.
          </Modal.Body>
          <Modal.Body>
            <h4>
              MADDE 5 - GELECEKTEK?? ??LET??????MLER??N KAPSAMI DI??INDA KALMA TALEB??
              VE TAL??MATLARI
            </h4>
            Kullan??c??, MADDE 4 '??n i??lem ??eklini takip edebilir ve bunun yan??
            s??ra e-posta b??ltenlerimize ??ye olan m????terilerimiz gelecekte bu
            servisimizi kullanmak istemedikleri takdirde, e-posta i??eri??inin
            alt??nda bulunan unsubscribe (listeden ayr??lma) linklerini kullanarak
            an??nda eposta b??ltenlerimizden ????kabilirler.
          </Modal.Body>
          <Modal.Body>
            <h4>
              MADDE 6 - OTOMAT??K OLARAK KAYDED??LEN B??LG??LER (K??????SEL OLMAYAN
              VER??LER)
            </h4>
            ??nternet sitesine girdi??inizde, genel ki??isel olmayan bilgiler
            (kullan??lan internet taray??c??s??, ziyaret say??s??, sitede harcanan
            ortalama s??re, g??r??nt??lenen sayfalar) otomatik olarak kaydedilir
            (??yelik kayd??ndan ayr?? olarak). Bu bilgiler, internet sitemizin
            genel kalitesini artt??rmak amac??yla kullan??l??r.
          </Modal.Body>
          <Modal.Body>
            <h5>MADDE 6.1 - (INTERNET PROTOKOL) IP ADRES??</h5>
            Sistemle ilgili sorunlar??n tan??mlanmas?? ve verilen hizmet ile ilgili
            ????kabilecek sorunlar??n veya uyu??mazl??klar??n h??zla ????z??lmesi i??in,
            sitemiz, ??yelerinin IP adresini kaydetmekte ve bunu kullanmaktad??r.
            IP adresleri, kullan??c??lar?? genel bir ??ekilde tan??mlamak ve kapsaml??
            demografik bilgi toplamak amac??yla da kullan??labilir. Bilgileriniz
            bundan ba??ka i??leme tabi tutulmaz ve ??????nc?? ??ah??slara kesinlikle
            iletilmez.
          </Modal.Body>
          <Modal.Body>
            <h5>MADDE 6.2 - COOKIE 'LER (TARAYICI ??EREZLER??)</h5>
            Cookie'ler hard diskinizde ge??ici olarak kaydedilen internet
            sitemizi bir sonraki ziyaretinizde sitemizin, sizin bilgisayar??n??z??
            tan??mas??n?? sa??layan k??????k dosyalard??r. Cookie 'leri sadece internet
            sitemizi ilgilendiren bilgileri toplamak i??in kullan??r. Google dahil
            ??????nc?? taraf sa??lay??c??lar, reklamlar??m??z?? ??nternet'teki sitelerde
            g??stermektedir. Google dahil ??????nc?? taraf sa??lay??c??lar,
            kullan??c??lar??m??z??n web sitemize yapt?????? ??nceki ziyaretlere dayal??
            olarak reklam yay??nlamak i??in ??erezleri kullanmaktad??r.
            Kullan??c??lar, Google reklamc??l??k devre d?????? b??rakma sayfas??na
            giderek Google'??n ??erez kullan??m??n?? devre d?????? b??rakabilirler.
            Kullan??c??lar, kendileri hakk??nda profil ayarlar?? i??in, Google Reklam
            Ayarlar?? sayfas??n?? ziyaret edebilir veya DoubleClick devre d??????
            b??rakma sayfas??n?? ziyaret ederek, DoubleClick 'in ??erez kullan??m??n??
            devre d?????? b??rakabilirler. ??erez kullan??mlar?? ??n tan??ml?? olarak a????k
            olan taray??c??larda ??erez kullan??m?? hakk?? k??s??tlanmad??k??a sitemizi
            ziyaret etmeniz durumunda, sizi daha sonra tan??yabilmemiz ve
            internetteki sitelerde reklam g??sterimi yapt??????m??zda sizi ay??rt
            edebilmemiz i??in kullan??lmaktad??r. Bu ??erezler hi?? bir ki??isel /
            ??zel / gizli bilgi i??ermemektedir.
          </Modal.Body>
          <Modal.Body>
            <h4>MADDE 7 - ??????NC?? TARAF WEB S??TELER?? VE UYGULAMALAR</h4>
            Bu web sitesi d??hilinde ba??ka sitelere link verebilir. Firmam??z, bu
            linkler vas??tas??yla eri??ilen sitelerin gizlilik uygulamalar?? ve
            i??eriklerine y??nelik herhangi bir sorumluluk ta????mamaktad??r. ???? bu
            s??zle??medeki Gizlilik Politikas?? Prensipleri, sadece bu site
            kullan??m??na ili??kindir, ??????nc?? taraf web sitelerini kapsamaz.
          </Modal.Body>
          <Modal.Body>
            <h4>B??LG?? ED??NME HAKKI</h4>
            Gizlilik koruma beyan??m??z veya ki??isel bilgilerinizin nas??l i??leme
            al??nd?????? hakk??nda sorular??n??z i??in bizimle ba??lant?? kurunuz.
          </Modal.Body>
          <Modal.Body>
            <h3>G??venlik Politikam??z</h3>
          </Modal.Body>
          <Modal.Body>
            <h4>IP ADRES?? (INTERNET PROTOKOL)</h4>
            Sistemle ilgili sorunlar??n tan??mlanmas?? ve verilen hizmet ile ilgili
            ????kabilecek sorunlar??n veya uyu??mazl??klar??n h??zla ????z??lmesi i??in, Bu
            Site, ??yelerinin IP adresini kaydetmekte ve bunu kullanmaktad??r. IP
            adresleri, kullan??c??lar?? genel bir ??ekilde tan??mlamak ve kapsaml??
            demografik bilgi toplamak amac??yla da kullan??labilir. Bilgileriniz
            bundan ba??ka i??leme tabi tutulmaz ve ??????nc?? ??ah??slara kesinlikle
            iletilmez.
          </Modal.Body>
          <Modal.Body>
            <h4>E-POSTA G??VENL??????</h4>
            M????teri Hizmetleri'ne, herhangi bir i??leminiz ile ilgili olarak
            g??nderece??iniz e-postalarda, asla kredi kart?? numaran??z?? veya
            ??ifrelerinizi yazmay??n??z. E-postalarda yer alan bilgiler ??????nc??
            ??ah??slar taraf??ndan g??r??lebilir. Firmam??z e-postalar??n??zdan
            aktar??lan bilgilerin g??venli??ini hi??bir ko??ulda garanti edemez.
          </Modal.Body>
          <Modal.Body>
            <h4>SSL (SECURE SOCKETS LAYER) / G??VENL?? SAYFALAR VE ????LEMLER</h4>
          </Modal.Body>
          <Modal.Body>
            - Sizlere internet ??zerinden 24 saat kesintisiz hizmet verebilmek
            i??in en son teknoloji kullan??larak yap??land??r??lm????t??r. T??m
            kullan??c??lar?? i??in i??lemleri keyifli oldu??u kadar g??venilir hale
            getirmek i??in ??e??itli g??venlik ??nlemleri uygulamaktad??r.
          </Modal.Body>
          <Modal.Body>
            - ????lemlerinin y??r??t??ld?????? sunucu (server) bilgisayarlar ve di??er
            ??evre donan??mlar ??ncelikle g??venilirli??i her g??n test edilen
            g??venlik duvarlar??na (firewall) ve network g??venlik sistemlerine
            sahiptir. S??z konusu donan??mlar ayn?? zamanda d??nyan??n en g??venli
            yaz??l??mlar??yla ??al????t??r??lmaktad??r.
          </Modal.Body>
          <Modal.Body>
            - Elektronik ortamda ger??ekle??tirilen ve g??venli bilgi ak??????n??n
            sa??lanmas??n??n gerekli oldu??u sistemlerde bir end??stri standard?? olan
            SSL Protokol?? sayesinde, al????veri?? yaparken girmi?? oldu??unuz
            bilgileriniz, ba????ms??z olarak ??ifrelenecektir. Ayr??ca SSL Protokol??,
            bulunmak istedi??iniz sitenin sahte bir versiyonunda olmad??????n??z??,
            ger??ekten do??ru sitede oldu??unuzu da kan??tlar. Bilgilerinizi
            girdi??iniz, internet adresinin http'den https'e (ye??il renk)
            d??n????t?????? sayfan??n alt??nda veya adres ??ubu??unda bulunan kilit
            ikonuna ??ift t??klayarak SSL sertifikas??n?? inceleyebilirsiniz. SSL
            Protokol?? hakk??nda daha detayl?? bilgi edinmek i??in www.ssl.com
            sitesini inceleyebilirsiniz.
          </Modal.Body>
          <Modal.Body>
            Sipari?? ve Destek WhatsApp Hatt??:{" "}
            <a href="tel:+905301330110">+90 530 133 01 10</a>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Kapat
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal show={show2} onHide={handleClose2}>
          <Modal.Header closeButton>
            <Modal.Title>S??k??a Sorulan Sorular</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p style={{ fontWeight: "bold" }}>
              Her sipari??i kap??da ??deme yapabilir miyim?
            </p>
            Buradan sat??n ald??????n??z her ??r??n ister nakit ister kart se??ene??i ile
            kolayca kap??da ??deme yapabilirsiniz.
          </Modal.Body>
          <Modal.Body>
            <p style={{ fontWeight: "bold" }}>
              Sipari??imi kap??da a????p kontrol edebilir miyim?
            </p>
            Kargo fimas??n??n kap??da sunum hizmeti bulunmad?????? i??in paketinizi,
            ??demeyi yapt??ktan sonra teslim al??p a??abilirsiniz. ??demeniz
            ??ncesinde paketin a????lmas?? s??z konusu de??ildir. ??demenizi yap??p
            paketinizi a??t??ktan sonra iade ve de??i??im talebiniz olursa bizimle
            ile ileti??ime ge??erek i??lemlerinizi h??zl??ca halledebilirsiniz.
          </Modal.Body>
          <Modal.Body>
            <p style={{ fontWeight: "bold" }}>
              Kap??da ??deme sipari??lerin teslim al??nmamas?? durumunda ne olacak?
            </p>
            Sipari??inizi verdikten sonra, sipari??iniz kargoya verilir ve size
            bir kargo takibi numaras?? sms olarak iletilir. Bu kargo takip
            numaras?? ile kargonuzu takip etmelisiniz. ??e??itli sebeplerden dolay??
            kargonuz size ula??mad?? ya da almak istemediniz. Bu durumda ikinci
            kez kap??da ??deme sipari?? verilememektedir. Sistemimiz sizi riskli
            m????teri olarak i??aretleyecek ve sonraki verece??iniz kap??da ??deme
            sipari??ler otomatik olarak iptal edilecek. Bu y??zden sipari??inizi
            ad??m ad??m takip ederek kargonuzu teslim almaya ??zen g??stermelisiniz.
          </Modal.Body>
          <Modal.Body>
            <p style={{ fontWeight: "bold" }}>??effaf kargo var m???</p>
            Evet. ??r??nlerimiz ??effaf kargo ile g??nderim sa??lanmaktad??r.
          </Modal.Body>
          <Modal.Body>
            <h3>KULLANIM ALANI ve ??EKL??</h3>
          </Modal.Body>
          <Modal.Body>
            FixoMaster; su s??z??nt??lar??na kar???? y??zeyleri kaplayan, ??rten ve
            koruyan, kullan??m?? kolay bir kau??uk kaplama masti??i, bir
            s??zd??rmazl??k, yal??t??m malzemesidir. Y??zeye s??k??ld??????nda, kau??uk
            s??v??; ??atlak ve deliklere s??z??l??r, n??fuz eder ve o b??lgedeki su
            ka??a???? veya her t??rl?? s??z??nt??y?? h??zl?? bir ??ekilde durdurur, ??nler.
            296gr. l??k 1 adet sprey teneke kutu ile kaplama kal??nl??????na ba??l??
            olarak yakla????k 1 m?? alan kaplar. Kuruduktan sonra ??zeri istenilen
            renge boyanabilir.
          </Modal.Body>
          <Modal.Body>
            FixoMaster; s??z??nt??, ????kme, ??atlama, soyulma yapmaz. Y??llarca
            ??zelli??ini koruyan, su ge??irimsiz esnek bir kaplama olu??turur.
            FixoMaster ?????n ??zeri ya??l?? boya ile boyanabilir.
          </Modal.Body>
          <Modal.Body>
            <p style={{ fontWeight: "bold" }}>
              ??r??n?? nerelerde kullanabilirim?
            </p>
            BORULAR ??? SU TES??SATLARI ??? OLUKLAR ??? ??ATILAR ??? TERASLAR ??? B??NA DI??
            CEPHELER?? ??? DERZ ARALARI ??? PENCERE/KAPI ??EVRELER?? ??? ARABALAR ???
            TEKNELER
          </Modal.Body>
          <Modal.Body>
            <p style={{ fontWeight: "bold" }}>
              ??r??n?? hangi y??zeylerde kullanabilirim?
            </p>
            METAL ??? ALUM??NYUM ??? AH??AP ??? PVC ??? ASTAR ??? ASFALT ??? BETON ??? TU??LA ???
            SIVA ??? GALVAN??Z METAL ??? ??ATI MALZEMELER?? ??? F??BERGLAS VE DAHA FAZLASI
            !!!
          </Modal.Body>
          <Modal.Body>
            <p style={{ fontWeight: "bold" }}>??r??n?? nas??l kullanca????m?</p>1
            dakika kadar ??alkalay??n??z. P??sk??rtme ??eklini hissetmek ve kavramak
            i??in uygulamaya ge??meden ??nce bir karton par??as??n??n ??zerinde test
            ediniz. Y??zeye 15 cm ila 45 cm mesafeden p??sk??rt??n??z. S??p??rme
            hareketi kullanarak, y??zeye e??it bir ??ekilde p??sk??rt??n??z. ??ki kat
            olarak uygulanmas?? tavsiye edilir. Hafif bir ilk kat uygulamas??ndan
            sonra ikinci kat uygulamaya ge??meden ??nce 15 ??? 30 dk. kadar ilk
            kat??n kurumas??n?? bekleyiniz. ??kinci kat?? daha kal??n olarak
            uygulayabilirsiniz. ??lk kat uygulamas??nda kabarc??klar g??r??lebilir
            ama bunlar kuruduk??a ortadan kaybolur. ??yi sonu?? i??in 15??C
            ??zerindeki ortam s??cakl??klar??nda uygulay??n??z. 2 saat i??erisinde
            k??rle??ir, tam kuruma 24 saat s??rer.
          </Modal.Body>
          <Modal.Body>
            P??sk??rtme esnas??nda s????ramalar yapabilir, elinize veya
            k??yafetlerinize s????ramamas?? i??in eldiven tak??lmas??n??, i?? ??nl??????
            giyilmesini tavsiye ederiz. Dikey uygulamalarda zemine damlamalar
            yapabilir, zeminleri korumak i??in bir ??rt?? veya karton par??as??
            serilmesini tavsiye ederiz. Uygulanacak b??lgenin etraf??nda korumak
            istedi??iniz alanlar var ise, ka????t bant kullan??lmas?? tavsiye edilir.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose2}>
              Kapat
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal show={show3} onHide={handleClose3}>
          <Modal.Header closeButton>
            <Modal.Title>??leti??im</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            T??m soru, g??r???? ve ??ikayetleriniz i??in a??a????da yer alan e-posta
            adresimizi kullanarak bize diledi??iniz zaman ula??abilirsiniz.
            Ekibimiz mesaj??n??z?? inceledikten sonra en k??sa s??rede size geri
            d??n???? yapacaklard??r.
          </Modal.Body>
          <Modal.Body>
            <a href="mailto: fixomaster@gmail.com">fixomaster@gmail.com</a>
          </Modal.Body>
          <Modal.Body>
            Bilgi ve Sipari?? i??in WhatsApp Destek Hatt??:{" "}
            <a href="tel:+905301330110">+90 530 133 01 10</a>
          </Modal.Body>
          <Modal.Body>
            Adres: RUDO HIRDAVAT SANAY?? VE T??CARET A.?? ORHANLI MAH. KAVAKLI SOK.
            NO:6 TUZLA/??STANBUL
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose3}>
              Kapat
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal show={show4} onHide={handleClose4}>
          <Modal.Header closeButton>
            <Modal.Title>??deme ve Teslimat</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <h4>Kap??da Nakit ??deme</h4>
            Sat??n ald??????n??z ??r??n veya ??r??nler sipari?? esnas??nda belirtmi??
            oldu??unuz adresinize kadar ula??t??r??lacakt??r. ??r??nlerinizi teslim
            al??rken kargo g??revlisine ??creti nakit olarak yapabilirsiniz.
          </Modal.Body>

          <Modal.Body>
            <h4>Kap??da Kredi Kart?? ile ??deme</h4>
            Bu ??deme y??ntemini se??erek, t??m kredi kartlar?? veya banka kartlar??
            ile teslimat an??nda ??deme yapabilirsiniz. Sat??n ald??????n??z ??r??n veya
            ??r??nler sipari?? esnas??nda belirtmi?? oldu??unuz adresinize kadar
            ula??t??r??lacakt??r. ??r??nlerinizi teslim al??rken kargo g??revlisine
            ??creti kredi kart?? veya banka kart?? ile yapabilirsiniz. Kargo
            g??revlisi teslimata yan??nda POS Cihaz?? ile gelecektir.
          </Modal.Body>

          <Modal.Body>
            <h3>Teslimat Bilgileri</h3>
          </Modal.Body>

          <Modal.Body>
            <h4>Taraflar</h4>
            ??nternet sitesinin faaliyetlerini y??r??ten "Orhanl?? Mah. Kavakl?? Sok.
            No:6 Tuzla/??stanbul" adresinde mukim "Rudo H??rdavat Sanayi ve
            Ticaret A.??" (Bundan b??yle "SATICI" olarak an??lacakt??r). ??nternet
            sitesinden sipari?? veren internet kullan??c??s?? (Bundan b??yle "ALICI"
            olarak an??lacakt??r).
          </Modal.Body>

          <Modal.Body>
            <h4>TESL??MAT KO??ULLARI ??EKL?? VE B??LG??LER??</h4>
            ALICI, s??zle??me konusu ??r??nleri/hizmetleri sat??n ald?????? andan
            itibaren teslimat s??resi ba??lam???? olur. SATICI, yasal zorunluluk
            olan 30 g??n?? a??mayacak ??ekilde teslimat?? ALICI'n??n talebi
            do??rultusunda belirtmi?? oldu??u adrese ger??ekle??tirecektir.
          </Modal.Body>
          <Modal.Body>
            SATICI, teslimat i??lemleri i??in anla??mal?? oldu??u kargo veya kurye
            firmalar?? g??revlendirir. (Kargo)
          </Modal.Body>
          <Modal.Body>
            T??m teslimat kurallar??na ek olarak SATICI, ALICI taraf??ndan sat??n
            al??nan s??zle??me konusu hizmet veya ??r??n??n gerekli kontrollerini
            yaparak teslimata haz??r ??ekilde, ??n bilgilendirme ve sat???? faturas??
            ile birlikte paketleyrek da????t??c?? kargo/kurye firmalar??na teslim
            etmek ile y??k??ml??d??r.
          </Modal.Body>
          <Modal.Body>
            Sitemizden sipari?? vermek birka?? basit ad??mdan ibarettir; Sat??n
            almak istedi??iniz ??r??n??n al????veri??i i??in g??venli ??deme sayfas??na
            giderek fatura / teslimat bilgilerini doldurduktan sonra ??deme
            tercihlerinizi belirler ve sipari??inizi olu??turursunuz.
          </Modal.Body>

          <Modal.Body>
            <h4>??DEME ONAYI VE S??PAR??????N HAZIRLANMASI</h4>
            Sitemizden verilen t??m sipari??lerde al????veri?? g??venli??ini sa??lamak
            amac??yla bir onay a??amas?? vard??r. Sipari??inizi olu??tururken tercih
            etti??iniz ??deme ??ekline g??re ilgili departman??m??z sipari??inizin
            onay??n?? al??r ve sipari??iniz haz??rlanma s??recine girer.
          </Modal.Body>
          <Modal.Body>
            <h4>S??PAR??????N HAZIRLANMA S??REC??</h4>
            Kap??da ??deme sipari??lerde m????teri hizmetlerinin sipari?? teyidiyle
            ba??lar.
          </Modal.Body>
          <Modal.Body>
            <h4>TESL??MAT S??RES??</h4>
            Sipari??inizin ??deme ve g??venlik onay??n??n al??nmas??na m??teakiben;
            sat??n ald??????n??z ??r??nler i??in farkl?? bir tedarik s??resi belirtilmemi??
            ise (??n sipari?? olan ??r??nler, sipari??e ??zel ??retilen ??r??nler vb.) en
            ge?? 3 i?? g??n?? i??erisinde kargoya verilir. Kargoya verilen ??r??nlerin
            teslimat s??resi mesafeye ba??l?? olarak 1 ila 3 g??n i??erisinde
            de??i??mektedir. Sipari??inizdeki ??r??n/??r??nlerin tedarik s??resinin
            uzamas?? yada tedarik edilememesi durumunda size tedarik zaman??
            konusunda bilgi verilecektir. Tedari??inde problem ????kan ??r??nlerde;
            ??demenin iade edilmesi isteyebilir yada ??r??n??n tedarik edilmesi i??in
            bekleyebilirsiniz. Cuma g??nleri saat 17:00?den sonra verilen
            sipari??leriniz ??deme bilgisinin onay??na m??teakiben pazartesi g??n??
            verilmi?? kabul edilir. Resmi tatil ve bayram g??nlerine rastlayan
            sipari??leriniz ??deme bilgisinin teyit edilmesi durumunda takip eden
            ilk i?? g??n?? al??nm???? kabul edilir.
          </Modal.Body>

          <Modal.Body>
            <h4>S??PAR???? VER??RKEN NELERE D??KKAT ETMEL??S??N??Z?</h4>
            ??r??nlerinizin zaman??nda ve eksiksiz olarak elinize ula??mas?? i??in
            sipari??inizi vermeden ??nce dikkat etmeniz gereken baz?? konular:
          </Modal.Body>
          <Modal.Body>
            <h5>??r??n stokta m??, ??n Sipari?? mi?</h5>
            Se??ti??iniz ??r??n i??in ??n sipari?? veriyorsan??z yani ??r??n hen??z stokta
            yok ve bir gelecek tarih belirtimi?? ise sipari??inizin g??nderilmesi
            i??in bu ??r??n??n sto??a girmesi beklenecektir. ??r??nlerin tedarik
            s??releri her ??r??n i??in ayr?? ayr?? berlitilmi??tir, bu bilgiyi ??r??n
            sayfas??nda g??rebilirsiniz.
          </Modal.Body>
          <Modal.Body>
            <h5>Teslimat ve Fatura Adresleri</h5>
            Sipari??leriniz sizin girmi?? oldu??unuz teslimat adresine
            g??nderilecektir. Teslimatlar??n gecikmesindeki en s??k kar????la????lan
            sebeplerden biri adres bilgilerinin yetersiz olmas??d??r. L??tfen
            teslimat adresinizi tam ve eksiksiz olarak giriniz.
          </Modal.Body>

          <Modal.Body>
            <h4>S??PAR??????M NE ZAMAN GEL??R?</h4>
            ??r??nler stoklu oldu??undan genelikle ayn?? kargoya teslim
            edilmektedir. Saat 15:00'dan sonra verilen sipari??ler bir sonraki
            g??n kargoya teslim edilir. ??r??nler kargoya teslim edildikten sonra
            kargo firmalar?? 3 i?? g??n?? i??inde ula??t??raca????n?? beyan eder.
            Cumartesi, Pazar ve Resmi tatil g??nlerinde g??nderim yap??lmaz.
            Paketin teslim g??n??n?? kargo takip numaran??z?? ileterek Kargodan
            ????renebilirsiniz.
          </Modal.Body>
          <Modal.Body>
            <h4>HAFTA SONU S??PAR????LER??</h4>
            Cumartesi g??n?? saat 12:00'dan sonra verdi??iniz t??m sipari??ler
            sonraki Pazartesi g??n?? i??leme al??naca????ndan elinize Sal?? g??n??nden
            ??nce ula??amayabilir. Pazar g??nleri ve resmi tatil g??nlerinde
            teslimat yap??lmamaktad??r.
          </Modal.Body>
          <Modal.Body>
            <h4>S??PAR??????M KARGOYA VER??LD?? M???</h4>
            Sipari??iniz kargoya teslim edildikten sonra kargo firmas?? taraf??ndan
            devaml?? olarak bilgilendirilirsiniz.
          </Modal.Body>

          <Modal.Body>
            <h4>S??PAR??????M HANG?? KARGO ????RKET??YLE TESL??M ED??LECEK?</h4>
            Teslimatlar??m??z Kargoist ve Kargot??rk firmalar?? ile
            ger??ekle??tirilmektedir.
          </Modal.Body>
          <Modal.Body>
            <h4>S??PAR??????M?? TESL??M ALIRKEN NELERE D??KKAT ETMEL??Y??M?</h4>
            Sipari??inizi resimli bir kimlik ve imzan??z?? ibraz ederek teslim
            alabilirsiniz.
          </Modal.Body>
          <Modal.Body>
            <h4>TESL??MAT ANINDA HERHANG?? B??R BEDEL ??DEYECEK M??Y??M?</h4>
            T??m sipari??leriniz Kargo ile T??rkiye'nin her yerine belirli
            kampanyalar dahilinde ??cretsiz g??nderilir. Sipari??inizin tam ve
            sa??lam oldu??una emin olunuz.
          </Modal.Body>
          <Modal.Body>
            <h4>KARGO ??CRET?? ??DEYECEK M??Y??M?</h4>
            T??m yapaca????n??z al???? veri??lerde kargo ??creti varsa g??venli ??deme
            sayfas??nda taraf??n??za a????k ve net tutar belirtilmektedir. Herhangi
            bir ??cretsiz kargo kampanyas?? s??z konusu oldu??u zamanlarda ise bu
            bilgi yine kargo ??creti b??l??m??nde "??cretsiz Kargo" olarak
            belirtilmektedir.
          </Modal.Body>
          <Modal.Body>
            <h4>TESL??MAT ADRES??NDE K??MSE BULUNAMAZSA NE OLACAK?</h4>
            Kargo sorumlusu size kargo ??irketinin telefon numaras??n?? i??eren bir
            haber formu b??rakacakt??r. Haber formunun b??rak??lmas??n?? takip eden 3
            i?? g??n?? i??inde kargo ??irketini aray??p bilgi alman??z gerekmektedir.
          </Modal.Body>
          <Modal.Body>
            <h4>
              S??PAR???? VERD??KTEN SONRA TESL??M ALACAK K??????Y?? DE??????T??REB??L??R M??Y??M?
            </h4>
            Teslim alacak ki??iyi de??i??tirmek istedi??inize de telefon ile teslim
            alacak ki??iye ait bilgiler verilmelidir.
          </Modal.Body>
          <Modal.Body>
            <h4>TESL??MATTA GEC??KME OLDU??UNDA NE YAPMALIYIM?</h4>
            E??er sipari??inizin teslim edilmesi 7 i?? g??n??n?? ge??tiyse, bizi{" "}
            <a href="tel:+905301330110">+90 530 133 01 10</a> no'lu telefondan
            arayarak bilgi alabilirsiniz.
          </Modal.Body>
          <Modal.Body>
            <h4>HATALI / EKS??K S??PAR????LER</h4>
            Kargodan teslim ald??????n??z paketi kargo g??revlisinin yan??nda a????p,
            sipari??inizi kontrol ediniz. Herhangi bir yanl????l??k veya eksiklik
            g??rd??????n??z takdirde derhal bizimle{" "}
            <a href="tel:+905301330110">+90 530 133 01 10</a> no'lu telefon
            numaram??zdan irtibata ge??iniz.
          </Modal.Body>
          <Modal.Body>
            <h4>OLASI STOK SORUNU</h4>
            Verdi??iniz sipari??lerde nadiren de olsa stok durumunun yetersizli??i,
            y??z??nden gecikmeler ya??anabilir. Bu gibi durumlarda irtibat
            telefonlar??n??zdan veya e-postan??zdan mutlaka size ula????larak haber
            verilecektir. Size ula??abilmemiz i??in l??tfen ki??isel bilgilerinizi
            eksiksiz doldurunuz.
          </Modal.Body>

          <Modal.Body>
            <h4>G??nderiler Hakk??nda</h4>
          </Modal.Body>

          <Modal.Body>
            <h4>HASAR G??REN G??NDER??LER</h4>
            Kullan??c?? teslim al??rken g??nderiyi nakliye s??ras??nda hasar g??r??p
            g??rmedi??ini tespit etmek amac??yla kontrol etmekle y??k??ml??d??r.
            Kullan??c??ya teslim edilen g??nderide hasar tespit edilmesi halinde
            teslim eden Kullan??c??n??n talebi ??zerine hasar tespit tutana????
            haz??rlar. Kullan??c?? ve teslim eden taraf??ndan imzalanacak bu tutanak
            iade talebi i??in bir dayanak olu??turacakt??r. Kullan??c?? ??r??nlerin
            ??cretsiz olarak de??i??tirilmesini ve ??cret ??adesi talep etme hakk??na
            sahiptir.
          </Modal.Body>
          <Modal.Body>
            <h4>DE????????M ????LEMLER??</h4>
            Yurt i??i sipari??lerde de??i??tirmek istedi??iniz ??r??n?? ??cretsiz kargo
            ile 14 g??n i??inde iade edebilir ve bu esnada yeni bir sipari??
            olu??turarak diledi??iniz zaman sat??n alabilirsiniz.
          </Modal.Body>
          <Modal.Body>
            <h4>SORUMLULUK REDD?? BEYANI</h4>
            Tan??t??m?? yap??lan ??r??nlerden herhangi birinin uygun olmayan bir
            ??ekilde kullan??lmas?? veya ??r??n ambalaj??nda ve/veya beraber gelen
            bilgi notunda belirtilen ??ekilde kullan??lmamas?? halinde ortaya
            ????kabilecek sonu??lardan Sat??c?? sorumlu tutulamaz.
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose4}>
              Kapat
            </Button>
          </Modal.Footer>
        </Modal>

        <div className="footer">
          <p>Fixo Master Copyright ?? 2021</p>
        </div>
      </div>
    </div>
  );
}

export default App;
