import fs from "fs"
import Link from 'next/link';
import matter from 'gray-matter';
import { 
  User, 
  Calendar, 
  Tag, 
  Share2, 
  
} from 'lucide-react';



const dircontent = fs.readdirSync('content',"utf-8")

const blogPosts  = dircontent.map((file)=>{
    const filecontent = fs.readFileSync(`content/${file}`,"utf-8")
    const data = matter(filecontent)
    console.log(data)
    return data
})




// const blogPosts = [
//   {
//     id: 1,
//     title: 'The Future of Web Development',
//     excerpt: 'Exploring emerging technologies and trends...',
//     featuredImage: "https://images.pexels.com/photos/7679688/pexels-photo-7679688.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     author: 'Jane Doe',
//     date: 'January 15, 2024',
//     tags: ['Web Development', 'Technology'],
//     readTime: '5 min read'
//   },
//   {
//     id: 2,
//     title: 'AI in Modern Design',
//     excerpt: 'How artificial intelligence is transforming design...',
//     featuredImage: 'https://images.pexels.com/photos/1036642/pexels-photo-1036642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     author: 'John Smith',
//     date: 'February 1, 2024',
//     tags: ['AI', 'Design'],
//     readTime: '7 min read'
//   }
// ];

const SocialShareButtons = ({ title }) => (
  <div className="flex space-x-4 mt-4">
    <button className="text-blue-500 hover:text-blue-700">
      <Share2 />
    </button>
  </div>
);

const BlogPostCard = ({ post }) => {
  return (
    <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden mb-6">
      <img 
        src={post.data.featuredImage} 
        alt={post.data.title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
          {post.data.title}
        </h2>
        <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4 space-x-4">
          <div className="flex items-center">
            <User className="mr-2 w-4 h-4" />
            {post.data.author}
          </div>
          <div className="flex items-center">
            <Calendar className="mr-2 w-4 h-4" />
            {post.data.date}
          </div>
          <div className="flex items-center">
            <Tag className="mr-2 w-4 h-4" />
            {post.data.tags.join(', ')}
          </div>
        </div>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          {post.data.excerpt}
        </p>
        <div className="flex justify-between items-center">
          <Link href={`Blog/${post.data.slug}`} className="
            text-blue-600 dark:text-blue-400 
            hover:underline flex items-center
          ">
            Read More
          </Link>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {post.readTime}
          </span>
        </div>
        <SocialShareButtons title={post.title} />
      </div>
    </article>
  );
};

const Page = () => {
  return (
    <div className="flex">
    {/* Mobile Menu Toggle */}
    <input type="checkbox" id="menu-toggle" className="hidden peer" />
    <label 
      htmlFor="menu-toggle" 
      className="md:hidden fixed top-8 left-6 z-[60] cursor-pointer"
    >
      <div className="peer-checked:hidden">
        <p className="text-[10px]">Category</p>
      </div>
      <div className="hidden peer-checked:block">
        <p className="text-[10px]">Close</p>
      </div>
    </label>

    {/* Sidebar */}
    <aside 
      className="
        fixed md:static top-10 left-0 w-64 h-full 
        bg-white dark:bg-black shadow-lg 
        transform transition-transform duration-300 
        -translate-x-full peer-checked:translate-x-0 md:translate-x-0 z-40
      "
    >
      <div className="p-6 fixed top-0 rounded-sm">
        <h2 className="text-2xl font-bold mb-6 dark:text-white">
          Blog Categories
        </h2>
        <nav>
          <ul className="space-y-2">
            {['Technology', 'Design', 'AI', 'Web Development'].map(category => (
              <li key={category}>
                <a 
                  href="#" 
                  className="
                    text-gray-700 dark:text-gray-300 
                    hover:text-blue-600 dark:hover:text-blue-400
                  "
                >
                  {category}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>

    {/* Main Content */}
    <main className="flex-1 p-6 md:p-10 h-screen overflow-y-auto scrollbar-hide">
      <div className="max-w-4xl mx-auto">
        {blogPosts.map((post) => (
          <BlogPostCard key={post.data.id} post={post} />
        ))}

        {/* Pagination */}
        {/* <div className="flex justify-center space-x-2 mt-6">
          {[1, 2, 3, 4].map(page => (
            <button 
              key={page} 
              className="
                px-4 py-2 rounded 
                bg-white dark:bg-gray-800 
                text-gray-700 dark:text-white
                hover:bg-gray-100 dark:hover:bg-gray-700
              "
            >
              {page}
            </button>
          ))}
        </div> */}
      </div>
    </main>
  </div>

  );
};

export default Page;