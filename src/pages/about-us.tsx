import React from 'react'
import { useSelector } from 'react-redux'
import { wrapper } from '@store'
/* import { getPages } from '@store/actions' */
import { AboutUs } from '@components'

const AboutUsPage = () => {

 /*  const { page: { aboutPage: { about } } } = useSelector((state: any) => state) */

  return (
    <AboutUs content={''} />
  )
}

/* export const getServerSideProps = wrapper.getServerSideProps(
  ({ store }) => store.dispatch(getPages('aboutPage'))
)
 */
export default AboutUsPage
