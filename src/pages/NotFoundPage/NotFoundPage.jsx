import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  return (
    <main>
      <section>
        <p className={css.message}>Oops! Here's nothing!</p>
        <Link to={`/home`} className={css.backHomeLink}>
          Let's back Home
        </Link>
      </section>
    </main>
  );
}
