import { ReactElement } from 'react'
import '@/styles/globals.css'

interface Props {
  children: ReactElement
}

export default function Layout(props: Props) {
  return props.children
}
