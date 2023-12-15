const Home = () => {
    return (
        <article id="home-view" className="home">
            <h1>H1 The Undead Aslyum</h1>
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


        </article>
    )
}

export default Home;