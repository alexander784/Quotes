import { useQuotes } from '../Hooks/QuoteContext';
import { AiTwotoneLike } from "react-icons/ai";
import { SlDislike } from "react-icons/sl";
import { RiDeleteBin6Line } from "react-icons/ri";

const QuoteList = () => {
    const { quotes, upvoteQuote, downvoteQuote, deleteQuote } = useQuotes();

    return (
        <div className="mt-8">
            <h2 className="text-xl font-bold text-center mb-4">Quotes</h2>
            {quotes.length === 0 ? (
                <p className="text-center text-gray-500">No quotes yet!</p>
            ) : (
                <ul className="space-y-4">
                    {quotes.map((quote) => (
                        <li key={quote.id} className="border p-4 rounded shadow-md">
                            <p className="italic">"{quote.text}"</p>
                            <p>- {quote.authorName}</p>
                            <p className="text-sm text-gray-500">Submitted by: {quote.userName}</p>
                            <div className="flex space-x-4 mt-2 justify-center">
                                <button onClick={() => upvoteQuote(quote.id)} className="bg-green-200 px-2 py-1 rounded">
                                <AiTwotoneLike />({quote.upvotes})
                                </button>
                                <button onClick={() => downvoteQuote(quote.id)} className="bg-red-200 px-2 py-1 rounded">
                                <SlDislike /> ({quote.downvotes})
                                </button>
                                <button onClick={() => deleteQuote(quote.id)} className="bg-gray-200 px-2 py-1 rounded">
                                <RiDeleteBin6Line />
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default QuoteList;
