import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>John Newbury - Creative Front End Developer</title>
      </Head>
      <main className="container">
        <span className="section__header">
          <h2>Toolbox</h2>
        </span>
        <section className="card-list">
          <article className="card">
            <header className="card-header">
              <h2>Developer Tools</h2>
            </header>
            <div className="card-body">
              <ul>
                <li>React - Next</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>javaScript</li>
                <li>VS Code</li>
              </ul>
            </div>
            <div class="tags">
              <a href="#">html</a>
              <a href="#">css</a>
              <a href="#">web-dev</a>
            </div>
          </article>
          <article className="card">
            <header className="card-header">
              <h2>Designer Tools</h2>
            </header>
            <div className="card-body">
              <h3>Adobe CC</h3>
              <p>
                Expert level with over 25 years experience with the following
                list of tools:
              </p>
              <ul>
                <li>Photoshop</li>
                <li>Illustrator</li>
                <li>In-Design</li>
                <li>After Effect</li>
                <li>Premiere</li>
              </ul>
            </div>
            <div className="tags">
              <a href="#">html</a>
              <a href="#">css</a>
              <a href="#">design</a>
            </div>
          </article>
        </section>
      </main>
    </>
  );
}
