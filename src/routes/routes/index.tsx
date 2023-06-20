import Login from '../../pages/Login';
import LandingPage from '../../pages/LandingPage';
import Shipping from '../../pages/Shipping';
import Billing from '../../pages/Billing';
import Payment from '../../pages/Payment';
import HowItWorks from '../../pages/HowItWorks';
import AboutUsPage from '../../pages/AboutUsPage';
import TreatmentPlanDetails from '../../pages/TreatmentPlanDetails';
import Profile from '../../pages/Profile';
import SignUp from '../../pages/SignUp/SignUp.container';
import Questionnaire from '../../pages/Questionnaire/Questionnaire.container';
import Recommendation from '../../pages/Recommendation/Recommendation.container';
import ContactUs from '../../pages/ContactUs/ContactUs.container';

export const protectedBackendRoutes = [
  {
    backendPath: '/profile',
    element: Profile,
  },
];

export const publicRoutes = [
  {
    path: '/',
    element: LandingPage,
  },
  {
    path: '/about-us',
    element: AboutUsPage,
  },
  {
    path: '/login',
    element: Login,
  },
  {
    path: '/signUp',
    element: SignUp,
  },
  {
    path: '/shipping-information',
    element: Shipping,
  },
  {
    path: '/billing-information',
    element: Billing,
  },
  {
    path: '/payment-information',
    element: Payment,
  },
  {
    path: '/how-it-works',
    element: HowItWorks,
  },
  {
    path: '/questionnaire-steps',
    element: Questionnaire,
  },
  {
    path: '/tadalafil',
    element: TreatmentPlanDetails,
  },
  {
    path: '/recommendation',
    element: Recommendation,
  },
  {
    path: '/contact',
    element: ContactUs,
  },
];
