import React, { useState } from 'react';
import openai from 'openai';

const ChatBot = () => {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false); // Tambahkan variabel state untuk menandai proses pengiriman

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isSubmitting) return; // Cek apakah sedang dalam proses pengiriman

        setIsSubmitting(true); // Set state menjadi true saat memulai pengiriman

        try {
            const openai_api_key = process.env.NEXT_PUBLIC_OPENAI_API_KEY;
            const openai_client = new openai.OpenAI({
                apiKey: openai_api_key,
                dangerouslyAllowBrowser: true
            });

            const completion = await openai_client.chat.completions.create({
                model: 'davinci-002',
                prompt: input,
                max_tokens: 150,
            });

            setOutput(completion.data.choices[0].text.trim());
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setIsSubmitting(false); // Set state kembali menjadi false setelah selesai
        }
    };

    return (
        <div className="container shadow-md py-16">
            <div className="max-w-xl mx-auto text-center pt-10">
                <h4 className="font-bold uppercase text-primary text-lg mb-3 text-center">
                    ChatBot
                </h4>
                <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">
                    ChatBot menggunakan OpenAI
                </h2>
                <p className="font-medium text-md text-dark_sec md:text-lg">
                    Silahkan chat dengan AI:
                </p>
            </div>
            <div className="flex py-4 justify-center">
                <form onSubmit={handleSubmit} className="flex w-full max-w-lg">
                    <input
                        type="text"
                        value={input}
                        onChange={handleInputChange}
                        className="flex-1 appearance-none rounded-l-lg p-3 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
                        placeholder="Tulis pesan..."
                    />
                    <button
                        type="submit"
                        className="px-4 rounded-r-lg bg-primary text-white font-bold p-3 uppercase border-primary border-t border-b border-r"
                        disabled={isSubmitting} // Menonaktifkan tombol saat dalam proses pengiriman
                    >
                        Kirim
                    </button>
                </form>
            </div>
            {output && (
                <div className="max-w-xl mx-auto text-center pt-4">
                    <p className="font-medium text-md text-dark_sec md:text-lg">
                        Jawaban AI:
                    </p>
                    <p className="font-bold text-md text-dark_sec md:text-lg">
                        {output}
                    </p>
                </div>
            )}
        </div>
    );
};

export default ChatBot;
