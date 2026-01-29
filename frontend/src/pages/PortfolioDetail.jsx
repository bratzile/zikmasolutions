import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, CheckCircle, ExternalLink } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { portfolioProjects } from '../mockData';

const PortfolioDetail = () => {
  const { slug } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const foundProject = portfolioProjects.find(p => p.slug === slug);
    setProject(foundProject);
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0f1419] pt-32 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl text-white">Projekat nije pronađen</h1>
          <Link to="/portfolio" className="text-[#28A745] mt-4 inline-block">Nazad na portfolio</Link>
        </div>
      </div>
    );
  }

  const relatedProjects = portfolioProjects
    .filter(p => p.id !== project.id && p.category === project.category)
    .slice(0, 2);

  return (
    <div className="min-h-screen bg-[#0f1419] pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Link to="/portfolio" className="inline-flex items-center text-[#28A745] hover:text-[#34D058] mb-8 transition-colors">
          <ArrowLeft size={20} className="mr-2" />
          Nazad na portfolio
        </Link>

        {/* Hero Image */}
        <div className="relative h-[500px] rounded-2xl overflow-hidden mb-12">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f1419] via-[#0f1419]/50 to-transparent"></div>
          <div className="absolute bottom-8 left-8 right-8">
            <span className="bg-[#28A745] text-white text-sm px-4 py-2 rounded-full mb-4 inline-block">
              {project.category}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white">{project.title}</h1>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-6">Pregled projekta</h2>
              {project.fullDescription ? (
                <div className="text-gray-300 text-lg leading-relaxed whitespace-pre-line">
                  {project.fullDescription}
                </div>
              ) : (
                <>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Ovaj projekat predstavlja kompleksno rešenje koje je razvijeno sa ciljem da obezbedi najviši nivo 
                    funkcionalnosti i korisničkog iskustva. Kroz pažljivo planirane faze razvoja, uspeli smo da 
                    kreiramo proizvod koji ne samo da ispunjava potrebe klijenta, već ih i prevazilazi.
                  </p>
                </>
              )}
            </section>

            {/* Challenge */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-6">Izazov</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                {project.challenge || `Klijent je imao potrebu za modernim digitalnim rešenjem koje bi omogućilo bolju komunikaciju sa 
                korisnicima i efikasnije upravljanje poslovnim procesima. Glavni izazov je bio kreiranje sistema 
                koji bi bio intuitivno jednostavan za korišćenje, ali dovoljno moćan da podrži sve potrebne funkcionalnosti.`}
              </p>
            </section>

            {/* Solution */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-6">Naše rešenje</h2>
              {project.solution ? (
                <p className="text-gray-300 text-lg leading-relaxed">
                  {project.solution}
                </p>
              ) : (
                <>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    Pristupili smo projektu kroz nekoliko ključnih faza:
                  </p>
                  <div className="space-y-4">
                    {[
                      'Detaljna analiza zahteva i planiranje arhitekture sistema',
                      'Kreiranje modernog i intuitivnog korisničkog interfejsa',
                      'Implementacija robustnog backend sistema sa skalabilnošću na umu',
                      'Integracija svih potrebnih servisa i API-ja',
                      'Temeljno testiranje i optimizacija performansi'
                    ].map((step, index) => (
                      <div key={index} className="flex items-start space-x-3 bg-[#1a2332]/50 border border-[#28A745]/20 rounded-lg p-4">
                        <CheckCircle className="text-[#28A745] flex-shrink-0 mt-1" size={20} />
                        <span className="text-gray-300">{step}</span>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </section>

            {/* Services if available */}
            {project.services && project.services.length > 0 && (
              <section>
                <h2 className="text-3xl font-bold text-white mb-6">Pružene usluge</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.services.map((service, index) => (
                    <div key={index} className="flex items-center space-x-3 bg-[#1a2332]/50 border border-[#28A745]/20 rounded-lg p-4">
                      <CheckCircle className="text-[#28A745] flex-shrink-0" size={20} />
                      <span className="text-gray-300">{service}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Technologies */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-6">Korišćene tehnologije</h2>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-[#1a2332]/50 border border-[#28A745]/30 text-gray-300 px-4 py-2 rounded-lg hover:border-[#28A745] transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            {/* Results */}
            <section className="bg-gradient-to-r from-[#28A745]/10 to-[#1E7E34]/10 border border-[#28A745]/30 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-6">Rezultati</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="text-[#28A745] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-white text-xl font-semibold mb-2">{project.results}</h3>
                    <p className="text-gray-300">
                      Projekat je prevazišao sva očekivanja i doneo merljive rezultate već u prvim mesecima nakon lansiranja.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-6">
              {/* Project Info */}
              <Card className="bg-[#1a2332]/50 border-[#28A745]/20">
                <CardContent className="p-6">
                  <h3 className="text-white text-xl font-bold mb-4">Informacije o projektu</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-gray-400 text-sm mb-1">Klijent</p>
                      <p className="text-white font-medium">{project.client}</p>
                    </div>
                    {project.industry && (
                      <div>
                        <p className="text-gray-400 text-sm mb-1">Industrija</p>
                        <p className="text-white font-medium">{project.industry}</p>
                      </div>
                    )}
                    <div>
                      <p className="text-gray-400 text-sm mb-1">Godina</p>
                      <p className="text-white font-medium">{project.year}</p>
                    </div>
                    {project.duration && (
                      <div>
                        <p className="text-gray-400 text-sm mb-1">Trajanje</p>
                        <p className="text-white font-medium">{project.duration}</p>
                      </div>
                    )}
                    <div>
                      <p className="text-gray-400 text-sm mb-1">Kategorija</p>
                      <p className="text-white font-medium">{project.category}</p>
                    </div>
                    {project.website && (
                      <div>
                        <p className="text-gray-400 text-sm mb-1">Web sajt</p>
                        <a 
                          href={project.website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-[#28A745] hover:text-[#34D058] font-medium flex items-center"
                        >
                          Posetite sajt
                          <ExternalLink size={16} className="ml-2" />
                        </a>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* CTA Card */}
              <Card className="bg-gradient-to-br from-[#28A745] to-[#1E7E34] border-0">
                <CardContent className="p-6 text-center">
                  <h3 className="text-white text-2xl font-bold mb-3">Imate sličan projekat?</h3>
                  <p className="text-white/90 mb-6">
                    Kontaktirajte nas i razgovarajmo o vašim potrebama
                  </p>
                  <Link to="/kontakt">
                    <Button size="lg" className="w-full bg-white text-[#28A745] hover:bg-gray-100">
                      Kontaktirajte nas
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Share */}
              <Card className="bg-[#1a2332]/50 border-[#28A745]/20">
                <CardContent className="p-6">
                  <h3 className="text-white text-lg font-bold mb-4">Podelite projekat</h3>
                  <div className="flex space-x-3">
                    <Button variant="outline" size="sm" className="flex-1 border-[#28A745]/30 text-gray-300 hover:bg-[#28A745]/10">
                      Facebook
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1 border-[#28A745]/30 text-gray-300 hover:bg-[#28A745]/10">
                      LinkedIn
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-white mb-8">Slični projekti</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedProjects.map(relatedProject => (
                <Link to={`/portfolio/${relatedProject.slug}`} key={relatedProject.id}>
                  <Card className="bg-[#1a2332]/50 border-[#28A745]/20 hover:border-[#28A745] transition-all duration-300 overflow-hidden group cursor-pointer">
                    <div className="relative overflow-hidden h-64">
                      <img
                        src={relatedProject.image}
                        alt={relatedProject.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0f1419] to-transparent opacity-60"></div>
                      <div className="absolute bottom-4 left-4">
                        <span className="bg-[#28A745] text-white text-xs px-3 py-1 rounded-full">
                          {relatedProject.category}
                        </span>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-white text-xl font-bold mb-2 group-hover:text-[#28A745] transition-colors">
                        {relatedProject.title}
                      </h3>
                      <p className="text-gray-400">{relatedProject.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PortfolioDetail;
