import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, Tag } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { blogPosts } from '../mockData';

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const foundPost = blogPosts.find(p => p.slug === slug);
    setPost(foundPost);
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#0f1419] pt-32 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl text-white">Članak nije pronađen</h1>
          <Link to="/blog" className="text-[#28A745] mt-4 inline-block">Nazad na blog</Link>
        </div>
      </div>
    );
  }

  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-[#0f1419] pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Link to="/blog" className="inline-flex items-center text-[#28A745] hover:text-[#34D058] mb-8 transition-colors">
          <ArrowLeft size={20} className="mr-2" />
          Nazad na sve članke
        </Link>

        <div className="max-w-4xl mx-auto">
          {/* Featured Image */}
          <div className="relative h-[400px] rounded-2xl overflow-hidden mb-8">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f1419] to-transparent"></div>
          </div>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-4 mb-6">
            <span className="bg-[#28A745] text-white text-sm px-4 py-2 rounded-full">
              {post.category}
            </span>
            <div className="flex items-center text-gray-400">
              <Calendar size={16} className="mr-2" />
              <span className="text-sm">{post.date}</span>
            </div>
            <div className="flex items-center text-gray-400">
              <Clock size={16} className="mr-2" />
              <span className="text-sm">{post.readTime}</span>
            </div>
            <div className="flex items-center text-gray-400">
              <User size={16} className="mr-2" />
              <span className="text-sm">{post.author}</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Content */}
          <div className="prose prose-invert prose-lg max-w-none">
            <div className="text-gray-300 space-y-6">
              <p className="text-xl text-gray-400 mb-8">{post.excerpt}</p>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Uvod</h2>
              <p>
                U digitalnom dobu, donošenje ispravnih odluka o tehnologijama i strategijama je ključno za uspeh vašeg biznisa. 
                U ovom detaljnom vodiču, razmotrićemo sve aspekte ove teme i pružiti vam konkretne savete koji će vam pomoći.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Glavni aspekti</h2>
              <p>
                Kada razmatramo ovu temu, važno je fokusirati se na nekoliko ključnih elemenata koji će odrediti uspeh vašeg projekta:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>Analiza trenutnog stanja i potreba vašeg biznisa</li>
                <li>Definisanje jasnih ciljeva i očekivanih rezultata</li>
                <li>Izbor adekvatnih tehnologija i alata</li>
                <li>Planiranje budzeta i resursa</li>
                <li>Implementacija i kontinuirana optimizacija</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Best practices</h2>
              <p>
                Na osnovu našeg višegodišnjeg iskustva u industriji, identifikovali smo najbolje prakse koje garantuju uspeh:
              </p>
              <ol className="list-decimal pl-6 space-y-2 text-gray-300">
                <li><strong>Istraživanje i planiranje</strong> - Posvetite dovoljno vremena prvobitnoj analizi</li>
                <li><strong>Fokus na korisnika</strong> - Uvek stavite potrebe vaših korisnika na prvo mesto</li>
                <li><strong>Iterativni pristup</strong> - Razvijajte postepeno i kontinuirano poboljšavajte</li>
                <li><strong>Merenje rezultata</strong> - Pratite ključne metrike i prilagođavajte strategiju</li>
              </ol>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Zaključak</h2>
              <p>
                Uspeh u digitalnom svetu zahteva kombinaciju strateškog planiranja, adekvatnih tehnologija i kontinuiranog unapređenja. 
                Sa pravim pristupom i partnerom, vaš biznis može postići izvanredne rezultate.
              </p>
              <p>
                Ako vam je potrebna dodatna pomoć ili savet, slobodno nas kontaktirajte. Naš tim je uvek spreman da vam pomogne.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 bg-gradient-to-r from-[#28A745]/10 to-[#1E7E34]/10 border border-[#28A745]/30 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-3">Trebate pomoć sa vašim projektom?</h3>
            <p className="text-gray-400 mb-6">
              Kontaktirajte nas za besplatnu konsultaciju i saznajte kako možemo pomoći vašem biznisu
            </p>
            <Link to="/kontakt">
              <Button className="bg-[#28A745] hover:bg-[#1E7E34] text-white">
                Kontaktirajte nas
              </Button>
            </Link>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-16">
              <h2 className="text-3xl font-bold text-white mb-8">Slični članci</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map(relatedPost => (
                  <Link to={`/blog/${relatedPost.slug}`} key={relatedPost.id}>
                    <Card className="bg-[#1a2332]/50 border-[#28A745]/20 hover:border-[#28A745] transition-all duration-300 group cursor-pointer h-full">
                      <div className="relative overflow-hidden h-40">
                        <img
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <CardContent className="p-4">
                        <h3 className="text-white font-semibold mb-2 line-clamp-2 group-hover:text-[#28A745] transition-colors">
                          {relatedPost.title}
                        </h3>
                        <p className="text-gray-400 text-sm">{relatedPost.date}</p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
