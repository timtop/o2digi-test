import Layout from "./components/Layout";
import styles from "./App.module.css";
import Lottie from "react-lottie";
import Rider from "./lottie/Header-lottie.json";
import nike from "./lottie/Rider-lottie.json";
import search from "./assets/search-icon.png";
import bicycle from "./assets/bicycle.png";
import slantbike from "./assets/horizontalbicycle.png";
import biker from "./assets/biker.png";

function App() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Rider,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: nike,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Layout>
      <div className={`${styles.container} ${styles.hero}`}>
        <div>
          <p className={styles.herotext}>
            Your Bike <br /> Electric Update
          </p>

          <p className={styles.herorider}>
            Dummy text progressive, and affordable <br /> healthcare, accessible
            on mobile and online <br /> for everyone
          </p>

          <div>
            <img src={search} alt="search-icon" className={styles.searchicon} />
            <input
              type="text"
              className={styles.search}
              placeholder="Search Bike or anything"
            />
            <button className={styles.buttonsearch}>Find</button>
          </div>
        </div>

        <div>
          <Lottie options={defaultOptions} height={411} width={411} />
        </div>
      </div>

      {/* First slider section */}
      <div className={styles.first}>
        <div className={styles.second}>
          <div className={`${styles.card} ${styles.container}`}>
            <div className={styles.cardbackground}>
              <p className={styles.cardheader}>Universal eBike Kit</p>
              <img src={bicycle} alt="bicycle" />
              <hr />
              <div className={styles.priceetorder}>
                <div className={styles.cardprices}>
                  <p className={styles.pricedesc}>Price</p>
                  <p className={styles.cardprice}>$750.00</p>
                </div>
                <button className={styles.buttonpri}>Order</button>
              </div>
            </div>

            <div className={styles.cardbackground}>
              <p className={styles.cardheader}>Universal eBike Kit</p>
              <img src={bicycle} alt="bicycle" />
              <hr />
              <div className={styles.priceetorder}>
                <div className={styles.cardprices}>
                  <p className={styles.pricedesc}>Price</p>
                  <p className={styles.cardprice}>$750.00</p>
                </div>
                <button className={styles.buttonpri}>Order</button>
              </div>
            </div>

            <div className={styles.cardbackground}>
              <p className={styles.cardheader}>Universal eBike Kit</p>
              <img src={bicycle} alt="bicycle" />
              <hr />
              <div className={styles.priceetorder}>
                <div className={styles.cardprices}>
                  <p className={styles.pricedesc}>Price</p>
                  <p className={styles.cardprice}>$750.00</p>
                </div>
                <button className={styles.buttonpri}>Order</button>
              </div>
            </div>

            <div className={styles.cardbackground}>
              <p className={styles.cardheader}>Universal eBike Kit</p>
              <img src={bicycle} alt="bicycle" />
              <hr />
              <div className={styles.priceetorder}>
                <div className={styles.cardprices}>
                  <p className={styles.pricedesc}>Price</p>
                  <p className={styles.cardprice}>$750.00</p>
                </div>
                <button className={styles.buttonpri}>Order</button>
              </div>
            </div>

            <div className={styles.cardbackground}>
              <p className={styles.cardheader}>Universal eBike Kit</p>
              <img src={bicycle} alt="bicycle" />
              <hr />
              <div className={styles.priceetorder}>
                <div className={styles.cardprices}>
                  <p className={styles.pricedesc}>Price</p>
                  <p className={styles.cardprice}>$750.00</p>
                </div>
                <button className={styles.buttonpri}>Order</button>
              </div>
            </div>

            <div className={styles.cardbackground}>
              <p className={styles.cardheader}>Universal eBike Kit</p>
              <img src={bicycle} alt="bicycle" />
              <hr />
              <div className={styles.priceetorder}>
                <div className={styles.cardprices}>
                  <p className={styles.pricedesc}>Price</p>
                  <p className={styles.cardprice}>$750.00</p>
                </div>
                <button className={styles.buttonpri}>Order</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second slider section */}
      <div className={styles.section2}>
        <p className={styles.container}>Other Type Of Bikes</p>

        <div className={styles.first}>
          <div className={styles.second}>
            <div className={styles.container}>
              <div className={styles.othbik}>
                <div>
                  <div className={styles.otherbikesactive}>
                    <img src={slantbike} alt="bicycle" />
                  </div>
                  <p className={styles.othbiktext}>Hybrid Bikes</p>
                </div>

                <div>
                  <div className={styles.otherbikes}>
                    <img src={slantbike} alt="bicycle" />
                  </div>
                  <p className={styles.othbiktext}>Fixie Bikes</p>
                </div>

                <div>
                  <div className={styles.otherbikes}>
                    <img src={slantbike} alt="bicycle" />
                  </div>
                  <p className={styles.othbiktext}>Folding Bikes</p>
                </div>

                <div>
                  <div className={styles.otherbikes}>
                    <img src={slantbike} alt="bicycle" />
                  </div>
                  <p className={styles.othbiktext}>Mount Bikes</p>
                </div>

                <div>
                  <div className={styles.otherbikes}>
                    <img src={slantbike} alt="bicycle" />
                  </div>
                  <p className={styles.othbiktext}>City Bikes</p>
                </div>

                <div>
                  <div className={styles.otherbikes}>
                    <img src={slantbike} alt="bicycle" />
                  </div>
                  <p className={styles.othbiktext}>City Bikes</p>
                </div>

                <div>
                  <div className={styles.otherbikes}>
                    <img src={slantbike} alt="bicycle" />
                  </div>
                  <p className={styles.othbiktext}>City Bikes</p>
                </div>

                <div>
                  <div className={styles.otherbikes}>
                    <img src={slantbike} alt="bicycle" />
                  </div>
                  <p className={styles.othbiktext}>City Bikes</p>
                </div>

                <div>
                  <div className={styles.otherbikes}>
                    <img src={slantbike} alt="bicycle" />
                  </div>
                  <p> className={styles.othbiktext}City Bikes</p>
                </div>

                <div>
                  <div className={styles.otherbikes}>
                    <img src={slantbike} alt="bicycle" />
                  </div>
                  <p className={styles.othbiktext}>City Bikes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Third section */}
      <div className={`${styles.section3} ${styles.container}`}>
        <div className={styles.cardbackground}>
          <div className={styles.lotie}>
            <Lottie options={defaultOptions2} height={200} width={200} />
          </div>
          <hr />
          <div className={styles.priceetorder}>
            <div className={styles.cardprices}>
              <p className={styles.pricedesc}>Price</p>
              <p className={styles.cardprice}>$750.00</p>
            </div>
            <button className={styles.buttonpri}>Order</button>
          </div>
        </div>
        <div>
          <p className={styles.herotext}>Hybrid Bikes</p>
          <p className={styles.herorider}>
            Dummy Text progressive, and affordable healthcare, accessible on
            mobile and online for everyone. To us, it’s not just work. We take
            pride in the solutions we deliver
          </p>

          <button className={styles.secondarybtn}>Learn more</button>
        </div>
      </div>

      {/* Forth section */}
      <div className={`${styles.section4} ${styles.container}`}>
        <div className={styles.wocas}>
          <p className={styles.wocasheader}>What our customer are saying</p>
          <div className={styles.wocasgrid}>
            <div className={styles.wocasprofile}>
              <img src={biker} alt="biker profie" />
              <p className={styles.wocasname}>Edward Newgate</p>
              <p className={styles.wocasjob}>Pro-Cycler</p>
            </div>

            <p className={styles.wocasdesc}>
              Dummy Text patient engagement app and web portal allow you to
              access information instantaneously (no tedeous form, long calls,
              or administrative hassle) and securely”
            </p>
          </div>
        </div>
      </div>

      <div className={styles.spacer}>{""}</div>
    </Layout>
  );
}

export default App;
