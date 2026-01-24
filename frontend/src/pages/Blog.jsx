import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User, Search, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { blogPosts } from '../mockData';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('Sve');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let filtered = blogPosts;

    // Filter by category
    if (selectedCategory !== 'Sve') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(
        p =>
          p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredPosts(filtered);
  }, [selectedCategory, searchQuery]);

  const categories = ['Sve', ...new Set(blogPosts.map(p => p.category))];
  const featuredPost = blogPosts.find(p => p.featured);

  return (
    <div className="min-h-screen bg-[#0f1419] pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#28A745] font-semibold mb-2 block">BLOG</span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Insights i saveti
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Najnovije vesti, vodiči i stručni saveti iz sveta web developmenta i digitalnog marketinga
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <Input
              type="text"
              placeholder="Pretražite članke..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 py-6 bg-[#1a2332] border-[#28A745]/20 text-white placeholder-gray-500 focus:border-[#28A745] rounded-xl"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? 'default' : 'outline'}
              className={`${
                selectedCategory === category
                  ? 'bg-[#28A745] text-white hover:bg-[#1E7E34]'
                  : 'border-[#28A745]/30 text-gray-300 hover:border-[#28A745] hover:bg-[#28A745]/10'
              } transition-all duration-300`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Post */}
        {featuredPost && selectedCategory === 'Sve' && !searchQuery && (
          <Link to={`/blog/${featuredPost.slug}`} className="block mb-12">
            <Card className="bg-[#1a2332]/50 border-[#28A745]/20 hover:border-[#28A745] transition-all duration-300 overflow-hidden group cursor-pointer">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative overflow-hidden h-80 md:h-auto">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#28A745] text-white text-xs px-3 py-1 rounded-full font-medium">
                      Istaknut članak
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <span className="text-[#28A745] text-sm font-semibold mb-3">{featuredPost.category}</span>
                  <h2 className="text-3xl font-bold text-white mb-4 group-hover:text-[#28A745] transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-400 mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-400 mb-6">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-2" />
                      {featuredPost.date}
                    </div>
                    <div className="flex items-center">
                      <Clock size={16} className="mr-2" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  <div className="flex items-center text-[#28A745] font-medium">
                    Pročitajte više
                    <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Card>
          </Link>
        )}

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <Link to={`/blog/${post.slug}`} key={post.id}>
              <Card className="bg-[#1a2332]/50 border-[#28A745]/20 hover:border-[#28A745] transition-all duration-300 overflow-hidden group cursor-pointer h-full">
                <div className="relative overflow-hidden h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f1419] to-transparent opacity-60"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#28A745] text-white text-xs px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-white text-lg group-hover:text-[#28A745] transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="flex items-center space-x-3 text-gray-400 text-sm">
                    <span className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      {post.date}
                    </span>
                    <span className="flex items-center">
                      <Clock size={14} className="mr-1" />
                      {post.readTime}
                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 text-sm line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-[#28A745] text-sm font-medium">
                    Pročitajte članak
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-xl">Nema članaka koji odgovaraju vašoj pretrazi.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
