import type { Metadata } from 'next';
import { ISampleLayout } from '@interface/layout';
import { META_PAGE } from '@constants/data/meta';

export const metadata: Metadata = {
  title: META_PAGE.sample.title,
  description: META_PAGE.sample.description,
  keywords: META_PAGE.sample.keywords,
  openGraph: {
    title: META_PAGE.sample.title,
    description: META_PAGE.sample.description,
    images: META_PAGE.sample.ogImage,
  },
  twitter: {
    title: META_PAGE.sample.title,
    description: META_PAGE.sample.description,
    images: META_PAGE.sample.ogImage,
  },
};

export default function layout({ children }: ISampleLayout) {
  return <>{children}</>;
}
