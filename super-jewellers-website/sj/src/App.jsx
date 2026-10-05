import { Route, Routes } from 'react-router-dom';
import { Footer, Header, WhatsAppButton } from './components/Layout';
import Home from './pages/Home';
import { About, Bridal, Collections, Contact, Custom, Gold, NotFound, Reviews, Silver } from './pages/Pages';

export default function App() {
  return (<>
    <Header />
    <main><Routes>
      <Route path="/" element={<Home />} /><Route path="/about" element={<About />} /><Route path="/collections" element={<Collections />} />
      <Route path="/gold-jewellery" element={<Gold />} /><Route path="/silver-jewellery" element={<Silver />} /><Route path="/bridal" element={<Bridal />} />
      <Route path="/custom-jewellery" element={<Custom />} /><Route path="/reviews" element={<Reviews />} /><Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes></main>
    <Footer /><WhatsAppButton />
  </>);
}
