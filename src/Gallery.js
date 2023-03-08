import Posting from './Posting'

export default function Gallery({ postings }) {
    return (
        <div className='gallery'>
            {postings.map(post => {
                return <Posting key={post.title} {...post} />
            })}
        </div>
    )
}