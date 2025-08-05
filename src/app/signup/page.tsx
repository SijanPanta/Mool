import Body from "./SignupBody";
import Header from "./SignupHeader";
const HomePage: React.FC = () => {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden">
      <Header />
      <Body />
    </div>
  );
};

export default HomePage;
