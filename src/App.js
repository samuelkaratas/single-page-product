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
              "Siparişiniz alındı. Siparişiniz en kısa sürede kargolanacaktır. Teşekkür ederiz."
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
            "Siparişinizi oluştururken hata oluştu. Lütfen tekrar deneyiniz."
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
            "Siparişiniz alındı. Siparişiniz en kısa sürede kargolanacaktır. Teşekkür ederiz."
          );
          setName("");
          setPhoneNumber("");
          setAdress("");
          setRadioValue("1");
          setRadioValue2("1");
        })
        .catch((err) =>
          alert(
            "Siparişinizi oluştururken hata oluştu. Lütfen tekrar deneyiniz."
          )
        );*/
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
            Türkiye Resmi Sitesi
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
          Sipariş Ver
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
          Sipariş Ver
        </Button>

        <img src={productImage4} className="App-logo" alt="product" />
        <img src={gif4} className="App-logo" alt="product" />
        <img src={productImage7} className="App-logo" alt="product" />

        <Button
          style={{ marginTop: "5px", marginBottom: "5px" }}
          variant="success"
          onClick={executeScroll}
        >
          Sipariş Ver
        </Button>

        <img src={productImage8} className="App-logo" alt="product" />
        <img src={gif2} className="App-logo" alt="product" />
        <img src={productImage5} className="App-logo" alt="product" />

        <div ref={myRef} className="title">
          <ShoppingCart style={{ marginRight: "10px", color: "white" }} />
          <h1 style={{ color: "white" }}>Sipariş Formu</h1>
        </div>

        <div className="subtitle">
          <h3>Lütfen Ürün Seçiminizi Yapınız</h3>
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
                      <p>Su Geçirmez Sprey</p>
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
                        <p className="newPrize">149 TL</p>
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
                        <p className="newPrize">189 TL</p>
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

        <Form className="form">
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
                <p>Kapıda Kredi Kartı</p>
              ) : (
                <p>Kapıda Nakit</p>
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
        </ButtonGroup>

        <ButtonGroup style={{ marginTop: "2px" }} aria-label="Basic example">
          <Button
            style={{ marginRight: "2px" }}
            variant="secondary"
            onClick={handleShow4}
          >
            Ödeme ve Teslimat
          </Button>
          <Button variant="secondary" onClick={handleShow3}>
            İletişim
          </Button>
        </ButtonGroup>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Gizlilik Sözleşmesi</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h3>Kullanım ve Gizlilik</h3>
          </Modal.Body>
          <Modal.Body>
            <p style={{ fontWeight: "bold" }}>
              Genel Kurallar ve Yasal Zorunluluklar
            </p>
            <p style={{ fontWeight: "bold" }}>
              Lütfen, web sitesini kullanmadan önce aşağıda yazılı olanları
              dikkatli bir şekilde okuyunuz.
            </p>
          </Modal.Body>
          <Modal.Body>
            Verilen tüm servisler, "Orhanlı Mah. Kavaklı Sok. No:6
            Tuzla/İstanbul" , "Rudo Hırdavat Sanayi ve Ticaret A.Ş" firmamıza
            aittir ve firmamız tarafından işletilir. Eğer bu sayfada belirtilen
            şartların herhangi biri sizin için uygun değilse lütfen siteyi
            kullanmayınız. Siteyi kullanmanız veya kişisel bilgilerinizin yer
            alacağı formları doldurmanız bu sayfalarda yazılı şartları peşinen
            kabul ettiğiniz anlamına gelmektedir.
          </Modal.Body>
          <Modal.Body>
            Gizlilik ilkeleri, internet sitesinin gizlilik konusundaki
            sorumluluklarının tespiti için hazırlanmıştır. Aşağıdaki maddeler,
            sitenin güvenlik politikasını, bilgi toplama ve dağıtımı
            işlemlerinin kurallarını içermektedir. Firmamız, çeşitli amaçlarla
            kişisel veriler toplayabilir. Aşağıda, toplanan kişisel verilerin
            nasıl ve ne şekilde toplandığı, bu verilerin nasıl ve ne şekilde
            korunduğu ve işlendiği belirtilmiştir.
          </Modal.Body>
          <Modal.Body>
            <h4>KISACA GİZLİLİK BEYANIMIZ</h4>
            Web sitesi üzerinde bulunan, üyelik veya başvuru formlarını
            doldurduğunuzda, sizden bazı tanımlayıcı bilgileri vermenizi
            isteyecektir. Vermiş olduğunuz bilgileri işlem süresince, sonrasında
            ve işlem bitiminde özenle koruyacaktır. Bu site adresi, hakkınızda
            kişiyi tanımlayan bilgiler toplamayacaktır. (örneğin isim, adres,
            telefon numarası, yada e-posta adresi) ("kişisel bilgi"). Eğer
            kişisel bilgi'lerinizi verirseniz bu bilgileri; satış bilgilerinin
            takibi ve size ulaşmak gibi amaçlarla kullanmak üzere saklayacaktır.
            E-posta ve diğer kişisel bilgiler, hiçbir iş ortağı, şirket, kurum
            ya da başka bir kuruluşla kullanıcının izni olmaksızın
            paylaşılmayacaktır.
          </Modal.Body>
          <Modal.Body>
            Bilgilerinizin sistemden tamamen silinmesi için fixomaster@gmail.com
            adresine mail atarak talepte bulunmanız gerekmektedir. Talebiniz
            doğrultusunda işleminiz en geç üç(3) iş günü içerisinde
            gerçekleşecektir.
          </Modal.Body>
          <Modal.Body>
            <h4>DETAYLI GİZLİLİK BEYANIMIZ</h4>
          </Modal.Body>
          <Modal.Body>
            <h4>MADDE 1 - GİZLİLİK BEYANI</h4>
            Kullanıcılarımızın kişisel verilerinin korunması şirketimiz için en
            önemli ve hassas bir konudur. Bu gizlilik beyanı, ziyaret
            ettiğinizde hakkınızda toplanan kişisel verilerin nasıl ve ne
            şekilde toplandığı, bu verilerin nasıl ve ne şekilde korunduğu ve
            işlendiği ile ilgili beyanları içermektedir. paylaşılmayacaktır.
          </Modal.Body>
          <Modal.Body>
            <h4>MADDE 2 - KİŞİSEL VERİLERİN TOPLANMASI VE İŞLENMESİ</h4>
            Kişisel bilgiler, ad soyadı, adresi, telefon numarası, e-posta
            adresi gibi kullanıcıyı tanımlamaya yönelik her türlü diğer bilgiyi
            içermekte olup kısaca Gizli Bilgiler olarak anılacaktır. Siz, özel
            olarak kişisel bilgilerinizi vermedikçe (Örneğin başvuru formları,
            iletişim veya e-posta üyeliği başvurusu gibi durumlarda), bu site
            sizden kişisel bilgi toplayamaz. Kişisel bilgileri kendi bünyesinde,
            müşteri profili belirlemek ve istatistiksel çalışmalar yapmak
            amacıyla kullanabilecektir.
          </Modal.Body>
          <Modal.Body>
            Bilgilerinizin izin verilmeyen kullanımını ve izinsiz
            değiştirilmesini engellemek için firmamızca uygulanan özel bir
            güvenlik önlemi bulunmaktadır. Bu güvenlik önlemi; Sisteme
            girdiğiniz tüm kişisel ve destek bilgileriniz sistem tarafından
            otomatik olarak (SSL) şifrelenmektedir. Bu sayede bilgileriniz
            güvenli şekilde korunabilmektedir.
          </Modal.Body>
          <Modal.Body>
            <h4>MADDE 3 - KİŞİSEL BİLGİLERİN KULLANIMI VE YAYILMASI</h4>
            Kişisel bilgilerinizi sadece internet sitesi yönetimi gereklilikleri
            doğrultusunda, sizin özel bilgilere ulaşabilmeniz için veya sizinle
            genel iletişim için kullanacaktır. Kişisel bilgilerinizi üçüncü
            şahıslara vermeyecek veya hiçbir yerde yayınlamayacaktır. Bu Site,
            kişisel bilgileri kesinlikle özel ve gizli tutmayı, bunu bir sır
            saklama yükümlülüğü olarak addetmeyi, gizliliğin sağlanması ve
            sürdürülmesi, gizli bilginin tamamının veya herhangi bir kısmının
            kamu alanına girmesini veya yetkisiz kullanımını veya üçüncü bir
            kişiye ifşasını önlemek için gerekli tedbirleri almayı ve gerekli
            özeni göstermeyi taahhüt etmektedir. Tüketici, İşbu protokol ile
            Ticari Elektronik İletiler'in bu madde de yazılı amaçlar
            doğrultusuna gönderilebileceğine onay vermiştir.
          </Modal.Body>
          <Modal.Body>
            Aşağıda belirtilen sınırlı durumlarda işbu Gizlilik Politikası
            hükümleri dışında kullanıcılarımızın iletişim bilgilerini, üçüncü
            şahıslara açıklayabilir. Bu durumlar sınırlı sayıda olmak üzere;
          </Modal.Body>
          <Modal.Body>
            - Kanun, Kanun Hükmünde Kararname, Yönetmelik v.b. yetkili hukuki
            otorite tarafından çıkarılan ve yürürlülükte olan hukuk kurallarının
            getirdiği zorunluluklara uymak;
          </Modal.Body>
          <Modal.Body>
            - Siztemizin kullanıcılarla akdettiği Kullanım Şartları'nın ve diğer
            sözleşmelerin gereklerini yerine getirmek ve bunları uygulamaya
            koymak amacıyla;
          </Modal.Body>
          <Modal.Body>
            - Yetkili idari ve adli otorite tarafından usulüne göre yürütülen
            bir araştırma veya soruşturmanın yürütümü amacıyla kullanıcılarla
            ilgili bilgi talep edilmesi;
          </Modal.Body>
          <Modal.Body>
            <h4>
              MADDE 4 - KİŞİSEL BİLGİLERİ DEĞİŞTİRME VEYA SİLDİRME TALEBİ VE
              TALİMATLARI
            </h4>
            Kullanıcı, kişisel bilgilerinde değişiklik yapmak veya sistemden
            tamamen sildirmekte özgürdür. Bunun için fixomaster@gmail.com
            iletişim adresini kullanacaktır. Tanımlayıcı bilgileri onayladıktan
            sonra, kendisi ile ilgili işlemleri kolayca gerçekleştirecektir.
          </Modal.Body>
          <Modal.Body>
            <h4>
              MADDE 5 - GELECEKTEKİ İLETİŞİMLERİN KAPSAMI DIŞINDA KALMA TALEBİ
              VE TALİMATLARI
            </h4>
            Kullanıcı, MADDE 4 'ün işlem şeklini takip edebilir ve bunun yanı
            sıra e-posta bültenlerimize üye olan müşterilerimiz gelecekte bu
            servisimizi kullanmak istemedikleri takdirde, e-posta içeriğinin
            altında bulunan unsubscribe (listeden ayrılma) linklerini kullanarak
            anında eposta bültenlerimizden çıkabilirler.
          </Modal.Body>
          <Modal.Body>
            <h4>
              MADDE 6 - OTOMATİK OLARAK KAYDEDİLEN BİLGİLER (KİŞİSEL OLMAYAN
              VERİLER)
            </h4>
            İnternet sitesine girdiğinizde, genel kişisel olmayan bilgiler
            (kullanılan internet tarayıcısı, ziyaret sayısı, sitede harcanan
            ortalama süre, görüntülenen sayfalar) otomatik olarak kaydedilir
            (üyelik kaydından ayrı olarak). Bu bilgiler, internet sitemizin
            genel kalitesini arttırmak amacıyla kullanılır.
          </Modal.Body>
          <Modal.Body>
            <h5>MADDE 6.1 - (INTERNET PROTOKOL) IP ADRESİ</h5>
            Sistemle ilgili sorunların tanımlanması ve verilen hizmet ile ilgili
            çıkabilecek sorunların veya uyuşmazlıkların hızla çözülmesi için,
            sitemiz, üyelerinin IP adresini kaydetmekte ve bunu kullanmaktadır.
            IP adresleri, kullanıcıları genel bir şekilde tanımlamak ve kapsamlı
            demografik bilgi toplamak amacıyla da kullanılabilir. Bilgileriniz
            bundan başka işleme tabi tutulmaz ve üçüncü şahıslara kesinlikle
            iletilmez.
          </Modal.Body>
          <Modal.Body>
            <h5>MADDE 6.2 - COOKIE 'LER (TARAYICI ÇEREZLERİ)</h5>
            Cookie'ler hard diskinizde geçici olarak kaydedilen internet
            sitemizi bir sonraki ziyaretinizde sitemizin, sizin bilgisayarınızı
            tanımasını sağlayan küçük dosyalardır. Cookie 'leri sadece internet
            sitemizi ilgilendiren bilgileri toplamak için kullanır. Google dahil
            üçüncü taraf sağlayıcılar, reklamlarımızı İnternet'teki sitelerde
            göstermektedir. Google dahil üçüncü taraf sağlayıcılar,
            kullanıcılarımızın web sitemize yaptığı önceki ziyaretlere dayalı
            olarak reklam yayınlamak için çerezleri kullanmaktadır.
            Kullanıcılar, Google reklamcılık devre dışı bırakma sayfasına
            giderek Google'ın çerez kullanımını devre dışı bırakabilirler.
            Kullanıcılar, kendileri hakkında profil ayarları için, Google Reklam
            Ayarları sayfasını ziyaret edebilir veya DoubleClick devre dışı
            bırakma sayfasını ziyaret ederek, DoubleClick 'in çerez kullanımını
            devre dışı bırakabilirler. Çerez kullanımları ön tanımlı olarak açık
            olan tarayıcılarda çerez kullanımı hakkı kısıtlanmadıkça sitemizi
            ziyaret etmeniz durumunda, sizi daha sonra tanıyabilmemiz ve
            internetteki sitelerde reklam gösterimi yaptığımızda sizi ayırt
            edebilmemiz için kullanılmaktadır. Bu çerezler hiç bir kişisel /
            özel / gizli bilgi içermemektedir.
          </Modal.Body>
          <Modal.Body>
            <h4>MADDE 7 - ÜÇÜNCÜ TARAF WEB SİTELERİ VE UYGULAMALAR</h4>
            Bu web sitesi dâhilinde başka sitelere link verebilir. Firmamız, bu
            linkler vasıtasıyla erişilen sitelerin gizlilik uygulamaları ve
            içeriklerine yönelik herhangi bir sorumluluk taşımamaktadır. İş bu
            sözleşmedeki Gizlilik Politikası Prensipleri, sadece bu site
            kullanımına ilişkindir, üçüncü taraf web sitelerini kapsamaz.
          </Modal.Body>
          <Modal.Body>
            <h4>BİLGİ EDİNME HAKKI</h4>
            Gizlilik koruma beyanımız veya kişisel bilgilerinizin nasıl işleme
            alındığı hakkında sorularınız için bizimle bağlantı kurunuz.
          </Modal.Body>
          <Modal.Body>
            <h3>Güvenlik Politikamız</h3>
          </Modal.Body>
          <Modal.Body>
            <h4>IP ADRESİ (INTERNET PROTOKOL)</h4>
            Sistemle ilgili sorunların tanımlanması ve verilen hizmet ile ilgili
            çıkabilecek sorunların veya uyuşmazlıkların hızla çözülmesi için, Bu
            Site, üyelerinin IP adresini kaydetmekte ve bunu kullanmaktadır. IP
            adresleri, kullanıcıları genel bir şekilde tanımlamak ve kapsamlı
            demografik bilgi toplamak amacıyla da kullanılabilir. Bilgileriniz
            bundan başka işleme tabi tutulmaz ve üçüncü şahıslara kesinlikle
            iletilmez.
          </Modal.Body>
          <Modal.Body>
            <h4>E-POSTA GÜVENLİĞİ</h4>
            Müşteri Hizmetleri'ne, herhangi bir işleminiz ile ilgili olarak
            göndereceğiniz e-postalarda, asla kredi kartı numaranızı veya
            şifrelerinizi yazmayınız. E-postalarda yer alan bilgiler üçüncü
            şahıslar tarafından görülebilir. Firmamız e-postalarınızdan
            aktarılan bilgilerin güvenliğini hiçbir koşulda garanti edemez.
          </Modal.Body>
          <Modal.Body>
            <h4>SSL (SECURE SOCKETS LAYER) / GÜVENLİ SAYFALAR VE İŞLEMLER</h4>
          </Modal.Body>
          <Modal.Body>
            - Sizlere internet üzerinden 24 saat kesintisiz hizmet verebilmek
            için en son teknoloji kullanılarak yapılandırılmıştır. Tüm
            kullanıcıları için işlemleri keyifli olduğu kadar güvenilir hale
            getirmek için çeşitli güvenlik önlemleri uygulamaktadır.
          </Modal.Body>
          <Modal.Body>
            - İşlemlerinin yürütüldüğü sunucu (server) bilgisayarlar ve diğer
            çevre donanımlar öncelikle güvenilirliği her gün test edilen
            güvenlik duvarlarına (firewall) ve network güvenlik sistemlerine
            sahiptir. Söz konusu donanımlar aynı zamanda dünyanın en güvenli
            yazılımlarıyla çalıştırılmaktadır.
          </Modal.Body>
          <Modal.Body>
            - Elektronik ortamda gerçekleştirilen ve güvenli bilgi akışının
            sağlanmasının gerekli olduğu sistemlerde bir endüstri standardı olan
            SSL Protokolü sayesinde, alışveriş yaparken girmiş olduğunuz
            bilgileriniz, bağımsız olarak şifrelenecektir. Ayrıca SSL Protokolü,
            bulunmak istediğiniz sitenin sahte bir versiyonunda olmadığınızı,
            gerçekten doğru sitede olduğunuzu da kanıtlar. Bilgilerinizi
            girdiğiniz, internet adresinin http'den https'e (yeşil renk)
            dönüştüğü sayfanın altında veya adres çubuğunda bulunan kilit
            ikonuna çift tıklayarak SSL sertifikasını inceleyebilirsiniz. SSL
            Protokolü hakkında daha detaylı bilgi edinmek için www.ssl.com
            sitesini inceleyebilirsiniz.
          </Modal.Body>
          <Modal.Body>
            Sipariş ve Destek WhatsApp Hattı:{" "}
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
            <Modal.Title>Sıkça Sorulan Sorular</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p style={{ fontWeight: "bold" }}>
              Her siparişi kapıda ödeme yapabilir miyim?
            </p>
            Buradan satın aldığınız her ürün ister nakit ister kart seçeneği ile
            kolayca kapıda ödeme yapabilirsiniz.
          </Modal.Body>
          <Modal.Body>
            <p style={{ fontWeight: "bold" }}>
              Siparişimi kapıda açıp kontrol edebilir miyim?
            </p>
            Kargo fimasının kapıda sunum hizmeti bulunmadığı için paketinizi,
            ödemeyi yaptıktan sonra teslim alıp açabilirsiniz. Ödemeniz
            öncesinde paketin açılması söz konusu değildir. Ödemenizi yapıp
            paketinizi açtıktan sonra iade ve değişim talebiniz olursa bizimle
            ile iletişime geçerek işlemlerinizi hızlıca halledebilirsiniz.
          </Modal.Body>
          <Modal.Body>
            <p style={{ fontWeight: "bold" }}>
              Kapıda ödeme siparişlerin teslim alınmaması durumunda ne olacak?
            </p>
            Siparişinizi verdikten sonra, siparişiniz kargoya verilir ve size
            bir kargo takibi numarası sms olarak iletilir. Bu kargo takip
            numarası ile kargonuzu takip etmelisiniz. Çeşitli sebeplerden dolayı
            kargonuz size ulaşmadı ya da almak istemediniz. Bu durumda ikinci
            kez kapıda ödeme sipariş verilememektedir. Sistemimiz sizi riskli
            müşteri olarak işaretleyecek ve sonraki vereceğiniz kapıda ödeme
            siparişler otomatik olarak iptal edilecek. Bu yüzden siparişinizi
            adım adım takip ederek kargonuzu teslim almaya özen göstermelisiniz.
          </Modal.Body>
          <Modal.Body>
            <p style={{ fontWeight: "bold" }}>Şeffaf kargo var mı?</p>
            Evet. Ürünlerimiz şeffaf kargo ile gönderim sağlanmaktadır.
          </Modal.Body>
          <Modal.Body>
            <h3>KULLANIM ALANI ve ŞEKLİ</h3>
          </Modal.Body>
          <Modal.Body>
            FixoMaster; su sızıntılarına karşı yüzeyleri kaplayan, örten ve
            koruyan, kullanımı kolay bir kauçuk kaplama mastiği, bir
            sızdırmazlık, yalıtım malzemesidir. Yüzeye sıkıldığında, kauçuk
            sıvı; çatlak ve deliklere süzülür, nüfuz eder ve o bölgedeki su
            kaçağı veya her türlü sızıntıyı hızlı bir şekilde durdurur, önler.
            296gr. lık 1 adet sprey teneke kutu ile kaplama kalınlığına bağlı
            olarak yaklaşık 1 m² alan kaplar. Kuruduktan sonra üzeri istenilen
            renge boyanabilir.
          </Modal.Body>
          <Modal.Body>
            FixoMaster; sızıntı, çökme, çatlama, soyulma yapmaz. Yıllarca
            özelliğini koruyan, su geçirimsiz esnek bir kaplama oluşturur.
            FixoMaster ‘ın üzeri yağlı boya ile boyanabilir.
          </Modal.Body>
          <Modal.Body>
            <p style={{ fontWeight: "bold" }}>
              Ürünü nerelerde kullanabilirim?
            </p>
            BORULAR – SU TESİSATLARI – OLUKLAR – ÇATILAR – TERASLAR – BİNA DIŞ
            CEPHELERİ – DERZ ARALARI – PENCERE/KAPI ÇEVRELERİ – ARABALAR –
            TEKNELER
          </Modal.Body>
          <Modal.Body>
            <p style={{ fontWeight: "bold" }}>
              Ürünü hangi yüzeylerde kullanabilirim?
            </p>
            METAL – ALUMİNYUM – AHŞAP – PVC – ASTAR – ASFALT – BETON – TUĞLA –
            SIVA – GALVANİZ METAL – ÇATI MALZEMELERİ – FİBERGLAS VE DAHA FAZLASI
            !!!
          </Modal.Body>
          <Modal.Body>
            <p style={{ fontWeight: "bold" }}>Ürünü nasıl kullancağım?</p>1
            dakika kadar çalkalayınız. Püskürtme şeklini hissetmek ve kavramak
            için uygulamaya geçmeden önce bir karton parçasının üzerinde test
            ediniz. Yüzeye 15 cm ila 45 cm mesafeden püskürtünüz. Süpürme
            hareketi kullanarak, yüzeye eşit bir şekilde püskürtünüz. İki kat
            olarak uygulanması tavsiye edilir. Hafif bir ilk kat uygulamasından
            sonra ikinci kat uygulamaya geçmeden önce 15 – 30 dk. kadar ilk
            katın kurumasını bekleyiniz. İkinci katı daha kalın olarak
            uygulayabilirsiniz. İlk kat uygulamasında kabarcıklar görülebilir
            ama bunlar kurudukça ortadan kaybolur. İyi sonuç için 15°C
            üzerindeki ortam sıcaklıklarında uygulayınız. 2 saat içerisinde
            kürleşir, tam kuruma 24 saat sürer.
          </Modal.Body>
          <Modal.Body>
            Püskürtme esnasında sıçramalar yapabilir, elinize veya
            kıyafetlerinize sıçramaması için eldiven takılmasını, iş önlüğü
            giyilmesini tavsiye ederiz. Dikey uygulamalarda zemine damlamalar
            yapabilir, zeminleri korumak için bir örtü veya karton parçası
            serilmesini tavsiye ederiz. Uygulanacak bölgenin etrafında korumak
            istediğiniz alanlar var ise, kağıt bant kullanılması tavsiye edilir.
          </Modal.Body>
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
          <Modal.Body>
            Tüm soru, görüş ve şikayetleriniz için aşağıda yer alan e-posta
            adresimizi kullanarak bize dilediğiniz zaman ulaşabilirsiniz.
            Ekibimiz mesajınızı inceledikten sonra en kısa sürede size geri
            dönüş yapacaklardır.
          </Modal.Body>
          <Modal.Body>
            <a href="mailto: fixomaster@gmail.com">fixomaster@gmail.com</a>
          </Modal.Body>
          <Modal.Body>
            Bilgi ve Sipariş için WhatsApp Destek Hattı:{" "}
            <a href="tel:+905301330110">+90 530 133 01 10</a>
          </Modal.Body>
          <Modal.Body>
            Adres: RUDO HIRDAVAT SANAYİ VE TİCARET A.Ş ORHANLI MAH. KAVAKLI SOK.
            NO:6 TUZLA/İSTANBUL
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose3}>
              Kapat
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal show={show4} onHide={handleClose4}>
          <Modal.Header closeButton>
            <Modal.Title>Ödeme ve Teslimat</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <h4>Kapıda Nakit Ödeme</h4>
            Satın aldığınız ürün veya ürünler sipariş esnasında belirtmiş
            olduğunuz adresinize kadar ulaştırılacaktır. Ürünlerinizi teslim
            alırken kargo görevlisine ücreti nakit olarak yapabilirsiniz.
          </Modal.Body>

          <Modal.Body>
            <h4>Kapıda Kredi Kartı ile Ödeme</h4>
            Bu ödeme yöntemini seçerek, tüm kredi kartları veya banka kartları
            ile teslimat anında ödeme yapabilirsiniz. Satın aldığınız ürün veya
            ürünler sipariş esnasında belirtmiş olduğunuz adresinize kadar
            ulaştırılacaktır. Ürünlerinizi teslim alırken kargo görevlisine
            ücreti kredi kartı veya banka kartı ile yapabilirsiniz. Kargo
            görevlisi teslimata yanında POS Cihazı ile gelecektir.
          </Modal.Body>

          <Modal.Body>
            <h3>Teslimat Bilgileri</h3>
          </Modal.Body>

          <Modal.Body>
            <h4>Taraflar</h4>
            İnternet sitesinin faaliyetlerini yürüten "Orhanlı Mah. Kavaklı Sok.
            No:6 Tuzla/İstanbul" adresinde mukim "Rudo Hırdavat Sanayi ve
            Ticaret A.Ş" (Bundan böyle "SATICI" olarak anılacaktır). İnternet
            sitesinden sipariş veren internet kullanıcısı (Bundan böyle "ALICI"
            olarak anılacaktır).
          </Modal.Body>

          <Modal.Body>
            <h4>TESLİMAT KOŞULLARI ŞEKLİ VE BİLGİLERİ</h4>
            ALICI, sözleşme konusu ürünleri/hizmetleri satın aldığı andan
            itibaren teslimat süresi başlamış olur. SATICI, yasal zorunluluk
            olan 30 günü aşmayacak şekilde teslimatı ALICI'nın talebi
            doğrultusunda belirtmiş olduğu adrese gerçekleştirecektir.
          </Modal.Body>
          <Modal.Body>
            SATICI, teslimat işlemleri için anlaşmalı olduğu kargo veya kurye
            firmaları görevlendirir. (Kargo)
          </Modal.Body>
          <Modal.Body>
            Tüm teslimat kurallarına ek olarak SATICI, ALICI tarafından satın
            alınan sözleşme konusu hizmet veya ürünün gerekli kontrollerini
            yaparak teslimata hazır şekilde, ön bilgilendirme ve satış faturası
            ile birlikte paketleyrek dağıtıcı kargo/kurye firmalarına teslim
            etmek ile yükümlüdür.
          </Modal.Body>
          <Modal.Body>
            Sitemizden sipariş vermek birkaç basit adımdan ibarettir; Satın
            almak istediğiniz ürünün alışverişi için güvenli ödeme sayfasına
            giderek fatura / teslimat bilgilerini doldurduktan sonra ödeme
            tercihlerinizi belirler ve siparişinizi oluşturursunuz.
          </Modal.Body>

          <Modal.Body>
            <h4>ÖDEME ONAYI VE SİPARİŞİN HAZIRLANMASI</h4>
            Sitemizden verilen tüm siparişlerde alışveriş güvenliğini sağlamak
            amacıyla bir onay aşaması vardır. Siparişinizi oluştururken tercih
            ettiğiniz ödeme şekline göre ilgili departmanımız siparişinizin
            onayını alır ve siparişiniz hazırlanma sürecine girer.
          </Modal.Body>
          <Modal.Body>
            <h4>SİPARİŞİN HAZIRLANMA SÜRECİ</h4>
            Kapıda ödeme siparişlerde müşteri hizmetlerinin sipariş teyidiyle
            başlar.
          </Modal.Body>
          <Modal.Body>
            <h4>TESLİMAT SÜRESİ</h4>
            Siparişinizin ödeme ve güvenlik onayının alınmasına müteakiben;
            satın aldığınız ürünler için farklı bir tedarik süresi belirtilmemiş
            ise (Ön sipariş olan ürünler, siparişe özel üretilen ürünler vb.) en
            geç 3 iş günü içerisinde kargoya verilir. Kargoya verilen ürünlerin
            teslimat süresi mesafeye bağlı olarak 1 ila 3 gün içerisinde
            değişmektedir. Siparişinizdeki ürün/ürünlerin tedarik süresinin
            uzaması yada tedarik edilememesi durumunda size tedarik zamanı
            konusunda bilgi verilecektir. Tedariğinde problem çıkan ürünlerde;
            ödemenin iade edilmesi isteyebilir yada ürünün tedarik edilmesi için
            bekleyebilirsiniz. Cuma günleri saat 17:00?den sonra verilen
            siparişleriniz ödeme bilgisinin onayına müteakiben pazartesi günü
            verilmiş kabul edilir. Resmi tatil ve bayram günlerine rastlayan
            siparişleriniz ödeme bilgisinin teyit edilmesi durumunda takip eden
            ilk iş günü alınmış kabul edilir.
          </Modal.Body>

          <Modal.Body>
            <h4>SİPARİŞ VERİRKEN NELERE DİKKAT ETMELİSİNİZ?</h4>
            Ürünlerinizin zamanında ve eksiksiz olarak elinize ulaşması için
            siparişinizi vermeden önce dikkat etmeniz gereken bazı konular:
          </Modal.Body>
          <Modal.Body>
            <h5>Ürün stokta mı, Ön Sipariş mi?</h5>
            Seçtiğiniz ürün için ön sipariş veriyorsanız yani ürün henüz stokta
            yok ve bir gelecek tarih belirtimiş ise siparişinizin gönderilmesi
            için bu ürünün stoğa girmesi beklenecektir. Ürünlerin tedarik
            süreleri her ürün için ayrı ayrı berlitilmiştir, bu bilgiyi ürün
            sayfasında görebilirsiniz.
          </Modal.Body>
          <Modal.Body>
            <h5>Teslimat ve Fatura Adresleri</h5>
            Siparişleriniz sizin girmiş olduğunuz teslimat adresine
            gönderilecektir. Teslimatların gecikmesindeki en sık karşılaşılan
            sebeplerden biri adres bilgilerinin yetersiz olmasıdır. Lütfen
            teslimat adresinizi tam ve eksiksiz olarak giriniz.
          </Modal.Body>

          <Modal.Body>
            <h4>SİPARİŞİM NE ZAMAN GELİR?</h4>
            Ürünler stoklu olduğundan genelikle aynı kargoya teslim
            edilmektedir. Saat 15:00'dan sonra verilen siparişler bir sonraki
            gün kargoya teslim edilir. Ürünler kargoya teslim edildikten sonra
            kargo firmaları 3 iş günü içinde ulaştıracağını beyan eder.
            Cumartesi, Pazar ve Resmi tatil günlerinde gönderim yapılmaz.
            Paketin teslim gününü kargo takip numaranızı ileterek Kargodan
            öğrenebilirsiniz.
          </Modal.Body>
          <Modal.Body>
            <h4>HAFTA SONU SİPARİŞLERİ</h4>
            Cumartesi günü saat 12:00'dan sonra verdiğiniz tüm siparişler
            sonraki Pazartesi günü işleme alınacağından elinize Salı gününden
            önce ulaşamayabilir. Pazar günleri ve resmi tatil günlerinde
            teslimat yapılmamaktadır.
          </Modal.Body>
          <Modal.Body>
            <h4>SİPARİŞİM KARGOYA VERİLDİ Mİ?</h4>
            Siparişiniz kargoya teslim edildikten sonra kargo firması tarafından
            devamlı olarak bilgilendirilirsiniz.
          </Modal.Body>

          <Modal.Body>
            <h4>SİPARİŞİM HANGİ KARGO ŞİRKETİYLE TESLİM EDİLECEK?</h4>
            Teslimatlarımız Kargoist ve Kargotürk firmaları ile
            gerçekleştirilmektedir.
          </Modal.Body>
          <Modal.Body>
            <h4>SİPARİŞİMİ TESLİM ALIRKEN NELERE DİKKAT ETMELİYİM?</h4>
            Siparişinizi resimli bir kimlik ve imzanızı ibraz ederek teslim
            alabilirsiniz.
          </Modal.Body>
          <Modal.Body>
            <h4>TESLİMAT ANINDA HERHANGİ BİR BEDEL ÖDEYECEK MİYİM?</h4>
            Tüm siparişleriniz Kargo ile Türkiye'nin her yerine belirli
            kampanyalar dahilinde ücretsiz gönderilir. Siparişinizin tam ve
            sağlam olduğuna emin olunuz.
          </Modal.Body>
          <Modal.Body>
            <h4>KARGO ÜCRETİ ÖDEYECEK MİYİM?</h4>
            Tüm yapacağınız alış verişlerde kargo ücreti varsa güvenli ödeme
            sayfasında tarafınıza açık ve net tutar belirtilmektedir. Herhangi
            bir ücretsiz kargo kampanyası söz konusu olduğu zamanlarda ise bu
            bilgi yine kargo ücreti bölümünde "Ücretsiz Kargo" olarak
            belirtilmektedir.
          </Modal.Body>
          <Modal.Body>
            <h4>TESLİMAT ADRESİNDE KİMSE BULUNAMAZSA NE OLACAK?</h4>
            Kargo sorumlusu size kargo şirketinin telefon numarasını içeren bir
            haber formu bırakacaktır. Haber formunun bırakılmasını takip eden 3
            iş günü içinde kargo şirketini arayıp bilgi almanız gerekmektedir.
          </Modal.Body>
          <Modal.Body>
            <h4>
              SİPARİŞ VERDİKTEN SONRA TESLİM ALACAK KİŞİYİ DEĞİŞTİREBİLİR MİYİM?
            </h4>
            Teslim alacak kişiyi değiştirmek istediğinize de telefon ile teslim
            alacak kişiye ait bilgiler verilmelidir.
          </Modal.Body>
          <Modal.Body>
            <h4>TESLİMATTA GECİKME OLDUĞUNDA NE YAPMALIYIM?</h4>
            Eğer siparişinizin teslim edilmesi 7 iş gününü geçtiyse, bizi{" "}
            <a href="tel:+905301330110">+90 530 133 01 10</a> no'lu telefondan
            arayarak bilgi alabilirsiniz.
          </Modal.Body>
          <Modal.Body>
            <h4>HATALI / EKSİK SİPARİŞLER</h4>
            Kargodan teslim aldığınız paketi kargo görevlisinin yanında açıp,
            siparişinizi kontrol ediniz. Herhangi bir yanlışlık veya eksiklik
            gördüğünüz takdirde derhal bizimle{" "}
            <a href="tel:+905301330110">+90 530 133 01 10</a> no'lu telefon
            numaramızdan irtibata geçiniz.
          </Modal.Body>
          <Modal.Body>
            <h4>OLASI STOK SORUNU</h4>
            Verdiğiniz siparişlerde nadiren de olsa stok durumunun yetersizliği,
            yüzünden gecikmeler yaşanabilir. Bu gibi durumlarda irtibat
            telefonlarınızdan veya e-postanızdan mutlaka size ulaşılarak haber
            verilecektir. Size ulaşabilmemiz için lütfen kişisel bilgilerinizi
            eksiksiz doldurunuz.
          </Modal.Body>

          <Modal.Body>
            <h4>Gönderiler Hakkında</h4>
          </Modal.Body>

          <Modal.Body>
            <h4>HASAR GÖREN GÖNDERİLER</h4>
            Kullanıcı teslim alırken gönderiyi nakliye sırasında hasar görüp
            görmediğini tespit etmek amacıyla kontrol etmekle yükümlüdür.
            Kullanıcıya teslim edilen gönderide hasar tespit edilmesi halinde
            teslim eden Kullanıcının talebi üzerine hasar tespit tutanağı
            hazırlar. Kullanıcı ve teslim eden tarafından imzalanacak bu tutanak
            iade talebi için bir dayanak oluşturacaktır. Kullanıcı Ürünlerin
            ücretsiz olarak değiştirilmesini ve Ücret İadesi talep etme hakkına
            sahiptir.
          </Modal.Body>
          <Modal.Body>
            <h4>DEĞİŞİM İŞLEMLERİ</h4>
            Yurt içi siparişlerde değiştirmek istediğiniz ürünü ücretsiz kargo
            ile 14 gün içinde iade edebilir ve bu esnada yeni bir sipariş
            oluşturarak dilediğiniz zaman satın alabilirsiniz.
          </Modal.Body>
          <Modal.Body>
            <h4>SORUMLULUK REDDİ BEYANI</h4>
            Tanıtımı yapılan Ürünlerden herhangi birinin uygun olmayan bir
            şekilde kullanılması veya Ürün ambalajında ve/veya beraber gelen
            bilgi notunda belirtilen şekilde kullanılmaması halinde ortaya
            çıkabilecek sonuçlardan Satıcı sorumlu tutulamaz.
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose4}>
              Kapat
            </Button>
          </Modal.Footer>
        </Modal>

        <div className="footer">
          <p>Fixo Master Copyright © 2021</p>
        </div>
      </div>
    </div>
  );
}

export default App;
