import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const { id, title, body } = post;
  const navigate = useNavigate();
  const handleShowDetails = () => {
    navigate(`post/${id}`);
  };

  return (
    <div className="card bg-primary text-primary-content w-96">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <Link to={`post/${id}`} className="btn">
            Show Details Post
          </Link>
          <button onClick={handleShowDetails} className="btn btn-secondary">
            Click to see Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
