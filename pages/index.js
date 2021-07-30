import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Check from "../components/svg/check";
import Check2 from "../components/svg/check2";
import Facebook from "../components/svg/facebook";
import Instagram from "../components/svg/instagram";
import Linked from "../components/svg/linkedin";
import Dribble from "../components/svg/dribble";
import Github from "../components/svg/github";
import AE from "../components/svg/AfterEffects";
import Photoshop from "../components/svg/photoshop";
import Illustrator from "../components/svg/illustrator";
import Indesign from "../components/svg/inDesign";
export default function Home() {
  return (
    <div>
      <Head>
        <title>John Newbury - Creative Front End Developer</title>
      </Head>
      <main>
        <div className="parent">
          <span className="section__header">
            <h2>Toolbox</h2>
          </span>
        </div>

        <section className="card-list bg-1">
          <article className="card">
            <header className="card-header">
              <h2>Developer Tools</h2>
            </header>
            <div className="card-body col-2l">
              <div className="center">
                <Check style="icon-small" />
              </div>
              <div>
                <p>React - Next</p>
              </div>
              <div className="center">
                <Check style="icon-small" />
              </div>
              <div>
                <p>HTML</p>
              </div>
              <div className="center">
                <Check style="icon-small" />
              </div>
              <div>
                <p>CSS - SCSS</p>
              </div>
              <div className="center">
                <Check style="icon-small" />
              </div>
              <div>
                <p>javaScript</p>
              </div>
              <div className="center">
                <Check style="icon-small" />
              </div>
              <div>
                <p>SVG graphics</p>
              </div>
              <div className="center">
                <Check style="icon-small" />
              </div>
              <div>
                <p>VS Code</p>
              </div>
              <div className="center"></div>
              <div>
                <h3>Legacy Tools</h3>
              </div>
              <div className="center">
                <Check2 style="icon-small-green" />
              </div>
              <div>
                <p>PHP</p>
              </div>
              <div className="center">
                <Check2 style="icon-small-green" />
              </div>
              <div>
                <p>MySQL</p>
              </div>
              <div className="center">
                <Check2 style="icon-small-green" />
              </div>
              <div>
                <p>Apache</p>
              </div>
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
              <div className="col-2l">
                <div className="center">
                  <Photoshop style="icon-adobe" />
                </div>
                <div>
                  <p>Photoshop</p>
                </div>
                <div className="center">
                  <Illustrator style="icon-adobe" />
                </div>
                <div>
                  <p>Illustrator</p>
                </div>
                <div className="center">
                  <Indesign style="icon-adobe" />
                </div>
                <div>
                  <p>In-Design</p>
                </div>
                <div className="center">
                  <AE style="icon-adobe" />
                </div>
                <div>
                  <p>After Effect</p>
                </div>
              </div>
              <h3>New Tools</h3>
              <div className="col-2l">
                <div className="center">
                  <Check2 style="icon-small-green" />
                </div>
                <div>
                  <p>XD</p>
                </div>
                <div className="center">
                  <Check2 style="icon-small-green" />
                </div>
                <div>
                  <p>Figma</p>
                </div>
              </div>
            </div>
            <div className="tags">
              <a href="#">html</a>
              <a href="#">css</a>
              <a href="#">design</a>
            </div>
          </article>
        </section>

        <span className="section__header">
          <div className="parent" id="experience">
            <h2>Experience</h2>
          </div>
        </span>
        <section className="card-main">
          <article className="experience-card ">
            <header>
              <h2>New Media Developer</h2>
              <h3>Roaring Fork Conservancy</h3>
            </header>
            <div>
              <div className="col-2l">
                <div className="center">
                  <Check style="icon-green" />
                </div>
                <div>
                  <p>
                    Designed single page web application (SPA) &nbsp;
                    <Link href="http://www.roaringfork.org/drought/hot-spots-for-trout/">
                      <a target="_blank">Hot Spots for Trout</a>
                    </Link>{" "}
                    campaign and citizen science data collection program.
                  </p>
                </div>
                <div className="center">
                  <Check2 style="icon-lg" />
                </div>
                <div>
                  <p>
                    Designed original Fly-Fishing Journal for education
                    programs.
                  </p>
                </div>
                <div className="center">
                  <Check2 style="icon-lg" />
                </div>
                <div>
                  <p>
                    Created digital illustrations, provide photography for use
                    in publications.
                  </p>
                </div>
                <div className="center">
                  <Check2 style="icon-lg" />
                </div>
                <div>
                  <p>Wrote fly fishing articles for newsletter publication.</p>
                </div>
                <div className="center">
                  <Check2 style="icon-lg" />
                </div>
                <div>
                  <p>
                    Participated in stream surveys and data collection in
                    support of conservation efforts.
                  </p>
                </div>
                <div className="center">
                  <Check2 style="icon-lg" />
                </div>
                <div>
                  <p>
                    Painted original river-based fine art for auction to benefit
                    the organization.
                  </p>
                </div>
              </div>
              <ul></ul>
            </div>
            <div className="tags">
              <a href="#">html</a>
              <a href="#">css</a>
              <a href="#">design</a>
              <a href="#">fine art</a>
            </div>
          </article>
          <article className="experience-card">
            <header>
              <h2>Art Director</h2>
            </header>
            <div>
              <h3>Newbury Art and Design, LLC</h3>

              <em>-- formerly John P Newbury Angling Arts --</em>

              <div className="col-2l">
                <div className="center">
                  <Check style="icon-green" />
                </div>
                <div>
                  <p>
                    Produce all digital assets including illustrations,
                    photography, and graphic designs for&nbsp;
                    <Link href="https://flyfish-pied.vercel.app/">
                      <a target="_blank">business e-commerce website.</a>
                    </Link>
                  </p>
                </div>
                <div className="center">
                  <Check style="icon-green" />
                </div>
                <div>
                  <p>
                    Developed full stack website using React/Next, MongoDB to
                    educate a fly-fishing audience.
                  </p>
                </div>
                <div className="center">
                  <Check style="icon-green" />
                </div>
                <div>
                  <p>
                    Implemented best practices for SEO ranking content migration
                    and development, responsive design and accessibility.
                  </p>
                </div>
                <div className="center">
                  <Check2 style="icon-lg" />
                </div>
                <div>
                  <p>
                    Maintain commercial fly design contract and serve as
                    Ambassador with Fulling Mill US.
                  </p>
                </div>
                <div className="center">
                  <Check2 style="icon-lg" />
                </div>
                <div>
                  <p>Built a social media presence as a brand ambassador.</p>
                </div>
                <div className="center">
                  <Check2 style="icon-lg" />
                </div>
                <div>
                  <p>
                    Worked with Stripe, Squarespace on prior versions of
                    e-commerce website.
                  </p>
                </div>
              </div>
            </div>
            <div className="tags">
              <a href="#">html</a>
              <a href="#">css</a>
              <a href="#">design</a>
              <a href="#">SVG</a>
            </div>
          </article>
          <article className="experience-card">
            <header>
              <h2>Owner - Contractor</h2>
            </header>
            <div>
              <h3>iSmart Media</h3>
              <div className="col-2l">
                <div className="center">
                  <Check style="icon-green" />
                </div>
                <div>
                  <p>
                    Operated freelance web development and graphic design
                    company.
                  </p>
                </div>
                <div className="center">
                  <Check style="icon-green" />
                </div>
                <div>
                  <p>
                    Developed custom web applications based on unique business
                    models using PHP MySQL, HTML, CSS and javaScript.
                  </p>
                </div>
                <div className="center">
                  <Check2 style="icon-lg" />
                </div>
                <div>
                  <p>Edited videos and created motion graphics.</p>
                </div>
                <div className="center">
                  <Check2 style="icon-lg" />
                </div>
                <div>
                  <p>
                    Primary collaborators: Steinhauer Management Group, Gukeisen
                    Design, Sales Tax Support.com.
                  </p>
                </div>
              </div>
              <ul></ul>
            </div>
            <div className="tags">
              <a href="#">Web Design</a>
              <a href="#">web master</a>
              <a href="#">front end</a>
            </div>
          </article>
        </section>

        <span className="section__header" id="education">
          <h2>Education</h2>
        </span>

        <section className="card-list bg-2">
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
              <p></p>
              <span className="center margin">
                <Image
                  src="/23.jpg"
                  height="150px"
                  width="150px"
                  alt="Logo for Mt Hood Communirty College"
                />
              </span>
              <p></p>
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
              <span className="center margin">
                <Image
                  src="/MU.png"
                  height="150px"
                  width="150px"
                  alt="Logo for Marylhurst University"
                />
              </span>
            </div>
          </article>
        </section>
        <section>
          <span className="section__header">
            <h3>Internships</h3>
          </span>
          <article className="experience-card">
            <h3>
              Stream Surveyor - US Forest Services Mt Hood National Forest
            </h3>
            <div className="col-2l">
              <div className="center">
                <Check2 style="icon-lg" />
              </div>
              <div>
                <p>
                  Performed stream surveys using the R6 protocol on several
                  streams.
                </p>
              </div>
              <div className="center">
                <Check2 style="icon-lg" />
              </div>
              <div>
                <p>
                  Performed data entry and processing, and quapty control using
                  MS Access and Excel.
                </p>
              </div>

              <div className="center">
                <Check2 style="icon-lg" />
              </div>
              <div>
                <p>
                  Worked with maps, GPS and GIS to find and record coordinates,
                  plan access to streams and calculate mapped stream data.
                </p>
              </div>
              <div className="center">
                <Check2 style="icon-lg" />
              </div>
              <div>
                <p>Stream snorkel survey.</p>
              </div>
            </div>
          </article>
          <article className="experience-card">
            <h3>
              Fish Biology Technician - US Fish and Wildpfe Service Vancouver,
              WA
            </h3>
            <div className="col-2l">
              <div className="center">
                <Check2 style="icon-lg" />
              </div>
              <div>
                <p>
                  Prepared pit tags and field gear, and planned logistics for
                  fishery research projects.
                </p>
              </div>
              <div className="center">
                <Check2 style="icon-lg" />
              </div>
              <div>
                <p>
                  Collected data; performed data entry and quapty control with
                  MS Access and Excel.
                </p>
              </div>
              <div className="center">
                <Check2 style="icon-lg" />
              </div>
              <div>
                <p>
                  Performed research in the field; using map, compass and GIS /
                  GPS.
                </p>
              </div>
              <div className="center">
                <Check2 style="icon-lg" />
              </div>
              <div>
                <p>
                  Used data collection tools such as electro-shocking, hook and
                  pne samppng and radio tracking.
                </p>
              </div>
              <div className="center">
                <Check2 style="icon-lg" />
              </div>
              <div>
                <p>Collected and tested water quapty samples in the field.</p>
              </div>
              <div className="center">
                <Check2 style="icon-lg" />
              </div>
              <div>
                <p>Fish identification.</p>
              </div>
            </div>
          </article>
        </section>
        <span className="section__header" id="art">
          <h2>Art Direction</h2>
        </span>

        <section className="card-list bg-3">
          <article className="card">
            <div className="card-header">
              <h2>Fine Artist - Painting</h2>
            </div>
            <div className="card-body">
              <p></p>
              <p></p>
              <p></p>
              <span className="center">
                <Link href="spell">
                  <a>
                    <Image
                      src="/Spell.jpg"
                      width="320px"
                      height="240px"
                      alt=""
                    />
                  </a>
                </Link>
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
                <Link href="seattle">
                  <a>
                    <Image
                      src="/Seattle.png"
                      width="320px"
                      height="240px"
                      alt="Digital Illustraion of Seattle"
                      quality="50"
                    />
                  </a>
                </Link>
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
                <Link href="flies">
                  <a>
                    <Image
                      src="/OG-Dirty-Hipster.jpg"
                      width="220px"
                      height="240px"
                      alt=""
                    />
                  </a>
                </Link>
              </span>
              <p className="center">Macro Photography</p>
              <p className="center">Product photograpy</p>
            </div>
          </article>
        </section>
        <section className="center">
          <div className="box">
            <div>
              <a href="https://github.com/jpnewbury">
                <Github style="icon" />
              </a>
            </div>
            <div>
              <a href="https://www.facebook.com/john.p.newbury">
                <Facebook style="icon" />
              </a>
            </div>
            <div>
              <a href="https://www.instagram.com/j.p.newbury/">
                <Instagram style="icon" />
              </a>
            </div>
            <div>
              <a href="https://www.linkedin.com/in/johnpnewbury/">
                <Linked style="icon" />
              </a>
            </div>
            <div>
              <a href="https://dribbble.com/newburydesign">
                <Dribble style="icon" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <div>
        <Link href="#top">
          <a>Back to top</a>
        </Link>
      </div>
    </div>
  );
}
