import Image from "next/image";
import Link from "next/link";

export default function spell() {
  return (
    <div className="container">
      <article className="center card-main ">
        <Image src="/Spell.jpg" height="700" width="900" alt="" />
      </article>
      <span className="center">
        <h3>Spell of the Sensous #2</h3>
        <p>Oil on canvas - 28" x 36" </p>
      </span>
      <div className="card-main">
        <Link href="/">
          <a>Back</a>
        </Link>
      </div>
    </div>
  );
}
