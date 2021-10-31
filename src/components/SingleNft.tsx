import { ISingleNft } from '../redux/types'

function SingleNft(props: ISingleNft) {
  return (
    <div>
      <img src={props.image_url} />
      <h3>{props.name}</h3>
    </div>
  )
}

export default SingleNft
