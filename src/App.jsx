import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import Register from "./components/Register";
import ForgotPassword from "./components/ForgotPassword";
import Paymentmethod from "./components/Paymentmethod";
import Subscription from "./components/Subscription";
import Interface from "./components/Interface";
import Properties from "./components/Properties";
import Mywebsites from "./components/Mywebsites";
import EditWebsite from "./components/EditWebsite";
import Collaborations from "./components/Collaborations";
import ViewProperties from "./components/ViewProperties";
import MyProperties from "./components/MyProperties";
import ProjectCreation from "./components/ProjectCreation";
import EditProfile from "./components/EditProfile";
import DropdownHelp from "./components/DropdownHelp";
import PaymentFreq from "./components/PaymentFreq";
import PropertyDetails from "./components/PropertyDetails";
import DropdownSettings from "./components/DropdownSettings";
import AddPropertyData from "./components/AddPropertyData";
import ShareGallery from "./components/ShareGallery";
import PropertyInfo from "./components/PropertyInfo";
import Agencies from "./components/Agencies";
import MessageGateway from "./components/MessageGateway";
import CancelSubscription from "./components/CancelSubscription";
import CloneMyproperties from "./components/CloneMyproperties";
import ResetPassword from "./components/ResetPassword";
import CreateContact from "./components/Contact";
import ContactList from "./components/ContactList";
import UpdateContact from "./components/UpdateContact";
import AuthProvider from "./Auth/AuthProvider";
import ProtectedRoute from "./ProtectedRoutes";
import Tasks from "./components/Tasks";
import AgencyPropertyData from "./components/AgencyPropertyData";

function App() {
  return (
    <div className="app">
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" Component={LandingPage} />
            <Route path="/login" Component={Login} />
            <Route path="/register" Component={Register} />
            <Route path="/forgot-password" Component={ForgotPassword} />
            <Route path="/reset-password" Component={ResetPassword} />
            <Route element={<ProtectedRoute />}>
              <Route path="/home" Component={Interface} />
              <Route path="/addContacts" Component={CreateContact} />
              <Route path="/contactsList" Component={ContactList} />
              <Route path="/update-contact/:id" Component={UpdateContact} />
              <Route path="/payment-method" Component={Paymentmethod} />
              <Route path="/subscription-plans" Component={Subscription} />
              <Route path="/view-properties" Component={Properties} />
              <Route path="/mywebsites/use-template" Component={Mywebsites} />
              <Route path="/mywebsites/editwebsite" Component={EditWebsite} />
              <Route path="/collaborations" Component={Collaborations} />
              <Route path="/view-properties/details" Component={ViewProperties} />
              <Route path="/my-properties" Component={MyProperties} />
              <Route path="/my-properties2" Component={CloneMyproperties} />
              <Route path="/project-creation/template" Component={ProjectCreation} />
              <Route path="/Edit-profile" Component={EditProfile} />
              <Route path="/help" Component={DropdownHelp} />
              <Route path="/payment-method-and-frequency" Component={PaymentFreq} />
              <Route path="/my-property/property-details/:id" Component={PropertyDetails} />
              <Route path="/configurations" Component={DropdownSettings} />
              <Route path="/my-properties/add-property/property-details" Component={AddPropertyData} />
              <Route path="/my-properties/add-property/add-gallery" Component={ShareGallery} />
              <Route path="/properties/property-details" Component={PropertyInfo} />
              <Route path="/agencies" Component={Agencies} />
              <Route path="/message-gateway" Component={MessageGateway} />
              <Route path="/change-plan/cancel-subscription" Component={CancelSubscription} />
              <Route path="/tasks" Component={Tasks} />
              <Route path="/agency/:id" Component={AgencyPropertyData} />
            </Route>
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
