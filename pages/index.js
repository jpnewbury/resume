import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>John Newbury - Creative Front End Developer</title>
      </Head>
      <main>
        <span className="section__header">
          <h2>Experience</h2>
        </span>
        <section className="card-list">
          <article className="card">
            <header className="card-header">
              <h2>New Media Developer</h2>
            </header>
            <div className="card-body">
              <p></p>
              <h3>Roaring Fork Conservancy</h3>
              <ul>
                <li>
                  Designed digital application for Hot Spots for Trout campaign
                  and citizen science data collection Designed original
                  Fly-Fishing Journal for education programs.
                </li>
                <li>
                  Create digital illustrations, provide photography for use in
                  publications.
                </li>
                <li>Write fly fishing articles for newsletter publication.</li>
                <li>
                  Participate in stream surveys and data collection in support
                  of conservation efforts
                </li>
                <li>
                  Paint original river-based fine art for auction to benefit the
                  organization.
                </li>
              </ul>
            </div>
            <div className="tags">
              <a href="#">html</a>
              <a href="#">css</a>
              <a href="#">design</a>
            </div>
          </article>
          <article className="card">
            <header className="card-header">
              <h2>Developer</h2>
            </header>
            <div className="card-body">
              <h3>Newbury Art and Design, LLC</h3>
              <p>
                <em>-- formerly John P Newbury Angling Arts --</em>
              </p>
              <ul>
                <li>
                  Produce all illustrations, photography, and graphic design for
                  business website.
                </li>
                <li>
                  Developed full stack website using React/Next to educate a
                  fly-fishing audience.
                </li>
                <li>
                  Maintain commercial fly design contract and serve as
                  Ambassador with Fulling Mill US.
                </li>
                <li>
                  Implement best practices for SEO ranking content migration and
                  development, responsive design and accessibility.
                </li>
              </ul>
            </div>
            <div className="tags">
              <a href="#">html</a>
              <a href="#">css</a>
              <a href="#">design</a>
            </div>
          </article>
          <article className="card">
            <header className="card-header">
              <h2>Owner - Contractor</h2>
            </header>
            <div className="card-body">
              <h3>iSmart Media</h3>
              <ul>
                <li>Deep knowledge in JavaScript, CSS and HTML.</li>
                <li>
                  Operated freelance web development and graphic design company.
                </li>
                <li>
                  Developed custom web applications based on unique business
                  models.
                </li>
                <li>Worked multiple contracts concurrently.</li>
                <li>Edited videos and created motion graphics.</li>
                <li>
                  Primary collaborators: Steinhauer Management Group, Gukeisen
                  Design, Sales Tax Support.com.
                </li>
              </ul>
            </div>
            <div className="tags">
              <a href="#">Web Design</a>
              <a href="#">web master</a>
              <a href="#">front end</a>
            </div>
          </article>
        </section>
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
                <li>CSS - SCSS</li>
                <li>javaScript</li>
                <li>VS Code</li>
              </ul>
              <h3>Legacy</h3>
              <ul>
                <li>PHP</li>
                <li>MySQL</li>
                <li>Apache</li>
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

        <span className="section__header">
          <h2>Education</h2>
        </span>
        <section className="card-list">
          <article className="card">
            <div className="card-header">
              <h2>Associate of Applied Science Fisheries Technology </h2>
              <h3>Mount Hood Community College - Gresham, OR</h3>
            </div>
            <div className="card-body">
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>

              <span className="center">
                <Image src="/23.jpg" height="200px" width="200px" alt="" />
              </span>
              <p></p>
              <h3>
                Fish Biology Technician - Intern US Fish and Wildlife Service
                Vancouver, WA
              </h3>
              <ul>
                <li>
                  Prepared pit tags and field gear, and planned logistics for
                  fishery research projects.
                </li>
                <li>
                  Collected data; performed data entry and quality control with
                  MS Access and Excel.
                </li>
                <li>
                  Performed research in the field; used map, compass and GPS.
                </li>
              </ul>
            </div>
          </article>
          <article className="card">
            <div className="card-header">
              <h2>Bachelor of Arts Environmental Science </h2>
              <h3>Marylhurst University - Marylhurst, OR</h3>
            </div>
            <div className="card-body">
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <span className="center">
                <Image src="/MU.png" height="200px" width="200px" alt="" />
              </span>

              <p></p>
              <h3>
                Stream Surveyor - Intern US Forest Services Mt Hood National
                Forest
              </h3>
              <ul>
                <li>
                  Performed data entry and processing, and quality control using
                  MS Access and Excel.
                </li>
                <li>
                  Performed stream surveys using the R6 protocol on several
                  streams.
                </li>
                <li>
                  Worked with maps and GPS units to mark and record coordinates,
                  plan access to streams and calculate mapped stream data.
                </li>
              </ul>
            </div>
          </article>
        </section>
        <span className="section__header">
          <h2>Art Direction</h2>
        </span>
        <section className="card-list">
          <article className="card">
            <div className="card-header">
              <h2>Fine Artist - Painting</h2>
            </div>
            <div className="card-body">
              <p></p>
              <p></p>
              <p></p>
              <span className="center">
                <Image src="/Spell.jpg" width="320px" height="240px" alt="" />
              </span>
              <p className="center">Spell of the Sensous</p>
              <p className="center">OIl on canvas 24" x 36"</p>
            </div>
          </article>
          <article className="card">
            <div className="card-header">
              <h2>Digital Illustration</h2>
            </div>
            <div className="card-body">
              <p></p>
              <p></p>
              <p></p>
              <span className="center">
                <Image
                  src="/SeattleSkylineCopy.png"
                  width="320px"
                  height="240px"
                  alt=""
                />
              </span>
              <p className="center">Seattle Skyline</p>
              <p className="center">Affinity Designer</p>
            </div>
          </article>
          <article className="card">
            <div className="card-header">
              <h2>Photography</h2>
            </div>
            <div className="card-body">
              <p></p>
              <p></p>
              <p></p>
              <span className="center">
                <Image
                  src="/OG-Dirty-Hipster.jpg"
                  width="220px"
                  height="240px"
                  alt=""
                />
              </span>
              <p className="center">Macro Photography</p>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}
