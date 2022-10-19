import { Header } from './components/Header'
import { Post, PostProps } from './components/Post'
import { Sidebar } from './components/Sidebar'

import './global.css'
import styles from './App.module.css'

interface Post extends PostProps {
  id: number;
}

const posts: Post[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/dmeneres.png',
      name: 'Diogo Menéres',
      role: 'Student @ Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Microsoft Edge (previously known as Project Spartan) is the new name of Internet Explorer.' },
      { type: 'paragraph', content: 'This is the first version of Edge with features that closely resemble IE11.' },
      { type: 'link', content: 'https://www.microsoft.com/en-us/edge?form=MA13FJ', slug: 'Microsoft Edge' },
    ],
    publishedAt: new Date('2022-05-03 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @ Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Brave is a new browser that protects you from targeted ads and trackers.' },
      { type: 'paragraph', content: 'Brave takes the best of the open web and gives you control over your privacy.' },
      { type: 'link', content: 'https://brave.com/', slug: 'Brave Browser' },
    ],
    publishedAt: new Date('2022-05-10 20:00:00')
  },
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          { posts.map(post => {
            return (
              <Post
                key={post.id} 
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          }) }
        </main>
      </div>
    </div>
  )
}
