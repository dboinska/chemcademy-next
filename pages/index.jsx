import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import styled from 'styled-components';
import Link from 'next/link';

import Navbar from '../src/components/Navbar';
import Courses from '../src/sections/Courses';
import Footer from '../src/components/Footer';
import Hero from '../src/sections/Hero';

import { courses } from '../data/courses.js';

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />
      <Courses items={courses} />
      <Footer />
    </>
  );
}
