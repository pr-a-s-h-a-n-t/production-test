import styles from "./ComingSoon.module.css";
import giftBox from "../assets/static images.svg";
import floatingBox1 from "../assets/floating box 1.svg";
import floatingBox2 from "../assets/floating box 2.svg";
import floatingBox3 from "../assets/floating box 3.svg";
import spiral from "../assets/spiral.svg";

const ComingSoon = () => {
  return (
    <div>
      <div className={styles.topBar}>
        <h1>saveit</h1>
      </div>
      <div className={styles.box_img}>
        <img
          className={styles.floatingBox1}
          src={floatingBox1}
          alt="gift box"
        />
        <img
          className={styles.floatingBox2}
          src={floatingBox2}
          alt="gift box"
        />
        <img
          className={styles.floatingBox3}
          src={floatingBox3}
          alt="gift box"
        />
        <img className={styles.box_img} src={giftBox} alt="gift box" />
      </div>
      <div className={styles._flex}>
        <div></div>
        <div className={styles.hero}>
          <div>
            <div>
              <h1>Coming Soon</h1>
              <p>
                Get ready to unlock a world of savings at your fingertips.{" "}
                <br />
                The future of gifting and everyday deals is just a touch away.
              </p>
              <p>
                <strong>Are you in?</strong> Subscribe now to be the first to
                know.
              </p>
            </div>
            <div className={styles.hero_input}>
              <input
                type="text"
                placeholder="Enter your mail address"
                name="email"
                onChange={(e) => console.log("EMAIL", e.target.value)}
              />
            </div>
          </div>
          <div className={styles?.hero_btn}>
            <button onClick={() => console.log("SUBSCRIBE")}>Subscribe</button>
          </div>
        </div>
      </div>
      <div>
        <img className={styles.spiral_top} src={spiral} alt="Spiral " />
      </div>
      <div>
        <img className={styles.spiral_bottom} src={spiral} alt="Spiral " />
      </div>
    </div>
  );
};

export default ComingSoon;
