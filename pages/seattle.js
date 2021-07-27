import Image from "next/image";
import Link from "next/link";

export default function seattle() {
  return (
    <div className="container">
      <article className="center card-main ">
        <Image src="/Seattle.png" height="640" width="940" alt="" />
      </article>
      <span className="center">
        <h3>Emerald City</h3>
        <p>Digital Ilustration</p>
      </span>
      <div className="card-main">
        <Link href="/">
          <a>Back</a>
        </Link>
      </div>
    </div>
  );
}
