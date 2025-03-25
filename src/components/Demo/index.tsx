interface Props {
  text: string
}

export default function Demo(props: Props) {
  return <div data-testid='demo'>{props.text}</div>
}
