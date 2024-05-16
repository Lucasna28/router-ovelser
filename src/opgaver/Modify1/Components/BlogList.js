import React from "react";
import { Link } from "react-router-dom";

const BlogList = () => {
  // Simuleret liste over blogindlæg
  const blogPosts = [
    {
      id: 1,
      title: "Første blogindlæg",
      content: "Indholdet af det første blogindlæg.",
    },
    {
      id: 2,
      title: "Andet blogindlæg",
      content: "Indholdet af det andet blogindlæg.",
    },
    {
      id: 3,
      title: "Tredje blogindlæg",
      content: "Indholdet af det tredje blogindlæg.",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-8 mt-[3rem]">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Velkommen til Bloggen
      </h2>
      <ul className="space-y-4">
        {blogPosts.map((post) => (
          <li
            key={post.id}
            className="border-b border-gray-200 last:border-b-0"
          >
            <Link
              to={`/blog/${post.id}`}
              className="block hover:bg-gray-50 transition duration-300 ease-in-out rounded-lg px-4 py-3"
            >
              <h3 className="text-xl font-semibold text-gray-800">
                {post.title}
              </h3>
              <p className="text-gray-600">{post.content}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
