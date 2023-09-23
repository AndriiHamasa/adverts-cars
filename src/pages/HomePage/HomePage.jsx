import { useNavigate } from "react-router-dom";
import Button from "../../shared/components/Button/Button";
import css from "./HomePage.module.css";
import ScrollToTopButton from "../../shared/components/ScrollToTopButton/ScrollToTopButton"

const HomePage = () => {
  const navigate = useNavigate();
  const handleRentalCar = () => {
    navigate("/catalog");
  };
  return (
    <>
      <section className={css.heroSection}>
        <div className={css.heroInfoContainer}>
          <h2 className={css.heroTitle}>Safer, Faster And Comfortable</h2>
          <p className={css.heroText}>Get in tough with ourluxury cars</p>
          <Button
            text={"Rent now"}
            type={"rentalBtn"}
            onClick={handleRentalCar}
          />
        </div>
      </section>

      <section className={css.servicesSection}>
        <div className={css.servicesBanner}>
          <div className={css.bannerContainer}>
            <img
              className={css.servicePicture}
              src="./src/pictures/services-banner2.png"
              alt="car-banner"
            />
            <svg
              className={css.shape1}
              xmlns="http://www.w3.org/2000/svg"
              width="536"
              height="514"
              viewBox="0 0 536 514"
              fill="none"
            >
              <path
                d="M515.06 358.662C421.874 531.335 215 523 144.475 503.641C73.9508 484.282 -94.6457 422.177 14.0217 205.183C122.689 -11.8106 292.663 -85.5898 324.169 131.442C355.675 348.474 608.246 185.99 515.06 358.662Z"
                fill="#CBC9C2"
                fillOpacity="0.56"
              />
            </svg>
            <svg
              className={css.shape2}
              xmlns="http://www.w3.org/2000/svg"
              width="532"
              height="470"
              viewBox="0 0 532 470"
              fill="none"
            >
              <path
                d="M32.0479 91.4899C154.002 -49.1695 362.545 10.4863 409.269 25.3282C455.993 40.1701 617.855 141.982 472.53 320.245C327.205 498.508 152.738 535.485 166.297 332.284C179.856 129.083 -89.9059 232.149 32.0479 91.4899Z"
                fill="#F1BC00"
                fillOpacity="0.56"
              />
            </svg>
          </div>
        </div>

        <div className={css.serviceInfoBlock}>
          <h2 className={css.servicesTitle}>Our Services</h2>
          <ul className={css.serviceItemList}>
            <li className={css.serviceItem}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="105"
                height="80"
                viewBox="0 0 105 80"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M50.5803 0.0134796C73.1013 -0.369041 96.7733 7.34142 103.481 24.6231C110.013 41.4506 94.43 56.9507 76.7157 67.3457C58.8286 77.842 35.5171 85.3767 17.4032 75.1347C-1.33908 64.5374 -3.52409 43.6663 4.14109 26.3104C11.1438 10.4546 29.6493 0.368995 50.5803 0.0134796Z"
                  fill="#F1BC00"
                />
              </svg>
              <div className={css.serviceItemContainer}>
                <h3 className={css.serviceSubTitle}>Car Hire</h3>
                <p className={css.serviceText}>
                  We pride ourselves in always going the extra mile for our
                  customers
                </p>
              </div>
            </li>
            <li className={css.serviceItem}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="105"
                height="80"
                viewBox="0 0 105 80"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M50.5803 0.0134796C73.1013 -0.369041 96.7733 7.34142 103.481 24.6231C110.013 41.4506 94.43 56.9507 76.7157 67.3457C58.8286 77.842 35.5171 85.3767 17.4032 75.1347C-1.33908 64.5374 -3.52409 43.6663 4.14109 26.3104C11.1438 10.4546 29.6493 0.368995 50.5803 0.0134796Z"
                  fill="#F1BC00"
                />
              </svg>
              <div className={css.serviceItemContainer}>
                <h3 className={css.serviceSubTitle}>Car Sales</h3>
                <p className={css.serviceText}>
                  We sale the best luxury cars across the world at a competitive
                  price
                </p>
              </div>
            </li>
            <li className={css.serviceItem}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="105"
                height="80"
                viewBox="0 0 105 80"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M50.5803 0.0134796C73.1013 -0.369041 96.7733 7.34142 103.481 24.6231C110.013 41.4506 94.43 56.9507 76.7157 67.3457C58.8286 77.842 35.5171 85.3767 17.4032 75.1347C-1.33908 64.5374 -3.52409 43.6663 4.14109 26.3104C11.1438 10.4546 29.6493 0.368995 50.5803 0.0134796Z"
                  fill="#F1BC00"
                />
              </svg>
              <div className={css.serviceItemContainer}>
                <h3 className={css.serviceSubTitle}>Hire a driver</h3>
                <p className={css.serviceText}>
                  You want to travel and fell comfortable, our drivers are
                  available
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className={css.experienceSection}>
        <h2 className={css.experienceTitle}>
          Fell the best experience with our luxury car
        </h2>
        <ul className={css.experienceList}>
          <li>
            <div className={css.experienceSvgContainer}>
              <svg
                className={css.experienceSvg}
                xmlns="http://www.w3.org/2000/svg"
                width="62"
                height="58"
                viewBox="0 0 62 58"
                fill="none"
              >
                <g clipPath="url(#clip0_56_877)">
                  <path
                    d="M51.6668 14.4999H43.9168V9.66659C43.9168 6.98409 41.6176 4.83325 38.7501 4.83325H23.2501C20.3826 4.83325 18.0834 6.98409 18.0834 9.66659V14.4999H10.3334C7.46591 14.4999 5.16675 16.6508 5.16675 19.3333V45.9166C5.16675 48.5991 7.46591 50.7499 10.3334 50.7499H51.6668C54.5343 50.7499 56.8334 48.5991 56.8334 45.9166V19.3333C56.8334 16.6508 54.5343 14.4999 51.6668 14.4999ZM23.2501 9.66659H38.7501V14.4999H23.2501V9.66659ZM51.6668 45.9166H10.3334V41.0833H51.6668V45.9166ZM51.6668 33.8333H10.3334V19.3333H18.0834V24.1666H23.2501V19.3333H38.7501V24.1666H43.9168V19.3333H51.6668V33.8333Z"
                    fill="#21408E"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_56_877">
                    <rect width="62" height="58" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <h3 className={css.experienceSubTitle}>Book with flexibility</h3>
            <p className={css.experienceText}>
              Easily find car and book with no change fees
            </p>
          </li>
          <li>
            <div className={css.experienceSvgContainer}>
              <svg
                className={css.experienceSvg}
                xmlns="http://www.w3.org/2000/svg"
                width="144"
                height="120"
                viewBox="0 0 144 120"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M72.8526 0.498161C87.7159 3.14773 92.3323 19.514 104.227 27.6561C115.319 35.2491 132.825 35.4991 139.639 46.2145C146.795 57.4666 143.865 71.4077 139.923 83.7863C135.828 96.6478 130.497 110.984 116.967 117.413C103.745 123.695 87.8941 116.694 72.8526 115.653C59.3882 114.72 45.2586 117.524 33.5954 111.638C21.3147 105.44 13.7666 94.4227 8.306 83.0779C2.444 70.899 -2.60872 57.6355 1.48688 44.9291C5.66467 31.9678 17.7761 22.3639 30.4113 14.4975C43.0048 6.65701 57.6498 -2.21196 72.8526 0.498161Z"
                  fill="#F1BC00"
                />
              </svg>
              <svg
                className={css.experienceSvg}
                xmlns="http://www.w3.org/2000/svg"
                width="62"
                height="58"
                viewBox="0 0 62 58"
                fill="none"
              >
                <g clipPath="url(#clip0_56_925)">
                  <path
                    d="M49.4452 31.262C49.5382 30.537 49.6002 29.7831 49.6002 29C49.6002 28.217 49.5382 27.4631 49.4142 26.7381L54.6532 22.91C55.1182 22.562 55.2422 21.924 54.9632 21.431L50.0032 13.398C49.6932 12.876 49.0422 12.702 48.4842 12.876L42.3152 15.196C41.0132 14.268 39.6492 13.514 38.1302 12.934L37.2002 6.78605C37.1072 6.20605 36.5802 5.80005 35.9602 5.80005H26.0402C25.4202 5.80005 24.9242 6.20605 24.8312 6.78605L23.9012 12.934C22.3822 13.514 20.9872 14.297 19.7162 15.196L13.5472 12.876C12.9892 12.673 12.3382 12.876 12.0282 13.398L7.06819 21.431C6.75819 21.953 6.88219 22.562 7.37819 22.91L12.6172 26.7381C12.4932 27.4631 12.4002 28.246 12.4002 29C12.4002 29.754 12.4622 30.537 12.5862 31.262L7.34719 35.0901C6.88219 35.4381 6.75819 36.076 7.03719 36.569L11.9972 44.6021C12.3072 45.1241 12.9582 45.298 13.5162 45.1241L19.6852 42.8041C20.9872 43.7321 22.3512 44.486 23.8702 45.0661L24.8002 51.2141C24.9242 51.794 25.4202 52.2001 26.0402 52.2001H35.9602C36.5802 52.2001 37.1072 51.794 37.1692 51.2141L38.0992 45.0661C39.6182 44.486 41.0132 43.7031 42.2842 42.8041L48.4532 45.1241C49.0112 45.3271 49.6622 45.1241 49.9722 44.6021L54.9322 36.569C55.2422 36.047 55.1182 35.4381 54.6222 35.0901L49.4452 31.262ZM31.0002 37.7001C25.8852 37.7001 21.7002 33.785 21.7002 29C21.7002 24.215 25.8852 20.3 31.0002 20.3C36.1152 20.3 40.3002 24.215 40.3002 29C40.3002 33.785 36.1152 37.7001 31.0002 37.7001Z"
                    fill="#21408E"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_56_925">
                    <rect width="62" height="58" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <h3 className={css.experienceSubTitle}>Trusted and free</h3>
            <p className={css.experienceText}>
              We are completely free to use - no hidden changes or fees
            </p>
          </li>
          <li>
            <div className={css.experienceSvgContainer}>
              <svg
                className={css.experienceSvg}
                xmlns="http://www.w3.org/2000/svg"
                width="144"
                height="120"
                viewBox="0 0 144 120"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M72.8526 0.498161C87.7159 3.14773 92.3323 19.514 104.227 27.6561C115.319 35.2491 132.825 35.4991 139.639 46.2145C146.795 57.4666 143.865 71.4077 139.923 83.7863C135.828 96.6478 130.497 110.984 116.967 117.413C103.745 123.695 87.8941 116.694 72.8526 115.653C59.3882 114.72 45.2586 117.524 33.5954 111.638C21.3147 105.44 13.7666 94.4227 8.306 83.0779C2.444 70.899 -2.60872 57.6355 1.48688 44.9291C5.66467 31.9678 17.7761 22.3639 30.4113 14.4975C43.0048 6.65701 57.6498 -2.21196 72.8526 0.498161Z"
                  fill="#F1BC00"
                />
              </svg>
              <svg
                className={css.experienceSvg}
                xmlns="http://www.w3.org/2000/svg"
                width="62"
                height="58"
                viewBox="0 0 62 58"
                fill="none"
              >
                <g clipPath="url(#clip0_118_215)">
                  <path
                    d="M30.9741 4.83325C16.7141 4.83325 5.14081 15.6599 5.14081 28.9999C5.14081 42.3399 16.7141 53.1666 30.9741 53.1666C45.2341 53.1666 56.8075 42.3399 56.8075 28.9999C56.8075 15.6599 45.2341 4.83325 30.9741 4.83325ZM40.3 20.1549C43.0641 20.1549 45.2858 22.2333 45.2858 24.8191C45.2858 27.4049 43.0641 29.4833 40.3 29.4833C37.5358 29.4833 35.3141 27.4049 35.3141 24.8191C35.2883 22.2333 37.5358 20.1549 40.3 20.1549ZM24.8 16.3366C28.1583 16.3366 30.8966 18.8983 30.8966 22.0399C30.8966 25.1816 28.1583 27.7433 24.8 27.7433C21.4416 27.7433 18.7033 25.1816 18.7033 22.0399C18.7033 18.8741 21.4158 16.3366 24.8 16.3366ZM24.8 38.4008V47.4633C18.6 45.6508 13.6916 41.1799 11.5216 35.4766C14.2341 32.7699 21.0025 31.3924 24.8 31.3924C26.1691 31.3924 27.9 31.5858 29.7083 31.9241C25.4716 34.0266 24.8 36.8058 24.8 38.4008ZM30.9741 48.3333C30.2766 48.3333 29.605 48.3091 28.9333 48.2366V38.4008C28.9333 34.9691 36.5283 33.2533 40.3 33.2533C43.0641 33.2533 47.8433 34.1958 50.22 36.0324C47.1975 43.2099 39.7316 48.3333 30.9741 48.3333Z"
                    fill="#21408E"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_118_215">
                    <rect width="62" height="58" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <h3 className={css.experienceSubTitle}>We know travel</h3>
            <p className={css.experienceText}>
              With 10 years of experience, we are ready to help find your
              perfect car
            </p>
          </li>
        </ul>
      </section>

      <ScrollToTopButton/>
    </>
  );
};

export default HomePage;
