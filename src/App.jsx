import { useSelector } from "react-redux";
import StepOneForm from "./components/StepOneForm";
import Stepper from "./components/Stepper";
import StepThreeForm from "./components/StepThreeForm";
import StepTwoForm from "./components/StepTwoForm";
import StepFourForm from "./components/StepFourForm";
import StepFiveForm from "./components/StepFiveForm";
import StepSixForm from "./components/StepSixForm";
import StepSevenForm from "./components/StepSevenForm";
import StepEightForm from "./components/StepEightForm";

function App() {
  const { currentStepNumber } = useSelector((state) => state.form);
  return (
    <div className="w-full min-h-screen relative">
      <div className="shadow-md fixed top-0 left-0 w-full bg-white text-gray-800 z-[100]">
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 h-[100px] flex items-center">
          <h1 className="text-xl md:text-2xl font-bold tracking-wide">
            Registration of the NGOs under National Trust Act 1999.
          </h1>
        </div>
      </div>
      <div className="h-[230px]"></div>
      <Stepper />
      {currentStepNumber === 1 && <StepOneForm />}
      {currentStepNumber === 2 && <StepTwoForm />}
      {currentStepNumber === 3 && <StepThreeForm />}
      {currentStepNumber === 4 && <StepFourForm />}
      {currentStepNumber === 5 && <StepFiveForm />}
      {currentStepNumber === 6 && <StepSixForm />}
      {currentStepNumber === 7 && <StepSevenForm />}
      {currentStepNumber === 8 && <StepEightForm />}
    </div>
  );
}

export default App;
