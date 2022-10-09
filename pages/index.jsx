import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import Hero from '../src/sections/Hero';
import Section from '../src/sections/Section';
import Courses from '../src/sections/Courses';
import Badges from '../src/components/Badges';

import { about, classroom, online } from '../data/section.js';
import { courses } from '../data/courses.js';
import { badges } from '../data/badges';

export default function Home() {
  return (
    <>
      <Hero />
      <Section item={about} imgPosition="right">
        Nauczanie z pasji
      </Section>
      <Courses items={courses} />
      <Section item={classroom}>Nauka w dobrej atmosferze</Section>
      <Badges items={badges} color="#010406">
        Wyróżnia mnie:
      </Badges>
      <Section item={online} imgPosition="right">
        Lekcje online
      </Section>
    </>
  );
}