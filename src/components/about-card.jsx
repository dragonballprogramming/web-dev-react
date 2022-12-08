import React from "react";

export default function aboutCard() {
    return (
        <section class="card-body left-column" id="left-column">
          <div class="card full-card" style={{ backgroundImage: "url('img/man-searching-for-job.png');" }}>
            <div class="card-content">
              <h2 class="card-title">SEO</h2>
              <p class="body-card">
                Search Engine Optimization 101: Why It Is Important and How You Can Get Ranked High on Search Engines
              </p>
              <a href="/seo" class="button-card">Learn More</a>
            </div>
          </div>
        </section>
    )
}
