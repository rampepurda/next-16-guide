import { Geist, Geist_Mono, Roboto, Inter } from 'next/font/google'

/**
 * Next.js (od verze 13 výše využívající balíček next/font/google) je výchozí strategie vykreslování písma nastavena na hodnotu display: 'swap'. Vlastnost display určuje chování prohlížeče v momentě, kdy se webové písmo (web font) teprve stahuje ze serveru.
 * @param swap: Okamžitě zobrazí záložní systémové písmo. Jakmile se Google font stáhne, text se přeblikne do nového stylu.
 * @param block: Skryje text (zobrazí neviditelné místo) a čeká na stažení fontu (obvykle max. 3 sekundy).
 * @param auto: Nechá rozhodnutí na prohlížeči. Většina moderních prohlížečů (Chrome, Firefox) se chová stejně jako block.
 */

export const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

export const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const roboto = Roboto({
  display: 'swap',
  variable: '--font-roboto',
  subsets: ['latin'],
})
