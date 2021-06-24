import React from "react";
import styles from "../styles/Show.module.css";
import Image from "next/image";
function Card({
  src,
  disc,
  discVal,
  title,
  location,
  rating,
  totalRating,
  priceBefore,
  priceAfter,
}) {
  return (
    <li className={styles.show__contentCard}>
      <a href="">
        <div>
          <Image
            src={src}
            alt={title}
            className={styles.show__contentImage}
            width={400}
            height={174}
          />
          <div className={styles.display__disc}>
            {disc ? (
              <p
                style={{
                  background: "#ED2555",
                  color: "white",
                  fontSize: 12,
                  fontFamily: "Roboto",
                  padding: "4px 6px",
                }}
              >
                {discVal * 100}% off
              </p>
            ) : (
              <p></p>
            )}
            <button className={styles.save__button}>
              <svg
                width="18"
                height="16"
                viewBox="0 0 18 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.666016 4.99998C0.665809 3.79193 1.15134 2.63452 2.01336 1.78817C2.87538 0.941819 4.0415 0.477608 5.24935 0.499979C6.68045 0.492379 8.046 1.09929 8.99935 2.16665C9.95269 1.09929 11.3182 0.492379 12.7493 0.499979C13.9572 0.477608 15.1233 0.941819 15.9853 1.78817C16.8474 2.63452 17.3329 3.79193 17.3327 4.99998C17.3327 9.46331 12.0168 12.8333 8.99935 15.5C5.98852 12.8108 0.666016 9.46665 0.666016 4.99998Z"
                  fill="#828B90"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className={styles.show__contentDescription}>
          <h4
            style={{
              fontWeight: 600,
              fontSize: 16,
              color: "#222D33",
            }}
          >
            {title}
          </h4>
          <div style={{ display: "flex", alignItems: "center" }}>
            <svg
              width="12"
              height="14"
              viewBox="0 0 12 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 13.75C5.0527 12.942 4.17464 12.0561 3.375 11.1017C2.175 9.66848 0.750001 7.53398 0.750001 5.49998C0.748937 3.37564 2.02819 1.46002 3.9908 0.647025C5.95342 -0.16597 8.21255 0.283907 9.714 1.78673C10.7013 2.76968 11.2544 4.10677 11.25 5.49998C11.25 7.53398 9.825 9.66848 8.625 11.1017C7.82536 12.0561 6.9473 12.942 6 13.75ZM6 3.24998C5.19615 3.24998 4.45337 3.67882 4.05144 4.37498C3.64952 5.07113 3.64952 5.92882 4.05144 6.62498C4.45337 7.32113 5.19615 7.74998 6 7.74998C7.24264 7.74998 8.25 6.74262 8.25 5.49998C8.25 4.25734 7.24264 3.24998 6 3.24998Z"
                fill="#828B90"
              />
            </svg>

            <p
              style={{
                fontWeight: 400,
                fontSize: 14,
                fontFamily: "Roboto",
                color: "#828B90",
                marginLeft: 8.75,
              }}
            >
              {location}
            </p>
          </div>
          <div className={styles.priceRating}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: 6,
              }}
            >
              <svg
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z"
                  fill="#F1C644"
                />
              </svg>

              <p
                style={{
                  margin: "0 6px",
                  color: "#F1C644",
                  fontSize: 12,
                }}
              >
                {rating}
              </p>
              <p
                style={{
                  color: "#828B90",
                  fontSize: 12,
                }}
              >
                {totalRating}
              </p>
            </div>
            <div
              style={{
                marginTop: 22,
                textAlign: "right",
              }}
            >
              <p
                style={{
                  color: "#828B90",
                  fontSize: 12,
                  textDecoration: "line-through",
                }}
              >
                ${priceAfter}
              </p>
              <p
                style={{
                  color: "#ED2555",
                  fontSize: 20,
                  fontWeight: 600,
                }}
              >
                ${priceBefore}
              </p>
            </div>
          </div>
        </div>
      </a>
    </li>
  );
}

export default Card;
