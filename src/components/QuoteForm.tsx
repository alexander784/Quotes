const QuoteForm = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="w-full max-w-md">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <h1 className="text-2xl font-bold text-center mb-6 text-gray-700">Quote Form</h1>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Your Name:
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter your name"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="quote">
                            Quote:
                        </label>
                        <input
                            type="text"
                            id="quote"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter the quote"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="quote-author">
                            Quote Author:
                        </label>
                        <input
                            type="text"
                            id="quote-author"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter the author's name"
                        />
                    </div>

                    <div className="flex items-center justify-center">
                        <button
                            className="bg-red-200 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Add Quote
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default QuoteForm;
