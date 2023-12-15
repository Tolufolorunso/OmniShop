import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Icon(props: any) {
  const { icon } = props
  return <FontAwesomeIcon icon={icon} />
}

export default Icon
