import React from 'react'

import { Layout } from '../components/layout'
import { Article, ArticleContent, ArticleMedia } from '../components/article'

export default function AboutPage() {
  return (
    <Layout>
      <Article>
        <ArticleContent title="About">
          <p>
          It was on the 25th of April 2011 that Srujna was founded. Jyotika Bhatia and Vaishali Shah started it after talking to rescued human trafficking victims and realising the problems they had still been facing out in the world. They found that being free from that environment did not put an end to their struggles. Upon turning eighteen, the girls would be forced out from their shelter homes despite having no concrete skills to survive out in the world. While their initial goal was to habituate and help the rescued girls by helping them get the training and skills they needed to persevere, Srujna soon grew into a bigger, fully-functioning not-for-profit.

Today, it provides training, income opportunities, awareness on various areas, educational coaching to women across India and acts as a bridge between these women and the external market so that they can earn their independent income by themselves.</p>
        </ArticleContent>

        <ArticleMedia>
          <img
            src="https://d1ebi6y8mvowaj.cloudfront.net/wp-content/uploads/2019/03/Feature-Story_March_Srujna-FINAL.jpg"
            alt="Lorem Picsum"
          />
        </ArticleMedia>
      </Article>
    </Layout>
  )
}
