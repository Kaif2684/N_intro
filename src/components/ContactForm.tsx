
const ContactForm = () => {
  return (
    <form 
      action="https://formsubmit.co/md.khushtarali26@gmail.com" 
      method="POST"
      className="space-y-6 max-w-md mx-auto"
    >
      {/* FormSubmit Configuration */}
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_subject" value="New Message from Portfolio!" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_next" value="https://yourportfolio.com/thank-you" />

      {/* Name Field */}
      <div className="space-y-2">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
          placeholder="John Doe"
        />
      </div>

      {/* Email Field */}
      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Your Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
          placeholder="john@example.com"
        />
      </div>

      {/* Subject Field */}
      <div className="space-y-2">
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
          placeholder="Project Inquiry"
        />
      </div>

      {/* Message Field */}
      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
          placeholder="I'd like to discuss a project..."
        ></textarea>
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          className="w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:bg-blue-700 dark:hover:bg-blue-800 transition-colors"
        >
          Send Message
        </button>
      </div>

      {/* HoneyPot Anti-Spam (hidden) */}
      <input type="text" name="_honey" className="hidden" />
    </form>
  );
};

export default ContactForm;