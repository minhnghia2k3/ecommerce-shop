import Image from 'next/image'
import Hero from '../ui/homepage/Hero'
import Service from '../ui/homepage/Service'
import NewArrival from '../ui/homepage/NewArrival'
import Category from '../ui/homepage/Category'
import Register from '../ui/homepage/Register'

export default function Home() {
  return (
    <>
      <Hero />
      <Service />
      <NewArrival />
      <Category />
      <Register />
    </>
  )
}
