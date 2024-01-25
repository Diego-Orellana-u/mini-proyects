import { Link } from "../Link.jsx"

const i18n = {
  es: {
    title: 'Sobre Nosotros',
    button: 'Ir a la Home',
    description: '¡Hola, me llamo Diego Orellana y estoy creando un clon de react router'
  },
  en: {
    title: 'About Us',
    button: 'Go To Home',
    description: `Hello!, my name is Diego Orellana and I'm creating a react Router`
  }
}

const useI18n = (lang) => {
  return i18n[lang] || i18n.en
}

export default function AboutPage ({ routeParams }) {
  const i18n = useI18n(routeParams.lang ?? 'es')
  return (
    <div className='about__container'>
      <h1>{i18n.title}</h1>
      <img src='https://pbs.twimg.com/profile_images/1613612257015128065/oA0Is67J_400x400.jpg' alt='midulive img'/>
      <p>{i18n.description}</p>
      <Link to='/'>{i18n.button}</Link>
    </div>
  )
  }
  