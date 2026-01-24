import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Filter } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { portfolioProjects } from '../mockData';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('Sve');
  const [filteredProjects, setFilteredProjects] = useState(portfolioProjects);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (selectedCategory === 'Sve') {
      setFilteredProjects(portfolioProjects);
    } else {
      setFilteredProjects(portfolioProjects.filter(p => p.category === selectedCategory));
    }
  }, [selectedCategory]);

  const categories = ['Sve', ...new Set(portfolioProjects.map(p => p.category))];

  return (
    <div className="min-h-screen bg-[#0f1419] pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#28A745] font-semibold mb-2 block">PORTFOLIO</span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Naši najuspešniji projekti
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Pogledajte projekte koje smo realizovali za naše klijente i rezultate koje smo postigli
          </p>
        </div>

        {/* Filter */}
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Link to={`/portfolio/${project.slug}`} key={project.id}>
              <Card className="bg-[#1a2332]/50 border-[#28A745]/20 hover:border-[#28A745] transition-all duration-300 overflow-hidden group cursor-pointer h-full">
                <div className="relative overflow-hidden h-64">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f1419] via-[#0f1419]/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="bg-[#28A745] text-white text-xs px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                    <span className="bg-[#1a2332]/80 backdrop-blur-sm text-gray-300 text-xs px-3 py-1 rounded-full ml-2">
                      {project.year}
                    </span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-white text-xl group-hover:text-[#28A745] transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    {project.client}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-[#28A745]/10 text-[#28A745] px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center text-[#28A745] font-medium">
                    Pogledajte projekat
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-xl">Nema projekata u ovoj kategoriji.</p>
          </div>
        )}

        {/* CTA */}
        <div className="mt-20 bg-gradient-to-r from-[#28A745]/10 to-[#1E7E34]/10 border border-[#28A745]/30 rounded-2xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Vaš projekat može biti sledeći!
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Kontaktirajte nas i započnimo zajedno vaš put ka digitalnom uspehu
          </p>
          <Link to="/kontakt">
            <Button size="lg" className="bg-[#28A745] hover:bg-[#1E7E34] text-white px-8 py-6 text-lg rounded-xl transform hover:scale-105 transition-all duration-300">
              Započnite vaš projekat
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
