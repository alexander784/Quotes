import { Quote } from "../types/Quote"

interface QuoteItemProps {
    quote: Quote;
    onUpvote: (id:string) => void;
    onDownvote:(id:string) => void;
    onDelete: (id:string) => void;
}

const QuoteItem: React.FC<QuoteItemProps> = ({ quote, onUpvote,onDownvote, onDelete }) => {
  return (
    <div>
        <p>Quotes</p>
        <div>
            <button onClick={ () => onUpvote(quote.id)}>Upvote{quote.upvotes}</button>
            <button onClick={ () => onDownvote(quote.id)}>Downvote{quote.downvotes}</button>
            <button onClick={ () => onDelete(quote.id)}>Delete</button>
            
        </div>
    </div>
  )
}

export default QuoteItem