import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/mfbarth.png" />
      
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Matheus Barth</strong>
              <time title='5 de Outubro ás 09:53' dateTime='2022-10-05 09:53:30'>Cerca de 1h atrás</time>
            </div>

            <button title='Deletar comentário'>
              <Trash size={24}/>
            </button>
          </header>

          <p>Muito bom Barth, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}