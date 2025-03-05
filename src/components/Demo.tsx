interface Props {
  text: string
}

export default function Demo(props: Props) {
  return <div>{props.text}</div>
}
