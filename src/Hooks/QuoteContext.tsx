import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Quote } from '../types/Quote';

interface QuoteContextType {
    quotes: Quote[];
    addQuote: (text: string, userName: string, authorName: string) => void;
    upvoteQuote: (id: string) => void;
    downvoteQuote: (id: string) => void;
    deleteQuote: (id: string) => void;
}

const QuoteContext = createContext<QuoteContextType | undefined>(undefined);

export const QuoteProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [quotes, setQuotes] = useState<Quote[]>([]);

    useEffect(() => {
        const storedQuotes = localStorage.getItem('quotes');
        if (storedQuotes) {
            setQuotes(JSON.parse(storedQuotes));
        }
    }, []);

    const saveQuotesToLocalStorage = (quotes: Quote[]) => {
        localStorage.setItem('quotes', JSON.stringify(quotes));
    };

    const addQuote = (text: string, userName: string, authorName: string) => {
        const newQuote: Quote = {
            id: Math.random().toString(36).substr(2, 9),
            text,
            userName,
            authorName,
            upvotes: 0,
            downvotes: 0,
        };
        const updatedQuotes = [...quotes, newQuote];
        setQuotes(updatedQuotes);
        saveQuotesToLocalStorage(updatedQuotes);
    };

    const upvoteQuote = (id: string) => {
        const updatedQuotes = quotes.map((quote) =>
            quote.id === id ? { ...quote, upvotes: quote.upvotes + 1 } : quote
        );
        setQuotes(updatedQuotes);
        saveQuotesToLocalStorage(updatedQuotes);
    };

    const downvoteQuote = (id: string) => {
        const updatedQuotes = quotes.map((quote) =>
            quote.id === id ? { ...quote, downvotes: quote.downvotes + 1 } : quote
        );
        setQuotes(updatedQuotes);
        saveQuotesToLocalStorage(updatedQuotes); 
    };

    const deleteQuote = (id: string) => {
        const updatedQuotes = quotes.filter((quote) => quote.id !== id);
        setQuotes(updatedQuotes);
        saveQuotesToLocalStorage(updatedQuotes); 
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
