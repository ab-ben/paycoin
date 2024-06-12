// import React from 'react';
import { createRoot } from 'react-dom/client';
import Packages from './components/Packages.jsx';
import FreePackages from './components/FreePackages.jsx';
import PremiumPackages from './components/PremiumPackages.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'; // Make sure your custom styles are imported after Bootstrap
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';



const paycoinContainer = document.getElementById('paycoin-root');
const packagesContainer = document.getElementById('packages-root');
const freePackagesContainer = document.getElementById('free-packages-root');
const premiumPackagesContainer = document.getElementById('premium-packages-root');
const SignInContainer = document.getElementById('signin-root');






if (paycoinContainer) {
    const root = createRoot(paycoinContainer);
    root.render(<SignUp />);
} else if (packagesContainer) {
    const root = createRoot(packagesContainer);
    root.render(<Packages />);
} else if (freePackagesContainer) {
    const root = createRoot(freePackagesContainer);
    root.render(<FreePackages />);
}else if (premiumPackagesContainer) {
  const root = createRoot(premiumPackagesContainer);
  root.render(<PremiumPackages />);
}else if (SignInContainer) {
    const root = createRoot(SignInContainer);
    root.render(<SignIn />);
}