import React, { useMemo, useState } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../components/ui/dialog';
import { Button } from '../components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../components/ui/carousel';

export default function Noticias({ t, allNews, categories }) {
  const [category, setCategory] = useState('Todas');
  const [page, setPage] = useState(1);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);

  const pageSize = 6;

  const filtered = useMemo(() => {
    const list = category === 'Todas' ? allNews : allNews.filter(n => n.category === category);
    return [...list].sort((a,b) => (a.date < b.date ? 1 : -1));
  }, [allNews, category]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const paged = useMemo(() => filtered.slice((page-1)*pageSize, page*pageSize), [filtered, page]);

  const openDetail = (n) => { setActive(n); setOpen(true); };

  return (
    <main className="mx-auto max-w-7xl px-4 py-8">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <h1 className="text-2xl font-semibold">{t.noticias.titulo}</h1>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">{t.noticias.categoria}:</span>
          <Select value={category} onValueChange={(v) => { setPage(1); setCategory(v); }}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder={t.noticias.todas} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="Todas">{t.noticias.todas}</SelectItem>
                {categories.map(c => (
                  <SelectItem value={c} key={c}>{c}</SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      <section className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {paged.map(n => (
          <article key={n.id} className="rounded-lg border bg-white overflow-hidden">
            <div className="h-40">
              <img src={n.images[0]} alt={n.title} loading="lazy" className="w-full h-full object-cover" />
            </div>
            <Card>
              <CardContent className="p-4">
                <p className="text-xs text-gray-500">{new Date(n.date).toLocaleDateString()}</p>
                <h3 className="text-lg font-semibold mt-1">{n.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{n.excerpt}</p>
                <div className="mt-3">
                  <Button onClick={() => openDetail(n)} style={{ backgroundColor: '#1418c4', color: 'white' }}>{t.noticias.verMas}</Button>
                </div>
              </CardContent>
            </Card>
          </article>
        ))}
      </section>

      {/* Paginación */}
      <div className="flex items-center justify-center gap-3 mt-8">
        <Button variant="outline" disabled={page===1} onClick={() => setPage(p => Math.max(1, p-1))}>{t.noticias.anteriores}</Button>
        <div className="text-sm">{page} / {totalPages}</div>
        <Button variant="outline" disabled={page===totalPages} onClick={() => setPage(p => Math.min(totalPages, p+1))}>{t.noticias.siguientes}</Button>
      </div>

      {/* Detalle en lightbox */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle>{active?.title}</DialogTitle>
          </DialogHeader>
          {active && (
            <div className="space-y-3">
              <p className="text-sm text-gray-600">{new Date(active.date).toLocaleDateString()} • {active.category}</p>
              <Carousel>
                <CarouselContent>
                  {active.images.map((src, idx) => (
                    <CarouselItem key={idx} className="basis-full">
                      <div className="h-[320px] overflow-hidden rounded">
                        <img src={src} alt={`${active.title} ${idx+1}`} loading="lazy" className="w-full h-full object-cover" />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </main>
  );
}