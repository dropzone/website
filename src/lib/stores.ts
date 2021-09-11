import { writable } from 'svelte/store';

export const count = writable(0);

type Seo = {
  title: string;
  description: string;
};

export const defaultSeo: Seo = {
  title: 'Dropzone', // default title
  description: 'Tools to build great forms.' // default description
};

export const seo = writable<Seo>(defaultSeo);
