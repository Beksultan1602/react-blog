import Button from '../UI/Button/Button'
import Input from '../UI/Input/Input'
import styles from './PostForm.module.css'

const PostForm = () => {
	return (
		<div className={styles.postList}>
			<h1 className={styles.postListTitle}>Создай свой пост</h1>
			<form className={styles.formWrapper}>
				<Input placeholder='Название поста' />
				<Input placeholder='Описание поста' />
				<Button>Создать пост</Button>	
			</form>
			<div style={{margin: '20px 0', width: '100%', border: '1px solid #D7DADD', background: '#fff'}}></div>
		</div>
	)
}

export default PostForm