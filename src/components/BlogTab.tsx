import React, { useState, useMemo } from 'react';
import { BookOpen, Calendar, Clock, User, ArrowRight, X, Search, Heart, Share2 } from 'lucide-react';
import { BlogPost } from '../types';
import { blogPosts } from '../data';

export default function BlogTab() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [likedPosts, setLikedPosts] = useState<string[]>([]);

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            post.content.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesSearch;
    });
  }, [searchQuery]);

  const toggleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (likedPosts.includes(id)) {
      setLikedPosts(likedPosts.filter(pId => pId !== id));
    } else {
      setLikedPosts([...likedPosts, id]);
    }
  };

  const handleShareSimulate = (title: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      alert(`Link to "${title}" copied to clipboard!`);
    } else {
      alert(`Sharing "${title}"!`);
    }
  };

  return (
    <div id="blog-tab" className="space-y-12 pb-16 animate-fade-in">
      {/* Blog Intro banner */}
      <section id="blog-header" className="space-y-4 max-w-3xl">
        <span className="text-xs font-extrabold text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider">
          Media Hub
        </span>
        <h1 id="blog-title" className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
          Latest From Zentronix
        </h1>
        <p className="text-gray-500 text-sm leading-relaxed">
          Stay informed on next-generation computing architectures, smart household setups, battery capacity parameters, and professional flagship phone guides.
        </p>
      </section>

      {/* Blog Search filter bar */}
      <section id="blog-filter-bar" className="relative max-w-md">
        <Search className="absolute left-3.5 top-3 h-5 w-5 text-gray-400" />
        <input
          id="blog-search-input"
          type="text"
          placeholder="Search articles or tech categories..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-11 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/25 focus:border-blue-500 transition-all shadow-xs"
        />
      </section>

      {/* Blog list Grid */}
      <section id="blog-grid-section">
        {filteredPosts.length === 0 ? (
          <div id="no-blogs-box" className="text-center py-12 bg-white border border-gray-150 rounded-2xl">
            <p className="text-gray-400 font-bold mb-1">No articles found.</p>
            <p className="text-gray-400 text-xs">Try searching another term.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in">
            {filteredPosts.map((post) => {
              const isLiked = likedPosts.includes(post.id);
              return (
                <div
                  key={post.id}
                  id={`blog-card-${post.id}`}
                  onClick={() => setSelectedPost(post)}
                  className="bg-white border border-gray-150 rounded-2xl overflow-hidden shadow-xs hover:shadow-xl hover:border-gray-200 transition-all duration-350 flex flex-col cursor-pointer group"
                >
                  {/* Banner Image */}
                  <div className="relative aspect-video overflow-hidden bg-gray-50 border-b border-gray-100">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <span className="absolute top-4 left-4 text-[10px] font-black text-blue-700 bg-white/95 px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm border border-blue-100">
                      {post.category}
                    </span>
                  </div>

                  {/* Body Details */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      {/* Date & Read time */}
                      <div className="flex items-center gap-4 text-[11px] text-gray-400 font-bold uppercase tracking-wider">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5 text-blue-500" />
                          {post.publishedDate}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5 text-blue-500" />
                          {post.readTime}
                        </span>
                      </div>

                      <h3 className="font-extrabold text-lg text-gray-900 group-hover:text-blue-600 transition-colors tracking-tight line-clamp-1">
                        {post.title}
                      </h3>

                      <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">
                        {post.excerpt}
                      </p>
                    </div>

                    {/* Footer Actions */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-50 shrink-0">
                      {/* Author */}
                      <div className="flex items-center gap-2.5">
                        <img
                          src={post.author.avatar}
                          alt={post.author.name}
                          className="h-8 w-8 rounded-full object-cover bg-gray-100"
                          referrerPolicy="no-referrer"
                        />
                        <span className="text-xs font-bold text-gray-700">{post.author.name}</span>
                      </div>

                      {/* Interactive utility icons */}
                      <div className="flex items-center gap-2">
                        <button
                          id={`like-blog-${post.id}`}
                          onClick={(e) => toggleLike(post.id, e)}
                          className={`p-2 rounded-lg border transition-all ${
                            isLiked
                              ? 'border-red-100 bg-red-50 text-red-500'
                              : 'border-gray-100 hover:bg-gray-50 text-gray-400 hover:text-gray-700'
                          }`}
                          title="Like this article"
                        >
                          <Heart className={`h-4 w-4 ${isLiked ? 'fill-red-500' : ''}`} />
                        </button>
                        <button
                          id={`share-blog-${post.id}`}
                          onClick={(e) => handleShareSimulate(post.title, e)}
                          className="p-2 border border-gray-100 rounded-lg hover:bg-gray-50 text-gray-400 hover:text-gray-700 transition-colors"
                          title="Copy Link to share"
                        >
                          <Share2 className="h-4 w-4" />
                        </button>
                        <button
                          className="p-2 border border-gray-100 rounded-lg bg-gray-50 text-blue-600 font-bold text-xs flex items-center gap-1 hover:bg-blue-50"
                        >
                          Read <ArrowRight className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* Article Reader Modal */}
      {selectedPost && (
        <div id="blog-reader-modal" className="fixed inset-0 z-55 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-xs"
            onClick={() => setSelectedPost(null)}
          />

          <div className="relative bg-white border border-gray-150 rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[85vh] animate-scale">
            {/* Close */}
            <button
              id="reader-close-btn"
              onClick={() => setSelectedPost(null)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="h-5.5 w-5.5" />
            </button>

            {/* Content */}
            <article className="space-y-6">
              <div className="space-y-4">
                <span className="text-[10px] font-black text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full uppercase tracking-wider inline-block">
                  {selectedPost.category}
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 leading-tight tracking-tight">
                  {selectedPost.title}
                </h2>

                {/* Metadata */}
                <div className="flex flex-wrap items-center gap-5 text-xs text-gray-400 border-y border-gray-100 py-3 font-semibold">
                  <div className="flex items-center gap-2">
                    <img
                      src={selectedPost.author.avatar}
                      alt={selectedPost.author.name}
                      className="h-7 w-7 rounded-full object-cover bg-gray-100"
                      referrerPolicy="no-referrer"
                    />
                    <span className="text-gray-700 font-extrabold">{selectedPost.author.name}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4 text-blue-500" />
                    <span>Published: {selectedPost.publishedDate}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4 text-blue-500" />
                    <span>{selectedPost.readTime}</span>
                  </div>
                </div>
              </div>

              {/* Cover Image */}
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                className="w-full h-64 sm:h-80 object-cover rounded-2xl border border-gray-100"
                referrerPolicy="no-referrer"
              />

              {/* Main text content */}
              <div className="prose prose-sm max-w-none text-gray-600 text-sm leading-relaxed space-y-4">
                {selectedPost.content.split('\n\n').map((paragraph, idx) => {
                  if (paragraph.startsWith('###')) {
                    return (
                      <h4 key={idx} className="text-lg font-black text-gray-900 pt-3">
                        {paragraph.replace('###', '').trim()}
                      </h4>
                    );
                  }
                  if (paragraph.startsWith('*') || paragraph.startsWith('1.')) {
                    return (
                      <ul key={idx} className="list-disc list-inside pl-4 space-y-1.5 text-gray-600">
                        {paragraph.split('\n').map((item, itemIdx) => (
                          <li key={itemIdx}>{item.replace(/^(\*|\d\.)\s*/, '').trim()}</li>
                        ))}
                      </ul>
                    );
                  }
                  return <p key={idx}>{paragraph}</p>;
                })}
              </div>

              {/* Footer details */}
              <div className="flex justify-between items-center border-t border-gray-100 pt-6">
                <span className="text-xs text-gray-400 font-medium">© Zentronix Publications 2026</span>
                <button
                  onClick={() => setSelectedPost(null)}
                  className="px-5 py-2.5 bg-gray-900 hover:bg-gray-800 text-white font-bold rounded-xl text-xs transition-colors"
                >
                  Done Reading
                </button>
              </div>
            </article>
          </div>
        </div>
      )}
    </div>
  );
}
