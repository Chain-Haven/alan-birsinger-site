// Shared header + footer for stub/secondary pages
(function(){
const HEADER = `
<div class="utility">
  <div class="wrap">
    <div><a href="https://brokercheck.finra.org/individual/summary/4213860" target="_blank" rel="noopener">FINRA BrokerCheck — CRD #4213860 \u2197</a></div>
    <div class="right"><span class="dot"></span><span>Greater Houston \u00b7 Virtual where licensed</span></div>
  </div>
</div>
<header class="site">
  <div class="wrap">
    <a class="brand" href="Alan Birsinger Homepage.html">
      <span class="mark"><img src="wmg-icon.png" alt="Wealth Management Group" /></span>
      <span class="brand-text">
        <span class="name">Alan&nbsp;J.&nbsp;Birsinger</span>
        <span class="sub">Wealth Management Group</span>
      </span>
    </a>
    <nav class="primary">
      <a href="Alan Birsinger Homepage.html#about">About</a>
      <a href="Alan Birsinger Homepage.html#services">Services</a>
      <a href="Alan Birsinger Homepage.html#employers">Employer Plans</a>
      <a href="Alan Birsinger Homepage.html#serving">Areas Served</a>
      <a href="Alan Birsinger Homepage.html#insights">Insights</a>
      <a href="Alan Birsinger Homepage.html#process">Process</a>
    </nav>
    <div class="head-cta">
      <a class="phone-pill" href="tel:+12817865159"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z"/></svg><span>(281)&nbsp;786-5159</span></a>
      <a class="btn btn-primary" href="Alan Birsinger Homepage.html#schedule">Schedule</a>
    </div>
  </div>
</header>`;

const FOOTER = `
<section class="cta-band">
  <div class="wrap">
    <div>
      <h2>Let's talk about <em>your situation,</em> not a generic plan.</h2>
      <p>The first conversation is complimentary and roughly 45 minutes. No pitch, no pressure.</p>
      <div class="ctas">
        <a class="btn btn-primary" href="Alan Birsinger Homepage.html#schedule">Schedule via Microsoft Teams</a>
        <a class="btn btn-ghost" href="tel:+12817865159">Call (281) 786-5159</a>
      </div>
    </div>
    <div class="meta">
      <div class="lbl">Direct contact</div>
      <div>Phone \u00b7 <a href="tel:+12817865159" style="color:#fff;text-decoration:none">(281) 786-5159</a></div>
      <div style="margin-top:6px">Email \u00b7 <a href="mailto:alan.birsinger@wealthmanagementgroup-inc.com" style="color:#fff;text-decoration:none;word-break:break-all">alan.birsinger@<br/>wealthmanagementgroup-inc.com</a></div>
      <div style="margin-top:16px;color:#8a7f6c">Mon\u2013Fri \u00b7 9 AM \u2013 5 PM CT</div>
    </div>
  </div>
</section>
<footer class="site">
  <div class="wrap">
    <div class="row">
      <div>
        <a class="brand" href="Alan Birsinger Homepage.html">
          <span class="mark"><img src="wmg-icon.png" alt="Wealth Management Group" /></span>
          <span class="brand-text">
            <span class="name">Alan&nbsp;J.&nbsp;Birsinger</span>
            <span class="sub">Wealth Management Group, Inc.</span>
          </span>
        </a>
        <div class="contact-block">
          <div><a href="tel:+12817865159">(281) 786-5159</a></div>
          <div><a href="mailto:alan.birsinger@wealthmanagementgroup-inc.com">alan.birsinger@wealthmanagementgroup-inc.com</a></div>
          <div>Greater Houston Area, TX</div>
        </div>
      </div>
      <div>
        <h4>Services</h4>
        <ul>
          <li><a href="service.html#retirement-planning-houston">Retirement Planning</a></li>
          <li><a href="service.html#401k-rollover-houston">401(k) Rollovers</a></li>
          <li><a href="service.html#pension-lump-sum-decisions">Pension Decisions</a></li>
          <li><a href="service.html#investment-management-houston">Investment Management</a></li>
          <li><a href="service.html#social-security-and-medicare-planning">Social Security &amp; Medicare</a></li>
        </ul>
      </div>
      <div>
        <h4>Employer Plans</h4>
        <ul>
          <li><a href="employer.html#exxonmobil">ExxonMobil</a></li>
          <li><a href="employer.html#chevron">Chevron</a></li>
          <li><a href="employer.html#shell">Shell</a></li>
          <li><a href="employer.html#slb">SLB</a></li>
          <li><a href="employer.html#nasa-jsc">NASA / JSC</a></li>
        </ul>
      </div>
      <div>
        <h4>About &amp; Resources</h4>
        <ul>
          <li><a href="Alan Birsinger Homepage.html#about">About Alan</a></li>
          <li><a href="Alan Birsinger Homepage.html#process">My Process</a></li>
          <li><a href="Alan Birsinger Homepage.html#insights">Insights</a></li>
          <li><a href="privacy.html">Privacy</a></li>
          <li><a href="accessibility.html">Accessibility</a></li>
          <li><a href="sitemap.html">Sitemap</a></li>
        </ul>
      </div>
    </div>
    <div class="compliance">
      <p><strong>Securities &amp; Advisory.</strong> Securities and advisory services offered through {{TODO: VERIFY \u2014 Broker-Dealer Name}}, a Registered Investment Adviser. Member <a href="https://www.finra.org/" target="_blank" rel="noopener">FINRA</a> &amp; <a href="https://www.sipc.org/" target="_blank" rel="noopener">SIPC</a>. Check the background of this investment professional on <a href="https://brokercheck.finra.org/individual/summary/4213860" target="_blank" rel="noopener">FINRA's BrokerCheck</a> (CRD #4213860).</p>
      <p><strong>State Registration.</strong> May only discuss and/or transact securities business with residents of: {{TODO: VERIFY \u2014 full list; Texas at minimum}}.</p>
      <p><strong>General Information.</strong> Informational purposes only; not tax or legal advice. Investing involves risk including possible loss of principal; past performance is not indicative of future results.</p>
    </div>
    <div class="colophon">
      <div>\u00a9 2026 Alan J. Birsinger \u00b7 Wealth Management Group, Inc.</div>
      <div><a href="privacy.html">Privacy</a> &nbsp;\u00b7&nbsp; <a href="accessibility.html">Accessibility</a> &nbsp;\u00b7&nbsp; <a href="sitemap.html">Sitemap</a></div>
    </div>
  </div>
</footer>`;

const hh = document.getElementById('site-header');
if (hh) hh.outerHTML = HEADER;
const ff = document.getElementById('site-footer');
if (ff) ff.outerHTML = FOOTER;
})();
