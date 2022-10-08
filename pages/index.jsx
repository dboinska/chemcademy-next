import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import styled from 'styled-components';
import Link from 'next/link';

import Section from '../src/sections/Section';
import Hero from '../src/sections/Hero';

import { about, classroom, online } from '../data/section.js';

export default function Home() {
  return (
    <>
      <Hero />
      <Section item={about} imgPosition="right">
        Nauczanie z pasji
      </Section>
      <Section item={classroom}>Nauka w dobrej atmosferze</Section>
      <Section item={online} imgPosition="right">
        Lekcje online
      </Section>
    </>
  );
}