import { ISingleNft } from "../redux/types";

function SingleNft(props: ISingleNft) {
  return <div>{props.name}</div>;
}

export default SingleNft;
