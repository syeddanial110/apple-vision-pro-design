import Account from "../pages/Account";
import AdminCreditCard from "../pages/AdminCreditCard";
import AdminHouseFinance from "../pages/AdminHouseFinance";
import AdminLogin from "../pages/AdminLogin";
import AdminRenter from "../pages/AdminRenter";
import AutoPayConfirmation from "../pages/AutoPayConfirmation";
import CreditCard from "../pages/CreditCard";
import CreditCardSignup from "../pages/CreditCardSignup";
import EditAdminCreditCard from "../pages/EditAdminCreditCard";
import EditAdminRenter from "../pages/EditAdminRenter";
import ForgotPassword from "../pages/ForgotPassword";
import HouseFinance from "../pages/HouseFinance";
import Login from "../pages/Login";
import MakePayment from "../pages/MakePayment";
import Renter from "../pages/Renter";
import RenterSignup from "../pages/RenterSignup";
import ResetPassword from "../pages/ResetPassword";

export var pathLocations = {
  login: "/",
  signup: "/signup",
  forgotPassword: "/forgot-password",
  resetPassword: "/reset-password",
  creditCardSignup: "/credit-card/register",
  renterSignup: "/renter/register",
  creditCard: "/credit-card",
  renter: "/renter",
  houseFinance: "/house-finance",
  adminLogin: "/admin/login",
  adminCreditCard: "/admin/credit-card",
  adminRenter: "/admin/renter",
  adminHouseFinance: "/admin/house-finance",
  editAdminCreditCard: "/admin/edit/credit-card",
  editAdminRenter: "/admin/edit/renter",
  account: "/account",
  makePayment: "/make-payment",
  autoPayConfirmation: "/auto-pay-confirmation",
};

export const protectedRoutes = [
  {
    path: pathLocations.creditCard,
    component: CreditCard,
  },
  {
    path: pathLocations.renter,
    component: Renter,
  },
  {
    path: pathLocations.houseFinance,
    component: HouseFinance,
  },
  {
    path: pathLocations.account,
    component: Account,
  },
  {
    path: pathLocations.makePayment,
    component: MakePayment,
  },
  {
    path: pathLocations.autoPayConfirmation,
    component: AutoPayConfirmation,
  },
];
export const adminProtectedRoutes = [
  {
    path: pathLocations.adminCreditCard,
    component: AdminCreditCard,
  },
  {
    path: pathLocations.adminRenter,
    component: AdminRenter,
  },
  {
    path: pathLocations.adminHouseFinance,
    component: AdminHouseFinance,
  },
  {
    path: pathLocations.editAdminCreditCard,
    component: EditAdminCreditCard,
  },
  {
    path: pathLocations.editAdminRenter,
    component: EditAdminRenter,
  },
];

export const routes = [
  {
    path: pathLocations.login,
    component: <Login />,
  },
  {
    path: pathLocations.creditCardSignup,
    component: <CreditCardSignup />,
  },
  {
    path: pathLocations.renterSignup,
    component: <RenterSignup />,
  },
  {
    path: pathLocations.forgotPassword,
    component: <ForgotPassword />,
  },
  {
    path: pathLocations.resetPassword,
    component: <ResetPassword />,
  },
];

export const adminRoutes = [
  {
    path: pathLocations.adminLogin,
    component: <AdminLogin />,
  },
  {
    path: pathLocations.forgotPassword,
    component: <ForgotPassword />,
  },
];

