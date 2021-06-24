import styles from "../styles/Show.module.css";
import Image from "next/image";
import Card from "../components/Card";

function Show() {
  const showItem = [
    {
      id: 1,
      src: "/static/img/river-trip.png",
      disc: true,
      discVal: 0.2,
      title: "Bahrain River Trip",
      location: "Manama, Bahrain",
      rating: 4.5,
      totalRating: 217,
      priceBefore: 1000,
      priceAfter: 799,
    },
    {
      id: 2,
      src: "/static/img/river-trip.png",
      disc: true,
      discVal: 0.1,
      title: "Bahrain River Trip",
      location: "Manama, Bahrain",
      rating: 4.5,
      totalRating: 217,
      priceBefore: 1000,
      priceAfter: 799,
    },
    {
      id: 3,
      src: "/static/img/river-trip.png",
      disc: true,
      discVal: 0.1,
      title: "Bahrain River Trip",
      location: "Manama, Bahrain",
      rating: 4.5,
      totalRating: 217,
      priceBefore: 1000,
      priceAfter: 799,
    },
    {
      id: 4,
      src: "/static/img/river-trip.png",
      disc: true,
      discVal: 0.1,
      title: "Bahrain River Trip",
      location: "Manama, Bahrain",
      rating: 4.5,
      totalRating: 217,
      priceBefore: 1000,
      priceAfter: 799,
    },
    {
      id: 5,
      src: "/static/img/river-trip.png",
      disc: true,
      discVal: 0.1,
      title: "Bahrain River Trip",
      location: "Manama, Bahrain",
      rating: 4.5,
      totalRating: 217,
      priceBefore: 1000,
      priceAfter: 799,
    },
    {
      id: 6,
      src: "/static/img/river-trip.png",
      disc: true,
      discVal: 0.1,
      title: "Bahrain River Trip",
      location: "Manama, Bahrain",
      rating: 4.5,
      totalRating: 217,
      priceBefore: 1000,
      priceAfter: 799,
    },
  ];
  return (
    <section className={styles.show}>
      <div className={styles.show__container}>
        <div className={styles.show__header}>
          <h3 className={styles.show__title}>Attractions & Shows</h3>
          <a href="" style={{ display: "flex", alignItems: "center" }}>
            <p style={{ color: "#ED2555" }}>View all</p>
            <svg
              width="15"
              height="6"
              viewBox="0 0 15 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ marginLeft: 8.5 }}
            >
              <path
                d="M11.5 6L14.5 3L11.5 0L10.793 0.707L12.586 2.5H0.5V3.5H12.586L10.793 5.293L11.5 6Z"
                fill="#ED2555"
              />
            </svg>
          </a>
        </div>
        <div className={styles.show__content}>
          <ul className={styles.show__contentContainer}>
            {showItem.map((item) => {
              return (
                <Card
                  key={item.id}
                  src={item.src}
                  disc={item.disc}
                  discVal={item.discVal}
                  title={item.title}
                  location={item.location}
                  rating={item.rating}
                  totalRating={item.totalRating}
                  priceBefore={item.priceBefore}
                  priceAfter={item.priceAfter}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Show;
