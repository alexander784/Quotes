import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Quote } from '../types/Quote';

interface QuoteContextType {
    quotes: Quote[];
    addQuote: (text: string) => void;
    upvoteQuote: (id: string) => void;
    downvoteQuote: (id: string) => void;
    deleteQuote: (id: string) => void;
}

const QuoteContext = createContext<QuoteContextType | undefined>(undefined);

export const QuoteProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [quotes, setQuotes] = useState<Quote[]>([]);

    const addQuote = (text: string) => {
        const newQuote: Quote = {
            id: Math.random().toString(36).substr(2, 9), // Simple ID generation
            text,
            upvotes: 0,
            downvotes: 0,
        };
        setQuotes((prevQuotes) => [...prevQuotes, newQuote]);
    };

    const upvoteQuote = (id: string) => {
        setQuotes((prevQuotes) =>
            prevQuotes.map((quote) =>
                quote.id === id ? { ...quote, upvotes: quote.upvotes + 1 } : quote
            )
        );
    };

    const downvoteQuote = (id: string) => {
        setQuotes((prevQuotes) =>
            prevQuotes.map((quote) =>
                quote.id === id ? { ...quote, downvotes: quote.downvotes + 1 } : quote
            )
        );
    };

    const deleteQuote = (id: string) => {
        setQuotes((prevQuotes) => prevQuotes.filter((quote) => quote.id !== id));
    };

    return (
        <QuoteContext.Provider value={{ quotes, addQuote, upvoteQuote, downvoteQuote, deleteQuote }}>
            {children}
        </QuoteContext.Provider>
    );
};

export const useQuotes = (): QuoteContextType => {
    const context = useContext(QuoteContext);
    if (!context) {
        throw new Error('useQuotes must be used within a QuoteProvider');
    }
    return context;
};
