import Banner from "./Banner";
import Card from "./Card";
import MiddleBanner from "./MiddleBanner";

import "./css/Home.css";

function Home() {
  return (
    <div className="home">
      <Banner />
      <div className="home__section">
        <Card
          src="https://a0.muscache.com/im/pictures/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg?im_w=480"
          title="Entire homes"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/36f53e61-db8d-403c-9122-5b761c0e4264.jpg?im_w=480"
          title="Unique Stays"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/a596c528-a2e9-4417-9bbe-ceb68b2f6b9c.jpg?im_w=480"
          title="Cabins and cottages"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/10a638e1-6aff-4313-8033-1275cec83987.jpg?im_w=480"
          title="Pets allowed"
        />
      </div>
      <MiddleBanner />
      <div className="home__section">
        <Card
          src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
          title="3 Bedroom flat in Bournemouth"
          description="Superhost with a stunnning view of the beachside in Sunny Bournemouth."
          price="$130/night"
        />
        <Card
          src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
          title="Penthouse in London"
          description="Enjoy the amazing sights of London with this stunning penthouse"
          price="$350/night"
        />
        <Card
          src="https://media.nomadicmatt.com/2018/apartment.jpg"
          title="1 Bedroom apartament"
          description="Superhost with great amenities and a fabolous shopping complex nearby"
          price="$70/night"
        />
      </div>
    </div>
  );
};

export default Home;
