import Hero from '../ui/homepage/Hero'
import Service from '../ui/homepage/Service'
import NewArrival from '../ui/homepage/NewArrival'
import Category from '../ui/homepage/Category'
import Register from '../ui/homepage/Register'
import { fetchAllUsers } from '../lib/actions/user.actions'

export default async function Home() {
  const users = await fetchAllUsers();
  console.log('users: ', users)
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
