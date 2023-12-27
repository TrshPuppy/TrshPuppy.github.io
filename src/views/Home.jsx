const Home = () => {
    return (
        <article id="home-view" className="home">
            <h1>Home</h1>
            <h2>H2 There are Two Bells of Awakening</h2>
            <h3>H3 Forests, Butterflys, Knights, and Golums</h3>
            <h4>H4 Painted World and the Legendary Duo</h4>
            <h5>H5 Chaos Crystal Leg</h5>
            <h6>H6 Into the Kiln</h6>

            <p>This is a &lt;p&gt; block</p>

            <pre>This is a &lt;pre&gt; block</pre>

            <code>This is a &lt;code&gt; block</code>

            <pre>
                <code>This is a &lt;code&gt; block within a &lt;pre&gt;</code>
            </pre>

            <address>
                This is an address block<br/>
                1600 Pen Ave. SW<br/>
                Little Chinatown<br/>
                New York City, NY 12345<br/>
            </address>

            <table>
                <caption>Some Table</caption>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Team</th>
                        <th>Goals</th>
                        <th>Assists</th>
                        <th>Penalty Minutes</th>
                        <th>Points</th>
                        <th>Position</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>John Doe</td>
                        <td>Team A</td>
                        <td>25</td>
                        <td>15</td>
                        <td>20</td>
                        <td>40</td>
                        <td>Forward</td>
                        <td>A skilled forward with a powerful shot and excellent playmaking abilities. Known for creating scoring opportunities.</td>
                    </tr>
                    <tr>
                        <td>Jane Smith</td>
                        <td>Team B</td>
                        <td>20</td>
                        <td>30</td>
                        <td>15</td>
                        <td>50</td>
                        <td>Defense</td>
                        <td>An agile defenseman with strong defensive skills. Contributes offensively with precise passing and occasional goals.</td>
                    </tr>
                    <tr>
                        <td>Mike Johnson</td>
                        <td>Team C</td>
                        <td>15</td>
                        <td>25</td>
                        <td>25</td>
                        <td>40</td>
                        <td>Forward</td>
                        <td>A gritty forward with a physical playing style. Known for scoring goals in high-pressure situations.</td>
                    </tr>
                </tbody>
            </table>

            <section>
                <p>This is a &lt;p&gt; in a &lt;section&gt;</p>
            </section>

            <blockquote>
                <p>Arth says hi and also that this is a &lt;blockquote&gt;</p>
                <p>He also says this is is a &lt;p&gt; in a &lt;blockquote&gt;, you know because it happens and all.</p>
                <cite>Arthvadrr - circa 2023</cite>
            </blockquote>

            <div className="alert alert-info">
                <h3>Alert Info</h3>
                Some type of awesome info content will go here.
            </div>

            <div className="alert alert-success">
                <h2>Alert success</h2>
                Some type of awesome success content will go here.
            </div>

            <div className="alert alert-warning">
                <h5>Alert warning</h5>
                Some type of awesome warning content will go here.
            </div>

            <div className="alert alert-danger">
                <h4>Alert Info</h4>
                Some type of awesome danger content will go here.
            </div>

            <dl>
                <dt>This is a dl list. This is the dt</dt>
                <dd>This defines the thing above.</dd>
                <dt>Here&apos;s a thing</dt>
                <dd>This defines the thing above, too.</dd>
            </dl>

            <figure>
                <img src="img/tp-happy.webp" alt="Beautiful Puppy"/>
                <figcaption>This is a breathtaking landscape with mountains and a serene lake. Just kidding its a figure with an img and figcaption</figcaption>
            </figure>

            &lt;hr&gt; below
            <hr/>

            <ol>
                <li>Ordered</li>
                <li>List</li>
                <li>Of things</li>
                <li>Like puppies</li>
                <li>Or pastries</li>
                <li>Ok freenavi</li>
            </ol>

            <ul>
                <li>This list has no order</li>
                <li>it is utter chaos</li>
                <li>dafuqisgoingon</li>
                <li>freeloki</li>
            </ul>

            <a href="google.com">Take me to google!</a>

            <p>This is a paragraph with a <abbr>ABBR</abbr> tag. It means...something.</p>

            <blockquote>
                The cite tag is below. It should be used as a cite, you know, with a dashy thing
                <cite>arthvadrr circa 2023</cite>
            </blockquote>

            <p>This is for the &lt;mark&gt;. It is used to <mark>represent really relevant text</mark></p>

            <h2>
                <sup>somecat</sup>
                <div>This is a title with a sup and sub</div>
                <sub>2023</sub>
            </h2>

            <p>It is important to use the &lt;time&gt; tag to let browsers index time periods easier such as <time dateTime="1955-11-05">November 5<sup>th</sup>, 1955</time></p>

            <p><u>This is a &lt;u&gt; tag.</u> Surprise, it doesn&apos;t mean underline! (unarticulated)</p>

            <p>There is an html to represent <var>variables</var>. (it&apos;s &lt;var&gt;)</p>

            <figure>
                <figcaption>Listen to the T-Rex:</figcaption>
                <audio controls src="/media/cc0-audio/t-rex-roar.mp3">
                    <a href="/media/cc0-audio/t-rex-roar.mp3"> Download audio </a>
                </audio>
            </figure>

            <video controls>
                <source src="https://youtu.be/VKlzr3LzcV8?feature=shared" type="video/mp4" />
            </video>


            <iframe 
                width="560" 
                height="315" 
                frameBorder="0" 
                src="https://www.youtube.com/embed/VKlzr3LzcV8?si=CK0zrsE1kF4qEsnl" 
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen
            />

        </article>
    )
}

export default Home;