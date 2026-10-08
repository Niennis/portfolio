import type { Locale } from './config'
import es from './dictionaries/es'
import en from './dictionaries/en'

const dictionaries = { es, en }

export const getDictionary = (locale: Locale) => dictionaries[locale]

export type { Dictionary } from './dictionaries/es'
