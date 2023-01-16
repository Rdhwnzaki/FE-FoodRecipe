import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Recipe } from "../components/Recipe-card";
import { Pagination } from "../components/Pagination/Pagination";
import Navbar from "../components/Navbar";

export const getServerSideProps = async (context) => {
  const { token } = context.req.cookies;

  if (!token) {
    return {
      redirect: {
        destination: "/login",
        permanent: true,
      },
    };
  }
  console.log(token, "token ssr");
  return {
    props: {
      login: token ? true : false,
      token: token,
    },
  };
};

export default function Search({ login, token }) {
  const [recipe, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(3);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const fetchRecipe = async () => {
      setLoading(true);
      const result = await axios.get(
        `${process.env.URL_BASE}/recipe/search/search-recipe?${search}`
      );
      setRecipes(result.data.data);
      setLoading(false);
    };

    fetchRecipe();
  }, [search]);

  //Get Current Recipes
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = recipe.slice(indexOfFirstPost, indexOfLastPost);

  //Ganti halaman
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
      <header>
        <Navbar login={login} />
      </header>
      <div className="container justify-align-center">
        <div>
          <input
            className="rounded-3 form-control"
            type="search"
            placeholder="Search"
            style={{ width: "500px" }}
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
          />
          <Recipe recipe={currentPost} loading={loading} />
          <Pagination
            postPerPage={postPerPage}
            totalPost={recipe.length}
            paginate={paginate}
          />
        </div>
      </div>
    </>
  );
}
