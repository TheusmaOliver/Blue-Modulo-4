import "./error.css";
import { Link } from "react-router-dom";
import Topbar from "../../components/Topbar/Topbar";

export default function Erro() {
  return (
    <div>
      <Topbar />
      <div className="not-found">
        <h1>404</h1>
        <h2>Página não encontrada</h2>
        <Link className="not-found__link" to="/">
          Veja todos os blogs
        </Link>
      </div>
    </div>
  );
}
