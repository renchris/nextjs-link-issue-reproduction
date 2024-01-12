'use server'

import '#/styles/globals.css';

import Excerpt from '#/ui/Excerpt';

import { getCategories } from './api/categories/getCategories';
import { ClickCounter } from '#/ui/click-counter';
import { TabGroup } from '#/ui/tab-group';
import React from 'react';

import Link from 'next/link';


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const categories = await getCategories();
  return (
    <html lang="en" className="[color-scheme:dark]">
      <body className="bg-gray-1100 overflow-y-scroll bg-[url('/grid.svg')] pb-36">
        <div className="lg:pl-72">
          <div className="mx-auto max-w-4xl space-y-8 px-2 pt-20 lg:px-8 lg:py-8">
            <div className="flex justify-between">
              <TabGroup
                path=""
                items={[
                  {
                    text: 'Home',
                    slug: '/',
                  },
                  {
                    text: 'Link-1',
                    slug: 'link-1',
                  },
                  ...categories.map((x) => ({
                    text: x.name,
                    slug: x.slug,
                  })),
                ]}
              />
              <div className="self-start">
                <ClickCounter />
              </div>
            </div>
            <Link
              href="/link-1"
            >Link 1</Link>
                        <Link
              href="/link-2"
            >Link 2</Link>
                        <Link
              href="/link-3"
            >Link 3</Link>
                        <Link
              href="/"
            >Home</Link>
          </div>
          <div>Main Layout</div>
          <div className="space-y-9">
              <div>{children}</div>
            </div>
        </div>
      </body>
    </html >
  );
}
