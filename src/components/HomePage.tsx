import Category from "../Category";
import Food from "../Food";
import HeadlineCard from "../HeadlineCard";
import Hero from "../Hero";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <HeadlineCard />
      <Food />
      <Category/>
    </div>
  );
};

export default HomePage;
