import { createBrowserRouter } from 'react-router';
import HomePage from './pages/HomePage';
import BooksPage from './pages/BooksPage';
import AboutPage from './pages/AboutPage';
import EventsPage from './pages/EventsPage';
import CafePage from './pages/CafePage';
import ContactPage from './pages/ContactPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: HomePage,
  },
  {
    path: '/boger',
    Component: BooksPage,
  },
  {
    path: '/om-os',
    Component: AboutPage,
  },
  {
    path: '/events',
    Component: EventsPage,
  },
  {
    path: '/cafe',
    Component: CafePage,
  },
  {
    path: '/kontakt',
    Component: ContactPage,
  },
  {
    basename: '/projekt5',
  }
]);
