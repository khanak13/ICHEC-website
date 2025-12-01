import React from 'react'
import Caroule from './Caroule'
import Content from'./Content'
import Timeline from'./Timeline'
import Theme from'./Theme'
import Speaker from './speaker'
import Reaching from'./Reaching'
import RegisterComp from './RegisterComp'
import Schedule from './schedule'
import Places from './Places'
import AbstractContent from'./AbstractContent'
import Marquee from './Marquee'
import Sponsors from './Sponsors'
export default function Home() {
  return (
    <>
    <Marquee/>
    <Caroule/>
    <div id="about"><Content /></div>
      <section id="theme"><Theme/></section>
      <section id="speaker"><Speaker/></section>
      <Sponsors/>
      <section id="submission"><AbstractContent/></section>
      
      <section id="register_comp"><RegisterComp/></section>
      
      <section id="timeline"><Timeline /></section>
      <section id="schedule"><Schedule /></section>
      
      
      
      
    
      <section id="reaching"><Reaching/></section>
      <Places/>
      
      
    
    
    
    </>
  )
}
