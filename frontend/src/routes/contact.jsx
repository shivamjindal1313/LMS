import React from 'react'

import { Layout } from '../components/layout'
import { Article, ArticleContent, ArticleMedia } from '../components/article'

export default function ContactPage() {
  return (
    <Layout>
      <Article>
        <ArticleContent title="Contact">
          <p>ABOUT SRUJNA
503 Mangal Mahesh Baug, S.V. Road, Opp Sumer Nagar, Kora Kendra, Borivali (West), 400092 </p>
<p>Contact Us:    
+91 91371 39544</p>
<p>Email ID:     info@srujna.org</p>
        </ArticleContent>

        <ArticleMedia>
          <img src="https://www.srujna.org/wp-content/uploads/2019/03/Screenshot-2019-01-22-at-10.58.36-AM.png" alt="Lorem Picsum" />
        </ArticleMedia>
      </Article>
    </Layout>
  )
}
