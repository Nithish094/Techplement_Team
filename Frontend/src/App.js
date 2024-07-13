import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/Signup';

import PrivateRoute from './Components/PrivateRoute';
import Calculators from './Pages/Calculators';
import FinancialPage from './Pages/FinancialPage';
import SimpleIntrestCalculator from './Financial/SimpleIntrestCalculator';
import Header from './Components/Header';
import Conversion from './Pages/Conversion';
import Geometric from './Pages/Geometric'
import HealthFitness from './Pages/HealthFitness';
import MathsAlgebra from './Pages/MathsAlgebra';
import LogDetails from './Pages/LogDetails';
import { AuthProvider } from './Components/AuthContext';
import CompoundInterestCalculator from './Financial/CompoundInterestCalculator';
import CurrencyCalculator from './Financial/CurrencyCalculator';
import InvestmentCalculator from './Financial/InvestmentCalculator';
import RetirementCalculator from './Financial/RetirementCalculator';
import SalesTaxCalculator from './Financial/SalesTaxCalculator';
import BMICalculator from './Health&Fitness/BMICalculator';
import BMRCalculator from './Health&Fitness/BMRCalculator';
import IdealWeightCalculator from './Health&Fitness/IdealWeightCalculator';
import CircleCalculator from './Geometric/CircleCalculator';
import ConeCalculator from './Geometric/ConeCalculator';
import CylinderCalculator from './Geometric/CylinderCalculator';
import Distance2DCalculator from './Geometric/Distance2DCalculator';
import Distance3DCalculator from './Geometric/Distance3DCalculator';
import EquilateralTriangleCalculator from './Geometric/EquilateralTriangleCalculator';
import IsoscelesTriangleCalculator from './Geometric/IsoscelesTriangleCalculator';
import RectangleCalculator from './Geometric/RectangleCalculator';
import RightAngledTriangleCalculator from './Geometric/RightAngledTriangleCalculator';
import BooleanAlgebraSimplifier from './Maths&Algebra/BooleanAlgebraSimplifier';
import FactorizationCalculator from './Maths&Algebra/FactorizationCalculator';
import FlowRateCalculator from './Maths&Algebra/FlowRateCalculator';
import ImpulseCalculator from './Maths&Algebra/ImpulseCalculator';
import InequalityCalculator from './Maths&Algebra/InequalityCalculator';
import PartialFractionDecomposer from './Maths&Algebra/PartialFractionDecomposer';
import PercentageCalculator from './Maths&Algebra/PercentageCalculator';
import AgeCalculator from './Conversion/AgeCalculator';
import BillTipCalculator from './Conversion/BillTipCalculator';
import DateCalculator from './Conversion/DateCalculator';
import GPACalculator from './Conversion/GPACalculator';
import HeightCalculator from './Conversion/HeightCalculator';
import HourToMinuteSecondsCalculator from './Conversion/HourToMinuteSecondsCalculator';
import LengthCalculator from './Conversion/LengthCalculator';
import PasswordGenerator from './Conversion/PasswordGenerator';
function App() {
  return (
    <Router>
        <AuthProvider>
        <Header/>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path='/Home' element={<PrivateRoute><Calculators/></PrivateRoute>}/>
          <Route path="/" element={<Login />} />
          <Route path='/logs' element={<PrivateRoute><LogDetails/></PrivateRoute>}/>

          {/* types of calculator */}
          <Route path="/financial" element={<PrivateRoute><FinancialPage /></PrivateRoute>} />
          <Route path="/conversion" element={<PrivateRoute><Conversion /></PrivateRoute>} />
          <Route path="/geometric" element={<PrivateRoute><Geometric /></PrivateRoute>} />
          <Route path="/healthFitness" element={<PrivateRoute><HealthFitness /></PrivateRoute>} />
          <Route path="/maths-algebra" element={<PrivateRoute><MathsAlgebra /></PrivateRoute>} />

           {/* finacial calculators routes */}
          <Route path='/CompoundInterestCalculator' element={<PrivateRoute><SimpleIntrestCalculator/></PrivateRoute>}/>
          <Route path='/CurrencyCalculator' element={<PrivateRoute><CompoundInterestCalculator/></PrivateRoute>}/>
          <Route path='/InvestmentCalculator' element={<PrivateRoute><CurrencyCalculator/></PrivateRoute>}/>
          <Route path='/RetirementCalculator' element={<PrivateRoute><InvestmentCalculator/></PrivateRoute>}/>
          <Route path='/SalaryCalculator' element={<PrivateRoute><RetirementCalculator/></PrivateRoute>}/>
          <Route path='/SalesTaxCalculator' element={<PrivateRoute><SalesTaxCalculator/></PrivateRoute>}/>
          <Route path='/SimpleInterestCalculator' element={<PrivateRoute><SalesTaxCalculator/></PrivateRoute>}/>

          {/* HealthFitness calculators routes */}
          <Route path='/BmiCalculator' element={<PrivateRoute><BMICalculator/></PrivateRoute>}/>
          <Route path='/BmrCalculator' element={<PrivateRoute><BMRCalculator/></PrivateRoute>}/>
          <Route path='/BodyFatCalculator' element={<PrivateRoute><CurrencyCalculator/></PrivateRoute>}/>
          <Route path='/CalorieCalculator' element={<PrivateRoute><InvestmentCalculator/></PrivateRoute>}/>
          <Route path='/BodyFatCalculator' element={<PrivateRoute><RetirementCalculator/></PrivateRoute>}/>
          <Route path='/CalorieCalculator' element={<PrivateRoute><SalesTaxCalculator/></PrivateRoute>}/>
          <Route path='/IdeaweightCalculator' element={<PrivateRoute><IdealWeightCalculator/></PrivateRoute>}/>


          {/* Geometric calculators routes */}
          <Route path='/CircleCalculator' element={<PrivateRoute><CircleCalculator/></PrivateRoute>}/>
          <Route path='/ConeCalculator' element={<PrivateRoute><ConeCalculator/></PrivateRoute>}/>
          <Route path='/CubeCalculator' element={<PrivateRoute><ConeCalculator/></PrivateRoute>}/>
          <Route path='/CylinderCalculator' element={<PrivateRoute><CylinderCalculator/></PrivateRoute>}/>
          <Route path='/Distance2DCalculator' element={<PrivateRoute><Distance2DCalculator/></PrivateRoute>}/>
          <Route path='/Distance3DCalculator' element={<PrivateRoute><Distance3DCalculator/></PrivateRoute>}/>
          <Route path='/EquilateralTriangleCalculator' element={<PrivateRoute><EquilateralTriangleCalculator/></PrivateRoute>}/>
          <Route path='/IsoscelesTriangleCalculator' element={<PrivateRoute><IsoscelesTriangleCalculator/></PrivateRoute>}/>
          <Route path='/RectangleCalculator' element={<PrivateRoute><RectangleCalculator/></PrivateRoute>}/>
          <Route path='/RightAngledTriangleCalculator' element={<PrivateRoute><RightAngledTriangleCalculator/></PrivateRoute>}/>


           {/* Math&Algebra calculators routes */}
           <Route path='/BooleanAlgebraSimplifer' element={<PrivateRoute><BooleanAlgebraSimplifier/></PrivateRoute>}/>
          <Route path='/ComplexNumberCalculator' element={<PrivateRoute><CompoundInterestCalculator/></PrivateRoute>}/>
          <Route path='/FactorizationCalculator' element={<PrivateRoute><FactorizationCalculator/></PrivateRoute>}/>
          <Route path='/FlowRateCalculator' element={<PrivateRoute><FlowRateCalculator/></PrivateRoute>}/>
          <Route path='/ImpulseCalculator' element={<PrivateRoute><ImpulseCalculator/></PrivateRoute>}/>
          <Route path='/InequalityCalculator' element={<PrivateRoute><InequalityCalculator/></PrivateRoute>}/>
          <Route path='/PartialFractionDecomposerCalculator' element={<PrivateRoute><PartialFractionDecomposer/></PrivateRoute>}/>
          <Route path='/PercentageCalculator' element={<PrivateRoute><PercentageCalculator/></PrivateRoute>}/>


           {/* Conversion calculators routes */}
           <Route path='/AgeCalculator' element={<PrivateRoute><AgeCalculator/></PrivateRoute>}/>
          <Route path='/BillTipCalculator' element={<PrivateRoute><BillTipCalculator/></PrivateRoute>}/>
          <Route path='/DateCalculator' element={<PrivateRoute><DateCalculator/></PrivateRoute>}/>
          <Route path='/GPACalculator' element={<PrivateRoute><GPACalculator/></PrivateRoute>}/>
          <Route path='/HeightCalculator' element={<PrivateRoute><HeightCalculator/></PrivateRoute>}/>
          <Route path='/HourToMinuteSecondsCalculator' element={<PrivateRoute><HourToMinuteSecondsCalculator/></PrivateRoute>}/>
          <Route path='/LengthCalculator' element={<PrivateRoute><LengthCalculator/></PrivateRoute>}/>
          <Route path='/PasswordGenerator' element={<PrivateRoute><PasswordGenerator/></PrivateRoute>}/>

      
        </Routes>
        </AuthProvider>
    </Router>
  );
}

export default App;
