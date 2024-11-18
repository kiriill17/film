import { Button } from '@/components/ui/button';
import one from '../public/1.jpg';
//carusel
import * as React from 'react';

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Heart } from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* header */}
      <div className="h-96 relative w-full">
        <div className="h-96 flex bg-black opacity-50">
          <video
            className="w-full object-cover bg-black"
            autoPlay
            loop
            muted
            src={require('../public/film.mp4')}
          />
        </div>
        <div className="absolute w-full h-full flex flex-col px-16 justify-center top-0 left-0">
          <h1 className="text-4xl font-semibold">Zetflix</h1>
          <p className="text-sm w-1/2 font-light mt-2">
            Нормальные нахуй фильмы, а не вот эти там ваши муси пуси пендоcские
          </p>
          <Button
            variant="default"
            className="text-white font-semibold bg-amber-700 mt-4 w-32 transition hover:bg-amber-600"
          >
            Смотреть
          </Button>
        </div>
      </div>
      {/* films */}
      <div className="px-16 mb-4">
        <h1 className="text-2xl font-semibold mb-4 mt-10">Фильмы</h1>
        <Carousel
          opts={{
            align: 'start',
          }}
          className="w-full "
        >
          <CarouselContent>
            {Array.from({ length: 9 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/5">
                <div className="p-1 border-2 rounded-xl">
                  <img
                    src="https://cdn.ananasposter.ru/image/cache/catalog/poster/film/87/6240-1000x830.jpg"
                    alt="#"
                    className="rounded"
                    width={'100%'}
                  />
                  <h1 className="w-fit text-center mt-2 ">Бойцовский клуб</h1>

                  <p className="font-light text-sm">2008</p>
                  <p className="font-light text-sm">imdb: 8.8</p>
                  <div className="flex justify-between items-center mt-2 mb-1">
                    <Button className="p-1 h-8 bg-black text-white border-2">Смотреть</Button>
                    <a href="">
                      <Heart strokeWidth={1.25} width={20} />
                    </a>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      {/* serials */}
      <div className="px-16 mb-4">
        <h1 className="text-2xl font-semibold mb-4 mt-10">Сериалы</h1>
        <Carousel
          opts={{
            align: 'start',
          }}
          className="w-full "
        >
          <CarouselContent>
            {Array.from({ length: 9 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/5">
                <div className="p-1 border-2 rounded-xl">
                  <img
                    src="https://www.kino-teatr.ru/movie/posters/big/4/173334.jpg"
                    alt="#"
                    className="rounded"
                    width={'100%'}
                  />
                  <h1 className="w-fit text-center mt-2 ">Триггер</h1>

                  <p className="font-light text-sm">2024</p>
                  <p className="font-light text-sm">imdb: 8.2</p>
                  <div className="flex justify-between items-center mt-2 mb-1">
                    <Button className="p-1 h-8 bg-black text-white border-2">Смотреть</Button>
                    <a href="">
                      <Heart strokeWidth={1.25} width={20} />
                    </a>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
}
