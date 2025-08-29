import React from 'react'

const NewsletterBox = () => {

    const onSubmitHandler = (event) => {
        event.preventDefault();
    }

    return (
        <div className='bg-gradient-to-br from-slate-900 via-blue-500 to-indigo-500 py-16 px-8 my-16 rounded-xl shadow-2xl'>
            <div className='max-w-2xl mx-auto text-center'>
                {/* Heading with improved typography */}
                <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
                    Subscribe & Save 30%
                </h2>
                
                {/* Subheading with better spacing and color */}
                <p className='text-lg text-gray-200 mb-8 leading-relaxed max-w-xl mx-auto'>
                    Join thousands of satisfied customers and get exclusive offers, 
                    early access to new products, and insider updates delivered directly to your inbox.
                </p>
                
                {/* Enhanced form with better styling */}
                <form onSubmit={onSubmitHandler} className='flex flex-col sm:flex-row gap-4 max-w-md mx-auto'>
                    <div className='flex-1'>
                        <input 
                            className='w-full px-6 py-4 text-base border-2 border-gray-200 rounded-lg 
                                     focus:border-blue-500 focus:ring-2 focus:ring-blue-200 
                                     focus:outline-none transition-all duration-300 
                                     placeholder-gray-500 bg-white shadow-sm' 
                            type="email" 
                            placeholder='Enter your email address' 
                            required
                        />
                    </div>
                    <button 
                        type='submit' 
                        className='bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 
                                 hover:to-indigo-700 text-white font-semibold px-8 py-4 rounded-lg 
                                 transition-all duration-300 transform hover:scale-105 
                                 focus:ring-4 focus:ring-blue-300 focus:outline-none 
                                 shadow-lg hover:shadow-xl text-base min-w-fit'
                    >
                        SUBSCRIBE NOW
                    </button>
                </form>
            </div>
        </div>
    )
}

export default NewsletterBox