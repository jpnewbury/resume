import Image from "next/image";
import Link from "next/link";

export default function fllies() {
  return (
    <div className="container">
      <article className="center card-main ">
        <Image src="/OG-Dirty-Hipster.jpg" height="500" width="500" alt="" />
      </article>
      <span className="center">
        <h3>Dirty Hipsters</h3>
        <p>Deepfield macro photography</p>
      </span>
      <div className="card-main">
        <Link href="/">
          <a>Back</a>
        </Link>
      </div>
    </div>
  );
}
