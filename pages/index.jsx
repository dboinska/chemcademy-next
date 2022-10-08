import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import Hero from '../src/sections/Hero';
import Section from '../src/sections/Section';
import Courses from '../src/sections/Courses';

import { about, classroom, online } from '../data/section.js';
import { courses } from '../data/courses.js';

export default function Home() {
  return (
    <>
      <Hero />
      <Section item={about} imgPosition="right">
        Nauczanie z pasji
      </Section>
      <Courses items={courses} />
      <Section item={classroom}>Nauka w dobrej atmosferze</Section>
      <Section item={online} imgPosition="right">
        Lekcje online
      </Section>
    </>
  );
}