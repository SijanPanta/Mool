import LoginBody from "./LoginBody";
import LoginHeader from "./LoginHeader";

const HomePage: React.FC = () => {
    return (

    <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden" >
      <div className="layout-container flex h-full grow flex-col">
       <LoginHeader/>
        <LoginBody/>
      </div>
    </div>
 

    )
}

export default HomePage;