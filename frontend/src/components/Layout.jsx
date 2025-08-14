import React, { useEffect, useState, useMemo } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Facebook, Instagram, Mail, Phone, ChevronUp, ChevronDown } from 'lucide-react';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from '../components/ui/navigation-menu';
import { Button } from '../components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '../components/ui/sheet';
import { Separator } from '../components/ui/separator';

// Paleta institucional
const COLORS = {
  primary: '#1418c4',
  aqua: '#17e2c9',
  gray: '#b3b3cc',
  green: '#05dc79',
  bgSoft: '#ecf1f5',
  danger: '#ed1614',
  amber: '#f0aa0f',
  darkGreen: '#168c47',
};

export function TopBar({ t, site }) {
  return (
    <div className="w-full sticky top-0 z-50" style={{ backgroundColor: COLORS.primary }}>
      <div className="mx-auto max-w-7xl px-3 text-white text-sm flex items-center justify-between h-9">
        <div className="flex items-center gap-4">
          <a href={`mailto:${site.email}`} className="flex items-center gap-1 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white/50 rounded">
            <Mail size={16} aria-hidden="true" />
            <span className="sr-only">{t.topbar.email}</span>
            <span aria-label={t.topbar.email}>{site.email}</span>
          </a>
          <a href={`tel:${site.phone}`} className="hidden sm:flex items-center gap-1 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white/50 rounded">
            <Phone size={16} aria-hidden="true" />
            <span className="sr-only">{t.topbar.phone}</span>
            <span aria-label={t.topbar.phone}>{site.phone}</span>
          </a>
        </div>
        <div className="flex items-center gap-3">
          <a href={site.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white/50 rounded">
            <Facebook size={18} />
          </a>
          <a href={site.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white/50 rounded">
            <Instagram size={18} />
          </a>
        </div>
      </div>
    </div>
  );
}

function MobileNav({ t }) {
  const [openIndices, setOpenIndices] = useState({});
  const toggle = (key) => setOpenIndices((p) => ({ ...p, [key]: !p[key] }));

  return (
    <nav className="px-4 py-3">
      <ul className="space-y-2">
        <li><NavLink to="/" className={({isActive}) => isActive ? 'text-black font-medium' : 'text-gray-700'}>{t.nav.inicio}</NavLink></li>
        <li>
          <button className="w-full flex items-center justify-between text-gray-700" onClick={() => toggle('nosotros')} aria-expanded={!!openIndices['nosotros']}>
            <span>{t.nav.nosotros}</span>
            {openIndices['nosotros'] ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
          {openIndices['nosotros'] && (
            <ul className="mt-2 pl-3 text-sm space-y-1">
              <li><a href="#historia" className="text-gray-600 hover:text-black">{t.nav.historia}</a></li>
              <li><a href="#mision" className="text-gray-600 hover:text-black">{t.nav.mision}</a></li>
              <li><a href="#vision" className="text-gray-600 hover:text-black">{t.nav.vision}</a></li>
              <li><a href="#comunidad" className="text-gray-600 hover:text-black">{t.nav.comunidad}</a></li>
              <li><a href="#pme" className="text-gray-600 hover:text-black">{t.nav.pme}</a></li>
            </ul>
          )}
        </li>
        <li><a href="#oferta" className="text-gray-700 hover:text-black">{t.nav.oferta}</a></li>
        <li><NavLink to="/noticias" className={({isActive}) => isActive ? 'text-black font-medium' : 'text-gray-700'}>{t.nav.noticias}</NavLink></li>
        <li><a href="#cal-act" className="text-gray-700 hover:text-black">{t.nav.calendarioActividades}</a></li>
        <li><a href="#cal-eval" className="text-gray-700 hover:text-black">{t.nav.calendarioEvaluaciones}</a></li>
        <li><a href="#uniforme" className="text-gray-700 hover:text-black">{t.nav.uniforme}</a></li>
        <li><a href="#talleres" className="text-gray-700 hover:text-black">{t.nav.talleres}</a></li>
        <li><a href="#documentos" className="text-gray-700 hover:text-black">{t.nav.documentos}</a></li>
        <li><a href="#contacto" className="text-gray-700 hover:text-black">{t.nav.contacto}</a></li>
      </ul>
    </nav>
  );
}

export function MainNav({ t, lang, setLang }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <div className="w-full bg-white shadow-sm sticky top-9 z-40">{/* debajo de la topbar */}
      <div className="mx-auto max-w-7xl px-3 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2" aria-label="Liceo - Inicio">
          <div className="w-9 h-9 rounded-md" style={{ backgroundColor: COLORS.aqua }} />
          <div className="font-semibold">Liceo</div>
        </Link>

        <div className="hidden lg:flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList className="flex items-center gap-5">
              <NavigationMenuItem>
                <NavLink to="/" className={({isActive}) => isActive ? 'text-black font-medium' : 'text-gray-700 hover:text-black'}>{t.nav.inicio}</NavLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <div className="relative group">
                  <button className="text-gray-700 hover:text-black flex items-center gap-1" aria-haspopup="true">{t.nav.nosotros}</button>
                  <div className="absolute left-0 mt-2 hidden group-hover:block bg-white border rounded-md shadow-md p-3 w-56">
                    <ul className="space-y-2 text-sm">
                      <li><a href="#historia" className="text-gray-600 hover:text-black">{t.nav.historia}</a></li>
                      <li><a href="#mision" className="text-gray-600 hover:text-black">{t.nav.mision}</a></li>
                      <li><a href="#vision" className="text-gray-600 hover:text-black">{t.nav.vision}</a></li>
                      <li><a href="#comunidad" className="text-gray-600 hover:text-black">{t.nav.comunidad}</a></li>
                      <li><a href="#pme" className="text-gray-600 hover:text-black">{t.nav.pme}</a></li>
                    </ul>
                  </div>
                </div>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <a href="#oferta" className="text-gray-700 hover:text-black">{t.nav.oferta}</a>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavLink to="/noticias" className={({isActive}) => isActive ? 'text-black font-medium' : 'text-gray-700 hover:text-black'}>{t.nav.noticias}</NavLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <a href="#cal-act" className="text-gray-700 hover:text-black">{t.nav.calendarioActividades}</a>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <a href="#cal-eval" className="text-gray-700 hover:text-black">{t.nav.calendarioEvaluaciones}</a>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <a href="#uniforme" className="text-gray-700 hover:text-black">{t.nav.uniforme}</a>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <a href="#talleres" className="text-gray-700 hover:text-black">{t.nav.talleres}</a>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <a href="#documentos" className="text-gray-700 hover:text-black">{t.nav.documentos}</a>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <a href="#contacto" className="text-gray-700 hover:text-black">{t.nav.contacto}</a>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-2">
            <Select value={lang} onValueChange={setLang}>
              <SelectTrigger className="w-[110px]">
                <SelectValue placeholder={t.nav.idioma} />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="es">ES - Español</SelectItem>
                  <SelectItem value="en">EN - English</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Button asChild style={{ backgroundColor: COLORS.primary, color: 'white' }}>
              <a href="#admisiones">Admisión</a>
            </Button>
          </div>
        </div>

        {/* Mobile */}
        <div className="lg:hidden flex items-center gap-2">
          <Select value={lang} onValueChange={setLang}>
            <SelectTrigger className="w-[88px]">
              <SelectValue placeholder={t.nav.idioma} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="es">ES</SelectItem>
                <SelectItem value="en">EN</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" aria-label="Abrir menú">Menú</Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[85vw] sm:w-[380px]">
              <div className="mt-8" />
              <MobileNav t={t} />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}

export function Footer({ t, site }) {
  return (
    <footer className="mt-16" style={{ backgroundColor: '#0f0f10' }}>
      <div className="mx-auto max-w-7xl px-4 py-12 text-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-semibold mb-3">{t.footer.mapaSitio}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/">{t.nav.inicio}</Link></li>
              <li><Link to="/noticias">{t.nav.noticias}</Link></li>
              <li><a href="#documentos">{t.nav.documentos}</a></li>
              <li><a href="#contacto">{t.nav.contacto}</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">{t.footer.datosContacto}</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2"><Mail size={16} /> {site.email}</li>
              <li className="flex items-center gap-2"><Phone size={16} /> {site.phone}</li>
              <li>{site.address}</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">Redes</h3>
            <div className="flex items-center gap-3">
              <a href={site.facebook} aria-label="Facebook" className="hover:opacity-90"><Facebook /></a>
              <a href={site.instagram} aria-label="Instagram" className="hover:opacity-90"><Instagram /></a>
            </div>
          </div>
        </div>
        <Separator className="my-8 opacity-20" />
        <div className="text-xs text-gray-400">© {new Date().getFullYear()} Liceo. Todos los derechos reservados.</div>
      </div>
    </footer>
  );
}

export function BackToTop({ label }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 240);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      aria-label={label}
      title={label}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-6 right-6 z-50 rounded-full shadow-lg transition-opacity ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      style={{ backgroundColor: COLORS.aqua }}
    >
      <span className="sr-only">{label}</span>
      <ChevronUp className="m-3" color="#0b0b0b" />
    </button>
  );
}