// Importation de la version client de ReactDOM depuis 'react-dom'
import ReactDOM from 'react-dom/client';

// Importation du composant principal de l'application
import App from './App';

// Importation du composant ModalProvider depuis le contexte modal
import { ModalProvider } from './context/modal-context';

// Importation du composant ThemeProvider depuis le contexte de thème
import { ThemeProvider } from './context/theme-context';

// Importation du fichier de styles principal
import './index.css';

// ------------------------------------------------------------------------------------------------
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProjectDetail from './pages/ProjectDetail';
import ContactForm from './sections/contact-form/ContactForm'
import TestimonialPage from './pages/TestimonialPage';
import LeaveMessage from './pages/LeaveMessage';


// Création d'une instance de ReactDOM.createRoot pour le rendu
const root = ReactDOM.createRoot(document.querySelector('#root'));

// Rendu de l'application à l'intérieur des fournisseurs de contexte (ThemeProvider et ModalProvider)
root.render(
    <Router>
    <ThemeProvider>
      <ModalProvider>
        {/* Wrap your App component with the Routes component */}
        <Routes>
          <Route path="/" element={<App />} /> {/* Home route */}
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/project-detail/:id" element={<ProjectDetail />} />
          <Route path="/testimonial" element={<TestimonialPage />} />
          <Route path="/leave-feedback" element={<LeaveMessage />} />
          {/* Add more routes for other pages */}
        </Routes>
      </ModalProvider>
    </ThemeProvider>
  </Router>
);
