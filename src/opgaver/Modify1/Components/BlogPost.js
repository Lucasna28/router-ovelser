import React from "react";
import { useParams, Link } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams();

  // Simuleret blogpost baseret på ID'en i URL'en
  const blogPosts = {
    1: {
      title: "Første blogindlæg",
      content: "Indholdet af det første blogindlæg.",
    },
    2: {
      title: "Andet blogindlæg",
      content: "Indholdet af det andet blogindlæg.",
    },
    3: {
      title: "Tredje blogindlæg",
      content: "Indholdet af det tredje blogindlæg.",
    },
  };

  const blogPost = blogPosts[id];

  if (!blogPost) {
    return (
      <div className="max-w-md mx-auto mt-8 bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Blogpost ikke fundet</h2>
        <p className="text-gray-600">Den ønskede blogpost blev ikke fundet.</p>
        <p className="mt-4">
          <Link to="/" className="text-blue-500 hover:text-blue-700">
            Tilbage til bloglisten
          </Link>
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto mt-8 bg-white shadow-md rounded-lg p-8">
      <h2 className="text-2xl font-bold mb-4">{blogPost.title}</h2>
      <p className="text-gray-700">{blogPost.content}</p>
      <p className="mt-4">
        <Link to="/" className="text-blue-500 hover:text-blue-700">
          Tilbage til bloglisten
        </Link>
      </p>
    </div>
  );
};

export default BlogPost;
