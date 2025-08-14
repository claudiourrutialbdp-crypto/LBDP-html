import React, { createContext, useEffect, useMemo, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from './components/ui/sonner';
import { useToast } from './hooks/use-toast';
import './index.css';
import { TopBar, MainNav, Footer, BackToTop } from './components/Layout';
import Home from './pages/Home';
import Noticias from './pages/Noticias';
import { DOCUMENTS, NEWS, NEWS_CATEGORIES, QUICK_LINKS, SITE_INFO, SLIDER_IMAGES, TRANSLATIONS, fakeFetch, saveContactSubmission } from './mock/mock';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './components/ui/table';
import { Input } from './components/ui/input';
import { Textarea } from './components/ui/textarea';
import { Button } from './components/ui/button';

export const LangContext = createContext({ lang: 'es', t: TRANSLATIONS.es });

function DocumentosInline({ t }) {
  const [docs, setDocs] = useState([]);
  useEffect(() => { fakeFetch(DOCUMENTS).then(setDocs); }, []);

  return (
    <main className="mx-auto max-w-7xl px-4 py-8" id="documentos">
      <h1 className="text-2xl font-semibold mb-4">{t.documentos.titulo}</h1>
      <div className="overflow-x-auto rounded border bg-white">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>{t.documentos.nombre}</TableHead>
              <TableHead>{t.documentos.descripcion}</TableHead>
              <TableHead className="text-right">{t.documentos.descargar}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {docs.map(d => (
              <TableRow key={d.id}>
                <TableCell className="font-medium">{d.name}</TableCell>
                <TableCell>{d.description}</TableCell>
                <TableCell className="text-right"><a href={d.url} className="text-[#1418c4] hover:underline">{t.documentos.descargar}</a></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </main>
  );
}

function ContactoInline({ t }) {
  const { toast } = useToast();
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' });

  const submit = (e) => {
    e.preventDefault();
    if (!form.nombre || !form.email || !form.mensaje) return;
    saveContactSubmission(form);
    toast({ title: t.contacto.enviado });
    setForm({ nombre: '', email: '', mensaje: '' });
  };

  return (
    <main className="mx-auto max-w-7xl px-4 py-8" id="contacto">
      <h1 className="text-2xl font-semibold mb-4">{t.contacto.titulo}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <form onSubmit={submit} className="space-y-3" aria-label="Formulario de contacto">
          <div>
            <label className="block text-sm mb-1" htmlFor="nombre">{t.contacto.nombre}</label>
            <Input id="nombre" value={form.nombre} onChange={(e) => setForm(f => ({...f, nombre: e.target.value}))} required />
          </div>
          <div>
            <label className="block text-sm mb-1" htmlFor="email">{t.contacto.email}</label>
            <Input id="email" type="email" value={form.email} onChange={(e) => setForm(f => ({...f, email: e.target.value}))} required />
          </div>
          <div>
            <label className="block text-sm mb-1" htmlFor="mensaje">{t.contacto.mensaje}</label>
            <Textarea id="mensaje" value={form.mensaje} onChange={(e) => setForm(f => ({...f, mensaje: e.target.value}))} required rows={6} />
          </div>
          <Button type="submit" style={{ backgroundColor: '#1418c4', color: 'white' }}>{t.contacto.enviar}</Button>
        </form>
        <div>
          <iframe
            title="Mapa"
            className="w-full h-[360px] rounded"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.666005123768!2d-70.648269!3d-33.436943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c59b9f2b7a9f%3A0x7f7d5d2b3c1bc6e1!2sSantiago%20de%20Chile!5e0!3m2!1ses!2scl!4v1700000000000"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </main>
  );
}

function AppShell() {
  const [lang, setLang] = useState(localStorage.getItem('lang') || 'es');
  const t = useMemo(() => TRANSLATIONS[lang] || TRANSLATIONS.es, [lang]);
  useEffect(() => { localStorage.setItem('lang', lang); }, [lang]);

  return (
    <LangContext.Provider value={{ lang, t }}>
      <TopBar t={t} site={SITE_INFO} />
      <MainNav t={t} lang={lang} setLang={setLang} />
      <Routes>
        <Route path="/" element={<Home t={t} sliderImages={SLIDER_IMAGES} quickLinks={QUICK_LINKS} news={NEWS} />} />
        <Route path="/noticias" element={<Noticias t={t} allNews={NEWS} categories={NEWS_CATEGORIES} />} />
        <Route path="/documentos" element={<DocumentosInline t={t} />} />
        <Route path="/contacto" element={<ContactoInline t={t} />} />
      </Routes>
      <Footer t={t} site={SITE_INFO} />
      <BackToTop label={t.footer.irArriba} />
      <Toaster />
    </LangContext.Provider>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}