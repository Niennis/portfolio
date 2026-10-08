import Home from '@/components/Home/Home'
import React from 'react'
import { notFound } from 'next/navigation'
import { isLocale } from '@/i18n/config'
import { getDictionary } from '@/i18n/getDictionary'
import { getProjectGroups } from '@/constant/projects'

type Props = {
  params: Promise<{ lang: string }>
}

const HomePage = async ({ params }: Props) => {
  const { lang } = await params
  if (!isLocale(lang)) notFound()

  return <Home dict={getDictionary(lang)} projectGroups={getProjectGroups(lang)} />
}

export default HomePage
