import { useParams } from "react-router"

export const Post = () => {
  const { id } = useParams();
  return (
    <div>
      post id : { id }
    </div>
  )
}
