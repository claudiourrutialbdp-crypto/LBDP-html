import React, { useMemo } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../components/ui/carousel';
import { Link } from 'react-router-dom';

export default function Home({ t, sliderImages, quickLinks, news }) {
  const latest = useMemo(() => [...news].sort((a,b) => (a.date < b.date ? 1 : -1)).slice(0,5), [news]);

  return (
    <main>
      {/* Hero / Slider */}
      <section aria-label="Slider institucional" className="bg-[#ecf1f5]">
        <div className="mx-auto max-w-7xl px-4 py-6">
          <Carousel className="w-full">
            <CarouselContent>
              {sliderImages.map((img) => (
                <CarouselItem key={img.id} className="basis-full">
                  <div className="relative h-[320px] sm:h-[420px] md:h-[480px] overflow-hidden rounded-lg">
                    <img src={img.url} alt={img.alt} loading="lazy" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Accesos rápidos */}
      <section className="mx-auto max-w-7xl px-4 mt-8" aria-labelledby="destacados-h">
        <h2 id="destacados-h" className="text-xl font-semibold mb-4">{t.home.destacados}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {quickLinks.map((q) => (
            <Card key={q.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-base">{q.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <Link to={q.href} className="text-[#1418c4] hover:underline">Ver más</Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Últimas noticias */}
      <section className="mx-auto max-w-7xl px-4 mt-10 mb-12" aria-labelledby="ultimas-noticias-h">
        <h2 id="ultimas-noticias-h" className="text-xl font-semibold mb-4">{t.home.ultimasNoticias}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {latest.map((n) => (
            <article key={n.id} className="rounded-lg border bg-white overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-28">
                <img src={n.images[0]} alt={n.title} loading="lazy" className="w-full h-full object-cover" />
              </div>
              <div className="p-3">
                <p className="text-xs text-gray-500">{new Date(n.date).toLocaleDateString()}</p>
                <h3 className="text-sm font-semibold line-clamp-2 mt-1">{n.title}</h3>
                <p className="text-sm text-gray-600 line-clamp-2 mt-1">{n.excerpt}</p>
                <Link to="/noticias" className="text-[#05dc79] text-sm inline-block mt-2 hover:underline">{t.noticias.verMas}</Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}